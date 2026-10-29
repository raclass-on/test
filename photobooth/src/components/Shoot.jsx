import { useEffect, useRef, useState } from 'react'
import { COUNTDOWN_SECONDS, SHOT_COUNT } from '../config'
import { cls, useFitBox } from '../lib/hooks'
import { slotAspect } from '../lib/layouts'
import { captureFrame, fileToCanvas, listCameras, openCamera, startClip, thumbnail } from '../lib/media'
import { beep, shutter } from '../lib/sound'
import { CameraIcon, CloseIcon, GalleryIcon, SoundIcon, SwitchCameraIcon } from './Icons'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const ALL = Array.from({ length: SHOT_COUNT }, (_, i) => i)

export default function Shoot({ layout, onDone, onCancel }) {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const runRef = useRef(0)
  const fileRef = useRef(null)
  const stageRef = useRef(null)
  const soundRef = useRef(true)
  const aspect = slotAspect(layout)
  const box = useFitBox(stageRef, aspect)

  const [camera, setCamera] = useState({ status: 'loading', error: '' })
  const [cameras, setCameras] = useState([])
  const [deviceId, setDeviceId] = useState(null)
  const [shots, setShots] = useState(() => Array(SHOT_COUNT).fill(null))
  const [phase, setPhase] = useState('ready') // ready | shooting | review
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [flash, setFlash] = useState(false)
  const [frozen, setFrozen] = useState(null)
  const [selected, setSelected] = useState(null)
  const [sound, setSound] = useState(true)

  useEffect(() => {
    let cancelled = false
    openCamera(deviceId)
      .then(async (stream) => {
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop())
          return
        }
        streamRef.current = stream
        const video = videoRef.current
        video.srcObject = stream
        await video.play().catch(() => {})
        setCamera({ status: 'ready', error: '' })
        setCameras(await listCameras())
      })
      .catch((err) => !cancelled && setCamera({ status: 'error', error: err.message }))
    return () => {
      cancelled = true
      streamRef.current?.getTracks().forEach((t) => t.stop())
      streamRef.current = null
    }
  }, [deviceId])

  // 화면을 나가면 진행 중인 촬영 중단
  useEffect(() => () => void runRef.current++, [])

  async function shootOne(index, token) {
    const alive = () => runRef.current === token
    const video = videoRef.current
    const stream = streamRef.current
    if (!video?.videoWidth || !stream) return false
    setCurrent(index)
    const clip = startClip(stream)
    for (let n = COUNTDOWN_SECONDS; n > 0; n--) {
      setCount(n)
      if (soundRef.current) beep(880)
      await sleep(1000)
      if (!alive()) {
        clip?.stop()
        return false
      }
    }
    setCount(0)
    const image = captureFrame(video)
    if (soundRef.current) shutter()
    setFlash(true)
    const thumb = thumbnail(image)
    setFrozen(thumb)
    const clipData = clip ? await clip.stop() : null
    setShots((prev) => prev.map((s, i) => (i === index ? { image, thumb, clip: clipData } : s)))
    await sleep(220)
    setFlash(false)
    await sleep(700)
    setFrozen(null)
    return alive()
  }

  async function run(indexes) {
    const token = ++runRef.current
    setPhase('shooting')
    setSelected(null)
    for (const i of indexes) {
      if (!(await shootOne(i, token))) {
        if (runRef.current === token) setPhase('ready')
        return
      }
    }
    setPhase('review')
  }

  async function importFiles(fileList) {
    const files = [...fileList].filter((f) => f.type.startsWith('image/')).slice(0, SHOT_COUNT)
    if (!files.length) return
    const canvases = await Promise.all(files.map(fileToCanvas))
    const empty = ALL.filter((i) => !shots[i])
    const order = [...empty, ...ALL.filter((i) => shots[i])]
    const next = [...shots]
    canvases.forEach((image, k) => (next[order[k]] = { image, thumb: thumbnail(image), clip: null }))
    setShots(next)
    if (next.every(Boolean)) setPhase('review')
  }

  function toggleSound() {
    soundRef.current = !soundRef.current
    setSound(soundRef.current)
  }

  function switchCamera() {
    const ids = cameras.map((c) => c.deviceId)
    const active = streamRef.current?.getVideoTracks()[0]?.getSettings().deviceId
    setCamera({ status: 'loading', error: '' })
    setDeviceId(ids[(ids.indexOf(active) + 1) % ids.length])
  }

  const remaining = ALL.filter((i) => !shots[i])
  const preview = phase === 'review' && selected !== null ? shots[selected]?.thumb : frozen

  return (
    <div className="shoot">
      <header className="topbar dark">
        <button className="icon-btn" onClick={onCancel} aria-label="처음으로">
          <CloseIcon />
        </button>
        <div className="shot-dots" aria-label={`${SHOT_COUNT}장 중 ${shots.filter(Boolean).length}장 촬영`}>
          {shots.map((s, i) => (
            <span key={i} className={cls(s && 'done', phase === 'shooting' && current === i && 'now')} />
          ))}
        </div>
        <div className="topbar-right">
          <button className="icon-btn" onClick={toggleSound} aria-label={sound ? '소리 끄기' : '소리 켜기'}>
            <SoundIcon muted={!sound} />
          </button>
          {cameras.length > 1 && (
            <button className="icon-btn" onClick={switchCamera} disabled={phase === 'shooting'} aria-label="카메라 전환">
              <SwitchCameraIcon />
            </button>
          )}
        </div>
      </header>

      <main className="shoot-stage" ref={stageRef}>
        <div className="viewfinder" style={{ width: box.width, height: box.height }}>
          <video ref={videoRef} className="mirror" playsInline muted autoPlay />
          {preview && <img className="frozen" src={preview} alt="" />}
          {phase === 'shooting' && count > 0 && (
            <div className="countdown" key={`${current}-${count}`}>
              {count}
            </div>
          )}
          {phase === 'shooting' && (
            <div className="shot-label">
              {current + 1} / {SHOT_COUNT}
            </div>
          )}
          {flash && <div className="flash" />}
          {camera.status === 'loading' && <div className="cam-msg">카메라 준비 중…</div>}
          {camera.status === 'error' && (
            <div className="cam-msg">
              <p>{camera.error}</p>
              <button className="soft-btn" onClick={() => fileRef.current.click()}>
                <GalleryIcon /> 갤러리에서 사진 고르기
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="shoot-bottom">
        <div className="thumbs">
          {shots.map((s, i) => (
            <button
              key={i}
              className={cls('thumb', selected === i && 'selected', phase === 'shooting' && current === i && 'now')}
              style={{ aspectRatio: aspect }}
              disabled={phase !== 'review'}
              onClick={() => setSelected(selected === i ? null : i)}
              aria-label={`${i + 1}번째 사진`}
            >
              {s ? <img src={s.thumb} alt="" /> : <span>{i + 1}</span>}
            </button>
          ))}
        </div>

        {phase === 'ready' && (
          <div className="shoot-actions">
            <button
              className="primary-btn shutter-btn"
              disabled={camera.status !== 'ready'}
              onClick={() => run(remaining.length ? remaining : ALL)}
            >
              <CameraIcon size={26} /> 촬영 시작
            </button>
            <button className="text-btn" onClick={() => fileRef.current.click()}>
              <GalleryIcon size={20} /> 갤러리에서 고르기
            </button>
          </div>
        )}
        {phase === 'shooting' && <p className="shoot-hint">카메라를 보고 포즈! {COUNTDOWN_SECONDS}초 뒤에 찍혀요</p>}
        {phase === 'review' && (
          <div className="shoot-actions">
            <p className="shoot-hint small">다시 찍고 싶은 사진을 눌러 고를 수 있어요</p>
            <button
              className="soft-btn retake-btn"
              disabled={selected === null || camera.status !== 'ready'}
              onClick={() => run([selected])}
            >
              선택한 컷 다시 찍기
            </button>
            <button className="primary-btn shutter-btn" onClick={() => onDone(shots)}>
              꾸미러 가기 →
            </button>
          </div>
        )}
      </footer>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => {
          importFiles(e.target.files)
          e.target.value = ''
        }}
      />
    </div>
  )
}
