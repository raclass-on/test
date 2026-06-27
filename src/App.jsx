import { useState, useEffect } from 'react'
import FlashCard from './components/FlashCard'
import Quiz from './components/Quiz'
import WordList from './components/WordList'
import Progress from './components/Progress'
import { wordList } from './words'
import './App.css'

const TABS = ['단어카드', '퀴즈', '단어목록', '내 진도']

export default function App() {
  const [activeTab, setActiveTab] = useState('단어카드')
  const [learned, setLearned] = useState(() => {
    const saved = localStorage.getItem('learnedWords')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('learnedWords', JSON.stringify(learned))
  }, [learned])

  const markLearned = (id) => setLearned(prev => ({ ...prev, [id]: true }))
  const markUnlearned = (id) => setLearned(prev => {
    const next = { ...prev }
    delete next[id]
    return next
  })

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">📚 영단어 마스터</h1>
          <p className="subtitle">매일 꾸준히 단어를 외워보세요!</p>
        </div>
        <div className="stats-bar">
          <span>전체 {wordList.length}개</span>
          <span>학습완료 {Object.keys(learned).length}개</span>
          <span>남은 단어 {wordList.length - Object.keys(learned).length}개</span>
        </div>
      </header>

      <nav className="tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="main">
        {activeTab === '단어카드' && (
          <FlashCard words={wordList} learned={learned} onLearn={markLearned} onUnlearn={markUnlearned} />
        )}
        {activeTab === '퀴즈' && (
          <Quiz words={wordList} learned={learned} />
        )}
        {activeTab === '단어목록' && (
          <WordList words={wordList} learned={learned} onLearn={markLearned} onUnlearn={markUnlearned} />
        )}
        {activeTab === '내 진도' && (
          <Progress words={wordList} learned={learned} />
        )}
      </main>
    </div>
  )
}
