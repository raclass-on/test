function toBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',')[1])
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(blob)
  })
}

async function post(url, blob) {
  const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'text/plain' }, body: await toBase64(blob) })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw Object.assign(new Error(data.error || `HTTP ${res.status}`), { status: res.status })
  return data
}

// → { id, expiresAt }
export const uploadPhoto = (blob) => post('/api/upload', blob)
export const uploadVideo = (id, blob) => post(`/api/upload/${encodeURIComponent(id)}/video`, blob)
// 배포 환경은 /s/<id> 짧은 주소 (netlify.toml 리다이렉트), 개발 서버는 share.html을 직접 사용
export const shareUrl = (id) =>
  import.meta.env.DEV ? `${location.origin}/share.html?id=${id}` : `${location.origin}/s/${id}`
