import { useState, useEffect } from 'react'

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

function buildQuestions(words) {
  return shuffle(words).slice(0, 10).map(word => {
    const wrong = shuffle(words.filter(w => w.id !== word.id)).slice(0, 3)
    const options = shuffle([word, ...wrong])
    return { word, options }
  })
}

export default function Quiz({ words }) {
  const [questions, setQuestions] = useState(() => buildQuestions(words))
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[current]

  const handleSelect = (option) => {
    if (selected !== null) return
    setSelected(option)
    if (option.id === q.word.id) setScore(s => s + 1)

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setDone(true)
      } else {
        setCurrent(c => c + 1)
        setSelected(null)
      }
    }, 1200)
  }

  const restart = () => {
    setQuestions(buildQuestions(words))
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>
            {pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}
          </div>
          <div className="quiz-score">{score}/{questions.length}</div>
          <div className="quiz-score-label">정답률 {pct}%</div>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
            {pct >= 80 ? '훌륭해요! 잘 외우셨네요.' : pct >= 50 ? '좋아요! 조금 더 연습해봐요.' : '단어카드로 다시 공부해봐요!'}
          </p>
          <button className="btn btn-primary" onClick={restart}>다시 풀기</button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {current + 1} / {questions.length}
        </span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          점수: {score}
        </span>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${(current / questions.length) * 100}%` }} />
      </div>

      <div className="quiz-card">
        <div className="quiz-question">이 단어의 한국어 의미는?</div>
        <div className="quiz-word">{q.word.word}</div>
        <div className="quiz-example">"{q.word.example}"</div>
      </div>

      <div className="quiz-options">
        {q.options.map(option => {
          let cls = 'quiz-option'
          if (selected !== null) {
            if (option.id === q.word.id) cls += ' correct'
            else if (option.id === selected.id) cls += ' wrong'
          }
          return (
            <button
              key={option.id}
              className={cls}
              onClick={() => handleSelect(option)}
              disabled={selected !== null}
            >
              {option.meaning}
            </button>
          )
        })}
      </div>

      {selected && (
        <div className={`quiz-feedback ${selected.id === q.word.id ? 'correct' : 'wrong'}`}>
          {selected.id === q.word.id ? '🎉 정답입니다!' : `❌ 오답 — 정답: ${q.word.meaning}`}
        </div>
      )}
    </div>
  )
}
