import { useEffect, useMemo, useRef, useState } from 'react'
import { BRAND } from '../config'
import { shareUrl, uploadPhoto, uploadVideo } from '../lib/api'
import { filterById } from '../lib/filters'
import { ensureFonts, frameById } from '../lib/frames'
import { cls, useFitBox, useToast } from '../lib/hooks'
import { LAYOUTS } from '../lib/layouts'
import { printPhoto } from '../lib/print'
import { exportPhoto, renderComposite } from '../lib/render'
import { canShareFile, shareFile, stamp } from '../lib/save'
import { canMakeVideo, exportVideo } from '../lib/video'
import FilterPanel from './FilterPanel'
import FramePanel from './FramePanel'
import { HomeIcon, InstagramIcon, PrintIcon, QrIcon } from './Icons'
import Modal from './Modal'
import QrModal from './QrModal'
import StickerLayer from './StickerLayer'
import StickerPanel from './StickerPanel'

const TABS = [
  { id: 'frame', name: '프레임' },
  { id: 'sticker', name: '스티커', badge: 'New!' },
  { id: 'filter', name: '필터' },
]

let stickerSeq = 0

function friendlyError(err) {
  if (err instanceof TypeError) return '인터넷 연결을 확인해 주세요.'
  if (err.status === 404) return '저장 서버를 찾을 수 없어요. 배포된 주소에서 열었는지 확인해 주세요.'
  if (err.message === 'storage_not_configured') return '사진 저장소(Vercel Blob)가 연결되지 않았어요.'
  if (err.status === 413) return '파일이 너무 커요.'
  if (err.status === 429) return '요청이 너무 많아요. 잠시 후 다시 시도해 주세요.'
  if (err.status) return `서버에 저장하지 못했어요. 잠시 후 다시 시도해 주세요. (${err.status})`
  return err.message
}

export default function Editor({ initialLayoutId, shots, onHome }) {
  const [layoutId, setLayoutId] = useState(initialLayoutId)
  const [frameId, setFrameId] = useState('black')
  const [filterId, setFilterId] = useState('original')
  const [stickers, setStickers] = useState([])
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('frame')
  const [busy, setBusy] = useState(null)
  const [qr, setQr] = useState(null)
  const [confirmHome, setConfirmHome] = useState(false)
  const [toast, showToast] = useToast()

  const layout = LAYOUTS[layoutId]
  const frame = frameById(frameId)
  const filter = filterById(filterId)
  const [date] = useState(() => new Date())
  const videoAvailable = useMemo(() => canMakeVideo(shots), [shots])

  const canvasRef = useRef(null)
  const stageRef = useRef(null)
  const box = useFitBox(stageRef, layout.W / layout.H)
  const cacheRef = useRef({})
  const qrRunRef = useRef(0)

  useEffect(() => {
    let cancelled = false
    ensureFonts().then(() => {
      const canvas = canvasRef.current
      if (cancelled || !canvas) return
      canvas.width = layout.W
      canvas.height = layout.H
      const sources = shots.map((s) => ({ el: s.image, mirror: false }))
      renderComposite(canvas.getContext('2d'), { layout, frame, filter, sources, date })
    })
    return () => {
      cancelled = true
    }
  }, [layout, frame, filter, shots, date])

  // 꾸민 내용이 그대로면 만들어 둔 사진·영상·QR을 다시 씀
  const editKey = JSON.stringify([layoutId, frameId, filterId, stickers])
  function cache() {
    if (cacheRef.current.key !== editKey) cacheRef.current = { key: editKey }
    return cacheRef.current
  }
  function memo(name, make) {
    const c = cache()
    if (!c[name]) {
      c[name] = make()
      c[name].catch(() => delete c[name])
    }
    return c[name]
  }
  const exportArgs = { layout, frame, filter, shots, stickers, date }
  const getPhoto = () => memo('photo', () => exportPhoto(exportArgs))
  const getVideo = () => memo('video', () => exportVideo(exportArgs))

  function addSticker(def) {
    const uid = ++stickerSeq
    const jitter = () => (Math.random() - 0.5) * 0.14
    setStickers((list) => [
      ...list,
      {
        uid,
        src: def.src,
        aspect: def.aspect,
        x: 0.5 + jitter(),
        y: 0.45 + jitter() * 1.6,
        w: Math.min(0.9, def.size * layout.stickerScale),
        rot: 0,
      },
    ])
    setSelected(uid)
  }

  async function withBusy(message, task) {
    setSelected(null)
    setBusy(message)
    try {
      await task()
    } catch (err) {
      showToast(friendlyError(err))
    } finally {
      setBusy(null)
    }
  }

  const print = () =>
    withBusy('인쇄 준비 중…', async () => {
      await printPhoto(await getPhoto(), layout)
    })

  const shareInstagram = () =>
    withBusy('사진 만드는 중…', async () => {
      const file = new File([await getPhoto()], `fourcut-${stamp(date)}.jpg`, { type: 'image/jpeg' })
      if (!canShareFile(file)) {
        showToast('이 기기에서는 바로 공유할 수 없어요. QR 코드로 받은 사진을 인스타그램에 올려 주세요')
        return
      }
      await shareFile(file, BRAND)
    })

  async function openQr() {
    const run = ++qrRunRef.current
    const set = (next) => run === qrRunRef.current && setQr(next)
    setSelected(null)
    set({ status: 'working', message: '사진 만드는 중…' })
    try {
      const share = await memo('share', async () => {
        const photo = getPhoto()
        const video = videoAvailable ? getVideo().catch(() => null) : null
        const uploaded = await uploadPhoto(await photo)
        let hasVideo = false
        if (video) {
          set({ status: 'working', message: '영상 만드는 중…' })
          const blob = await video
          if (blob) {
            set({ status: 'working', message: '영상 올리는 중…' })
            hasVideo = await uploadVideo(uploaded.id, blob).then(
              () => true,
              () => false,
            )
          }
        }
        return { ...uploaded, hasVideo }
      })
      set({ status: 'done', url: shareUrl(share.id), expiresAt: share.expiresAt, hasVideo: share.hasVideo })
    } catch (err) {
      set({ status: 'error', message: friendlyError(err) })
    }
  }

  function closeQr() {
    qrRunRef.current++
    setQr(null)
  }

  return (
    <div className="editor">
      <header className="topbar">
        <button className="icon-btn" onClick={() => setConfirmHome(true)} aria-label="처음으로">
          <HomeIcon size={28} />
        </button>
        {/* 거치대에 세우면 아래쪽은 손이 잘 안 닿아서 맨 위 가운데에 둠 */}
        <button className="primary-btn top-qr" onClick={openQr}>
          <QrIcon size={30} /> QR 코드
        </button>
        <div className="topbar-right">
          <button className="icon-btn" onClick={print} aria-label="인쇄">
            <PrintIcon size={28} />
          </button>
          <button className="icon-btn" onClick={shareInstagram} aria-label="인스타그램 공유">
            <InstagramIcon size={28} />
          </button>
        </div>
      </header>

      <main className="editor-stage" ref={stageRef}>
        <div className="preview" style={{ width: box.width, height: box.height }}>
          <canvas ref={canvasRef} />
          <StickerLayer stickers={stickers} setStickers={setStickers} selected={selected} setSelected={setSelected} />
          {stickers.length > 0 && (
            <button
              className="clear-stickers"
              onClick={() => {
                setStickers([])
                setSelected(null)
              }}
            >
              모두 지우기
            </button>
          )}
        </div>
      </main>

      <section className="editor-tools">
        <nav className="tabs">
          {TABS.map((t) => (
            <button key={t.id} className={cls('tab', tab === t.id && 'active')} onClick={() => setTab(t.id)}>
              {t.name}
              {t.badge && <span className="new-badge">{t.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="panel-wrap">
          {tab === 'frame' && (
            <FramePanel
              layoutId={layoutId}
              onLayout={setLayoutId}
              frameId={frameId}
              onFrame={setFrameId}
              shots={shots}
              date={date}
            />
          )}
          {tab === 'sticker' && <StickerPanel onAdd={addSticker} />}
          {tab === 'filter' && <FilterPanel filterId={filterId} onFilter={setFilterId} shots={shots} />}
        </div>

      </section>

      {busy && (
        <div className="busy">
          <div className="spinner" />
          <p>{busy}</p>
        </div>
      )}

      {qr && <QrModal state={qr} onClose={closeQr} onRetry={openQr} onFinish={onHome} />}

      {confirmHome && (
        <Modal onClose={() => setConfirmHome(false)} className="confirm-modal">
          <h2>처음 화면으로 갈까요?</h2>
          <p>찍은 사진과 꾸민 내용이 사라져요.</p>
          <div className="modal-actions">
            <button className="soft-btn" onClick={() => setConfirmHome(false)}>
              취소
            </button>
            <button className="primary-btn" onClick={onHome}>
              처음으로
            </button>
          </div>
        </Modal>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
