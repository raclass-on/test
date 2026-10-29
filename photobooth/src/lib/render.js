import { ensureFonts, paintFrameBackground, paintFrameForeground } from './frames'
import { applyFilter, supportsCtxFilter } from './filters'

function sourceSize(el) {
  return {
    w: el.videoWidth || el.naturalWidth || el.width,
    h: el.videoHeight || el.naturalHeight || el.height,
  }
}

// 가운데를 기준으로 칸을 꽉 채우도록 잘라냄
export function coverCrop(sw, sh, dw, dh) {
  const scale = Math.max(dw / sw, dh / sh)
  const cw = dw / scale
  const ch = dh / scale
  return { sx: (sw - cw) / 2, sy: (sh - ch) / 2, sw: cw, sh: ch }
}

const slotCanvases = []
function slotCanvas(i, w, h) {
  const c = (slotCanvases[i] ??= document.createElement('canvas'))
  if (c.width !== w || c.height !== h) {
    c.width = w
    c.height = h
  }
  return c
}

// source: { el: 캔버스/이미지/비디오, mirror: 좌우반전 여부 }
export function drawFilteredSource(ctx, source, w, h, filter) {
  const { el, mirror } = source
  const size = sourceSize(el)
  if (!size.w || !size.h) return
  const crop = coverCrop(size.w, size.h, w, h)
  ctx.save()
  if (mirror) ctx.setTransform(-1, 0, 0, 1, w, 0)
  if (filter.css !== 'none' && supportsCtxFilter()) ctx.filter = filter.css
  ctx.drawImage(el, crop.sx, crop.sy, crop.sw, crop.sh, 0, 0, w, h)
  ctx.restore()
  applyFilter(ctx, w, h, filter)
}

function drawSlot(ctx, i, slot, radius, source, filter, scale, frame) {
  ctx.save()
  ctx.beginPath()
  ctx.roundRect(slot.x, slot.y, slot.w, slot.h, radius)
  ctx.clip()
  if (source?.el) {
    const pw = Math.max(1, Math.round(slot.w * scale))
    const ph = Math.max(1, Math.round(slot.h * scale))
    const off = slotCanvas(i, pw, ph)
    const octx = off.getContext('2d', { willReadFrequently: !supportsCtxFilter() })
    octx.clearRect(0, 0, pw, ph)
    drawFilteredSource(octx, source, pw, ph, filter)
    ctx.drawImage(off, slot.x, slot.y, slot.w, slot.h)
  } else {
    ctx.fillStyle = frame.slot
    ctx.fillRect(slot.x, slot.y, slot.w, slot.h)
  }
  ctx.restore()
}

export function drawStickers(ctx, layout, stickers, images) {
  for (const s of stickers) {
    const img = images.get(s.src)
    if (!img) continue
    const w = s.w * layout.W
    const h = w * s.aspect
    ctx.save()
    ctx.translate(s.x * layout.W, s.y * layout.H)
    ctx.rotate(s.rot)
    ctx.drawImage(img, -w / 2, -h / 2, w, h)
    ctx.restore()
  }
}

// 프레임 + 사진 4장 + (선택) 스티커를 캔버스에 합성. 캔버스 크기 = layout 크기 × scale
export function renderComposite(ctx, { layout, frame, filter, sources, scale = 1, stickers = [], stickerImages, date }) {
  ctx.save()
  ctx.setTransform(scale, 0, 0, scale, 0, 0)
  paintFrameBackground(ctx, frame, layout)
  layout.slots.forEach((slot, i) => drawSlot(ctx, i, slot, layout.radius, sources[i], filter, scale, frame))
  paintFrameForeground(ctx, frame, layout, date)
  if (stickerImages) drawStickers(ctx, layout, stickers, stickerImages)
  ctx.restore()
}

export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export async function loadStickerImages(stickers) {
  const images = new Map()
  await Promise.all(
    [...new Set(stickers.map((s) => s.src))].map(async (src) => images.set(src, await loadImage(src))),
  )
  return images
}

export function canvasToBlob(canvas, type = 'image/jpeg', quality = 0.92) {
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('이미지를 만들 수 없어요'))), type, quality),
  )
}

export async function exportPhoto({ layout, frame, filter, shots, stickers, date }) {
  const canvas = document.createElement('canvas')
  canvas.width = layout.W
  canvas.height = layout.H
  const [stickerImages] = await Promise.all([loadStickerImages(stickers), ensureFonts()])
  renderComposite(canvas.getContext('2d'), {
    layout,
    frame,
    filter,
    sources: shots.map((s) => ({ el: s.image, mirror: false })),
    stickers,
    stickerImages,
    date,
  })
  return canvasToBlob(canvas)
}
