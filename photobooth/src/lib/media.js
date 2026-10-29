const VIDEO_TYPES = ['video/mp4;codecs=avc1', 'video/mp4', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm']

export function pickVideoType() {
  if (typeof MediaRecorder === 'undefined') return null
  return VIDEO_TYPES.find((t) => MediaRecorder.isTypeSupported(t)) ?? ''
}

export async function openCamera(deviceId) {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('이 브라우저에서는 카메라를 쓸 수 없어요. 크롬이나 사파리에서 https 주소로 열어 주세요.')
  }
  const video = deviceId
    ? { deviceId: { exact: deviceId }, width: { ideal: 1920 }, height: { ideal: 1080 } }
    : { facingMode: 'user', width: { ideal: 1920 }, height: { ideal: 1080 } }
  try {
    return await navigator.mediaDevices.getUserMedia({ video, audio: false })
  } catch (err) {
    if (err.name === 'NotAllowedError') throw new Error('카메라 권한이 거부되었어요. 브라우저 설정에서 카메라를 허용해 주세요.')
    if (err.name === 'NotFoundError' || err.name === 'OverconstrainedError') throw new Error('사용할 수 있는 카메라가 없어요.')
    throw new Error(`카메라를 켤 수 없어요 (${err.name || err.message})`)
  }
}

export async function listCameras() {
  try {
    return (await navigator.mediaDevices.enumerateDevices()).filter((d) => d.kind === 'videoinput')
  } catch {
    return []
  }
}

// 화면에 보이는 그대로(셀카 좌우반전) 한 장을 캔버스로 저장
export function captureFrame(video) {
  const canvas = document.createElement('canvas')
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  const ctx = canvas.getContext('2d')
  ctx.setTransform(-1, 0, 0, 1, canvas.width, 0)
  ctx.drawImage(video, 0, 0)
  return canvas
}

export function thumbnail(canvas, maxSide = 480) {
  const k = Math.min(1, maxSide / Math.max(canvas.width, canvas.height))
  const t = document.createElement('canvas')
  t.width = Math.round(canvas.width * k)
  t.height = Math.round(canvas.height * k)
  t.getContext('2d').drawImage(canvas, 0, 0, t.width, t.height)
  return t.toDataURL('image/jpeg', 0.8)
}

// 카운트다운 동안 짧은 영상을 녹화 (QR로 받는 움직이는 네컷용). 지원하지 않으면 null
export function startClip(stream) {
  const type = pickVideoType()
  if (type === null) return null
  let recorder
  try {
    recorder = new MediaRecorder(stream, { ...(type && { mimeType: type }), videoBitsPerSecond: 2_500_000 })
  } catch {
    return null
  }
  const chunks = []
  const startedAt = performance.now()
  recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data)
  recorder.start()
  return {
    stop: () =>
      new Promise((resolve) => {
        const ms = performance.now() - startedAt
        recorder.onstop = () => resolve(chunks.length ? { blob: new Blob(chunks, { type: recorder.mimeType || type }), ms } : null)
        recorder.onerror = () => resolve(null)
        if (recorder.state === 'inactive') resolve(null)
        else recorder.stop()
      }),
  }
}

export function fileToCanvas(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      canvas.getContext('2d').drawImage(img, 0, 0)
      URL.revokeObjectURL(url)
      resolve(canvas)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('사진을 열 수 없어요'))
    }
    img.src = url
  })
}
