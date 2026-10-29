import { BRAND, BRAND_SMALL } from '../config'

export const UI_FONT = "'Pretendard Variable', Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif"

// 캔버스에 글씨를 쓰기 전에 웹폰트를 미리 받아 둠
let fontsReady
export function ensureFonts() {
  fontsReady ??= Promise.all([
    document.fonts.load(`800 46px 'Pretendard Variable'`, BRAND + todayLabel()),
    document.fonts.load(`600 30px 'Pretendard Variable'`, BRAND_SMALL + todayLabel()),
  ]).catch(() => {})
  return fontsReady
}

function seeded(seed) {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function fill(ctx, W, H, color) {
  ctx.fillStyle = color
  ctx.fillRect(0, 0, W, H)
}

function heartPath(ctx, x, y, s) {
  ctx.beginPath()
  ctx.moveTo(x, y + s * 0.3)
  ctx.bezierCurveTo(x, y, x - s * 0.5, y, x - s * 0.5, y + s * 0.3)
  ctx.bezierCurveTo(x - s * 0.5, y + s * 0.6, x, y + s * 0.8, x, y + s)
  ctx.bezierCurveTo(x, y + s * 0.8, x + s * 0.5, y + s * 0.6, x + s * 0.5, y + s * 0.3)
  ctx.bezierCurveTo(x + s * 0.5, y, x, y, x, y + s * 0.3)
  ctx.closePath()
}

function sparklePath(ctx, x, y, r) {
  ctx.beginPath()
  ctx.moveTo(x, y - r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.quadraticCurveTo(x, y, x, y + r)
  ctx.quadraticCurveTo(x, y, x - r, y)
  ctx.quadraticCurveTo(x, y, x, y - r)
  ctx.closePath()
}

function daisy(ctx, x, y, r, rot) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rot)
  ctx.fillStyle = '#fffdf6'
  const petals = 14
  for (let i = 0; i < petals; i++) {
    ctx.rotate((Math.PI * 2) / petals)
    ctx.beginPath()
    ctx.ellipse(r * 0.55, 0, r * 0.5, r * 0.14, 0, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.fillStyle = '#ffcf1f'
  ctx.beginPath()
  ctx.arc(0, 0, r * 0.26, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

const paint = {
  daisy(ctx, W, H) {
    const g = ctx.createLinearGradient(0, 0, W, H)
    g.addColorStop(0, '#6f9f37')
    g.addColorStop(1, '#3f6d22')
    fill(ctx, W, H, g)
    const rnd = seeded(7)
    ctx.lineCap = 'round'
    for (let i = 0; i < 420; i++) {
      const x = rnd() * W
      const y = rnd() * H
      const len = 30 + rnd() * 70
      ctx.strokeStyle = `rgba(${150 + rnd() * 60}, ${190 + rnd() * 50}, ${90 + rnd() * 40}, ${0.25 + rnd() * 0.35})`
      ctx.lineWidth = 2 + rnd() * 4
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.quadraticCurveTo(x + (rnd() - 0.5) * 30, y - len / 2, x + (rnd() - 0.5) * 40, y - len)
      ctx.stroke()
    }
    const r = Math.min(W, H) / 1080
    for (let i = 0; i < 46; i++) daisy(ctx, rnd() * W, rnd() * H, (22 + rnd() * 34) * Math.max(r, 0.6), rnd() * 6)
  },
  check(ctx, W, H) {
    fill(ctx, W, H, '#ffffff')
    const s = W / 12
    ctx.fillStyle = '#e4d9ff'
    for (let y = 0; y < H / s; y++) for (let x = 0; x < 12; x++) if ((x + y) % 2) ctx.fillRect(x * s, y * s, s, s)
  },
  dots(ctx, W, H) {
    fill(ctx, W, H, '#fff4e3')
    const s = W / 9
    ctx.fillStyle = '#ffb4c9'
    for (let y = 0, row = 0; y < H + s; y += s * 0.87, row++) {
      for (let x = row % 2 ? s / 2 : 0; x < W + s; x += s) {
        ctx.beginPath()
        ctx.arc(x, y, s * 0.18, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  },
  holo(ctx, W, H) {
    const g = ctx.createLinearGradient(0, 0, W, H)
    ;['#ffd0ee', '#dccbff', '#c4eeff', '#d8ffd8', '#fff1bf', '#ffd0ee'].forEach((c, i, a) => g.addColorStop(i / (a.length - 1), c))
    fill(ctx, W, H, g)
    const rnd = seeded(3)
    ctx.fillStyle = 'rgba(255,255,255,0.9)'
    for (let i = 0; i < 26; i++) {
      sparklePath(ctx, rnd() * W, rnd() * H, (8 + rnd() * 22) * (W / 1080) * 1.4)
      ctx.fill()
    }
  },
  night(ctx, W, H) {
    const g = ctx.createLinearGradient(0, 0, 0, H)
    g.addColorStop(0, '#0d1238')
    g.addColorStop(1, '#2a1c5c')
    fill(ctx, W, H, g)
    const rnd = seeded(11)
    for (let i = 0; i < 260; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.3 + rnd() * 0.7})`
      ctx.beginPath()
      ctx.arc(rnd() * W, rnd() * H, 1 + rnd() * 2.4, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.fillStyle = '#fff6b0'
    for (let i = 0; i < 14; i++) {
      sparklePath(ctx, rnd() * W, rnd() * H, (10 + rnd() * 18) * (W / 1080) * 1.4)
      ctx.fill()
    }
  },
  hearts(ctx, W, H) {
    fill(ctx, W, H, '#ffd6e4')
    const s = W / 8
    ctx.fillStyle = '#ff9fbf'
    for (let y = -s / 2, row = 0; y < H + s; y += s * 0.9, row++) {
      for (let x = row % 2 ? s / 2 : 0; x < W + s; x += s) {
        heartPath(ctx, x, y, s * 0.36)
        ctx.fill()
      }
    }
  },
  film(ctx, W, H, layout) {
    fill(ctx, W, H, '#151515')
    const hole = layout.side * 0.36
    ctx.fillStyle = '#e9e9e9'
    for (let y = hole; y < H - hole; y += hole * 2.2) {
      for (const x of [layout.side * 0.32, W - layout.side * 0.32 - hole]) {
        ctx.beginPath()
        ctx.roundRect(x, y, hole, hole * 1.3, hole * 0.2)
        ctx.fill()
      }
    }
  },
}

// ink: 글씨 색, slot: 사진이 없을 때 칸 색
export const FRAMES = [
  { id: 'black', name: '블랙', bg: '#111111', ink: '#ffffff', slot: '#2a2a2a' },
  { id: 'white', name: '화이트', bg: '#ffffff', ink: '#111111', slot: '#e8e8e8', border: '#e6e6e6' },
  { id: 'pink', name: '핑크', bg: '#ffd3e2', ink: '#d4336f', slot: '#ffe9f0' },
  { id: 'sky', name: '스카이', bg: '#cfe6ff', ink: '#1f5fd1', slot: '#e8f3ff' },
  { id: 'lime', name: '라임', bg: '#d6ff3d', ink: '#111111', slot: '#eaff9e' },
  { id: 'daisy', name: '데이지', paint: paint.daisy, ink: '#ffffff', slot: '#1d1020' },
  { id: 'check', name: '체커', paint: paint.check, ink: '#6a4bd6', slot: '#f4efff' },
  { id: 'dots', name: '도트', paint: paint.dots, ink: '#e4507f', slot: '#fff' },
  { id: 'holo', name: '홀로그램', paint: paint.holo, ink: '#5a48b8', slot: '#ffffffaa' },
  { id: 'night', name: '별밤', paint: paint.night, ink: '#fff6b0', slot: '#1b1f4a' },
  { id: 'hearts', name: '하트', paint: paint.hearts, ink: '#d92c69', slot: '#fff0f5' },
  { id: 'film', name: '필름', paint: paint.film, ink: '#ffffff', slot: '#2a2a2a' },
]

export const frameById = (id) => FRAMES.find((f) => f.id === id) ?? FRAMES[0]

export function todayLabel(date = new Date()) {
  const p = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}.${p(date.getMonth() + 1)}.${p(date.getDate())}`
}

export function paintFrameBackground(ctx, frame, layout) {
  const { W, H } = layout
  if (frame.paint) frame.paint(ctx, W, H, layout)
  else fill(ctx, W, H, frame.bg)
  if (frame.border) {
    ctx.strokeStyle = frame.border
    ctx.lineWidth = 4
    ctx.strokeRect(2, 2, W - 4, H - 4)
  }
}

function miniGrid(ctx, cx, cy, size, ink) {
  const cell = size / 2 - 3
  ctx.strokeStyle = ink
  ctx.lineWidth = Math.max(2, size / 18)
  for (let i = 0; i < 4; i++) {
    const x = cx - size / 2 + (i % 2) * (cell + 6)
    const y = cy - size / 2 + Math.floor(i / 2) * (cell + 6)
    ctx.beginPath()
    ctx.roundRect(x, y, cell, cell, cell * 0.18)
    ctx.stroke()
  }
  // 한 칸에 웃는 얼굴
  const x = cx + 3 + cell / 2
  const y = cy - size / 2 + cell / 2
  ctx.fillStyle = ink
  ctx.beginPath()
  ctx.arc(x - cell * 0.18, y - cell * 0.08, cell * 0.06, 0, Math.PI * 2)
  ctx.arc(x + cell * 0.18, y - cell * 0.08, cell * 0.06, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(x, y + cell * 0.02, cell * 0.2, 0.15 * Math.PI, 0.85 * Math.PI)
  ctx.stroke()
}

export function paintFrameForeground(ctx, frame, layout, date = new Date()) {
  const { W, H, top, bottom } = layout
  const k = W / 1080
  const narrow = layout.id === 'strip'
  ctx.save()
  ctx.fillStyle = frame.ink
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  ctx.globalAlpha = 0.85
  ctx.font = `600 ${Math.round((narrow ? 36 : 30) * k)}px ${UI_FONT}`
  ctx.fillText(BRAND_SMALL, W / 2, top / 2)
  ctx.globalAlpha = 1

  const footTop = H - bottom
  if (narrow) {
    miniGrid(ctx, W / 2, footTop + bottom * 0.3, 64 * k, frame.ink)
    ctx.font = `800 ${Math.round(58 * k)}px ${UI_FONT}`
    ctx.fillText(BRAND, W / 2, footTop + bottom * 0.6)
    ctx.font = `600 ${Math.round(34 * k)}px ${UI_FONT}`
    ctx.fillText(todayLabel(date), W / 2, footTop + bottom * 0.8)
  } else {
    miniGrid(ctx, W / 2, footTop + bottom * 0.3, 64, frame.ink)
    ctx.font = `800 ${46}px ${UI_FONT}`
    ctx.fillText(BRAND, W / 2, footTop + bottom * 0.6)
    ctx.font = `600 ${26}px ${UI_FONT}`
    ctx.fillText(todayLabel(date), W / 2, footTop + bottom * 0.8)
  }
  ctx.restore()
}
