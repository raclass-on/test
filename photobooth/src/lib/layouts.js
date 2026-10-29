import { SHOT_COUNT } from '../config'

function makeSlots({ cols, rows, W, H, side, gap, top, bottom }) {
  const w = (W - side * 2 - gap * (cols - 1)) / cols
  const h = (H - top - bottom - gap * (rows - 1)) / rows
  const slots = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      slots.push({ x: side + c * (w + gap), y: top + r * (h + gap), w, h })
    }
  }
  return slots.slice(0, SHOT_COUNT)
}

const grid = { W: 1080, H: 1920, side: 60, gap: 24, top: 130, bottom: 290 }
const strip = { W: 720, H: 2160, side: 44, gap: 22, top: 92, bottom: 268 }

// W×H: 저장되는 사진 크기(px). video: 영상 저장 시 축소 비율
export const LAYOUTS = {
  grid: {
    id: 'grid',
    name: '2×2 그리드',
    ...grid,
    radius: 10,
    slots: makeSlots({ cols: 2, rows: 2, ...grid }),
    stickerScale: 1,
    videoScale: 2 / 3,
  },
  strip: {
    id: 'strip',
    name: '1×4 스트립',
    ...strip,
    radius: 8,
    slots: makeSlots({ cols: 1, rows: 4, ...strip }),
    stickerScale: 1.5,
    videoScale: 2 / 3,
  },
}

export const slotAspect = (layout) => layout.slots[0].w / layout.slots[0].h
