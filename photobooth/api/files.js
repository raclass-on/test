import { blobPath, handleErrors, json, KINDS, parseId, routeParams } from './_lib/booth.js'
import { read, remove, stat } from './_lib/storage.js'

// GET /api/share/:id                 → 저장 페이지용 정보
// GET /api/file/:id/:kind[/download] → 사진·영상 파일 (kind: photo | video)
export function GET(request) {
  return handleErrors(async () => {
    const { id, kind, download } = routeParams(request)
    const info = parseId(id)
    if (!info) return json({ error: 'not_found' }, 404)

    if (Date.now() > info.expiresAt) {
      await remove([blobPath(id, 'photo'), blobPath(id, 'video')])
      return json({ error: 'expired' }, 410)
    }

    if (!kind) {
      const [photo, video] = await Promise.all([stat(blobPath(id, 'photo')), stat(blobPath(id, 'video'))])
      if (!photo) return json({ error: 'not_found' }, 404)
      return json({
        id,
        createdAt: info.createdAt,
        expiresAt: info.expiresAt,
        photo: { type: photo.contentType },
        video: video ? { type: video.contentType } : null,
      })
    }

    if (!KINDS[kind]) return json({ error: 'not_found' }, 404)
    // iOS 사파리는 영상 재생에 Range 요청을 사용함
    const file = await read(blobPath(id, kind), request.headers.get('range'))
    if (!file) return json({ error: 'not_found' }, 404)

    const headers = {
      ...file.headers,
      'accept-ranges': 'bytes',
      'cache-control': 'private, max-age=3600',
      'x-content-type-options': 'nosniff',
    }
    if (download) {
      const date = new Date(info.createdAt + 9 * 60 * 60 * 1000).toISOString().slice(0, 10).replaceAll('-', '')
      const ext = KINDS[kind].ext[file.headers['content-type']] ?? 'bin'
      headers['content-disposition'] = `attachment; filename="fourcut-${date}-${id.slice(-4)}.${ext}"`
    }
    return new Response(file.body, { status: file.status, headers })
  })
}
