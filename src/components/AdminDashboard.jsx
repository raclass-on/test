import { useEffect, useState, useCallback } from 'react'
import { courses } from '../grammarData'
import { api } from '../api'
import Stars from './Stars'

const courseName = (id) => courses.find((c) => c.id === id)?.name || id
const unitsOf = (id) => courses.find((c) => c.id === id)?.units || []

export default function AdminDashboard({ adminToken }) {
  const [tab, setTab] = useState('승인 관리')
  const [students, setStudents] = useState([])
  const [rows, setRows] = useState([])
  const [selectedKey, setSelectedKey] = useState(null)
  const [courseFilter, setCourseFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const refresh = useCallback(async () => {
    setLoading(true); setError('')
    try {
      const [a, b] = await Promise.all([api.adminList(adminToken), api.adminScores(adminToken)])
      setStudents(a.students || [])
      setRows(b.rows || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [adminToken])

  useEffect(() => { refresh() }, [refresh])

  const act = async (course, name, op) => {
    if (op === 'delete' && !confirm(`${name} 학생을 삭제할까요? 점수 기록도 함께 지워집니다.`)) return
    try {
      await api.adminUpdate(adminToken, course, name, op)
      await refresh()
    } catch (e) {
      alert(e.message)
    }
  }

  const resetPw = async (course, name) => {
    const pw = prompt(`${name} 학생의 새 비밀번호를 입력하세요.`)
    if (pw == null || pw.trim() === '') return
    try {
      await api.adminSetPassword(adminToken, course, name, pw)
      alert(`${name} 학생의 비밀번호를 변경했어요.`)
    } catch (e) {
      alert(e.message)
    }
  }

  const inFilter = (s) => courseFilter === 'all' || s.course === courseFilter
  const pending = students.filter((s) => s.status === 'pending' && inFilter(s))
  const approved = students.filter((s) => s.status === 'approved' && inFilter(s))
  const rejected = students.filter((s) => s.status === 'rejected' && inFilter(s))
  const filteredRows = rows.filter((r) => r.status === 'approved' && inFilter(r))

  if (loading) return <div className="admin-loading">불러오는 중…</div>
  if (error) return <div className="login-error" style={{ marginTop: 12 }}>{error} <button className="link-btn" onClick={refresh}>다시 시도</button></div>

  return (
    <div>
      <div className="admin-tabs">
        {['승인 관리', '학생 진도'].map((t) => (
          <button key={t} className={`filter-btn ${tab === t ? 'active' : ''}`} onClick={() => { setTab(t); setSelectedKey(null) }}>{t}</button>
        ))}
        <button className="filter-btn" onClick={refresh}>새로고침 ⟳</button>
      </div>

      <div className="admin-tabs" style={{ marginTop: -6 }}>
        <span className="course-filter-label">반</span>
        <button className={`chip ${courseFilter === 'all' ? 'active' : ''}`} onClick={() => { setCourseFilter('all'); setSelectedKey(null) }}>전체</button>
        {courses.map((c) => (
          <button key={c.id} className={`chip ${courseFilter === c.id ? 'active' : ''}`} onClick={() => { setCourseFilter(c.id); setSelectedKey(null) }}>{c.name}</button>
        ))}
      </div>

      {tab === '승인 관리' ? (
        <div className="admin-section">
          <h3 className="admin-h">승인 대기 {pending.length > 0 && <span className="pill">{pending.length}</span>}</h3>
          {pending.length === 0 ? (
            <p className="admin-empty">대기 중인 신청이 없어요.</p>
          ) : (
            pending.map((s) => (
              <div key={s.course + s.name} className="admin-row">
                <div>
                  <b>{s.name}</b> <span className="muted">· {courseName(s.course)}</span>
                </div>
                <div className="admin-actions">
                  <button className="btn small btn-success" onClick={() => act(s.course, s.name, 'approve')}>승인</button>
                  <button className="btn small btn-outline" onClick={() => act(s.course, s.name, 'reject')}>거절</button>
                  <button className="btn small btn-outline" onClick={() => resetPw(s.course, s.name)}>비번 재설정</button>
                </div>
              </div>
            ))
          )}

          <h3 className="admin-h" style={{ marginTop: 20 }}>승인된 학생 {approved.length > 0 && <span className="pill green">{approved.length}</span>}</h3>
          {approved.length === 0 ? (
            <p className="admin-empty">아직 승인된 학생이 없어요.</p>
          ) : (
            approved.map((s) => (
              <div key={s.course + s.name} className="admin-row">
                <div><b>{s.name}</b> <span className="muted">· {courseName(s.course)}</span></div>
                <div className="admin-actions">
                  <button className="btn small btn-outline" onClick={() => resetPw(s.course, s.name)}>비번 재설정</button>
                  <button className="btn small btn-outline" onClick={() => act(s.course, s.name, 'delete')}>삭제</button>
                </div>
              </div>
            ))
          )}

          {rejected.length > 0 && (
            <>
              <h3 className="admin-h" style={{ marginTop: 20 }}>거절됨 {rejected.length}</h3>
              {rejected.map((s) => (
                <div key={s.course + s.name} className="admin-row">
                  <div><b>{s.name}</b> <span className="muted">· {courseName(s.course)}</span></div>
                  <div className="admin-actions">
                    <button className="btn small btn-success" onClick={() => act(s.course, s.name, 'approve')}>승인</button>
                    <button className="btn small btn-outline" onClick={() => act(s.course, s.name, 'delete')}>삭제</button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      ) : (
        <StudentProgress
          rows={filteredRows}
          selectedKey={selectedKey}
          onSelect={setSelectedKey}
        />
      )}
    </div>
  )
}

function pct(mc, sa, mcTotal, saTotal) {
  const t = mcTotal + saTotal
  return t ? Math.round(((mc + sa) / t) * 100) : 0
}
function starsOf(p) {
  return p >= 90 ? 5 : p >= 75 ? 4 : p >= 60 ? 3 : p >= 40 ? 2 : 1
}

function StudentProgress({ rows, selectedKey, onSelect }) {
  if (rows.length === 0) return <p className="admin-empty">승인된 학생이 아직 없어요.</p>

  // 상세 보기
  const selected = rows.find((r) => r.course + '::' + r.name === selectedKey)
  if (selected) {
    const units = unitsOf(selected.course)
    const done = units.filter((u) => selected.scores[u.id]?.best)
    return (
      <div className="admin-section">
        <button className="back-link" onClick={() => onSelect(null)}>← 학생 목록</button>
        <div className="score-card-head" style={{ marginTop: 6 }}>
          <div><b style={{ fontSize: '1.1rem' }}>{selected.name}</b> <span className="muted">· {courseName(selected.course)}</span></div>
          <span className="muted small">학습 {done.length}/{units.length}유닛</span>
        </div>
        {done.length === 0 ? (
          <p className="admin-empty">아직 푼 유닛이 없어요.</p>
        ) : (
          units.map((u) => {
            const rec = selected.scores[u.id]
            if (!rec?.best) return null
            const attempts = [...(rec.attempts || [])].reverse() // 최신순
            return (
              <div key={u.id} className="prog-unit">
                <div className="prog-unit-head">
                  <span className="prog-unit-title">{u.title}</span>
                  <span className="muted small">최고 <Stars count={rec.best.stars} /></span>
                </div>
                <div className="prog-attempts">
                  {attempts.map((a, i) => {
                    const p = pct(a.mc, a.sa, a.mcTotal, a.saTotal)
                    return (
                      <div key={i} className="prog-attempt">
                        <span className="prog-date">{a.date}</span>
                        <span className="prog-score">객관식 {a.mc}/{a.mcTotal} · 주관식 {a.sa}/{a.saTotal}</span>
                        <span className="prog-pct">{p}% <Stars count={starsOf(p)} /></span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })
        )}
      </div>
    )
  }

  // 학생 목록
  return (
    <div className="admin-section">
      <p className="admin-empty" style={{ marginBottom: 4 }}>학생을 누르면 날짜별 진도·점수를 볼 수 있어요.</p>
      {rows.map((r) => {
        const units = unitsOf(r.course)
        const done = units.filter((u) => r.scores[u.id]?.best)
        const avgStars = done.length ? Math.round(done.reduce((s, u) => s + r.scores[u.id].best.stars, 0) / done.length) : 0
        const attemptCount = units.reduce((s, u) => s + (r.scores[u.id]?.attempts?.length || 0), 0)
        return (
          <button key={r.course + r.name} className="student-prog-row" onClick={() => onSelect(r.course + '::' + r.name)}>
            <div><b>{r.name}</b> <span className="muted">· {courseName(r.course)}</span></div>
            <div className="muted small">
              {done.length > 0 ? <>학습 {done.length}/{units.length}유닛 · 응시 {attemptCount}회 · <Stars count={avgStars} /></> : '아직 기록 없음'}
              <span className="prog-arrow"> ›</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}
