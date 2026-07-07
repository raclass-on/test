import { useState } from 'react'
import Login from './components/Login'
import UnitBoard from './components/UnitBoard'
import Session from './components/Session'
import ParentReport from './components/ParentReport'
import { courses } from './grammarData'
import { siteInfo } from './config'
import { loadRecords, recordAttempt, userKey } from './storage'
import './App.css'

const TABS = ['문제풀이', '학부모 안내']

export default function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('currentUser')) || null
    } catch {
      return null
    }
  })
  const [records, setRecords] = useState(loadRecords)
  const [tab, setTab] = useState('문제풀이')
  const [activeUnitId, setActiveUnitId] = useState(null)

  const login = (u) => {
    setUser(u)
    sessionStorage.setItem('currentUser', JSON.stringify(u))
    setTab('문제풀이')
    setActiveUnitId(null)
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem('currentUser')
    setActiveUnitId(null)
  }

  if (!user) {
    return (
      <div className="app">
        <header className="header">
          <div className="header-inner">
            <h1 className="logo">📝 {siteInfo.academy}</h1>
            <p className="subtitle">{siteInfo.title}</p>
          </div>
        </header>
        <main className="main">
          <Login onLogin={login} />
        </main>
      </div>
    )
  }

  const course = courses.find((c) => c.id === user.courseId)
  const myRecords = records[userKey(user.courseId, user.name)] || {}
  const activeUnit = course.units.find((u) => u.id === activeUnitId)

  const onSessionDone = (result) => {
    const { records: next } = recordAttempt(records, user.courseId, user.name, activeUnitId, result)
    setRecords(next)
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
          <span>👤 {user.name}</span>
        </div>
      </header>

      {!activeUnit && (
        <nav className="tabs">
          {TABS.map((t) => (
            <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </nav>
      )}

      <main className="main">
        {activeUnit ? (
          <Session
            key={activeUnit.id}
            unit={activeUnit}
            onDone={onSessionDone}
            onExit={() => setActiveUnitId(null)}
          />
        ) : tab === '문제풀이' ? (
          <UnitBoard course={course} records={myRecords} onStart={setActiveUnitId} />
        ) : (
          <ParentReport course={course} studentName={user.name} records={myRecords} />
        )}
      </main>
    </div>
  )
}
