import { KINDS, json, parseId, store } from '../lib/booth.mjs'

export default async (req, context) => {
  const { id, kind } = context.params ?? {}
  const info = parseId(id)
  if (!info) return json({ error: 'not_found' }, 404)

  const photos = store()
  if (Date.now() > info.expiresAt) {
    await Promise.all([photos.delete(`${id}/photo`), photos.delete(`${id}/video`)])
    return json({ error: 'expired' }, 410)
  }

  // 공유 페이지용 정보
  if (!kind) {
    const [photo, video] = await Promise.all([photos.getMetadata(`${id}/photo`), photos.getMetadata(`${id}/video`)])
    if (!photo) return json({ error: 'not_found' }, 404)
    return json({
      id,
      createdAt: info.createdAt,
      expiresAt: info.expiresAt,
      photo: { type: photo.metadata.type },
      video: video ? { type: video.metadata.type } : null,
    })
  }

  if (!KINDS[kind]) return json({ error: 'not_found' }, 404)
  const entry = await photos.getWithMetadata(`${id}/${kind}`, { type: 'arrayBuffer' })
  if (!entry) return json({ error: 'not_found' }, 404)

  const type = entry.metadata.type
  const bytes = new Uint8Array(entry.data)
  const headers = {
    'content-type': type,
    'accept-ranges': 'bytes',
    'cache-control': 'private, max-age=3600',
    'x-content-type-options': 'nosniff',
  }
  if (new URL(req.url).searchParams.has('download')) {
    const date = new Date(info.createdAt + 9 * 60 * 60 * 1000).toISOString().slice(0, 10).replaceAll('-', '')
    headers['content-disposition'] = `attachment; filename="fourcut-${date}-${id.slice(-4)}.${KINDS[kind].ext[type]}"`
  }

  // iOS Safari는 영상 재생에 Range 요청을 사용함
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.get('range') ?? '')
  if (range && (range[1] || range[2])) {
    const size = bytes.length
    let start = range[1] ? Number(range[1]) : size - Number(range[2])
    let end = range[1] && range[2] ? Number(range[2]) : size - 1
    start = Math.max(0, start)
    end = Math.min(end, size - 1)
    if (start > end) {
      return new Response(null, { status: 416, headers: { ...headers, 'content-range': `bytes */${size}` } })
    }
    const part = bytes.subarray(start, end + 1)
    return new Response(req.method === 'HEAD' ? null : part, {
      status: 206,
      headers: { ...headers, 'content-range': `bytes ${start}-${end}/${size}`, 'content-length': String(part.length) },
    })
  }

  return new Response(req.method === 'HEAD' ? null : bytes, {
    headers: { ...headers, 'content-length': String(bytes.length) },
  })
}

export const config = {
  path: ['/api/share/:id', '/api/file/:id/:kind'],
  method: ['GET', 'HEAD'],
}
