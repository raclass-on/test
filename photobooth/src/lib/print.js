// 4×6 인치 인화지 기준. 스트립은 두 줄을 나란히 출력
export function printPhoto(blob, layout) {
  let root = document.getElementById('print-root')
  if (!root) {
    root = document.createElement('div')
    root.id = 'print-root'
    document.body.appendChild(root)
  }
  for (const img of root.querySelectorAll('img')) URL.revokeObjectURL(img.src)
  const url = URL.createObjectURL(blob)
  root.className = `print-${layout.id}`
  root.innerHTML = ''
  const copies = layout.id === 'strip' ? 2 : 1
  const imgs = Array.from({ length: copies }, () => {
    const img = document.createElement('img')
    img.src = url
    img.alt = ''
    root.appendChild(img)
    return img
  })
  return Promise.all(imgs.map((img) => img.decode().catch(() => {}))).then(() => window.print())
}
