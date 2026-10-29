import { getStore } from '@netlify/blobs'

const DAY = 24 * 60 * 60 * 1000
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ID_RE = /^([0-9a-z]{6,12})-[0-9A-Za-z]{12}$/

export const KINDS = {
  photo: { types: ['image/jpeg', 'image/png', 'image/webp'], maxBytes: 5 * 1024 * 1024, ext: { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' } },
  video: { types: ['video/mp4', 'video/webm'], maxBytes: 5 * 1024 * 1024, ext: { 'video/mp4': 'mp4', 'video/webm': 'webm' } },
}

export function store() {
  return getStore({ name: 'photobooth', consistency: 'strong' })
}

function env(key) {
  return globalThis.Netlify?.env?.get(key) ?? process.env[key]
}

export function retentionMs() {
  const days = Number(env('PHOTO_RETENTION_DAYS'))
  return (days > 0 ? days : 7) * DAY
}

// 시간(base36) + 추측 불가능한 난수 12자리
export function newId() {
  const bytes = crypto.getRandomValues(new Uint8Array(12))
  let rand = ''
  for (const b of bytes) rand += ALPHABET[b % ALPHABET.length]
  return `${Date.now().toString(36)}-${rand}`
}

export function parseId(id) {
  const m = ID_RE.exec(id ?? '')
  if (!m) return null
  const createdAt = parseInt(m[1], 36)
  return { createdAt, expiresAt: createdAt + retentionMs() }
}

// 클라이언트가 보낸 Content-Type 대신 실제 파일 내용으로 형식을 판별
export function sniff(b) {
  if (b.length < 12) return null
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'image/jpeg'
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return 'image/png'
  if (ascii(b, 0, 4) === 'RIFF' && ascii(b, 8, 12) === 'WEBP') return 'image/webp'
  if (b[0] === 0x1a && b[1] === 0x45 && b[2] === 0xdf && b[3] === 0xa3) return 'video/webm'
  if (ascii(b, 4, 8) === 'ftyp') return 'video/mp4'
  return null
}

function ascii(b, start, end) {
  return String.fromCharCode(...b.subarray(start, end))
}

export function json(data, status = 200, headers = {}) {
  return Response.json(data, { status, headers: { 'cache-control': 'no-store', ...headers } })
}
