import { useMemo } from 'react'
import { cls } from '../lib/hooks'
import { FILTERS } from '../lib/filters'
import { drawFilteredSource } from '../lib/render'

const SIZE = 180

export default function FilterPanel({ filterId, onFilter, shots }) {
  const thumbs = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = SIZE
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    return Object.fromEntries(
      FILTERS.map((f) => {
        ctx.clearRect(0, 0, SIZE, SIZE)
        drawFilteredSource(ctx, { el: shots[0].image, mirror: false }, SIZE, SIZE, f)
        return [f.id, canvas.toDataURL('image/jpeg', 0.85)]
      }),
    )
  }, [shots])

  return (
    <div className="panel">
      <div className="tile-row">
        {FILTERS.map((f) => (
          <button key={f.id} className={cls('filter-tile', f.id === filterId && 'active')} onClick={() => onFilter(f.id)}>
            <img src={thumbs[f.id]} alt="" />
            <span className="tile-name">{f.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
