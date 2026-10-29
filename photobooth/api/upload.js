import { blobPath, handleErrors, json, KINDS, newId, parseId, routeParams, sniff } from './_lib/booth.js'
import { save, stat } from './_lib/storage.js'

// 영상은 사진을 올린 직후에만 붙일 수 있음
const VIDEO_WINDOW_MS = 15 * 60 * 1000

// POST /api/upload            → 사진 저장, { id, expiresAt }
// POST /api/upload/:id/video  → 같은 id에 영상 추가
export function POST(request) {
  return handleErrors(async () => {
    const existingId = routeParams(request).id
    const kind = existingId ? 'video' : 'photo'
    const rule = KINDS[kind]

    if (Number(request.headers.get('content-length') || 0) > rule.maxBytes) return json({ error: 'too_large' }, 413)
    const bytes = new Uint8Array(await request.arrayBuffer())
    if (bytes.length === 0) return json({ error: 'empty' }, 400)
    if (bytes.length > rule.maxBytes) return json({ error: 'too_large' }, 413)

    const type = sniff(bytes)
    if (!rule.types.includes(type)) return json({ error: 'unsupported_type' }, 415)

    if (kind === 'photo') {
      const id = newId()
      await save(blobPath(id, 'photo'), bytes, type)
      return json({ id, expiresAt: parseId(id).expiresAt }, 201)
    }

    const info = parseId(existingId)
    if (!info) return json({ error: 'not_found' }, 404)
    if (Date.now() - info.createdAt > VIDEO_WINDOW_MS) return json({ error: 'too_late' }, 403)
    const [photo, video] = await Promise.all([stat(blobPath(existingId, 'photo')), stat(blobPath(existingId, 'video'))])
    if (!photo) return json({ error: 'not_found' }, 404)
    if (video) return json({ error: 'already_exists' }, 409)
    await save(blobPath(existingId, 'video'), bytes, type)
    return json({ id: existingId }, 201)
  })
}
