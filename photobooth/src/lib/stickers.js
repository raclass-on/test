import { todayLabel } from './frames'

// 스티커는 모두 SVG로 직접 그림. SVG 이미지 안에서는 웹폰트를 못 쓰므로 기기 기본 글꼴을 사용
const FONT = "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans CJK KR', 'Malgun Gothic', sans-serif"
const EMOJI_FONT = "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif"
const INK = '#111111'
// SVG 1px이 1080px 너비 사진에서 차지하는 크기
const SIZE_FACTOR = 1.05

export const STICKER_CATEGORIES = [
  { id: 'recent', name: '최근' },
  { id: 'pick', name: '추천' },
  { id: 'bubble', name: '말풍선' },
  { id: 'badge', name: '배지' },
  { id: 'text', name: '글자' },
  { id: 'emoji', name: '이모지' },
  { id: 'deco', name: '데코' },
  { id: 'icon', name: '아이콘' },
]

let measureCtx
function measure(text, size, weight = 900) {
  measureCtx ??= document.createElement('canvas').getContext('2d')
  measureCtx.font = `${weight} ${size}px ${FONT}`
  return measureCtx.measureText(text).width
}

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
const f1 = (n) => Number(n.toFixed(1))

function label(text, x, y, size, { fill = INK, weight = 900, anchor = 'middle', maxWidth = Infinity } = {}) {
  let fs = size
  let width = measure(text, fs, weight)
  if (width > maxWidth) {
    fs = (fs * maxWidth) / width
    width = maxWidth
  }
  // textLength로 너비를 고정해서 기기마다 글꼴이 달라도 모양이 넘치지 않게 함
  return `<text x="${f1(x)}" y="${f1(y)}" font-family="${FONT}" font-size="${f1(fs)}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" dominant-baseline="central" textLength="${f1(width)}" lengthAdjust="spacingAndGlyphs">${esc(text)}</text>`
}

// parts: [{ shapes, fill }] — 전체를 흰 테두리(칼선)로 감싸고, 각 부분은 검은 외곽선 + 채우기
function cutout(parts, { sw = 7, white = 12, stroke = INK } = {}) {
  const all = parts.map((p) => p.shapes).join('')
  let out = white
    ? `<g fill="#fff" stroke="#fff" stroke-width="${sw * 2 + white * 2}" stroke-linejoin="round">${all}</g>`
    : ''
  for (const p of parts) {
    if (sw) out += `<g fill="${stroke}" stroke="${stroke}" stroke-width="${sw * 2}" stroke-linejoin="round">${p.shapes}</g>`
    out += `<g fill="${p.fill}">${p.shapes}</g>`
  }
  return out
}

function svg(w, h, body, defs = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${f1(w)}" height="${f1(h)}" viewBox="0 0 ${f1(w)} ${f1(h)}">${defs ? `<defs>${defs}</defs>` : ''}${body}</svg>`
}

function make(id, w, h, body, { defs, factor = SIZE_FACTOR } = {}) {
  return {
    id,
    src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg(w, h, body, defs))}`,
    aspect: h / w,
    size: (w * factor) / 1080,
  }
}

const HOLO = (id) =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb3ec"/><stop offset="0.35" stop-color="#c9b5ff"/><stop offset="0.65" stop-color="#9fe9ff"/><stop offset="1" stop-color="#d9ff9e"/></linearGradient>`

// ───────── 말풍선 ─────────
function bubble(id, text, color, ink = INK) {
  const fs = 46
  const bw = measure(text, fs) + 70
  const bh = 100
  const pad = 22
  const tail = 36
  const shapes = `<rect x="${pad}" y="${pad}" width="${f1(bw)}" height="${bh}" rx="36"/><path d="M${pad + 34} ${pad + bh - 12} L${pad + 18} ${pad + bh + tail} L${pad + 84} ${pad + bh - 12} Z"/>`
  const body = cutout([{ shapes, fill: color }]) + label(text, pad + bw / 2, pad + bh / 2 + 2, fs, { fill: ink })
  return make(id, bw + pad * 2, bh + tail + pad * 2, body)
}

function thought(id, text) {
  const fs = 44
  const bw = measure(text, fs) + 76
  const bh = 96
  const pad = 16
  const body =
    cutout(
      [
        {
          shapes: `<rect x="${pad + 20}" y="${pad}" width="${f1(bw)}" height="${bh}" rx="48"/><circle cx="${pad + 30}" cy="${pad + bh + 14}" r="12"/><circle cx="${pad + 12}" cy="${pad + bh + 40}" r="8"/>`,
          fill: '#ffffff',
        },
      ],
      { sw: 4, white: 8, stroke: '#9cc6ff' },
    ) + label(text, pad + 20 + bw / 2, pad + bh / 2 + 2, fs, { fill: '#222' })
  return make(id, bw + pad * 2 + 20, bh + pad * 2 + 52, body)
}

// ───────── 배지 ─────────
function starPoints(cx, cy, outer, inner, n, rot = -Math.PI / 2) {
  const pts = []
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 ? inner : outer
    const a = rot + (i * Math.PI) / n
    pts.push(`${f1(cx + r * Math.cos(a))},${f1(cy + r * Math.sin(a))}`)
  }
  return pts.join(' ')
}

function multiline(lines, cx, cy, maxW, maxH, base, ink) {
  const lh = 1.12
  const widest = Math.max(...lines.map((l) => measure(l, base)))
  const fs = Math.min(base, (base * maxW) / widest, maxH / (lines.length * lh))
  const top = cy - ((lines.length - 1) * fs * lh) / 2
  return lines.map((l, i) => label(l, cx, top + i * fs * lh, fs, { fill: ink })).join('')
}

function burst(id, text, color, ink = INK, { spikes = 20, defs } = {}) {
  const R = 118
  const pad = 22
  const c = R + pad
  const body =
    cutout([{ shapes: `<polygon points="${starPoints(c, c, R, R * 0.86, spikes)}"/>`, fill: color }]) +
    multiline(text.split('\n'), c, c + 2, R * 1.62, R * 1.2, 66, ink)
  return make(id, c * 2, c * 2, body, { defs })
}

function roundBadge(id, text, color, ink = INK) {
  const R = 104
  const pad = 22
  const c = R + pad
  const body =
    cutout([{ shapes: `<circle cx="${c}" cy="${c}" r="${R}"/>`, fill: color }]) +
    `<circle cx="${c}" cy="${c}" r="${R - 14}" fill="none" stroke="${ink}" stroke-width="3" stroke-dasharray="7 7"/>` +
    multiline(text.split('\n'), c, c + 2, R * 1.42, R * 1.15, 60, ink)
  return make(id, c * 2, c * 2, body)
}

function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16)
  const ch = (v) => Math.round(Math.min(255, Math.max(0, v * k)))
  return `rgb(${ch(n >> 16)}, ${ch((n >> 8) & 255)}, ${ch(n & 255)})`
}

function ribbon(id, text, color) {
  const fs = 38
  const bw = measure(text, fs) + 64
  const bh = 64
  const tail = 46
  const drop = 16
  const pad = 18
  const x = pad + tail - 12
  const y = pad
  const left = `<polygon points="${pad},${y + drop} ${pad + tail},${y + drop} ${pad + tail},${y + drop + bh} ${pad},${y + drop + bh} ${pad + 16},${y + drop + bh / 2}"/>`
  const rx = x + bw + 12
  const right = `<polygon points="${rx + tail},${y + drop} ${rx - 0},${y + drop} ${rx},${y + drop + bh} ${rx + tail},${y + drop + bh} ${rx + tail - 16},${y + drop + bh / 2}"/>`
  const folds = `<polygon points="${x},${y + bh} ${x + 12},${y + bh} ${x + 12},${y + bh + drop}" fill="${INK}"/><polygon points="${x + bw},${y + bh} ${x + bw - 12},${y + bh} ${x + bw - 12},${y + bh + drop}" fill="${INK}"/>`
  const body =
    cutout(
      [
        { shapes: left + right, fill: shade(color, 0.78) },
        { shapes: `<rect x="${f1(x)}" y="${y}" width="${f1(bw)}" height="${bh}"/>`, fill: color },
      ],
      { sw: 5, white: 10 },
    ) +
    folds +
    label(text, x + bw / 2, y + bh / 2 + 1, fs)
  return make(id, rx + tail + pad, y + drop + bh + pad, body)
}

function windowBox(id, title, color, content = 'empty') {
  const w = 300
  const h = 196
  const bar = 40
  const pad = 14
  const x = pad
  const y = pad
  const btn = (i, icon) => {
    const bx = x + w - 12 - 26 * (3 - i)
    const by = y + 9
    const glyph = {
      min: `<line x1="${bx + 5}" y1="${by + 15}" x2="${bx + 17}" y2="${by + 15}"/>`,
      max: `<rect x="${bx + 5}" y="${by + 5}" width="12" height="12" fill="none"/>`,
      close: `<path d="M${bx + 6} ${by + 6} L${bx + 16} ${by + 16} M${bx + 16} ${by + 6} L${bx + 6} ${by + 16}"/>`,
    }[icon]
    return `<rect x="${bx}" y="${by}" width="22" height="22" fill="#fff" stroke="${INK}" stroke-width="3"/><g stroke="${INK}" stroke-width="3">${glyph}</g>`
  }
  let inner = ''
  if (content === 'progress') {
    for (let i = 0; i < 9; i++) {
      inner += `<rect x="${x + 28 + i * 27}" y="${y + bar + 62}" width="21" height="34" fill="${i < 7 ? color : '#fff'}" stroke="${INK}" stroke-width="3"/>`
    }
  } else if (content === 'heart') {
    inner = pixelArt(HEART, x + w / 2 - 56, y + bar + 26, 16, color, { outline: true })
  }
  const body =
    `<rect x="${x - 10}" y="${y - 10}" width="${w + 20}" height="${h + 20}" rx="10" fill="#fff"/>` +
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff" stroke="${INK}" stroke-width="5"/>` +
    `<rect x="${x}" y="${y}" width="${w}" height="${bar}" fill="${color}" stroke="${INK}" stroke-width="5"/>` +
    label(title, x + 14, y + bar / 2 + 1, 21, { fill: '#fff', weight: 800, anchor: 'start', maxWidth: w - 112 }) +
    btn(0, 'min') +
    btn(1, 'max') +
    btn(2, 'close') +
    inner
  return make(id, w + pad * 2, h + pad * 2, body)
}

// ───────── 글자 ─────────
function pill(id, text, { fs = 44, sw = 7, fill = '#fff', ink = INK, factor } = {}) {
  const bw = measure(text, fs) + fs * 1.3
  const bh = fs * 1.9
  const pad = sw + 12
  const body =
    cutout([{ shapes: `<rect x="${pad}" y="${pad}" width="${f1(bw)}" height="${f1(bh)}" rx="${f1(bh / 2)}"/>`, fill }], {
      sw,
      white: 10,
    }) + label(text, pad + bw / 2, pad + bh / 2 + 1, fs, { fill: ink })
  return make(id, bw + pad * 2, bh + pad * 2, body, { factor })
}

export const TEXT_STYLES = [
  { id: 'white', name: '흰색', fill: '#ffffff', ink: INK },
  { id: 'black', name: '검정', fill: INK, ink: '#ffffff' },
  { id: 'lime', name: '라임', fill: '#c8ff1f', ink: INK },
  { id: 'pink', name: '핑크', fill: '#ff4fa3', ink: '#ffffff' },
  { id: 'sky', name: '하늘', fill: '#8ad8ff', ink: INK },
]

export function makeTextSticker(text, styleId = 'white') {
  const style = TEXT_STYLES.find((s) => s.id === styleId) ?? TEXT_STYLES[0]
  return pill(`custom-${styleId}-${text}`, text, { fill: style.fill, ink: style.ink })
}

// ───────── 이모지 ─────────
function emoji(ch) {
  const body = `<text x="70" y="74" font-family="${EMOJI_FONT}" font-size="104" text-anchor="middle" dominant-baseline="central">${ch}</text>`
  return make(`emoji-${ch}`, 140, 140, body)
}

// ───────── 데코 ─────────
const HEART = ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...']
const STAR = [
  '....X....',
  '...XXX...',
  '...XXX...',
  'XXXXXXXXX',
  '.XXXXXXX.',
  '..XXXXX..',
  '.XXX.XXX.',
  '.XX...XX.',
  'X.......X',
]

function pixelArt(pattern, ox, oy, cell, color, { outline = true } = {}) {
  const rows = pattern.length
  const cols = pattern[0].length
  const on = (r, c) => r >= 0 && c >= 0 && r < rows && c < cols && pattern[r][c] === 'X'
  let out = ''
  for (let r = -1; r <= rows; r++) {
    for (let c = -1; c <= cols; c++) {
      const x = ox + c * cell
      const y = oy + r * cell
      if (on(r, c)) {
        const shine = pattern === HEART && r === 1 && c === 1
        out += `<rect x="${x}" y="${y}" width="${cell + 0.5}" height="${cell + 0.5}" fill="${shine ? '#fff' : color}"/>`
      } else if (outline && (on(r - 1, c) || on(r + 1, c) || on(r, c - 1) || on(r, c + 1))) {
        out += `<rect x="${x}" y="${y}" width="${cell + 0.5}" height="${cell + 0.5}" fill="${INK}"/>`
      }
    }
  }
  return out
}

function pixel(id, pattern, color) {
  const cell = 16
  const pad = 10
  const w = (pattern[0].length + 2) * cell + pad * 2
  const h = (pattern.length + 2) * cell + pad * 2
  return make(id, w, h, pixelArt(pattern, pad + cell, pad + cell, cell, color), { factor: 0.8 })
}

function sparklePath(cx, cy, r) {
  return `M${cx} ${cy - r} Q${cx} ${cy} ${cx + r} ${cy} Q${cx} ${cy} ${cx} ${cy + r} Q${cx} ${cy} ${cx - r} ${cy} Q${cx} ${cy} ${cx} ${cy - r} Z`
}

function sparkles(id, fill, defs) {
  const shapes = `<path d="${sparklePath(74, 88, 62)}"/><path d="${sparklePath(136, 38, 24)}"/><path d="${sparklePath(132, 136, 14)}"/>`
  const body =
    cutout([{ shapes, fill }], { sw: 3, white: 0 }) +
    `<circle cx="28" cy="30" r="6" fill="none" stroke="${INK}" stroke-width="3"/><circle cx="160" cy="92" r="4" fill="none" stroke="${INK}" stroke-width="3"/>`
  return make(id, 172, 168, body, { defs, factor: 1 })
}

function pearls() {
  let body = ''
  for (let i = 0; i < 9; i++) body += `<circle cx="${22 + i * 38}" cy="26" r="16" fill="url(#pearl)" stroke="#b7aee6" stroke-width="2"/>`
  const defs = `<radialGradient id="pearl" cx="0.35" cy="0.35" r="0.75"><stop offset="0" stop-color="#ffffff"/><stop offset="0.6" stop-color="#ece6ff"/><stop offset="1" stop-color="#cfc4f5"/></radialGradient>`
  return make('deco-pearls', 348, 52, body, { defs })
}

// ───────── 아이콘 ─────────
const face = (cx, cy, s = 1) =>
  `<circle cx="${cx - 16 * s}" cy="${cy}" r="${6 * s}" fill="${INK}"/><circle cx="${cx + 16 * s}" cy="${cy}" r="${6 * s}" fill="${INK}"/><path d="M${cx - 16 * s} ${cy + 14 * s} Q${cx} ${cy + 30 * s} ${cx + 16 * s} ${cy + 14 * s}" fill="none" stroke="${INK}" stroke-width="${6 * s}" stroke-linecap="round"/>`

function icon(id, w, h, body, factor = 1.15) {
  return make(`icon-${id}`, w, h, body, { factor })
}

function icons() {
  const heartD = 'M90 160 C40 120 14 92 14 60 C14 34 34 16 58 16 C72 16 84 24 90 36 C96 24 108 16 122 16 C146 16 166 34 166 60 C166 92 140 120 90 160 Z'
  const petals = Array.from({ length: 6 }, (_, i) => {
    const a = (i * Math.PI) / 3
    return `<circle cx="${f1(90 + 46 * Math.cos(a))}" cy="${f1(90 + 46 * Math.sin(a))}" r="38"/>`
  }).join('')
  const square = (x, y, inner = '', fill = '#fff') =>
    `<rect x="${x}" y="${y}" width="72" height="72" rx="6" fill="${fill}" stroke="${INK}" stroke-width="5"/>${inner}`
  const hatch = (x, y) => {
    let l = ''
    for (let i = -72; i < 72; i += 12) l += `<line x1="${x + i}" y1="${y + 72}" x2="${x + i + 72}" y2="${y}"/>`
    return `<g clip-path="url(#hc${x}${y})" stroke="${INK}" stroke-width="4">${l}</g>`
  }
  const hatchClip = (x, y) => `<clipPath id="hc${x}${y}"><rect x="${x}" y="${y}" width="72" height="72" rx="6"/></clipPath>`
  const dizzy = (x, y) =>
    `<g stroke="${INK}" stroke-width="4" stroke-linecap="round"><path d="M${x + 16} ${y + 22} l10 10 M${x + 26} ${y + 22} l-10 10 M${x + 46} ${y + 22} l10 10 M${x + 56} ${y + 22} l-10 10"/></g><circle cx="${x + 36}" cy="${y + 50}" r="7" fill="none" stroke="${INK}" stroke-width="4"/>`
  const smile = (x, y) => face(x + 36, y + 30, 0.6)
  const peace = (x, y) =>
    `<text x="${x + 36}" y="${y + 40}" font-family="${EMOJI_FONT}" font-size="44" text-anchor="middle" dominant-baseline="central">✌️</text>`

  return [
    icon(
      'crown',
      200,
      150,
      `<g transform="rotate(-10 100 80)">${cutout([{ shapes: '<polygon points="26,124 18,40 66,84 100,24 134,84 182,40 174,124"/>', fill: '#fff' }])}<circle cx="100" cy="24" r="9" fill="${INK}"/></g>`,
    ),
    icon(
      'toast',
      180,
      176,
      cutout([
        {
          shapes:
            '<path d="M24 66 C14 30 52 14 90 14 C128 14 166 30 156 66 C152 78 146 82 146 90 L146 148 Q146 160 134 160 L46 160 Q34 160 34 148 L34 90 C34 82 28 78 24 66 Z"/>',
          fill: '#fff',
        },
      ]) + face(90, 88),
    ),
    icon(
      'cat',
      200,
      160,
      cutout([
        {
          shapes:
            '<path d="M30 140 L30 84 Q30 62 48 56 L44 26 L72 48 Q100 42 128 48 L156 26 L152 56 Q170 62 170 84 L170 140 Q170 150 160 150 L40 150 Q30 150 30 140 Z"/>',
          fill: '#fff',
        },
      ]) +
        `<g stroke="${INK}" stroke-width="5" stroke-linecap="round" fill="none"><path d="M70 92 q8 -8 16 0 M114 92 q8 -8 16 0"/><path d="M92 108 q8 8 16 0"/></g>`,
    ),
    icon('heart', 180, 176, cutout([{ shapes: `<path d="${heartD}"/>`, fill: '#fff' }])),
    icon('heart-pink', 180, 176, cutout([{ shapes: `<path d="${heartD}"/>`, fill: '#ff5fa2' }])),
    icon('flower', 180, 180, cutout([{ shapes: petals, fill: '#fff' }]) + `<circle cx="90" cy="90" r="30" fill="${INK}"/>`),
    icon(
      'flower-yellow',
      180,
      180,
      cutout([{ shapes: petals, fill: '#fff6a8' }]) + `<circle cx="90" cy="90" r="30" fill="#ffb21f" stroke="${INK}" stroke-width="5"/>`,
    ),
    icon(
      'film',
      300,
      130,
      `<rect x="10" y="10" width="280" height="110" rx="6" fill="${INK}"/>` +
        Array.from({ length: 11 }, (_, i) => `<rect x="${22 + i * 25}" y="18" width="13" height="11" rx="2" fill="#fff"/><rect x="${22 + i * 25}" y="101" width="13" height="11" rx="2" fill="#fff"/>`).join('') +
        [0, 1, 2].map((i) => `<rect x="${24 + i * 88}" y="38" width="76" height="54" rx="4" fill="#fff"/>`).join(''),
    ),
    icon(
      'stamp',
      200,
      200,
      `<circle cx="100" cy="100" r="92" fill="#fff" stroke="${INK}" stroke-width="5"/><circle cx="100" cy="100" r="80" fill="none" stroke="${INK}" stroke-width="2"/>` +
        label('무보정', 100, 82, 34) +
        label('원본', 100, 120, 34) +
        label('NO RETOUCH', 100, 152, 12, { weight: 700 }),
    ),
    icon('star', 190, 182, cutout([{ shapes: `<polygon points="${starPoints(95, 98, 82, 36, 5)}"/>`, fill: '#fff' }])),
    icon('star-yellow', 190, 182, cutout([{ shapes: `<polygon points="${starPoints(95, 98, 82, 36, 5)}"/>`, fill: '#ffe04a' }])),
    icon('bolt', 130, 190, cutout([{ shapes: '<polygon points="78,16 22,106 64,106 46,176 110,74 68,74 92,16"/>', fill: '#fff' }])),
    icon(
      'timer',
      180,
      196,
      cutout([{ shapes: '<circle cx="90" cy="110" r="70"/><rect x="72" y="16" width="36" height="22" rx="4"/>', fill: '#fff' }]) +
        `<g stroke="${INK}" stroke-width="8" stroke-linecap="round"><line x1="90" y1="110" x2="90" y2="70"/><line x1="90" y1="38" x2="90" y2="44"/><line x1="146" y1="58" x2="156" y2="48"/></g>`,
    ),
    icon(
      'faces',
      176,
      176,
      `<defs>${hatchClip(12, 12)}</defs>` +
        square(12, 12) +
        hatch(12, 12) +
        square(92, 12, smile(92, 12)) +
        square(12, 92, dizzy(12, 92)) +
        square(92, 92, peace(92, 92)),
    ),
    icon(
      'faces-row',
      340,
      100,
      `<defs>${hatchClip(12, 14)}</defs>` +
        square(12, 14) +
        hatch(12, 14) +
        square(92, 14, smile(92, 14)) +
        square(172, 14, peace(172, 14)) +
        square(252, 14, dizzy(252, 14)),
    ),
    icon(
      'camera',
      210,
      170,
      cutout([
        {
          shapes: '<rect x="20" y="44" width="170" height="110" rx="20"/><rect x="66" y="22" width="78" height="34" rx="8"/>',
          fill: '#fff',
        },
      ]) +
        `<circle cx="105" cy="100" r="34" fill="#fff" stroke="${INK}" stroke-width="7"/><circle cx="105" cy="100" r="16" fill="${INK}"/><circle cx="160" cy="70" r="7" fill="${INK}"/>`,
    ),
    icon(
      'clover',
      180,
      190,
      cutout([
        {
          shapes:
            '<circle cx="64" cy="64" r="34"/><circle cx="116" cy="64" r="34"/><circle cx="64" cy="116" r="34"/><circle cx="116" cy="116" r="34"/><path d="M86 120 Q92 160 118 180 L126 172 Q104 156 100 120 Z"/>',
          fill: '#5fd068',
        },
      ]),
    ),
    icon(
      'bow',
      220,
      150,
      cutout([
        {
          shapes:
            '<path d="M110 70 L30 24 Q14 18 16 36 L20 104 Q22 120 38 112 Z"/><path d="M110 70 L190 24 Q206 18 204 36 L200 104 Q198 120 182 112 Z"/><path d="M98 76 L70 138 L92 132 L104 146 Z"/><path d="M122 76 L150 138 L128 132 L116 146 Z"/>',
          fill: '#ff8cc0',
        },
        { shapes: '<rect x="90" y="50" width="40" height="42" rx="12"/>', fill: '#ff8cc0' },
      ]),
    ),
    icon(
      'sun',
      200,
      200,
      cutout([{ shapes: `<polygon points="${starPoints(100, 100, 92, 66, 12)}"/>`, fill: '#ffd43b' }]) +
        `<circle cx="100" cy="100" r="52" fill="#fff3a8" stroke="${INK}" stroke-width="6"/>` +
        face(100, 96, 0.9),
    ),
    icon(
      'cloud',
      220,
      140,
      cutout([
        {
          shapes: '<circle cx="70" cy="80" r="40"/><circle cx="116" cy="62" r="46"/><circle cx="160" cy="86" r="34"/><rect x="40" y="80" width="150" height="40" rx="20"/>',
          fill: '#fff',
        },
      ]),
    ),
  ]
}

let catalog
export function getStickerCatalog() {
  if (catalog) return catalog
  const now = new Date()
  const days = ['일', '월', '화', '수', '목', '금', '토']
  const dateText = todayLabel(now)

  const bubbleList = [
    bubble('bubble-1', '오히려 좋아', '#8ad8ff'),
    bubble('bubble-2', '완전 내 스타일', '#c8ff1f'),
    bubble('bubble-3', '얼굴 천재', '#ff4fa3', '#fff'),
    thought('bubble-4', '그냥 좋다'),
    bubble('bubble-5', '무슨 일이야 🌼', '#ff4fa3', '#fff'),
    bubble('bubble-6', '못 참지', '#8ad8ff'),
    bubble('bubble-7', '반박 시 니 말이 맞음', '#c8ff1f'),
    thought('bubble-8', '나 행복함'),
    bubble('bubble-9', '찰칵!', '#ffffff'),
    bubble('bubble-10', '사랑해 💕', '#ffd2e6'),
    bubble('bubble-11', '우리 찐친', '#ffe14a'),
    thought('bubble-12', '배고프다…'),
  ]

  const badgeList = [
    burst('badge-lucky', '럭키비키', '#c8ff1f'),
    burst('badge-tension', '텐션\n최고', '#ff4fa3', '#fff'),
    roundBadge('badge-clover', '♣행운\n가득♣', '#46e0c4'),
    burst('badge-best', '인생샷\n확보', 'url(#holo1)', INK, { defs: HOLO('holo1') }),
    burst('badge-pretty', '존잘존예', '#ffe14a', INK, { spikes: 26 }),
    roundBadge('badge-smile', '오늘도\n웃자', '#ffe14a'),
    ribbon('badge-ribbon-1', '오늘 여기 있었음', '#8ad8ff'),
    ribbon('badge-ribbon-2', '오래 보자 우리', '#ff8a3d'),
    ribbon('badge-ribbon-3', '이것도 낭만이야', '#c9a2ff'),
    ribbon('badge-ribbon-4', '오늘부터 1일', '#5ab8ff'),
    windowBox('badge-win-1', '저장 필수', '#3d6bff', 'heart'),
    windowBox('badge-win-2', '그런 날이었다…', '#b48cff'),
    windowBox('badge-win-3', '오늘의 무드: 맑음', '#ff4fa3'),
    windowBox('badge-win-4', '로딩 중… 행복 100%', '#3d6bff', 'progress'),
  ]

  const textList = [
    pill('text-date', dateText),
    windowBox('text-date-win', dateText, '#3d6bff'),
    pill('text-1', '추억 적립 완료'),
    pill('text-2', '오늘의 주인공'),
    pill('text-3', '포즈 고갈', { fs: 54, sw: 9 }),
    pill('text-4', '자체발광', { fs: 54, sw: 9 }),
    pill('text-date-kr', `${now.getMonth() + 1}월 ${now.getDate()}일 (${days[now.getDay()]})`),
    pill('text-5', '지금 이 순간'),
    pill('text-6', '찐친 인증', { fs: 54, sw: 9 }),
    pill('text-7', '웃참 실패', { fs: 54, sw: 9 }),
    pill('text-8', '이 조합 미쳤다'),
    pill('text-9', '영원한 내 편', { fs: 54, sw: 9 }),
    pill('text-10', 'BEST FRIENDS', { fill: INK, ink: '#fff' }),
    pill('text-11', 'HAPPY DAY', { fill: '#c8ff1f' }),
    pill('text-12', 'LOVE ♥', { fill: '#ff4fa3', ink: '#fff' }),
  ]

  const emojiList = [
    '😀', '😆', '🥰', '😍', '😎', '🤪', '😜', '🥳', '😭', '🤭', '🫶', '✌️', '👑', '💖', '💕', '✨',
    '🌸', '🌼', '🍀', '🌈', '⭐', '🎀', '🎉', '🐰', '🐻', '🐶', '🐱', '🍓', '🍰', '🔥', '💯', '📸',
  ].map(emoji)

  const decoList = [
    sparkles('deco-sparkle', '#ffffff'),
    sparkles('deco-sparkle-holo', 'url(#holo2)', HOLO('holo2')),
    pixel('deco-heart-pink', HEART, '#ff3fa0'),
    pixel('deco-heart-blue', HEART, '#2f5bff'),
    pixel('deco-star-pink', STAR, '#ff3fa0'),
    sparkles('deco-sparkle-yellow', '#ffe14a'),
    pearls(),
    pixel('deco-heart-lime', HEART, '#b6f51f'),
    pixel('deco-star-yellow', STAR, '#ffe14a'),
    pixel('deco-star-blue', STAR, '#2f5bff'),
  ]

  const iconList = icons()
  const items = {
    bubble: bubbleList,
    badge: badgeList,
    text: textList,
    emoji: emojiList,
    deco: decoList,
    icon: iconList,
  }
  const byId = new Map(Object.values(items).flat().map((s) => [s.id, s]))
  items.pick = [
    'badge-lucky', 'bubble-1', 'icon-toast', 'text-date', 'icon-faces-row', 'deco-sparkle-holo', 'badge-ribbon-1',
    'icon-flower', 'bubble-3', 'badge-best', 'deco-heart-pink', 'icon-crown', 'text-7', 'badge-win-4',
  ]
    .map((id) => byId.get(id))
    .filter(Boolean)
  catalog = { items, byId }
  return catalog
}

const RECENT_KEY = 'booth.recentStickers'

export function getRecentStickers() {
  try {
    const ids = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]')
    const { byId } = getStickerCatalog()
    return ids.map((id) => byId.get(id)).filter(Boolean)
  } catch {
    return []
  }
}

export function pushRecentSticker(id) {
  try {
    const ids = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]').filter((x) => x !== id)
    localStorage.setItem(RECENT_KEY, JSON.stringify([id, ...ids].slice(0, 24)))
  } catch {
    // 저장소를 못 쓰는 환경에서는 최근 목록 없이 동작
  }
}
