import crypto from 'node:crypto'
import { Redis } from '@upstash/redis'

// ── 설정(환경변수) ──────────────────────────────────────────────
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin1234'
const AUTH_SECRET = process.env.AUTH_SECRET || 'dev-secret-change-me'

// Upstash 통합이 자동 생성한 KV_* 값을 우선 사용(정확). 없으면 UPSTASH_* 별칭.
const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

// ── 저장소 (Upstash Redis, REST) — 필요할 때만 초기화(lazy) ─────
// 모듈 최상단에서 new Redis()를 하면 환경변수 누락 시 함수 전체가
// 크래시해서 admin-login까지 죽는다. 그래서 지연 초기화로 분리.
let _redis = null
function getRedis() {
  if (_redis) return _redis
  if (!REDIS_URL || !REDIS_TOKEN) {
    throw new Error('저장소(Redis) 환경변수가 설정되지 않았어요. UPSTASH_REDIS_REST_URL/TOKEN 또는 KV_REST_API_URL/TOKEN 을 확인하세요.')
  }
  _redis = new Redis({ url: REDIS_URL, token: REDIS_TOKEN })
  return _redis
}

const sKey = (course, name) => `student:${course}:${encodeURIComponent(name)}`
const scKey = (course, name) => `scores:${course}:${encodeURIComponent(name)}`

async function listKeys(prefix) {
  const db = getRedis()
  const keys = []
  let cursor = '0'
  do {
    const [next, batch] = await db.scan(cursor, { match: `${prefix}*`, count: 1000 })
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
  // 진단용: 브라우저로 /api 를 열면(GET) 상태를 보여준다. (비밀값은 노출 안 함)
  if (req.method === 'GET') {
    const env = {
      adminPassword: ADMIN_PASSWORD !== 'admin1234' ? '설정됨(custom)' : '미설정(기본 admin1234)',
      authSecret: AUTH_SECRET !== 'dev-secret-change-me' ? '설정됨(custom)' : '미설정(기본값)',
      redisUrl: REDIS_URL ? '있음' : '없음',
      redisToken: REDIS_TOKEN ? '있음' : '없음',
      redisSource: process.env.KV_REST_API_URL ? 'KV_REST_API_*' : (process.env.UPSTASH_REDIS_REST_URL ? 'UPSTASH_*' : 'none'),
    }
    let redisTest, scanTest
    try {
      const db = getRedis()
      await db.set('__healthcheck__', 'ok')
      redisTest = (await db.get('__healthcheck__')) === 'ok' ? 'OK (읽기/쓰기 정상)' : 'get 값 불일치'
    } catch (e) {
      redisTest = 'ERROR: ' + String(e?.message || e)
    }
    try {
      const db = getRedis()
      const [, keys] = await db.scan('0', { match: 'student:*', count: 10 })
      scanTest = `OK (학생 키 ${keys?.length ?? 0}개)`
    } catch (e) {
      scanTest = 'ERROR: ' + String(e?.message || e)
    }
    return res.status(200).json({
      ok: true,
      hint: '이 화면이 보이면 /api 함수는 살아있어요.',
      env,
      redisTest,
      scanTest,
    })
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  if (!body || typeof body !== 'object') body = {}

  const action = body.action

  try {
    switch (action) {
      // ── 어드민: 로그인 (Redis 불필요) ───────────────
      case 'admin-login': {
        // 앞뒤 공백은 무시해 비교(복붙 시 딸려오는 공백/개행 방어)
        if (String(body.password || '').trim() !== ADMIN_PASSWORD.trim())
          return res.status(401).json({ error: '어드민 비밀번호가 틀렸어요.' })
        return res.status(200).json({ ok: true, adminToken: adminToken() })
      }

      // ── 학생: 가입 신청 ──────────────────────────────
      case 'signup': {
        const db = getRedis()
        const { course, name, password } = body
        if (!course || !name?.trim() || !password) return res.status(400).json({ error: '입력값이 부족해요.' })
        const key = sKey(course, name.trim())
        const existing = await db.get(key)
        if (existing) return res.status(409).json({ error: '이미 신청한 이름이에요. 로그인하거나 다른 이름을 쓰세요.' })
        const salt = crypto.randomBytes(8).toString('hex')
        await db.set(key, {
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
        const db = getRedis()
        const { course, name, password } = body
        if (!course || !name?.trim() || !password) return res.status(400).json({ error: '입력값이 부족해요.' })
        const rec = await db.get(sKey(course, name.trim()))
        if (!rec || rec.hash !== hashPw(password, rec.salt))
          return res.status(401).json({ error: '이름 또는 비밀번호가 올바르지 않아요.' })
        if (rec.status !== 'approved')
          return res.status(200).json({ ok: false, status: rec.status }) // pending / rejected
        const scores = (await db.get(scKey(course, name.trim()))) || {}
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
        const db = getRedis()
        const auth = verifyToken(body.token)
        if (!auth) return res.status(401).json({ error: 'auth' })
        const scores = (await db.get(scKey(auth.course, auth.name))) || {}
        return res.status(200).json({ ok: true, scores })
      }

      // ── 학생: 점수 기록 ──────────────────────────────
      case 'score': {
        const db = getRedis()
        const auth = verifyToken(body.token)
        if (!auth) return res.status(401).json({ error: 'auth' })
        const { unitId, mc, sa, mcTotal, saTotal, partial } = body
        if (!unitId || [mc, sa, mcTotal, saTotal].some((n) => typeof n !== 'number') || mcTotal + saTotal <= 0)
          return res.status(400).json({ error: 'bad score' })
        const key = scKey(auth.course, auth.name)
        const scores = (await db.get(key)) || {}
        const prev = scores[unitId] || { best: null, attempts: [] }
        const percent = Math.round(((mc + sa) / (mcTotal + saTotal)) * 100)
        const stars = starsFor(percent)
        const date = todayStr()
        const attempt = { date, mc, sa, mcTotal, saTotal, ...(partial ? { partial: true } : {}) }
        const isBetter = !partial && (!prev.best || mc + sa > prev.best.mc + prev.best.sa)
        scores[unitId] = {
          best: isBetter ? { mc, sa, mcTotal, saTotal, percent, stars, date } : prev.best,
          attempts: [...prev.attempts, attempt].slice(-50),
        }
        await db.set(key, scores)
        return res.status(200).json({ ok: true, percent, stars, unit: scores[unitId] })
      }

      // ── 어드민: 학생 목록(승인 관리) ────────────────
      case 'admin-list': {
        if (!isAdmin(body.adminToken)) return res.status(401).json({ error: 'auth' })
        const db = getRedis()
        const keys = await listKeys('student:')
        const students = []
        for (const k of keys) {
          const rec = await db.get(k)
          if (rec) students.push({ course: rec.course, name: rec.name, status: rec.status, createdAt: rec.createdAt })
        }
        students.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        return res.status(200).json({ ok: true, students })
      }

      // ── 어드민: 승인/거절/삭제 ──────────────────────
      case 'admin-update': {
        if (!isAdmin(body.adminToken)) return res.status(401).json({ error: 'auth' })
        const db = getRedis()
        const { course, name, op } = body
        const key = sKey(course, name)
        if (op === 'delete') {
          await db.del(key)
          await db.del(scKey(course, name))
          return res.status(200).json({ ok: true })
        }
        const rec = await db.get(key)
        if (!rec) return res.status(404).json({ error: 'not found' })
        rec.status = op === 'approve' ? 'approved' : 'rejected'
        await db.set(key, rec)
        return res.status(200).json({ ok: true, status: rec.status })
      }

      // ── 어드민: 학생 비밀번호 재설정 ────────────────
      case 'admin-set-password': {
        if (!isAdmin(body.adminToken)) return res.status(401).json({ error: 'auth' })
        const db = getRedis()
        const { course, name, newPassword } = body
        if (!newPassword || String(newPassword).length < 1)
          return res.status(400).json({ error: '새 비밀번호를 입력하세요.' })
        const key = sKey(course, name)
        const rec = await db.get(key)
        if (!rec) return res.status(404).json({ error: 'not found' })
        const salt = crypto.randomBytes(8).toString('hex')
        rec.salt = salt
        rec.hash = hashPw(newPassword, salt)
        await db.set(key, rec)
        return res.status(200).json({ ok: true })
      }

      // ── 어드민: 전체 점수 조회 ──────────────────────
      case 'admin-scores': {
        if (!isAdmin(body.adminToken)) return res.status(401).json({ error: 'auth' })
        const db = getRedis()
        const keys = await listKeys('student:')
        const rows = []
        for (const k of keys) {
          const rec = await db.get(k)
          if (!rec) continue
          const scores = (await db.get(scKey(rec.course, rec.name))) || {}
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
