import { handleErrors, json, parseId } from './_lib/booth.js'
import { listPaths, remove } from './_lib/storage.js'

// 보관 기간(PHOTO_RETENTION_DAYS, 기본 7일)이 지난 사진·영상을 매일 삭제 (vercel.json의 crons)
export function GET(request) {
  return handleErrors(async () => {
    const secret = process.env.CRON_SECRET
    if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) return json({ error: 'unauthorized' }, 401)

    const now = Date.now()
    const paths = await listPaths('booth/')
    const expired = paths.filter((p) => {
      const info = parseId(p.split('/')[1])
      return info && now > info.expiresAt
    })
    await remove(expired)
    return json({ checked: paths.length, deleted: expired.length })
  })
}
