import { useState, useEffect } from 'react'
import Login from './components/Login'
import UnitBoard from './components/UnitBoard'
import Session from './components/Session'
import ParentReport from './components/ParentReport'
import AdminDashboard from './components/AdminDashboard'
import { courses } from './grammarData'
import { siteInfo } from './config'
import { api } from './api'
import './App.css'

const TABS = ['문제풀이', '학부모 안내']

export default function App() {
  const [student, setStudent] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('student')) || null } catch { return null }
  })
  const [adminToken, setAdminToken] = useState(() => sessionStorage.getItem('adminToken') || null)
  const [records, setRecords] = useState(() => student?.scores || {})
  const [tab, setTab] = useState('문제풀이')
  const [activeUnitId, setActiveUnitId] = useState(null)
  const [banner, setBanner] = useState('')

  // 로그인 상태면 최신 점수 동기화
  useEffect(() => {
    if (!student?.token) return
    api.myScores(student.token).then((r) => r.scores && setRecords(r.scores)).catch(() => {})
  }, [student?.token])

  // 세션(문제풀이) 중 뒤로가기 처리 — 앱을 벗어나지 않고 유닛 목록으로 복귀시킨다.
  // (라우터가 없어 히스토리 항목이 하나뿐이라, 세션 중 폰 뒤로가기를 누르면
  //  사이트 자체를 벗어나 인앱 브라우저에서 흰 화면/먹통이 되던 문제 해결)
  useEffect(() => {
    if (!activeUnitId) return
    // 세션 진입 시 히스토리 항목을 하나 쌓는다 → 뒤로가기가 이 항목을 소비하며 세션만 닫힘
    window.history.pushState({ raclassSession: true }, '')
    let closedByBack = false
    const onPop = () => {
      closedByBack = true
      setActiveUnitId(null)
    }
    window.addEventListener('popstate', onPop)
    return () => {
      window.removeEventListener('popstate', onPop)
      // 인앱 '나가기'·'유닛 목록으로' 버튼 등으로 닫힌 경우, 쌓아둔 히스토리 항목을 되돌려 정리
      if (!closedByBack) window.history.back()
    }
  }, [activeUnitId])

  const loginStudent = (u) => {
    setStudent(u)
    setRecords(u.scores || {})
    sessionStorage.setItem('student', JSON.stringify(u))
    setTab('문제풀이'); setActiveUnitId(null)
  }
  const loginAdmin = (t) => {
    setAdminToken(t)
    sessionStorage.setItem('adminToken', t)
  }
  const logout = () => {
    setStudent(null); setAdminToken(null); setActiveUnitId(null)
    sessionStorage.removeItem('student'); sessionStorage.removeItem('adminToken')
  }

  // ── 어드민 화면 ──
  if (adminToken) {
    return (
      <div className="app">
        <header className="header">
          <div className="header-inner header-row">
            <div>
              <h1 className="logo">🔑 어드민 · {siteInfo.academy}</h1>
              <p className="subtitle">가입 승인 · 전체 점수 조회</p>
            </div>
            <button className="logout-btn" onClick={logout}>로그아웃</button>
          </div>
        </header>
        <main className="main">
          <AdminDashboard adminToken={adminToken} />
        </main>
      </div>
    )
  }

  // ── 로그인 전 ──
  if (!student) {
    return (
      <div className="app">
        <header className="header">
          <div className="header-inner">
            <h1 className="logo">📝 {siteInfo.academy}</h1>
            <p className="subtitle">{siteInfo.title}</p>
          </div>
        </header>
        <main className="main">
          <Login onLogin={loginStudent} onAdmin={loginAdmin} />
        </main>
      </div>
    )
  }

  // ── 학생 화면 ──
  const course = courses.find((c) => c.id === student.courseId)
  const activeUnit = course.units.find((u) => u.id === activeUnitId)

  const onSessionDone = async (result) => {
    // 낙관적 반영
    setRecords((prev) => {
      const prevU = prev[activeUnitId] || { best: null, attempts: [] }
      const percent = Math.round(((result.mc + result.sa) / (result.mcTotal + result.saTotal)) * 100)
      const isBetter = !prevU.best || result.mc + result.sa > prevU.best.mc + prevU.best.sa
      const stars = percent >= 90 ? 5 : percent >= 75 ? 4 : percent >= 60 ? 3 : percent >= 40 ? 2 : 1
      return { ...prev, [activeUnitId]: { ...prevU, best: isBetter ? { ...result, percent, stars } : prevU.best } }
    })
    try {
      const r = await api.score(student.token, { unitId: activeUnitId, ...result })
      setRecords((prev) => ({ ...prev, [activeUnitId]: r.unit }))
      setBanner('')
    } catch {
      setBanner('⚠️ 점수를 서버에 저장하지 못했어요. 인터넷 연결을 확인해 주세요.')
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner header-row">
          <div>
            <h1 className="logo">📝 {siteInfo.academy}</h1>
            <p className="subtitle">{siteInfo.title}</p>
          </div>
          <button className="logout-btn" onClick={logout}>로그아웃</button>
        </div>
        <div className="stats-bar">
          <span>🏫 {course.name}</span>
          <span>👤 {student.name}</span>
        </div>
      </header>

      {!activeUnit && (
        <nav className="tabs">
          {TABS.map((t) => (
            <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </nav>
      )}

      <main className="main">
        {banner && <div className="banner-warn">{banner}</div>}
        {activeUnit ? (
          <Session key={activeUnit.id} unit={activeUnit} onDone={onSessionDone} onExit={() => setActiveUnitId(null)} />
        ) : tab === '문제풀이' ? (
          <UnitBoard course={course} records={records} onStart={setActiveUnitId} />
        ) : (
          <ParentReport course={course} studentName={student.name} records={records} />
        )}
      </main>
    </div>
  )
}
