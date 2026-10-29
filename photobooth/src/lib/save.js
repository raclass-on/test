export function stamp(date = new Date()) {
  const p = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}${p(date.getMonth() + 1)}${p(date.getDate())}-${p(date.getHours())}${p(date.getMinutes())}`
}

export function extensionFor(type) {
  if (type.includes('mp4')) return 'mp4'
  if (type.includes('webm')) return 'webm'
  if (type.includes('png')) return 'png'
  return 'jpg'
}

export function canShareFile(file) {
  return Boolean(navigator.canShare?.({ files: [file] }))
}

// 공유 시트 열기. 사용자가 닫으면 false
export async function shareFile(file, title) {
  try {
    await navigator.share({ files: [file], title })
    return true
  } catch (err) {
    if (err.name === 'AbortError') return false
    throw err
  }
}
