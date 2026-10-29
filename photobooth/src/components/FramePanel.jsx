import { useEffect, useState } from 'react'
import { cls } from '../lib/hooks'
import { ensureFonts, FRAMES } from '../lib/frames'
import { filterById } from '../lib/filters'
import { LAYOUTS } from '../lib/layouts'
import { renderComposite } from '../lib/render'

const THUMB_HEIGHT = 200

function renderThumbs(layout, shots, date) {
  const scale = THUMB_HEIGHT / layout.H
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(layout.W * scale)
  canvas.height = THUMB_HEIGHT
  const ctx = canvas.getContext('2d')
  const sources = shots.map((s) => ({ el: s.image, mirror: false }))
  const out = {}
  for (const frame of FRAMES) {
    renderComposite(ctx, { layout, frame, filter: filterById('original'), sources, scale, date })
    out[frame.id] = canvas.toDataURL('image/jpeg', 0.85)
  }
  return out
}

export default function FramePanel({ layoutId, onLayout, frameId, onFrame, shots, date }) {
  const layout = LAYOUTS[layoutId]
  const [thumbs, setThumbs] = useState({})

  useEffect(() => {
    let cancelled = false
    ensureFonts().then(() => !cancelled && setThumbs(renderThumbs(layout, shots, date)))
    return () => {
      cancelled = true
    }
  }, [layout, shots, date])

  return (
    <div className="panel">
      <div className="chips">
        {Object.values(LAYOUTS).map((l) => (
          <button key={l.id} className={cls('chip', l.id === layoutId && 'active')} onClick={() => onLayout(l.id)}>
            {l.name}
          </button>
        ))}
      </div>
      <div className="tile-row">
        {FRAMES.map((f) => (
          <button key={f.id} className={cls('frame-tile', f.id === frameId && 'active')} onClick={() => onFrame(f.id)}>
            <span className="frame-thumb" style={{ aspectRatio: `${layout.W} / ${layout.H}` }}>
              {thumbs[f.id] && <img src={thumbs[f.id]} alt="" />}
            </span>
            <span className="tile-name">{f.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
