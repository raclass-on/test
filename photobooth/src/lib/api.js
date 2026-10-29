async function post(url, blob) {
  const res = await fetch(url, { method: 'POST', headers: { 'content-type': blob.type }, body: blob })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw Object.assign(new Error(data.error || `HTTP ${res.status}`), { status: res.status })
  return data
}

// → { id, expiresAt }
export const uploadPhoto = (blob) => post('/api/upload', blob)
export const uploadVideo = (id, blob) => post(`/api/upload/${encodeURIComponent(id)}/video`, blob)
// /s/<id> → share.html (vercel.json 리라이트)
export const shareUrl = (id) => `${location.origin}/s/${id}`
