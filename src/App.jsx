import { useState, useEffect } from 'react'
import StudentSelect from './components/StudentSelect'
import UnitList from './components/UnitList'
import Practice from './components/Practice'
import GrammarProgress from './components/GrammarProgress'
import { students, getUnitsForStudent } from './grammar'
import './App.css'

const TABS = ['문제풀이', '내 진도']

export default function App() {
  // 현재 접속한 학생
  const [student, setStudent] = useState(() => {
    const savedId = localStorage.getItem('currentStudent')
    return students.find((s) => s.id === savedId) || null
  })

  // 학생별 진도: { [studentId]: { [unitId]: { solved, best, total } } }
  const [allProgress, setAllProgress] = useState(() => {
    const saved = localStorage.getItem('grammarProgress')
    return saved ? JSON.parse(saved) : {}
  })

  const [activeTab, setActiveTab] = useState('문제풀이')
  const [openUnitId, setOpenUnitId] = useState(null)

  useEffect(() => {
    localStorage.setItem('grammarProgress', JSON.stringify(allProgress))
  }, [allProgress])

  const selectStudent = (s) => {
    setStudent(s)
    localStorage.setItem('currentStudent', s.id)
    setActiveTab('문제풀이')
    setOpenUnitId(null)
  }

  const logout = () => {
    setStudent(null)
    localStorage.removeItem('currentStudent')
    setOpenUnitId(null)
  }

  if (!student) {
    return (
      <div className="app">
        <header className="header">
          <div className="header-inner">
            <h1 className="logo">📝 문법 연습소</h1>
            <p className="subtitle">여름방학 문법 예습·복습 · 접속한 학생에 맞는 범위로 연습해요</p>
          </div>
        </header>
        <main className="main">
          <StudentSelect onSelect={selectStudent} />
        </main>
      </div>
    )
  }

  const myUnits = getUnitsForStudent(student)
  const myProgress = allProgress[student.id] || {}
  const openUnit = myUnits.find((u) => u.id === openUnitId)

  const recordResult = (unitId, total, score) => {
    setAllProgress((prev) => {
      const sp = prev[student.id] || {}
      const existing = sp[unitId] || { solved: 0, best: 0, total }
      return {
        ...prev,
        [student.id]: {
          ...sp,
          [unitId]: {
            total,
            solved: Math.max(existing.solved, score),
            best: Math.max(existing.best, score),
          },
        },
      }
    })
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner header-row">
          <div>
            <h1 className="logo">📝 문법 연습소</h1>
            <p className="subtitle">여름방학 문법 예습·복습</p>
          </div>
          <button className="logout-btn" onClick={logout}>학생 변경</button>
        </div>
        <div className="stats-bar">
          <span>👤 {student.name}</span>
          <span>배정 단원 {myUnits.length}개</span>
        </div>
      </header>

      {!openUnit && (
        <nav className="tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      )}

      <main className="main">
        {openUnit ? (
          <Practice
            unit={openUnit}
            onFinish={(total, score) => recordResult(openUnit.id, total, score)}
            onExit={() => setOpenUnitId(null)}
          />
        ) : activeTab === '문제풀이' ? (
          <UnitList units={myUnits} progress={myProgress} onOpen={setOpenUnitId} />
        ) : (
          <GrammarProgress units={myUnits} progress={myProgress} onOpen={(id) => setOpenUnitId(id)} />
        )}
      </main>
    </div>
  )
}
