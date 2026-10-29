import { useRef } from 'react'
import { cls } from '../lib/hooks'

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

function pointerInfo(pointers) {
  const [a, b] = [...pointers.values()]
  if (!b) return { x: a.x, y: a.y }
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
    dist: Math.hypot(b.x - a.x, b.y - a.y),
    angle: Math.atan2(b.y - a.y, b.x - a.x),
  }
}

// 사진 위에 올린 스티커: 한 손가락으로 이동, 두 손가락이나 모서리 손잡이로 크기·회전
export default function StickerLayer({ stickers, setStickers, selected, setSelected }) {
  const layerRef = useRef(null)
  const gesture = useRef(null)

  const update = (uid, patch) => setStickers((list) => list.map((s) => (s.uid === uid ? { ...s, ...patch } : s)))

  function baseline(g, s) {
    g.start = { sticker: { ...s }, pointer: pointerInfo(g.pointers) }
  }

  function onStickerDown(e, s) {
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)
    if (gesture.current?.uid !== s.uid || gesture.current.mode !== 'move') {
      gesture.current = { uid: s.uid, mode: 'move', pointers: new Map() }
      setSelected(s.uid)
      // 고른 스티커를 맨 위로
      setStickers((list) => [...list.filter((x) => x.uid !== s.uid), list.find((x) => x.uid === s.uid)])
    }
    const g = gesture.current
    g.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
    baseline(g, s)
  }

  function onHandleDown(e, s) {
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)
    const rect = layerRef.current.getBoundingClientRect()
    const cx = rect.left + s.x * rect.width
    const cy = rect.top + s.y * rect.height
    gesture.current = {
      uid: s.uid,
      mode: 'handle',
      pointers: new Map([[e.pointerId, { x: e.clientX, y: e.clientY }]]),
      center: { x: cx, y: cy },
      start: {
        sticker: { ...s },
        dist: Math.hypot(e.clientX - cx, e.clientY - cy),
        angle: Math.atan2(e.clientY - cy, e.clientX - cx),
      },
    }
  }

  function onMove(e) {
    const g = gesture.current
    if (!g || !g.pointers.has(e.pointerId)) return
    g.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const rect = layerRef.current.getBoundingClientRect()
    const s0 = g.start.sticker

    if (g.mode === 'handle') {
      const dx = e.clientX - g.center.x
      const dy = e.clientY - g.center.y
      update(g.uid, {
        w: clamp((s0.w * Math.hypot(dx, dy)) / Math.max(g.start.dist, 1), 0.04, 1.4),
        rot: s0.rot + Math.atan2(dy, dx) - g.start.angle,
      })
      return
    }

    const p0 = g.start.pointer
    const p = pointerInfo(g.pointers)
    const patch = {
      x: clamp(s0.x + (p.x - p0.x) / rect.width, 0, 1),
      y: clamp(s0.y + (p.y - p0.y) / rect.height, 0, 1),
    }
    if (p.dist && p0.dist) {
      patch.w = clamp((s0.w * p.dist) / p0.dist, 0.04, 1.4)
      patch.rot = s0.rot + p.angle - p0.angle
    }
    update(g.uid, patch)
  }

  function onUp(e) {
    const g = gesture.current
    if (!g || !g.pointers.has(e.pointerId)) return
    g.pointers.delete(e.pointerId)
    if (!g.pointers.size) {
      g.mode = 'idle'
      return
    }
    // 손가락 하나를 떼면 남은 손가락 기준으로 다시 시작
    const s = stickers.find((x) => x.uid === g.uid)
    if (s) baseline(g, s)
  }

  return (
    <div
      ref={layerRef}
      className="sticker-layer"
      onPointerDown={() => setSelected(null)}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      {stickers.map((s) => (
        <div
          key={s.uid}
          className={cls('sticker', selected === s.uid && 'selected')}
          style={{
            left: `${s.x * 100}%`,
            top: `${s.y * 100}%`,
            width: `${s.w * 100}%`,
            transform: `translate(-50%, -50%) rotate(${s.rot}rad)`,
          }}
          onPointerDown={(e) => onStickerDown(e, s)}
        >
          <img src={s.src} alt="" draggable={false} />
          {selected === s.uid && (
            <>
              <button
                className="sticker-delete"
                aria-label="스티커 삭제"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => {
                  setStickers((list) => list.filter((x) => x.uid !== s.uid))
                  setSelected(null)
                }}
              >
                ×
              </button>
              <span className="sticker-handle" aria-hidden="true" onPointerDown={(e) => onHandleDown(e, s)} />
            </>
          )}
        </div>
      ))}
    </div>
  )
}
