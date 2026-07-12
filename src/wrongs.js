// ============================================================================
//  오답노트 저장소 (학생 기기 localStorage)
//  키: raclass-wrongs:<courseId>:<name>  →  [{ unitId, type:'mc'|'sa', no, given, ts }]
//  · 문제를 틀리면 추가, 다시 풀어서 맞히면 제거 (같은 문제는 unitId+type+no로 식별)
// ============================================================================

const keyFor = (courseId, name) => `raclass-wrongs:${courseId}:${name}`

export function loadWrongs(courseId, name) {
  try {
    const arr = JSON.parse(localStorage.getItem(keyFor(courseId, name)) || '[]')
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

function save(courseId, name, arr) {
  try {
    localStorage.setItem(keyFor(courseId, name), JSON.stringify(arr))
  } catch { /* ignore */ }
}

const sameRef = (a, b) => a.unitId === b.unitId && a.type === b.type && a.no === b.no

export function addWrong(courseId, name, item) {
  const arr = loadWrongs(courseId, name)
  const idx = arr.findIndex((x) => sameRef(x, item))
  const next = { unitId: item.unitId, type: item.type, no: item.no, given: item.given, ts: Date.now() }
  if (idx >= 0) arr[idx] = next
  else arr.push(next)
  save(courseId, name, arr)
}

export function removeWrong(courseId, name, item) {
  const arr = loadWrongs(courseId, name).filter((x) => !sameRef(x, item))
  save(courseId, name, arr)
}

export function clearWrongs(courseId, name) {
  save(courseId, name, [])
}

// 서버에서 받은 오답과 로컬 캐시를 합쳐(union) 저장한다.
// 다른 기기(폰↔태블릿)에서 쌓인 오답이 로그인/동기화 시 이 기기에도 반영됨.
export function mergeServer(courseId, name, serverArr) {
  if (!Array.isArray(serverArr)) return loadWrongs(courseId, name)
  const local = loadWrongs(courseId, name)
  const merged = [...serverArr]
  for (const l of local) {
    if (!merged.some((s) => sameRef(s, l))) merged.push(l)
  }
  save(courseId, name, merged)
  return merged
}
