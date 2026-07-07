import { useState } from 'react'

function normalize(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[’‘]/g, "'")
}

export default function Practice({ unit, onFinish, onExit }) {
  const questions = unit.questions
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null) // choice: option index
  const [input, setInput] = useState('') // blank: typed answer
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[current]

  const check = () => {
    if (checked) return
    let isRight = false
    if (q.type === 'choice') {
      if (selected === null) return
      isRight = selected === q.answer
    } else {
      if (input.trim() === '') return
      isRight = q.answer.some((a) => normalize(a) === normalize(input))
    }
    setCorrect(isRight)
    setChecked(true)
    if (isRight) setScore((s) => s + 1)
  }

  const next = () => {
    if (current + 1 >= questions.length) {
      setDone(true)
      onFinish(questions.length, score) // score already includes current if correct
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setInput('')
      setChecked(false)
      setCorrect(false)
    }
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setInput('')
    setChecked(false)
    setCorrect(false)
    setScore(0)
    setDone(false)
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="practice-result">
        <div style={{ fontSize: '3rem' }}>
          {pct === 100 ? '🏆' : pct >= 60 ? '👍' : '💪'}
        </div>
        <div className="practice-score">{score}/{questions.length}</div>
        <div className="practice-score-label">정답률 {pct}%</div>
        <p className="practice-msg">
          {pct === 100
            ? '완벽해요! 이 단원은 자신 있게 넘어가도 좋아요.'
            : pct >= 60
              ? '잘했어요! 틀린 문제는 해설을 다시 읽어봐요.'
              : '핵심 정리를 다시 보고 한 번 더 풀어봐요!'}
        </p>
        <div className="practice-result-actions">
          <button className="btn btn-primary" onClick={restart}>다시 풀기</button>
          <button className="btn btn-outline" onClick={onExit}>단원 목록으로</button>
        </div>
      </div>
    )
  }

  return (
    <div className="practice-container">
      <div className="practice-topbar">
        <button className="back-link" onClick={onExit}>← 단원 목록</button>
        <span className="practice-count">{current + 1} / {questions.length}</span>
      </div>

      <div className="practice-summary">
        <span className="practice-summary-icon">{unit.icon || '📘'}</span>
        <div>
          <div className="practice-summary-title">{unit.title}</div>
          <div className="practice-summary-text">{unit.summary}</div>
        </div>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${(current / questions.length) * 100}%` }} />
      </div>

      <div className="practice-card">
        <div className="practice-question">{q.question}</div>

        {q.type === 'choice' ? (
          <div className="practice-options">
            {q.options.map((opt, i) => {
              let cls = 'quiz-option'
              if (checked) {
                if (i === q.answer) cls += ' correct'
                else if (i === selected) cls += ' wrong'
              } else if (i === selected) {
                cls += ' selected'
              }
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => !checked && setSelected(i)}
                  disabled={checked}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="practice-blank">
            <input
              type="text"
              className={`blank-input ${checked ? (correct ? 'correct' : 'wrong') : ''}`}
              placeholder="정답을 입력하세요"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
              disabled={checked}
              autoFocus
            />
          </div>
        )}
      </div>

      {checked && (
        <div className={`practice-feedback ${correct ? 'correct' : 'wrong'}`}>
          <div className="feedback-head">
            {correct ? '🎉 정답이에요!' : `❌ 아쉬워요 — 정답: ${q.type === 'blank' ? q.answer.join(' 또는 ') : q.options[q.answer]}`}
          </div>
          <div className="feedback-explain">💬 {q.explanation}</div>
        </div>
      )}

      <div className="practice-actions">
        {!checked ? (
          <button
            className="btn btn-primary"
            onClick={check}
            disabled={q.type === 'choice' ? selected === null : input.trim() === ''}
          >
            정답 확인
          </button>
        ) : (
          <button className="btn btn-primary" onClick={next}>
            {current + 1 >= questions.length ? '결과 보기' : '다음 문제 ▶'}
          </button>
        )}
      </div>
    </div>
  )
}
