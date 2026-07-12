import { useMemo, useState, useEffect, useRef } from 'react'
import Stars from './Stars'
import { starsFor } from '../config'
import { addWrong, removeWrong } from '../wrongs'
import { api } from '../api'

function normalize(str) {
  return String(str).trim().toLowerCase().replace(/\s+/g, ' ').replace(/[’‘]/g, "'")
}

export default function Session({ unit, onDone, onExit, progressKey, student, review }) {
  // 객관식 → 주관식 순서. uid/oNo는 오답노트용 원본 식별자(복습 세션에서도 원래 위치를 가리킴).
  const questions = useMemo(
    () => [
      ...unit.mc.map((q, i) => ({ ...q, type: 'mc', no: i, uid: q._uid || unit.id, oNo: q._no ?? i })),
      ...unit.sa.map((q, i) => ({ ...q, type: 'sa', no: i, uid: q._uid || unit.id, oNo: q._no ?? i })),
    ],
    [unit]
  )
  const mcTotal = unit.mc.length
  const saTotal = unit.sa.length

  // 이전에 풀다 나간 진행 상태 복원 (이어풀기)
  const saved = useMemo(() => {
    if (review) return null // 오답 복습은 이어풀기/이력 저장을 하지 않는다
    try {
      const s = JSON.parse(localStorage.getItem(progressKey) || 'null')
      if (s && typeof s.idx === 'number' && s.idx > 0 && s.idx < questions.length) return s
    } catch { /* ignore */ }
    return null
  }, [progressKey, questions.length, review])

  const [idx, setIdx] = useState(saved ? saved.idx : 0)
  const [selected, setSelected] = useState(null)
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [mcScore, setMcScore] = useState(saved?.mcScore ?? 0)
  const [saScore, setSaScore] = useState(saved?.saScore ?? 0)
  const [mcAnswered, setMcAnswered] = useState(saved?.mcAnswered ?? 0)
  const [saAnswered, setSaAnswered] = useState(saved?.saAnswered ?? 0)
  const [finished, setFinished] = useState(false)
  const [resumeHint, setResumeHint] = useState(!!saved)

  const saveProgress = (nextIdx) => {
    if (review) return
    try {
      localStorage.setItem(
        progressKey,
        JSON.stringify({ idx: nextIdx, mcScore, saScore, mcAnswered, saAnswered })
      )
    } catch { /* ignore */ }
  }
  const clearProgress = () => {
    try { localStorage.removeItem(progressKey) } catch { /* ignore */ }
  }
  const restart = () => {
    setIdx(0); setSelected(null); setInput(''); setChecked(false); setCorrect(false)
    setMcScore(0); setSaScore(0); setMcAnswered(0); setSaAnswered(0)
    setResumeHint(false)
    clearProgress()
  }

  const q = questions[idx]
  const isMc = q.type === 'mc'

  const check = () => {
    if (checked) return
    let ok = false
    if (isMc) {
      if (selected === null) return
      ok = selected === q.answer
    } else {
      if (input.trim() === '') return
      ok = q.answers.some((a) => normalize(a) === normalize(input))
    }
    setCorrect(ok)
    setChecked(true)
    if (isMc) setMcAnswered((a) => a + 1)
    else setSaAnswered((a) => a + 1)
    if (ok) {
      if (isMc) setMcScore((s) => s + 1)
      else setSaScore((s) => s + 1)
    }
    // 오답노트: 틀리면 추가, 맞히면 제거 (로컬 즉시 반영 + 서버 동기화)
    if (student) {
      const ref = { unitId: q.uid, type: q.type, no: q.oNo }
      if (ok) {
        removeWrong(student.courseId, student.name, ref)
        if (student.token) api.wrong(student.token, 'remove', ref).catch(() => {})
      } else {
        const item = { ...ref, given: isMc ? selected : input }
        addWrong(student.courseId, student.name, item)
        if (student.token) api.wrong(student.token, 'add', item).catch(() => {})
      }
    }
  }

  const next = () => {
    if (idx + 1 >= questions.length) {
      setFinished(true)
      clearProgress()
      onDone({ mc: mcScore, sa: saScore, mcTotal, saTotal })
    } else {
      const nextIdx = idx + 1
      setIdx(nextIdx)
      setSelected(null)
      setInput('')
      setChecked(false)
      setCorrect(false)
      setResumeHint(false)
      saveProgress(nextIdx)
    }
  }

  // 완료하지 않고 중도에 나가도 '푼 것까지' 서버에 기록한다 (언마운트 시 1회).
  // 뒤로가기·'나가기' 버튼 어느 쪽으로 빠져나가도 동일하게 동작.
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone
  const progressRef = useRef(null)
  progressRef.current = { mcScore, saScore, mcAnswered, saAnswered, finished }
  const savedPartialRef = useRef(false)
  useEffect(() => {
    return () => {
      const p = progressRef.current
      if (p.finished || savedPartialRef.current) return
      if (p.mcAnswered + p.saAnswered === 0) return
      savedPartialRef.current = true
      onDoneRef.current({
        mc: p.mcScore, sa: p.saScore, mcTotal: p.mcAnswered, saTotal: p.saAnswered, partial: true,
      })
    }
  }, [])

  if (finished) {
    const total = mcTotal + saTotal
    const totalScore = mcScore + saScore
    const percent = Math.round((totalScore / total) * 100)
    const stars = starsFor(percent)
    return (
      <div className="session-result">
        <div className="result-emoji">{percent >= 90 ? '🏆' : percent >= 60 ? '👍' : '💪'}</div>
        <h2>{review ? '오답 복습 완료!' : `${unit.title} 완료!`}</h2>
        <div className="result-scoreline">
          <div className="result-box">
            <div className="result-num">{mcScore}<span>/{mcTotal}</span></div>
            <div className="result-tag">객관식</div>
          </div>
          <div className="result-box">
            <div className="result-num">{saScore}<span>/{saTotal}</span></div>
            <div className="result-tag">주관식</div>
          </div>
          <div className="result-box">
            <div className="result-num">{percent}<span>%</span></div>
            <div className="result-tag">정답률</div>
          </div>
        </div>
        <div className="result-stars">
          숙제 성취도 <Stars count={stars} />
        </div>
        <p className="result-msg">
          {review
            ? '맞힌 문제는 오답노트에서 빠졌어요. 남은 오답은 계속 복습해요!'
            : '오늘 점수가 기록되었어요. 복습하면 별점이 올라가요!'}
        </p>
        <div className="result-actions">
          <button className="btn btn-outline" onClick={onExit}>{review ? '오답노트로' : '유닛 목록으로'}</button>
        </div>
      </div>
    )
  }

  const sectionLabel = isMc ? `객관식 ${q.no + 1}/${mcTotal}` : `주관식 ${q.no + 1}/${saTotal}`

  return (
    <div className="session">
      <div className="session-topbar">
        <button className="back-link" onClick={onExit}>← 나가기</button>
        <span className="session-section">{sectionLabel}</span>
        <span className="session-count">{idx + 1} / {questions.length}</span>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${(idx / questions.length) * 100}%` }} />
      </div>

      {resumeHint && (
        <div className="resume-hint">
          <span>↩️ 이어서 풀고 있어요 ({idx + 1}번 문제부터)</span>
          <button className="link-btn" onClick={restart}>처음부터</button>
        </div>
      )}

      <div className="q-card">
        <div className="q-type-badge">{isMc ? '객관식' : '주관식'}</div>
        <div className="q-text">
          {q.q.includes('\n')
            ? (() => {
                const nl = q.q.indexOf('\n')
                return (
                  <>
                    {q.q.slice(0, nl)}
                    <span className="q-en">{q.q.slice(nl + 1)}</span>
                  </>
                )
              })()
            : q.q}
        </div>

        {!isMc && q.ko && (
          <div className="q-ko"><span className="q-ko-tag">해석</span>{q.ko}</div>
        )}

        {checked && (
          <div className={`q-feedback ${correct ? 'correct' : 'wrong'}`}>
            <div className="fb-head">
              {correct
                ? '🎉 정답이에요!'
                : `❌ 정답: ${isMc ? q.options[q.answer] : q.answers.join(' / ')}`}
            </div>
            <div className="fb-explain">💬 {q.explain}</div>
          </div>
        )}

        {isMc ? (
          <div className="q-options">
            {q.options.map((opt, i) => {
              let cls = 'q-option'
              if (checked) {
                if (i === q.answer) cls += ' correct'
                else if (i === selected) cls += ' wrong'
              } else if (i === selected) cls += ' selected'
              return (
                <button key={i} className={cls} onClick={() => !checked && setSelected(i)} disabled={checked}>
                  <span className="opt-mark">{String.fromCharCode(9312 + i)}</span>
                  <span>{opt}</span>
                </button>
              )
            })}
          </div>
        ) : (
          <input
            className={`blank-input ${checked ? (correct ? 'correct' : 'wrong') : ''}`}
            placeholder="정답을 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
            disabled={checked}
            autoFocus
          />
        )}
      </div>

      <div className="session-actions">
        {!checked ? (
          <button
            className="btn btn-primary wide"
            onClick={check}
            disabled={isMc ? selected === null : input.trim() === ''}
          >
            정답 확인
          </button>
        ) : (
          <button className="btn btn-primary wide" onClick={next}>
            {idx + 1 >= questions.length ? '결과 보기' : '다음 ▶'}
          </button>
        )}
      </div>
    </div>
  )
}
