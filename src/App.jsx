import { useState, useEffect } from 'react'
import Login from './components/Login'
import UnitBoard from './components/UnitBoard'
import Session from './components/Session'
import ParentReport from './components/ParentReport'
import WrongNote from './components/WrongNote'
import AdminDashboard from './components/AdminDashboard'
import { courses } from './grammarData'
import { siteInfo } from './config'
import { api } from './api'
import { loadWrongs, mergeServer } from './wrongs'
import './App.css'

const TABS = ['문제풀이', '오답노트', '나의 성취도']

export default function App() {
  const [student, setStudent] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('student')) || null } catch { return null }
  })
  const [adminToken, setAdminToken] = useState(() => sessionStorage.getItem('adminToken') || null)
  const [records, setRecords] = useState(() => student?.scores || {})
  const [tab, setTab] = useState('문제풀이')
  const [activeUnitId, setActiveUnitId] = useState(null)
  const [reviewUnit, setReviewUnit] = useState(null) // 오답 다시 풀기(합성 유닛)
  const [wrongsVersion, setWrongsVersion] = useState(0) // 서버 오답 동기화 후 오답노트 새로고침용
  const [banner, setBanner] = useState('')
  const [autoLoggedOut, setAutoLoggedOut] = useState(false)

  // 로그인 상태면 최신 점수·오답노트 동기화 (기기가 바뀌어도 서버에서 받아옴)
  useEffect(() => {
    if (!student?.token) return
    api.myScores(student.token).then((r) => r.scores && setRecords(r.scores)).catch(() => {})
    api.myWrongs(student.token).then((r) => {
      if (r.wrongs) {
        mergeServer(student.courseId, student.name, r.wrongs)
        setWrongsVersion((v) => v + 1)
      }
    }).catch(() => {})
  }, [student?.token, student?.courseId, student?.name])

  // 세션(문제풀이) 중 뒤로가기 처리 — 앱을 벗어나지 않고 유닛 목록으로 복귀시킨다.
  // (라우터가 없어 히스토리 항목이 하나뿐이라, 세션 중 폰 뒤로가기를 누르면
  //  사이트 자체를 벗어나 인앱 브라우저에서 흰 화면/먹통이 되던 문제 해결)
  const inSessionKey = activeUnitId ? `unit:${activeUnitId}` : reviewUnit ? 'review' : null
  useEffect(() => {
    if (!inSessionKey) return
    // 세션 진입 시 히스토리 항목을 하나 쌓는다 → 뒤로가기가 이 항목을 소비하며 세션만 닫힘
    window.history.pushState({ raclassSession: true }, '')
    let closedByBack = false
    const onPop = () => {
      closedByBack = true
      setActiveUnitId(null)
      setReviewUnit(null)
    }
    window.addEventListener('popstate', onPop)
    return () => {
      window.removeEventListener('popstate', onPop)
      // 인앱 '나가기'·'유닛 목록으로' 버튼 등으로 닫힌 경우, 쌓아둔 히스토리 항목을 되돌려 정리
      if (!closedByBack) window.history.back()
    }
  }, [inSessionKey])

  const loginStudent = (u) => {
    setStudent(u)
    setRecords(u.scores || {})
    mergeServer(u.courseId, u.name, u.wrongs || []) // 서버에 쌓인 오답을 이 기기에 반영
    setWrongsVersion((v) => v + 1)
    sessionStorage.setItem('student', JSON.stringify(u))
    setTab('문제풀이'); setActiveUnitId(null); setAutoLoggedOut(false)
  }
  const loginAdmin = (t) => {
    setAdminToken(t)
    sessionStorage.setItem('adminToken', t)
    setAutoLoggedOut(false)
  }
  const logout = () => {
    setStudent(null); setAdminToken(null); setActiveUnitId(null)
    sessionStorage.removeItem('student'); sessionStorage.removeItem('adminToken')
  }

  // 5분간 아무 입력(탭/키/스크롤)이 없으면 자동 로그아웃
  useEffect(() => {
    if (!student && !adminToken) return
    let timer
    const reset = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setAutoLoggedOut(true)
        setStudent(null); setAdminToken(null); setActiveUnitId(null)
        sessionStorage.removeItem('student'); sessionStorage.removeItem('adminToken')
      }, 5 * 60 * 1000)
    }
    const events = ['mousedown', 'keydown', 'touchstart', 'touchmove', 'scroll', 'click']
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }))
    reset()
    return () => {
      clearTimeout(timer)
      events.forEach((e) => window.removeEventListener(e, reset))
    }
  }, [student, adminToken])

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
          <AdminDashboard adminToken={adminToken} onExitHome={logout} />
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
          {autoLoggedOut && (
            <div className="banner-warn" style={{ marginBottom: 12 }}>
              ⏰ 5분간 활동이 없어 자동 로그아웃되었어요. 다시 로그인해 주세요.
            </div>
          )}
          <Login onLogin={loginStudent} onAdmin={loginAdmin} />
        </main>
      </div>
    )
  }

  // ── 학생 화면 ──
  const course = courses.find((c) => c.id === student.courseId)
  const activeUnit = course.units.find((u) => u.id === activeUnitId)

  // 오답노트의 틀린 문제만 모아 합성 유닛을 만들어 복습 세션 시작
  const startReview = () => {
    const wrongs = loadWrongs(student.courseId, student.name)
    const mc = [], sa = []
    wrongs.forEach((w) => {
      const u = course.units.find((x) => x.id === w.unitId)
      if (!u) return
      const src = w.type === 'mc' ? u.mc[w.no] : u.sa[w.no]
      if (!src) return
      const item = { ...src, _uid: w.unitId, _no: w.no }
      if (w.type === 'mc') mc.push(item)
      else sa.push(item)
    })
    if (mc.length + sa.length === 0) { alert('다시 풀 오답이 없어요.'); return }
    setReviewUnit({ id: 'REVIEW', title: '오답 다시 풀기', mc, sa })
  }

  const onSessionDone = async (result) => {
    // 낙관적 반영 (중도 기록은 최고기록·별점을 갱신하지 않고 이력에만 남긴다)
    if (!result.partial) {
      setRecords((prev) => {
        const prevU = prev[activeUnitId] || { best: null, attempts: [] }
        const percent = Math.round(((result.mc + result.sa) / (result.mcTotal + result.saTotal)) * 100)
        const isBetter = !prevU.best || result.mc + result.sa > prevU.best.mc + prevU.best.sa
        const stars = percent >= 90 ? 5 : percent >= 75 ? 4 : percent >= 60 ? 3 : percent >= 40 ? 2 : 1
        return { ...prev, [activeUnitId]: { ...prevU, best: isBetter ? { ...result, percent, stars } : prevU.best } }
      })
    }
    try {
      const r = await api.score(student.token, { unitId: activeUnitId, ...result })
      setRecords((prev) => ({ ...prev, [activeUnitId]: r.unit }))
      if (!result.partial) setBanner('')
    } catch {
      // 중도 저장 실패는 이탈 중이므로 경고를 띄우지 않는다.
      if (!result.partial) setBanner('⚠️ 점수를 서버에 저장하지 못했어요. 인터넷 연결을 확인해 주세요.')
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner header-row">
          <div>
            <h1 className="logo">📝 {siteInfo.academy}</h1>
            <p className="subtitle">👋 {student.name}님, 반가워요!</p>
          </div>
          <button className="logout-btn" onClick={logout}>로그아웃</button>
        </div>
        <div className="stats-bar">
          <span>🏫 {course.name}</span>
          <span>👤 {student.name}</span>
        </div>
      </header>

      {!activeUnit && !reviewUnit && (
        <nav className="tabs">
          {TABS.map((t) => (
            <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </nav>
      )}

      <main className="main">
        {banner && <div className="banner-warn">{banner}</div>}
        {reviewUnit ? (
          <Session
            key="review"
            unit={reviewUnit}
            review
            student={student}
            onDone={() => {}}
            onExit={() => setReviewUnit(null)}
            progressKey={`raclass-review:${student.courseId}:${student.name}`}
          />
        ) : activeUnit ? (
          <Session
            key={activeUnit.id}
            unit={activeUnit}
            student={student}
            onDone={onSessionDone}
            onExit={() => setActiveUnitId(null)}
            progressKey={`raclass-progress:${student.courseId}:${student.name}:${activeUnit.id}`}
          />
        ) : tab === '문제풀이' ? (
          <UnitBoard course={course} records={records} onStart={setActiveUnitId} />
        ) : tab === '오답노트' ? (
          <WrongNote key={wrongsVersion} course={course} student={student} onReview={startReview} />
        ) : (
          <ParentReport course={course} studentName={student.name} records={records} />
        )}
      </main>
    </div>
  )
}
