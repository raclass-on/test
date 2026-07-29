import { useEffect, useState, useCallback, useRef } from 'react'
import { courses } from '../grammarData'
import { api } from '../api'
import { kakaoJsKey } from '../config'
import { shareSmart } from '../kakaoShare'
import Stars from './Stars'

const courseName = (id) => courses.find((c) => c.id === id)?.name || id
const unitsOf = (id) => courses.find((c) => c.id === id)?.units || []

// 문제 텍스트: 지시문(한글) + 영어문장 줄바꿈 표시
function QLines({ q }) {
  const s = String(q ?? '')
  const nl = s.indexOf('\n')
  if (nl < 0) return <div className="rd-wrong-q">{s}</div>
  return (
    <div className="rd-wrong-q">
      {s.slice(0, nl)}
      <span className="rd-wrong-q-en">{s.slice(nl + 1)}</span>
    </div>
  )
}

export default function AdminDashboard({ adminToken, onExitHome }) {
  const [tab, setTab] = useState('승인 관리')
  const [students, setStudents] = useState([])
  const [rows, setRows] = useState([])
  const [selectedKey, setSelectedKey] = useState(null)
  const [courseFilter, setCourseFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showReport, setShowReport] = useState(false)
  // 학생을 바꾸거나 목록으로 나가면 레포트 열림 상태 해제
  useEffect(() => { setShowReport(false) }, [selectedKey])

  // ── 브라우저 뒤로가기: 한 단계씩 (레포트 → 학생 상세 → 학생 목록 → 홈) ──
  // 화면 깊이(navDepth)에 맞춰 히스토리 항목 수를 유지하고, 뒤로가기 시 가장 깊은 단계만 닫는다.
  const navDepth = 1 + (selectedKey ? 1 : 0) + (showReport ? 1 : 0) // 1=루트, 2=학생상세, 3=레포트
  const pushedRef = useRef(0)
  const ignorePopRef = useRef(0)
  const stateRef = useRef({ selectedKey, showReport })
  stateRef.current = { selectedKey, showReport }

  useEffect(() => {
    if (navDepth > pushedRef.current) {
      for (let i = pushedRef.current; i < navDepth; i++) window.history.pushState({ adminNav: i + 1 }, '')
      pushedRef.current = navDepth
    } else if (navDepth < pushedRef.current) {
      // 인앱 ← 버튼으로 얕아진 경우: 초과 항목만큼 뒤로 정리(자체 popstate는 무시)
      const diff = pushedRef.current - navDepth
      pushedRef.current = navDepth
      ignorePopRef.current += diff
      for (let i = 0; i < diff; i++) window.history.back()
    }
  }, [navDepth])

  useEffect(() => {
    const onPop = () => {
      if (ignorePopRef.current > 0) { ignorePopRef.current--; return } // 우리가 부른 history.back()
      pushedRef.current = Math.max(0, pushedRef.current - 1)
      const { selectedKey: sk, showReport: sr } = stateRef.current
      if (sr) setShowReport(false)          // 레포트 → 학생 상세
      else if (sk) setSelectedKey(null)     // 학생 상세 → 학생 목록
      else if (onExitHome) onExitHome()     // 루트 → 홈(로그아웃)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [onExitHome])

  // 로그아웃 버튼·자동 로그아웃 등으로 나갈 때 쌓아둔 히스토리 항목 정리
  useEffect(() => () => {
    if (pushedRef.current > 0) { const n = pushedRef.current; pushedRef.current = 0; window.history.go(-n) }
  }, [])

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
        {['승인 관리', '학생 진도', '성취도 모음'].map((t) => (
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
      ) : tab === '성취도 모음' ? (
        <AchievementMatrix
          rows={filteredRows}
          onOpenStudent={(key) => { setSelectedKey(key); setTab('학생 진도') }}
        />
      ) : (
        <StudentProgress
          rows={filteredRows}
          selectedKey={selectedKey}
          onSelect={setSelectedKey}
          adminToken={adminToken}
          showReport={showReport}
          setShowReport={setShowReport}
        />
      )}
    </div>
  )
}

// 전체 학생 성취도 한눈에 보기 (반별 학생 × 유닛 별점 표)
function AchievementMatrix({ rows, onOpenStudent }) {
  if (rows.length === 0) return <p className="admin-empty">승인된 학생이 아직 없어요.</p>

  const groups = courses
    .map((c) => ({ course: c, students: rows.filter((r) => r.course === c.id) }))
    .filter((g) => g.students.length > 0)

  return (
    <div className="admin-section">
      <p className="admin-empty" style={{ marginBottom: 4 }}>
        각 칸은 유닛별 <b>최고 별점(0~5)</b>이에요. 이름을 누르면 상세 진도를 볼 수 있어요.
      </p>
      {groups.map(({ course, students }) => {
        const units = course.units
        return (
          <div key={course.id} className="matrix-block">
            <h3 className="admin-h" style={{ marginTop: 14 }}>{course.name} <span className="pill green">{students.length}</span></h3>
            <div className="matrix-wrap">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th className="matrix-name">학생</th>
                    {units.map((u) => (
                      <th key={u.id} title={u.title}>U{u.unit}</th>
                    ))}
                    <th>평균</th>
                    <th>완료</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((r) => {
                    const done = units.filter((u) => r.scores[u.id]?.best)
                    const avg = done.length ? Math.round(done.reduce((s, u) => s + r.scores[u.id].best.stars, 0) / done.length) : 0
                    return (
                      <tr key={r.course + r.name}>
                        <td className="matrix-name">
                          <button className="matrix-name-btn" onClick={() => onOpenStudent(r.course + '::' + r.name)}>{r.name}</button>
                        </td>
                        {units.map((u) => {
                          const best = r.scores[u.id]?.best
                          return (
                            <td key={u.id}>
                              {best
                                ? <span className={`cell-star s${best.stars}`}>{best.stars}★</span>
                                : <span className="cell-none">·</span>}
                            </td>
                          )
                        })}
                        <td><b>{avg}★</b></td>
                        <td className="muted">{done.length}/{units.length}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
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

function StudentProgress({ rows, selectedKey, onSelect, adminToken, showReport, setShowReport }) {
  if (rows.length === 0) return <p className="admin-empty">승인된 학생이 아직 없어요.</p>

  // 상세 보기
  const selected = rows.find((r) => r.course + '::' + r.name === selectedKey)
  if (selected) {
    if (showReport) return <StudentReport selected={selected} adminToken={adminToken} onBack={() => setShowReport(false)} />
    const units = unitsOf(selected.course)
    const done = units.filter((u) => selected.scores[u.id]?.best)
    const touched = units.filter((u) => {
      const r = selected.scores[u.id]
      return r?.best || r?.attempts?.length
    })
    return (
      <div className="admin-section">
        <button className="back-link" onClick={() => onSelect(null)}>← 학생 목록</button>
        <div className="score-card-head" style={{ marginTop: 6 }}>
          <div><b style={{ fontSize: '1.1rem' }}>{selected.name}</b> <span className="muted">· {courseName(selected.course)}</span></div>
          <span className="muted small">학습 {done.length}/{units.length}유닛</span>
        </div>
        <button className="btn btn-primary small" style={{ alignSelf: 'flex-start' }} onClick={() => setShowReport(true)}>📄 종합 레포트 · PDF 저장</button>
        {touched.length === 0 ? (
          <p className="admin-empty">아직 푼 유닛이 없어요.</p>
        ) : (
          units.map((u) => {
            const rec = selected.scores[u.id]
            if (!rec?.best && !rec?.attempts?.length) return null
            const attempts = [...(rec.attempts || [])].reverse() // 최신순
            return (
              <div key={u.id} className="prog-unit">
                <div className="prog-unit-head">
                  <span className="prog-unit-title">{u.title}</span>
                  {rec.best ? (
                    <span className="muted small">최고 <Stars count={rec.best.stars} /></span>
                  ) : (
                    <span className="muted small">미완료</span>
                  )}
                </div>
                <div className="prog-attempts">
                  {attempts.map((a, i) => {
                    const p = pct(a.mc, a.sa, a.mcTotal, a.saTotal)
                    return (
                      <div key={i} className="prog-attempt">
                        <span className="prog-date">{a.date}</span>
                        <span className="prog-score">객관식 {a.mc}/{a.mcTotal} · 주관식 {a.sa}/{a.saTotal}</span>
                        {a.partial ? (
                          <span className="prog-pct"><span className="partial-tag">중도 {p}%</span></span>
                        ) : (
                          <span className="prog-pct">{p}% <Stars count={starsOf(p)} /></span>
                        )}
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
              {done.length > 0 ? (
                <>학습 {done.length}/{units.length}유닛 · 응시 {attemptCount}회 · <Stars count={avgStars} /></>
              ) : attemptCount > 0 ? (
                <>학습 0/{units.length}유닛 · 응시 {attemptCount}회</>
              ) : (
                '아직 기록 없음'
              )}
              <span className="prog-arrow"> ›</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

// 학생 종합 성취 레포트 (인쇄 → 'PDF로 저장')
function StudentReport({ selected, onBack, adminToken }) {
  const units = unitsOf(selected.course)
  const done = units.filter((u) => selected.scores[u.id]?.best) // 기록이 있는(완료한) 유닛
  // 레포트/카톡에 넣을 유닛 선택 (기본: 완료한 유닛 전체)
  const [picked, setPicked] = useState(() => new Set(done.map((u) => u.id)))
  // 선생님 메모(숙제·안내) — 레포트에 함께 실림
  const [memo, setMemo] = useState('')
  // 틀린 문제 포함 여부(기본 켜짐) + 서버에서 불러온 오답
  const [includeWrongs, setIncludeWrongs] = useState(true)
  const [wrongs, setWrongs] = useState([])
  useEffect(() => {
    let alive = true
    api.adminWrongs(adminToken, selected.course, selected.name)
      .then((r) => { if (alive) setWrongs(Array.isArray(r.wrongs) ? r.wrongs : []) })
      .catch(() => {})
    return () => { alive = false }
  }, [adminToken, selected.course, selected.name])
  const toggle = (id) =>
    setPicked((prev) => {
      const n = new Set(prev)
      if (n.has(id)) n.delete(id); else n.add(id)
      return n
    })
  const allOn = done.length > 0 && done.every((u) => picked.has(u.id))
  const toggleAll = () => setPicked(allOn ? new Set() : new Set(done.map((u) => u.id)))

  // 실제로 레포트에 담을 유닛 (선택된 것만)
  const chosen = done.filter((u) => picked.has(u.id))
  const avgStars = chosen.length
    ? Math.round(chosen.reduce((s, u) => s + selected.scores[u.id].best.stars, 0) / chosen.length)
    : 0
  const avgPct = chosen.length
    ? Math.round(chosen.reduce((s, u) => s + (selected.scores[u.id].best.percent || 0), 0) / chosen.length)
    : 0
  // 선택된 유닛 안에서 아직 남아있는 오답을 실제 문제로 해석
  const wrongByUnit = chosen
    .map((u) => {
      const items = wrongs
        .filter((w) => w.unitId === u.id)
        .map((w) => {
          const src = w.type === 'mc' ? u.mc?.[w.no] : u.sa?.[w.no]
          if (!src) return null
          const correct = w.type === 'mc' ? src.options[src.answer] : src.answers.join(' / ')
          const given = w.type === 'mc' ? (src.options[w.given] ?? '(무응답)') : (w.given || '(무응답)')
          return { key: `${w.type}-${w.no}`, q: src.q, correct, given, explain: src.explain, type: w.type }
        })
        .filter(Boolean)
      return { unit: u, items }
    })
    .filter((g) => g.items.length > 0)
  const wrongTotal = wrongByUnit.reduce((s, g) => s + g.items.length, 0)
  const showWrongs = includeWrongs && wrongTotal > 0

  const now = new Date()
  const dateStr = `${now.getFullYear()}. ${now.getMonth() + 1}. ${now.getDate()}.`

  const shareText = () =>
    [
      '[레이첼영어학원] 문법특강수업',
      `🎀${selected.course} ${selected.name}학생 주간학습성취레포트`,
      '',
      ...chosen.flatMap((u) => {
        const b = selected.scores[u.id].best
        return [
          `✅️ ${u.title}`,
          `▪️객관식 : ${b.mc}/${b.mcTotal}`,
          `▪️주관식 : ${b.sa}/${b.saTotal}`,
          '',
        ]
      }),
      `✔️진행완료 ${done.length}주 /${units.length}주 유닛`,
      `✔️평균 정답률 : ${avgPct}%`,
      `✔️종합 : ${'★'.repeat(avgStars)}${'☆'.repeat(5 - avgStars)}`,
      ...(memo.trim() ? ['', '📌 선생님 메모/숙제', memo.trim()] : []),
    ].join('\n')

  // 카톡 카드에 넣을 짧은 요약 (200자 제한)
  const shareSummary = () =>
    `[레이첼영어학원] 문법특강 · ${selected.course} ${selected.name} 주간 레포트\n` +
    `완료 ${done.length}/${units.length}유닛 · 평균 정답률 ${avgPct}% · 종합 ${'★'.repeat(avgStars)}${'☆'.repeat(5 - avgStars)}`

  // 웹에 게시할 "전체 레포트" HTML (버튼을 누르면 열림 — 잘림 없이 전체)
  const buildReportHtml = () => {
    const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    // 문제 지시문(한글) + 영어문장 줄바꿈 표시
    const qHtml = (q) => {
      const s = String(q ?? '')
      const nl = s.indexOf('\n')
      if (nl < 0) return esc(s)
      return `${esc(s.slice(0, nl))}<br><span style="font-weight:700;color:#1f2937;">${esc(s.slice(nl + 1))}</span>`
    }
    // 선생님 메모(숙제·안내) 박스
    const memoHtml = memo.trim()
      ? `<div style="background:#fff;padding:0 32px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
    <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:14px 16px;margin-bottom:6px;">
      <div style="font-size:12px;font-weight:800;color:#b45309;margin-bottom:6px;">📌 선생님 메모 · 숙제 안내</div>
      <div style="font-size:13px;color:#374151;line-height:1.7;white-space:pre-wrap;">${esc(memo.trim())}</div>
    </div>
  </div>`
      : ''
    // 틀린 문제 다시 보기 섹션
    const wrongHtml = showWrongs
      ? `<div style="background:#fff;padding:8px 32px 28px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
    <div style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;font-weight:700;margin:14px 0;">틀린 문제 다시 보기 · ${wrongTotal}문제</div>
    ${wrongByUnit.map((g) => `
    <div style="font-size:13px;font-weight:800;color:#1f2937;margin:12px 0 8px;">${esc(g.unit.title)} <span style="color:#9ca3af;font-weight:600;">· ${g.items.length}문제</span></div>
    ${g.items.map((it) => `<div style="padding:12px 14px;background:#f9fafb;border-radius:10px;margin-bottom:8px;border-left:4px solid #dc2626;">
      <div style="font-size:12px;color:#dc2626;font-weight:700;margin-bottom:4px;">${it.type === 'mc' ? '객관식' : '주관식'}</div>
      <div style="font-size:13px;color:#374151;line-height:1.6;">${qHtml(it.q)}</div>
      <div style="font-size:12px;margin-top:6px;"><span style="color:#dc2626;">내 답: ${esc(it.given)}</span> &nbsp;·&nbsp; <span style="color:#0d9488;font-weight:700;">정답: ${esc(it.correct)}</span></div>
      ${it.explain ? `<div style="font-size:12px;color:#6b7280;margin-top:5px;">💬 ${esc(it.explain)}</div>` : ''}
    </div>`).join('')}`).join('')}
  </div>`
      : ''
    const rows = chosen.map((u) => {
      const b = selected.scores[u.id].best
      const c = b.percent >= 75 ? '#0d9488' : b.percent >= 50 ? '#ea580c' : '#dc2626'
      return `<div style="padding:14px 16px;background:#f9fafb;border-radius:10px;margin-bottom:10px;border-left:4px solid ${c};">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
          <div style="font-size:14px;font-weight:600;color:#1f2937;">${esc(u.title)}</div>
          <div style="font-size:13px;font-weight:700;color:${c};">${'★'.repeat(b.stars)}${'☆'.repeat(5 - b.stars)}</div>
        </div>
        <div style="font-size:12px;color:#6b7280;margin-top:5px;">객관식 ${b.mc}/${b.mcTotal} · 주관식 ${b.sa}/${b.saTotal} · 정답률 ${b.percent}%</div>
      </div>`
    }).join('')
    return `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>학습 레포트 - ${esc(selected.name)}</title></head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:'Apple SD Gothic Neo','Malgun Gothic',sans-serif;">
<div style="max-width:640px;margin:0 auto;padding:28px 16px;">
  <div style="background:#0f1f3d;border-radius:16px 16px 0 0;padding:32px;">
    <div style="font-size:11px;letter-spacing:.15em;color:rgba(255,255,255,.45);text-transform:uppercase;margin-bottom:14px;">레이첼 영어학원 · 여름방학 문법 특강</div>
    <div style="font-size:26px;font-weight:900;color:#fff;margin-bottom:6px;">${esc(selected.name)}</div>
    <div style="font-size:13px;color:rgba(255,255,255,.55);">${esc(courseName(selected.course))} · ${dateStr}</div>
  </div>
  <div style="background:#fff;padding:28px 32px 8px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
      <div style="padding:14px;border-radius:10px;background:#e0e7ff;text-align:center;"><div style="font-size:22px;font-weight:900;color:#4f46e5;">${done.length}/${units.length}</div><div style="font-size:11px;color:#6b7280;margin-top:2px;">완료 유닛</div></div>
      <div style="padding:14px;border-radius:10px;background:#ccfbf1;text-align:center;"><div style="font-size:22px;font-weight:900;color:#0d9488;">${avgPct}%</div><div style="font-size:11px;color:#6b7280;margin-top:2px;">평균 정답률</div></div>
      <div style="padding:14px;border-radius:10px;background:#fffbeb;text-align:center;"><div style="font-size:20px;font-weight:900;color:#b45309;">${'★'.repeat(avgStars)}${'☆'.repeat(5 - avgStars)}</div><div style="font-size:11px;color:#6b7280;margin-top:2px;">종합 성취도</div></div>
    </div>
  </div>
  <div style="background:#fff;padding:8px 32px 28px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
    <div style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;font-weight:700;margin:14px 0;">유닛별 성취</div>
    ${rows}
  </div>
  ${memoHtml}
  ${wrongHtml}
  <div style="background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 16px 16px;padding:16px 32px;display:flex;justify-content:space-between;font-size:11px;color:#9ca3af;"><span>레이첼 영어학원 · 문법 특강</span><span>${dateStr}</span></div>
  <p style="text-align:center;font-size:11px;color:#9ca3af;margin-top:14px;">※ 점수는 각 유닛 최고 기록 기준입니다.</p>
</div></body></html>`
  }

  const share = async () => {
    if (chosen.length === 0) { alert('보낼 유닛을 하나 이상 선택하세요.'); return }
    // 1) 전체 레포트를 웹에 게시 → 공개 URL (실패해도 요약만이라도 공유되게 폴백)
    let url = ''
    try {
      const { id } = await api.saveReport(adminToken, buildReportHtml())
      if (id) url = `${window.location.origin}/report/${id}`
    } catch { /* 게시 실패 → 링크 없이 전체 텍스트로 폴백 */ }
    // 2) 카톡 카드(키 있으면) / 기기 공유 시트 / 복사
    try {
      const how = await shareSmart({
        title: `${selected.name} 학생 주간학습성취레포트`,
        text: url ? shareSummary() : shareText(),   // 링크 있으면 짧은 요약, 없으면 기존 전체 텍스트
        linkUrl: url,
        buttonTitle: '전체 레포트 보기',
      }, kakaoJsKey)
      if (how === 'copied') alert(url
        ? '레포트 요약과 전체 레포트 링크를 복사했어요. 카톡 대화창에 붙여넣어 보내세요.'
        : '레포트 내용을 복사했어요. 카톡 대화창에 붙여넣어 보내세요.')
    } catch (e) {
      if (e?.name !== 'AbortError') alert('공유 실패: ' + (e?.message || e))
    }
  }

  return (
    <div className="report-page">
      <div className="report-actions no-print">
        <button className="btn btn-outline small" onClick={onBack}>← 뒤로</button>
        <button className="btn btn-primary small" disabled={chosen.length === 0} onClick={() => window.print()}>🖨️ 인쇄 · PDF 저장</button>
        <button className="btn btn-success small" disabled={chosen.length === 0} onClick={share}>💬 카톡으로 공유</button>
      </div>

      <div className="unit-pick no-print">
        <div className="unit-pick-head">
          <span className="unit-pick-title">레포트에 넣을 유닛 선택 <span className="muted small">({chosen.length}/{done.length})</span></span>
          {done.length > 0 && (
            <button className="link-btn" onClick={toggleAll}>{allOn ? '전체 해제' : '전체 선택'}</button>
          )}
        </div>
        {done.length === 0 ? (
          <p className="admin-empty" style={{ margin: 0 }}>아직 완료한 유닛이 없어요.</p>
        ) : (
          <div className="unit-pick-list">
            {done.map((u) => {
              const b = selected.scores[u.id].best
              return (
                <label key={u.id} className={`unit-pick-item ${picked.has(u.id) ? 'on' : ''}`}>
                  <input type="checkbox" checked={picked.has(u.id)} onChange={() => toggle(u.id)} />
                  <span className="unit-pick-name">{u.title}</span>
                  <span className="muted small">{b.percent}% · {'★'.repeat(b.stars)}</span>
                </label>
              )
            })}
          </div>
        )}
      </div>

      <div className="unit-pick no-print">
        <div className="unit-pick-head">
          <span className="unit-pick-title">선생님 메모 · 숙제 안내</span>
          <span className="muted small">부모님께 보이는 레포트에 함께 실려요</span>
        </div>
        <textarea
          className="report-memo"
          rows={3}
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="예) 이번 주 숙제: 워크북 12~15p 풀어오기. 지각동사 유닛 한 번 더 복습해요!"
        />
        <label className="report-wrong-toggle">
          <input type="checkbox" checked={includeWrongs} onChange={(e) => setIncludeWrongs(e.target.checked)} />
          <span>틀린 문제 함께 보여주기 {wrongTotal > 0 ? `(${wrongTotal}문제)` : '(남은 오답 없음)'}</span>
        </label>
      </div>

      <p className="admin-empty no-print" style={{ marginTop: 0 }}>
        선택한 유닛만 아래 레포트·PDF·카톡에 담겨요. 버튼을 누르면 인쇄창이 열리고, 프린터를 <b>‘PDF로 저장’</b>으로 선택하면 PDF로 저장됩니다.
      </p>

      <div className="report-doc" id="report-doc">
        <div className="report-doc-head">
          <div className="report-doc-title">레이첼 영어학원 · 학습 성취 레포트</div>
          <div className="report-doc-meta">
            <span><b>{selected.name}</b> 학생</span>
            <span>{courseName(selected.course)}</span>
            <span>발행일 {dateStr}</span>
          </div>
        </div>

        <table className="report-doc-table">
          <thead>
            <tr><th>유닛</th><th>객관식</th><th>주관식</th><th>정답률</th><th>별점</th><th>최근 응시</th></tr>
          </thead>
          <tbody>
            {chosen.map((u) => {
              const b = selected.scores[u.id].best
              return (
                <tr key={u.id}>
                  <td className="rd-unit">{u.title}</td>
                  <td>{b.mc}/{b.mcTotal}</td>
                  <td>{b.sa}/{b.saTotal}</td>
                  <td>{b.percent}%</td>
                  <td className="rd-star">{'★'.repeat(b.stars)}{'☆'.repeat(5 - b.stars)}</td>
                  <td>{b.date}</td>
                </tr>
              )
            })}
            {chosen.length === 0 && (
              <tr><td className="rd-unit rd-none" colSpan={6}>선택한 유닛이 없어요.</td></tr>
            )}
          </tbody>
        </table>

        <div className="report-doc-summary">
          <div><span className="rd-label">진행 완료</span><span className="rd-val">{done.length} / {units.length} 유닛</span></div>
          <div><span className="rd-label">평균 정답률</span><span className="rd-val">{avgPct}%</span></div>
          <div><span className="rd-label">종합 별점</span><span className="rd-val rd-star">{'★'.repeat(avgStars)}{'☆'.repeat(5 - avgStars)} <span style={{ color: '#111827' }}>({avgStars}/5)</span></span></div>
        </div>

        {memo.trim() && (
          <div className="rd-memo">
            <div className="rd-memo-title">📌 선생님 메모 · 숙제 안내</div>
            <div className="rd-memo-body">{memo.trim()}</div>
          </div>
        )}

        {showWrongs && (
          <div className="rd-wrongs">
            <div className="rd-wrongs-title">틀린 문제 다시 보기 · {wrongTotal}문제</div>
            {wrongByUnit.map((g) => (
              <div key={g.unit.id} className="rd-wrong-unit">
                <div className="rd-wrong-unit-title">{g.unit.title} <span className="muted small">· {g.items.length}문제</span></div>
                {g.items.map((it) => (
                  <div key={it.key} className="rd-wrong-item">
                    <div className="rd-wrong-badge">{it.type === 'mc' ? '객관식' : '주관식'}</div>
                    <QLines q={it.q} />
                    <div className="rd-wrong-ans">
                      <span className="rd-wrong-given">내 답: {it.given}</span>
                      <span className="rd-wrong-correct">정답: {it.correct}</span>
                    </div>
                    {it.explain && <div className="rd-wrong-explain">💬 {it.explain}</div>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="report-doc-foot">※ 점수는 각 유닛 최고 기록 기준입니다. · 레이첼 영어학원</div>
      </div>
    </div>
  )
}
