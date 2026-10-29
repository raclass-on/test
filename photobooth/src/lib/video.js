import { ensureFonts } from './frames'
import { pickVideoType } from './media'
import { loadStickerImages, renderComposite } from './render'

const MAX_MS = 5000

function loadVideo(blob) {
  return new Promise((resolve, reject) => {
    const v = document.createElement('video')
    v.muted = true
    v.playsInline = true
    v.preload = 'auto'
    v.onloadeddata = () => resolve(v)
    v.onerror = () => reject(new Error('영상을 불러올 수 없어요'))
    v.src = URL.createObjectURL(blob)
  })
}

export function canMakeVideo(shots) {
  return (
    pickVideoType() !== null &&
    typeof HTMLCanvasElement.prototype.captureStream === 'function' &&
    shots.some((s) => s.clip)
  )
}

// 촬영하면서 녹화한 4개의 짧은 영상을 프레임 안에 동시에 재생하며 하나의 영상으로 녹화
export async function exportVideo({ layout, frame, filter, shots, stickers, date, onProgress }) {
  await ensureFonts()
  const type = pickVideoType()
  const scale = layout.videoScale
  const canvas = document.createElement('canvas')
  canvas.width = Math.round((layout.W * scale) / 2) * 2
  canvas.height = Math.round((layout.H * scale) / 2) * 2
  const ctx = canvas.getContext('2d')
  const [stickerImages, videos] = await Promise.all([
    loadStickerImages(stickers),
    Promise.all(shots.map((s) => (s.clip ? loadVideo(s.clip.blob) : null))),
  ])
  const durationMs = Math.min(MAX_MS, Math.max(...shots.map((s) => s.clip?.ms ?? 0)))
  // 녹화 영상은 원본 방향이라 사진과 같게 좌우반전, 영상이 없는 칸은 사진으로 채움
  const sources = shots.map((s, i) => (videos[i] ? { el: videos[i], mirror: true } : { el: s.image, mirror: false }))
  const draw = () => renderComposite(ctx, { layout, frame, filter, sources, scale, stickers, stickerImages, date })

  try {
    draw()
    const stream = canvas.captureStream(30)
    const recorder = new MediaRecorder(stream, { ...(type && { mimeType: type }), videoBitsPerSecond: 3_000_000 })
    const chunks = []
    recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data)
    const stopped = new Promise((resolve) => (recorder.onstop = resolve))

    await Promise.all(videos.filter(Boolean).map((v) => v.play()))
    recorder.start()
    const startedAt = performance.now()
    await new Promise((resolve) => {
      const tick = () => {
        draw()
        const t = performance.now() - startedAt
        onProgress?.(Math.min(1, t / durationMs))
        if (t >= durationMs + 400) resolve()
        else requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    recorder.stop()
    await stopped
    stream.getTracks().forEach((t) => t.stop())
    if (!chunks.length) throw new Error('영상을 만들지 못했어요')
    return new Blob(chunks, { type: recorder.mimeType || type || 'video/webm' })
  } finally {
    for (const v of videos) {
      if (!v) continue
      v.pause()
      URL.revokeObjectURL(v.src)
    }
  }
}
