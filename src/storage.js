// 학생별 학습 기록 저장/조회 (localStorage)
//  기록 구조:
//    records = {
//      "<courseId>::<name>": {
//        "<unitId>": {
//          best: { mc, sa, mcTotal, saTotal, percent, stars, date },
//          attempts: [ { date, mc, sa, mcTotal, saTotal } ]  // 그날그날 기록
//        }
//      }
//    }

import { starsFor } from './config'

const KEY = 'grammarRecords_v1'

export function loadRecords() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

export function saveRecords(records) {
  localStorage.setItem(KEY, JSON.stringify(records))
}

export function userKey(courseId, name) {
  return `${courseId}::${name.trim()}`
}

export function todayStr() {
  const d = new Date()
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

// 한 유닛 세션 결과를 기록에 반영하고, 갱신된 records를 반환
export function recordAttempt(records, courseId, name, unitId, result) {
  const key = userKey(courseId, name)
  const { mc, sa, mcTotal, saTotal } = result
  const percent = Math.round(((mc + sa) / (mcTotal + saTotal)) * 100)
  const stars = starsFor(percent)
  const date = todayStr()

  const next = { ...records }
  const forUser = { ...(next[key] || {}) }
  const prev = forUser[unitId] || { best: null, attempts: [] }

  const attempt = { date, mc, sa, mcTotal, saTotal }
  const attempts = [...prev.attempts, attempt]

  const isBetter =
    !prev.best || mc + sa > prev.best.mc + prev.best.sa

  const best = isBetter
    ? { mc, sa, mcTotal, saTotal, percent, stars, date }
    : prev.best

  forUser[unitId] = { best, attempts }
  next[key] = forUser
  saveRecords(next)
  return { records: next, percent, stars, date }
}
