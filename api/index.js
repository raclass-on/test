import crypto from 'node:crypto'
import { Redis } from '@upstash/redis'

// ── 설정(환경변수) ──────────────────────────────────────────────
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin1234'
const AUTH_SECRET = process.env.AUTH_SECRET || 'dev-secret-change-me'

// ── 저장소 (Upstash Redis, REST) ────────────────────────────────
// Vercel의 Upstash 통합이 넣어주는 환경변수를 사용. (이름이 환경마다 달라 폴백 처리)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
})

const sKey = (course, name) => `student:${course}:${encodeURIComponent(name)}`
const scKey = (course, name) => `scores:${course}:${encodeURIComponent(name)}`

async function listKeys(prefix) {
  const keys = []
  let cursor = '0'
  do {
    const [next, batch] = await redis.scan(cursor, { match: `${prefix}*`, count: 1000 })
    cursor = String(next)
    if (batch && batch.length) keys.push(...batch)
  } while (cursor !== '0')
  return keys
}

// ── 유틸 ────────────────────────────────────────────────────────
function hmac(data) {
  return crypto.createHmac('sha256', AUTH_SECRET).update(data).digest('hex')
}
function hashPw(pw, salt) {
  return crypto.createHash('sha256').update(`${salt}:${pw}`).digest('hex')
}
function makeToken(course, name) {
  const body = `${course}|${name}`
  return Buffer.from(`${body}|${hmac(body)}`).toString('base64url')
}
function verifyToken(t) {
  try {
    const [course, name, sig] = Buffer.from(t, 'base64url').toString('utf8').split('|')
    if (course && name && hmac(`${course}|${name}`) === sig) return { course, name }
  } catch {
    /* ignore */
  }
  return null
}
const adminToken = () => hmac('ADMIN-SESSION')
const isAdmin = (t) => typeof t === 'string' && t === adminToken()

const STAR_RULES = [
  { min: 90, stars: 5 },
  { min: 75, stars: 4 },
  { min: 60, stars: 3 },
  { min: 40, stars: 2 },
  { min: 0, stars: 1 },
]
const starsFor = (p) => (STAR_RULES.find((r) => p >= r.min) || { stars: 1 }).stars

function todayStr() {
  const d = new Date()
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

// ── 메인 핸들러 (Vercel Serverless, Node) ───────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  if (!body || typeof body !== 'object') body = {}

  const action = body.action

  try {
    switch (action) {
      // ── 학생: 가입 신청 ──────────────────────────────
      case 'signup': {
        const { course, name, password } = body
        if (!course || !name?.trim() || !password) return res.status(400).json({ error: '입력값이 부족해요.' })
        const key = sKey(course, name.trim())
        const existing = await redis.get(key)
        if (existing) return res.status(409).json({ error: '이미 신청한 이름이에요. 로그인하거나 다른 이름을 쓰세요.' })
        const salt = crypto.randomBytes(8).toString('hex')
        await redis.set(key, {
          course,
          name: name.trim(),
          salt,
          hash: hashPw(password, salt),
          status: 'pending',
          createdAt: new Date().toISOString(),
        })
        return res.status(200).json({ ok: true, status: 'pending' })
      }

      // ── 학생: 로그인 ─────────────────────────────────
      case 'login': {
        const { course, name, password } = body
        if (!course || !name?.trim() || !password) return res.status(400).json({ error: '입력값이 부족해요.' })
        const rec = await redis.get(sKey(course, name.trim()))
        if (!rec || rec.hash !== hashPw(password, rec.salt))
          return res.status(401).json({ error: '이름 또는 비밀번호가 올바르지 않아요.' })
        if (rec.status !== 'approved')
          return res.status(200).json({ ok: false, status: rec.status }) // pending / rejected
        const scores = (await redis.get(scKey(course, name.trim()))) || {}
        return res.status(200).json({
          ok: true,
          status: 'approved',
          token: makeToken(course, rec.name),
          name: rec.name,
          course,
          scores,
        })
      }

      // ── 학생: 내 점수 조회 ───────────────────────────
      case 'my-scores': {
        const auth = verifyToken(body.token)
        if (!auth) return res.status(401).json({ error: 'auth' })
        const scores = (await redis.get(scKey(auth.course, auth.name))) || {}
        return res.status(200).json({ ok: true, scores })
      }

      // ── 학생: 점수 기록 ──────────────────────────────
      case 'score': {
        const auth = verifyToken(body.token)
        if (!auth) return res.status(401).json({ error: 'auth' })
        const { unitId, mc, sa, mcTotal, saTotal, partial } = body
        if (!unitId || [mc, sa, mcTotal, saTotal].some((n) => typeof n !== 'number') || mcTotal + saTotal <= 0)
          return res.status(400).json({ error: 'bad score' })
        const key = scKey(auth.course, auth.name)
        const scores = (await redis.get(key)) || {}
        const prev = scores[unitId] || { best: null, attempts: [] }
        const percent = Math.round(((mc + sa) / (mcTotal + saTotal)) * 100)
        const stars = starsFor(percent)
        const date = todayStr()
        const attempt = { date, mc, sa, mcTotal, saTotal, ...(partial ? { partial: true } : {}) }
        // 중도(미완료) 기록은 최고 기록·별점을 갱신하지 않고 이력만 남긴다.
        const isBetter = !partial && (!prev.best || mc + sa > prev.best.mc + prev.best.sa)
        scores[unitId] = {
          best: isBetter ? { mc, sa, mcTotal, saTotal, percent, stars, date } : prev.best,
          attempts: [...prev.attempts, attempt].slice(-50),
        }
        await redis.set(key, scores)
        return res.status(200).json({ ok: true, percent, stars, unit: scores[unitId] })
      }

      // ── 어드민: 로그인 ───────────────────────────────
      case 'admin-login': {
        if (body.password !== ADMIN_PASSWORD) return res.status(401).json({ error: '어드민 비밀번호가 틀렸어요.' })
        return res.status(200).json({ ok: true, adminToken: adminToken() })
      }

      // ── 어드민: 학생 목록(승인 관리) ────────────────
      case 'admin-list': {
        if (!isAdmin(body.adminToken)) return res.status(401).json({ error: 'auth' })
        const keys = await listKeys('student:')
        const students = []
        for (const k of keys) {
          const rec = await redis.get(k)
          if (rec) students.push({ course: rec.course, name: rec.name, status: rec.status, createdAt: rec.createdAt })
        }
        students.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        return res.status(200).json({ ok: true, students })
      }

      // ── 어드민: 승인/거절/삭제 ──────────────────────
      case 'admin-update': {
        if (!isAdmin(body.adminToken)) return res.status(401).json({ error: 'auth' })
        const { course, name, op } = body
        const key = sKey(course, name)
        if (op === 'delete') {
          await redis.del(key)
          await redis.del(scKey(course, name))
          return res.status(200).json({ ok: true })
        }
        const rec = await redis.get(key)
        if (!rec) return res.status(404).json({ error: 'not found' })
        rec.status = op === 'approve' ? 'approved' : 'rejected'
        await redis.set(key, rec)
        return res.status(200).json({ ok: true, status: rec.status })
      }

      // ── 어드민: 학생 비밀번호 재설정 ────────────────
      case 'admin-set-password': {
        if (!isAdmin(body.adminToken)) return res.status(401).json({ error: 'auth' })
        const { course, name, newPassword } = body
        if (!newPassword || String(newPassword).length < 1)
          return res.status(400).json({ error: '새 비밀번호를 입력하세요.' })
        const key = sKey(course, name)
        const rec = await redis.get(key)
        if (!rec) return res.status(404).json({ error: 'not found' })
        const salt = crypto.randomBytes(8).toString('hex')
        rec.salt = salt
        rec.hash = hashPw(newPassword, salt)
        await redis.set(key, rec)
        return res.status(200).json({ ok: true })
      }

      // ── 어드민: 전체 점수 조회 ──────────────────────
      case 'admin-scores': {
        if (!isAdmin(body.adminToken)) return res.status(401).json({ error: 'auth' })
        const keys = await listKeys('student:')
        const rows = []
        for (const k of keys) {
          const rec = await redis.get(k)
          if (!rec) continue
          const scores = (await redis.get(scKey(rec.course, rec.name))) || {}
          rows.push({ course: rec.course, name: rec.name, status: rec.status, scores })
        }
        rows.sort((a, b) => (a.course + a.name < b.course + b.name ? -1 : 1))
        return res.status(200).json({ ok: true, rows })
      }

      default:
        return res.status(400).json({ error: 'unknown action' })
    }
  } catch (e) {
    return res.status(500).json({ error: 'server', detail: String(e?.message || e) })
  }
}
