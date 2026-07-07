export default function UnitList({ units, progress, onOpen }) {
  return (
    <div className="unit-list">
      <p className="unit-list-hint">
        아래 단원을 눌러 문제를 풀어보세요. 예습으로 미리 풀고, 복습으로 다시 풀면 좋아요! 🌱
      </p>
      <div className="unit-grid">
        {units.map((unit) => {
          const p = progress[unit.id]
          const total = unit.questions.length
          const solved = p ? p.solved : 0
          const best = p ? p.best : 0
          const pct = total > 0 ? Math.round((solved / total) * 100) : 0
          const bestPct = total > 0 ? Math.round((best / total) * 100) : 0
          const done = best === total && total > 0

          return (
            <button
              key={unit.id}
              className={`unit-card ${done ? 'done' : ''}`}
              onClick={() => onOpen(unit.id)}
            >
              <div className="unit-card-top">
                <span className="unit-icon">{unit.icon || '📘'}</span>
                {done && <span className="unit-done-badge">✅ 완료</span>}
              </div>
              <div className="unit-title">{unit.title}</div>
              <div className="unit-summary">{unit.summary}</div>
              <div className="unit-progress-track">
                <div className="unit-progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className="unit-progress-label">
                {p
                  ? `최고 점수 ${best}/${total} (${bestPct}%)`
                  : `문제 ${total}개 · 아직 안 풀었어요`}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
