import { KINDS, json, newId, parseId, sniff, store } from '../lib/booth.mjs'

// 영상은 사진을 올린 직후에만 붙일 수 있음
const VIDEO_WINDOW_MS = 15 * 60 * 1000

export default async (req, context) => {
  const existingId = context.params?.id
  const kind = existingId ? 'video' : 'photo'
  const rule = KINDS[kind]

  // 본문은 base64 텍스트로 받음 (바이너리 본문은 로컬 개발 서버에서 깨짐)
  const maxLength = Math.ceil(rule.maxBytes / 3) * 4
  const declared = Number(req.headers.get('content-length') || 0)
  if (declared > maxLength) return json({ error: 'too_large' }, 413)

  const text = await req.text()
  if (text.length > maxLength) return json({ error: 'too_large' }, 413)
  const bytes = new Uint8Array(Buffer.from(text, 'base64'))
  if (bytes.length === 0) return json({ error: 'empty' }, 400)
  if (bytes.length > rule.maxBytes) return json({ error: 'too_large' }, 413)

  const type = sniff(bytes)
  if (!rule.types.includes(type)) return json({ error: 'unsupported_type' }, 415)

  const photos = store()
  const blob = new Blob([bytes], { type })

  if (kind === 'photo') {
    const id = newId()
    await photos.set(`${id}/photo`, blob, { metadata: { type } })
    return json({ id, expiresAt: parseId(id).expiresAt }, 201)
  }

  const info = parseId(existingId)
  if (!info) return json({ error: 'not_found' }, 404)
  if (Date.now() - info.createdAt > VIDEO_WINDOW_MS) return json({ error: 'too_late' }, 403)
  if (!(await photos.getMetadata(`${existingId}/photo`))) return json({ error: 'not_found' }, 404)

  const { modified } = await photos.set(`${existingId}/video`, blob, { metadata: { type }, onlyIfNew: true })
  if (!modified) return json({ error: 'already_exists' }, 409)
  return json({ id: existingId }, 201)
}

export const config = {
  path: ['/api/upload', '/api/upload/:id/video'],
  method: 'POST',
  rateLimit: { windowLimit: 40, windowSize: 60, aggregateBy: ['ip', 'domain'] },
}
