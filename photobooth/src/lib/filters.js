// css: 캔버스 ctx.filter 문자열. tint: 위에 덮는 색 [색, 합성 방식]. glow: 뽀샤시 효과 강도
export const FILTERS = [
  { id: 'original', name: '기본', css: 'none' },
  {
    id: 'soft1',
    name: '소프트 1',
    css: 'brightness(1.02) contrast(0.92) saturate(0.95)',
    tint: ['rgba(255, 236, 228, 0.12)', 'screen'],
    glow: 0.22,
  },
  {
    id: 'soft2',
    name: '소프트 2',
    css: 'brightness(1.04) contrast(0.86) saturate(0.88)',
    tint: ['rgba(255, 210, 226, 0.16)', 'screen'],
    glow: 0.32,
  },
  { id: 'light', name: '라이트', css: 'brightness(1.16) contrast(0.95) saturate(1.05)' },
  { id: 'cool', name: '쿨', css: 'brightness(1.04) contrast(1.03) saturate(0.9)', tint: ['rgba(90, 160, 255, 0.34)', 'soft-light'] },
  { id: 'mono', name: '흑백', css: 'grayscale(1) contrast(1.12) brightness(1.04)' },
]

export const filterById = (id) => FILTERS.find((f) => f.id === id) ?? FILTERS[0]

let ctxFilterSupport
export function supportsCtxFilter() {
  if (ctxFilterSupport === undefined) {
    const ctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true })
    ctx.filter = 'brightness(0)'
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, 1, 1)
    ctxFilterSupport = ctx.filter === 'brightness(0)' && ctx.getImageData(0, 0, 1, 1).data[0] === 0
  }
  return ctxFilterSupport
}

// ctx.filter를 지원하지 않는 브라우저(구형 사파리 등)용: 같은 CSS 필터를 색 행렬로 계산
const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]

function multiply(a, b) {
  // 3×4 행렬 (마지막 열은 0~255 오프셋) a·b
  const out = new Array(12)
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      out[r * 4 + c] =
        a[r * 4] * b[c] + a[r * 4 + 1] * b[4 + c] + a[r * 4 + 2] * b[8 + c] + (c === 3 ? a[r * 4 + 3] : 0)
    }
  }
  return out
}

function opMatrix(name, v) {
  switch (name) {
    case 'brightness':
      return [v, 0, 0, 0, 0, v, 0, 0, 0, 0, v, 0]
    case 'contrast': {
      const o = (0.5 - 0.5 * v) * 255
      return [v, 0, 0, o, 0, v, 0, o, 0, 0, v, o]
    }
    case 'saturate':
      return [
        0.213 + 0.787 * v, 0.715 - 0.715 * v, 0.072 - 0.072 * v, 0,
        0.213 - 0.213 * v, 0.715 + 0.285 * v, 0.072 - 0.072 * v, 0,
        0.213 - 0.213 * v, 0.715 - 0.715 * v, 0.072 + 0.928 * v, 0,
      ]
    case 'grayscale': {
      const g = 1 - Math.min(1, v)
      return [
        0.2126 + 0.7874 * g, 0.7152 - 0.7152 * g, 0.0722 - 0.0722 * g, 0,
        0.2126 - 0.2126 * g, 0.7152 + 0.2848 * g, 0.0722 - 0.0722 * g, 0,
        0.2126 - 0.2126 * g, 0.7152 - 0.7152 * g, 0.0722 + 0.9278 * g, 0,
      ]
    }
    default:
      return IDENTITY
  }
}

const matrixCache = new Map()
function cssToMatrix(css) {
  if (!matrixCache.has(css)) {
    let m = IDENTITY
    for (const [, name, value] of css.matchAll(/([a-z-]+)\(([\d.]+)\)/g)) m = multiply(opMatrix(name, Number(value)), m)
    matrixCache.set(css, m)
  }
  return matrixCache.get(css)
}

function applyMatrix(ctx, w, h, css) {
  const m = cssToMatrix(css)
  const img = ctx.getImageData(0, 0, w, h)
  const d = img.data
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i]
    const g = d[i + 1]
    const b = d[i + 2]
    d[i] = m[0] * r + m[1] * g + m[2] * b + m[3]
    d[i + 1] = m[4] * r + m[5] * g + m[6] * b + m[7]
    d[i + 2] = m[8] * r + m[9] * g + m[10] * b + m[11]
  }
  ctx.putImageData(img, 0, 0)
}

const glowCanvas = document.createElement('canvas')

// 이미 원본이 그려진 캔버스(ctx)에 필터를 적용
export function applyFilter(ctx, w, h, filter) {
  if (filter.css !== 'none' && !supportsCtxFilter()) applyMatrix(ctx, w, h, filter.css)
  if (filter.glow) {
    // 작게 줄였다가 키우면 흐릿한 사본이 됨 → 살짝 덮어서 뽀샤시하게
    glowCanvas.width = Math.max(1, Math.round(w / 14))
    glowCanvas.height = Math.max(1, Math.round(h / 14))
    const g = glowCanvas.getContext('2d')
    g.drawImage(ctx.canvas, 0, 0, w, h, 0, 0, glowCanvas.width, glowCanvas.height)
    ctx.save()
    ctx.globalAlpha = filter.glow
    ctx.globalCompositeOperation = 'screen'
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(glowCanvas, 0, 0, w, h)
    ctx.restore()
  }
  if (filter.tint) {
    ctx.save()
    ctx.globalCompositeOperation = filter.tint[1]
    ctx.fillStyle = filter.tint[0]
    ctx.fillRect(0, 0, w, h)
    ctx.restore()
  }
}
