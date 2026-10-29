import { parseId, store } from '../lib/booth.mjs'

// 보관 기간(PHOTO_RETENTION_DAYS, 기본 7일)이 지난 사진·영상을 매일 삭제
export default async () => {
  const photos = store()
  const { blobs } = await photos.list()
  const now = Date.now()
  let deleted = 0
  for (const { key } of blobs) {
    const info = parseId(key.split('/')[0])
    if (info && now > info.expiresAt) {
      await photos.delete(key)
      deleted++
    }
  }
  console.log(`cleanup: ${deleted} expired blob(s) deleted`)
}

export const config = {
  schedule: '0 18 * * *', // 매일 03:00 KST = 18:00 UTC (한국은 서머타임 없음)
}
