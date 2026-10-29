import { useState } from 'react'
import { cls } from '../lib/hooks'
import {
  getRecentStickers,
  getStickerCatalog,
  makeTextSticker,
  pushRecentSticker,
  STICKER_CATEGORIES,
  TEXT_STYLES,
} from '../lib/stickers'

function CustomText({ onAdd }) {
  const [text, setText] = useState('')
  const [style, setStyle] = useState('white')
  return (
    <form
      className="custom-text"
      onSubmit={(e) => {
        e.preventDefault()
        const t = text.trim()
        if (!t) return
        onAdd(makeTextSticker(t, style))
        setText('')
      }}
    >
      <input value={text} maxLength={20} placeholder="원하는 문구 입력" onChange={(e) => setText(e.target.value)} />
      <div className="swatches">
        {TEXT_STYLES.map((s) => (
          <button
            key={s.id}
            type="button"
            className={cls('swatch', s.id === style && 'active')}
            style={{ background: s.fill }}
            aria-label={s.name}
            onClick={() => setStyle(s.id)}
          />
        ))}
      </div>
      <button type="submit" className="chip active" disabled={!text.trim()}>
        추가
      </button>
    </form>
  )
}

export default function StickerPanel({ onAdd }) {
  const [category, setCategory] = useState('pick')
  const [recent, setRecent] = useState(getRecentStickers)
  const items = category === 'recent' ? recent : getStickerCatalog().items[category]

  function add(def) {
    pushRecentSticker(def.id)
    setRecent(getRecentStickers())
    onAdd(def)
  }

  return (
    <div className="panel">
      <div className="chips">
        {STICKER_CATEGORIES.map((c) => (
          <button key={c.id} className={cls('chip', c.id === category && 'active')} onClick={() => setCategory(c.id)}>
            {c.name}
          </button>
        ))}
      </div>
      <div className="sticker-scroll">
        {category === 'text' && <CustomText onAdd={onAdd} />}
        {items.length === 0 && <p className="panel-empty">아직 사용한 스티커가 없어요</p>}
        <div className="sticker-grid">
          {items.map((def) => (
            <button key={def.id} className="sticker-tile" onClick={() => add(def)}>
              <img src={def.src} alt="" draggable={false} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
