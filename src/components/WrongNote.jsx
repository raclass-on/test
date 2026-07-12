import { useState } from 'react'
import { loadWrongs, clearWrongs } from '../wrongs'
import { api } from '../api'

// 문제 텍스트: 지시문(한글) + 영어문장 줄바꿈 표시
function QText({ q }) {
  const nl = q.indexOf('\n')
  if (nl < 0) return <div className="wn-q">{q}</div>
  return (
    <div className="wn-q">
      {q.slice(0, nl)}
      <span className="wn-q-en">{q.slice(nl + 1)}</span>
    </div>
  )
}

export default function WrongNote({ course, student, onReview }) {
  // 마운트 시 localStorage에서 최신 오답을 읽는다 (복습 후 돌아오면 자동 갱신)
  const [wrongs, setWrongs] = useState(() => loadWrongs(student.courseId, student.name))

  // 오답을 유닛별로 묶고 실제 문제로 해석
  const byUnit = course.units
    .map((u) => {
      const items = wrongs
        .filter((w) => w.unitId === u.id)
        .map((w) => {
          const src = w.type === 'mc' ? u.mc[w.no] : u.sa[w.no]
          if (!src) return null
          const correct = w.type === 'mc' ? src.options[src.answer] : src.answers.join(' / ')
          const given =
            w.type === 'mc'
              ? (src.options[w.given] ?? '(무응답)')
              : (w.given || '(무응답)')
          return { key: `${w.type}-${w.no}`, q: src.q, correct, given, explain: src.explain, type: w.type }
        })
        .filter(Boolean)
      return { unit: u, items }
    })
    .filter((g) => g.items.length > 0)

  const total = byUnit.reduce((s, g) => s + g.items.length, 0)

  const clearAll = () => {
    if (!confirm('오답노트를 전부 비울까요? (모든 기기에서 지워져요)')) return
    clearWrongs(student.courseId, student.name)
    if (student.token) api.wrong(student.token, 'clear').catch(() => {})
    setWrongs([])
  }

  if (total === 0) {
    return (
      <div className="report-empty">
        아직 오답이 없어요. 문제를 풀다가 틀리면 여기에 모여요. 틀린 문제만 골라 다시 풀 수 있어요! ✏️
      </div>
    )
  }

  return (
    <div className="wn">
      <div className="wn-head">
        <div className="wn-title">틀린 문제 <span className="pill">{total}</span></div>
        <div className="wn-actions">
          <button className="btn btn-primary small" onClick={onReview}>✏️ 오답 다시 풀기</button>
          <button className="link-btn" onClick={clearAll}>전체 비우기</button>
        </div>
      </div>
      <p className="admin-empty" style={{ marginTop: 0 }}>
        다시 풀어서 맞히면 오답노트에서 자동으로 빠져요.
      </p>

      {byUnit.map(({ unit, items }) => (
        <div key={unit.id} className="wn-unit">
          <h3 className="wn-unit-title">{unit.title} <span className="muted small">· {items.length}문제</span></h3>
          {items.map((it) => (
            <div key={it.key} className="wn-item">
              <div className="wn-badge">{it.type === 'mc' ? '객관식' : '주관식'}</div>
              <QText q={it.q} />
              <div className="wn-answers">
                <span className="wn-wrong">내 답: {it.given}</span>
                <span className="wn-correct">정답: {it.correct}</span>
              </div>
              {it.explain && <div className="wn-explain">💬 {it.explain}</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
