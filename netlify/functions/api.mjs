import { getStore } from '@netlify/blobs'
import crypto from 'node:crypto'

// ── 설정(환경변수) ──────────────────────────────────────────────
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin1234'
const AUTH_SECRET = process.env.AUTH_SECRET || 'dev-secret-change-me'

// v2 Netlify Function: /api 로 접근
export const config = { path: '/api' }

// ── 저장소 ──────────────────────────────────────────────────────
function store() {
  return getStore({ name: 'grammar', consistency: 'strong' })
}
const sKey = (course, name) => `student:${course}:${encodeURIComponent(name)}`
const scKey = (course, name) => `scores:${course}:${encodeURIComponent(name)}`

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

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

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

// ── 메인 핸들러 ─────────────────────────────────────────────────
export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'method' }, 405)

  let body
  try {
    body = await req.json()
  } catch {
    return json({ error: 'bad json' }, 400)
  }

  const db = store()
  const action = body.action

  try {
    switch (action) {
      // ── 학생: 가입 신청 ──────────────────────────────
      case 'signup': {
        const { course, name, password } = body
        if (!course || !name?.trim() || !password) return json({ error: '입력값이 부족해요.' }, 400)
        const key = sKey(course, name.trim())
        const existing = await db.get(key, { type: 'json' })
        if (existing) return json({ error: '이미 신청한 이름이에요. 로그인하거나 다른 이름을 쓰세요.' }, 409)
        const salt = crypto.randomBytes(8).toString('hex')
        await db.setJSON(key, {
          course,
          name: name.trim(),
          salt,
          hash: hashPw(password, salt),
          status: 'pending',
          createdAt: new Date().toISOString(),
        })
        return json({ ok: true, status: 'pending' })
      }

      // ── 학생: 로그인 ─────────────────────────────────
      case 'login': {
        const { course, name, password } = body
        if (!course || !name?.trim() || !password) return json({ error: '입력값이 부족해요.' }, 400)
        const rec = await db.get(sKey(course, name.trim()), { type: 'json' })
        if (!rec || rec.hash !== hashPw(password, rec.salt))
          return json({ error: '이름 또는 비밀번호가 올바르지 않아요.' }, 401)
        if (rec.status !== 'approved')
          return json({ ok: false, status: rec.status }) // pending / rejected
        const scores = (await db.get(scKey(course, name.trim()), { type: 'json' })) || {}
        return json({
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
        if (!auth) return json({ error: 'auth' }, 401)
        const scores = (await db.get(scKey(auth.course, auth.name), { type: 'json' })) || {}
        return json({ ok: true, scores })
      }

      // ── 학생: 점수 기록 ──────────────────────────────
      case 'score': {
        const auth = verifyToken(body.token)
        if (!auth) return json({ error: 'auth' }, 401)
        const { unitId, mc, sa, mcTotal, saTotal } = body
        if (!unitId || [mc, sa, mcTotal, saTotal].some((n) => typeof n !== 'number'))
          return json({ error: 'bad score' }, 400)
        const key = scKey(auth.course, auth.name)
        const scores = (await db.get(key, { type: 'json' })) || {}
        const prev = scores[unitId] || { best: null, attempts: [] }
        const percent = Math.round(((mc + sa) / (mcTotal + saTotal)) * 100)
        const stars = starsFor(percent)
        const date = todayStr()
        const attempt = { date, mc, sa, mcTotal, saTotal }
        const isBetter = !prev.best || mc + sa > prev.best.mc + prev.best.sa
        scores[unitId] = {
          best: isBetter ? { mc, sa, mcTotal, saTotal, percent, stars, date } : prev.best,
          attempts: [...prev.attempts, attempt].slice(-50),
        }
        await db.setJSON(key, scores)
        return json({ ok: true, percent, stars, unit: scores[unitId] })
      }

      // ── 어드민: 로그인 ───────────────────────────────
      case 'admin-login': {
        if (body.password !== ADMIN_PASSWORD) return json({ error: '어드민 비밀번호가 틀렸어요.' }, 401)
        return json({ ok: true, adminToken: adminToken() })
      }

      // ── 어드민: 학생 목록(승인 관리) ────────────────
      case 'admin-list': {
        if (!isAdmin(body.adminToken)) return json({ error: 'auth' }, 401)
        const { blobs } = await db.list({ prefix: 'student:' })
        const students = []
        for (const b of blobs) {
          const rec = await db.get(b.key, { type: 'json' })
          if (rec) students.push({ course: rec.course, name: rec.name, status: rec.status, createdAt: rec.createdAt })
        }
        students.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        return json({ ok: true, students })
      }

      // ── 어드민: 승인/거절/삭제 ──────────────────────
      case 'admin-update': {
        if (!isAdmin(body.adminToken)) return json({ error: 'auth' }, 401)
        const { course, name, op } = body
        const key = sKey(course, name)
        if (op === 'delete') {
          await db.delete(key)
          await db.delete(scKey(course, name))
          return json({ ok: true })
        }
        const rec = await db.get(key, { type: 'json' })
        if (!rec) return json({ error: 'not found' }, 404)
        rec.status = op === 'approve' ? 'approved' : 'rejected'
        await db.setJSON(key, rec)
        return json({ ok: true, status: rec.status })
      }

      // ── 어드민: 전체 점수 조회 ──────────────────────
      case 'admin-scores': {
        if (!isAdmin(body.adminToken)) return json({ error: 'auth' }, 401)
        const { blobs } = await db.list({ prefix: 'student:' })
        const rows = []
        for (const b of blobs) {
          const rec = await db.get(b.key, { type: 'json' })
          if (!rec) continue
          const scores = (await db.get(scKey(rec.course, rec.name), { type: 'json' })) || {}
          rows.push({ course: rec.course, name: rec.name, status: rec.status, scores })
        }
        rows.sort((a, b) => (a.course + a.name < b.course + b.name ? -1 : 1))
        return json({ ok: true, rows })
      }

      default:
        return json({ error: 'unknown action' }, 400)
    }
  } catch (e) {
    return json({ error: 'server', detail: String(e?.message || e) }, 500)
  }
}
