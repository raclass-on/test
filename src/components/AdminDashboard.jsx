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

  const pending = students.filter((s) => s.status === 'pending')
  const approved = students.filter((s) => s.status === 'approved')
  const rejected = students.filter((s) => s.status === 'rejected')

  if (loading) return <div className="admin-loading">불러오는 중…</div>
  if (error) return <div className="login-error" style={{ marginTop: 12 }}>{error} <button className="link-btn" onClick={refresh}>다시 시도</button></div>

  return (
    <div>
      <div className="admin-tabs">
        {['승인 관리', '전체 점수'].map((t) => (
          <button key={t} className={`filter-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>
        ))}
        <button className="filter-btn" onClick={refresh}>새로고침 ⟳</button>
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
        <div className="admin-section">
          {rows.filter((r) => r.status === 'approved').length === 0 ? (
            <p className="admin-empty">점수 데이터가 아직 없어요.</p>
          ) : (
            rows.filter((r) => r.status === 'approved').map((r) => {
              const units = unitsOf(r.course)
              const done = units.filter((u) => r.scores[u.id]?.best)
              const avgStars = done.length ? Math.round(done.reduce((s, u) => s + r.scores[u.id].best.stars, 0) / done.length) : 0
              return (
                <div key={r.course + r.name} className="score-card">
                  <div className="score-card-head">
                    <div><b>{r.name}</b> <span className="muted">· {courseName(r.course)}</span></div>
                    <div className="muted">학습 {done.length}/{units.length}유닛 · <Stars count={avgStars} /></div>
                  </div>
                  {done.length === 0 ? (
                    <div className="muted small">아직 푼 유닛이 없어요.</div>
                  ) : (
                    <div className="score-units">
                      {units.map((u) => {
                        const best = r.scores[u.id]?.best
                        if (!best) return null
                        return (
                          <div key={u.id} className="score-unit">
                            <span className="score-unit-title">{u.title}</span>
                            <span className="score-unit-nums">객 {best.mc}/{best.mcTotal} · 주 {best.sa}/{best.saTotal} <Stars count={best.stars} /></span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}
