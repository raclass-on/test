export default function GrammarProgress({ units, progress, onOpen }) {
  const totalUnits = units.length
  const totalQuestions = units.reduce((sum, u) => sum + u.questions.length, 0)
  const attempted = units.filter((u) => progress[u.id]).length
  const mastered = units.filter((u) => {
    const p = progress[u.id]
    return p && p.best === u.questions.length && u.questions.length > 0
  }).length
  const bestSum = units.reduce((sum, u) => sum + (progress[u.id]?.best || 0), 0)
  const pct = totalQuestions > 0 ? Math.round((bestSum / totalQuestions) * 100) : 0

  return (
    <div className="progress-container">
      <div className="progress-card">
        <h2>전체 진도</h2>
        <div className="progress-stats">
          <div className="stat-item">
            <div className="stat-value">{attempted}/{totalUnits}</div>
            <div className="stat-label">푼 단원</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{mastered}</div>
            <div className="stat-label">완료 단원</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{pct}%</div>
            <div className="stat-label">전체 정답률</div>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div className="quiz-progress-bar" style={{ height: 14, borderRadius: 7 }}>
            <div
              className="quiz-progress-fill"
              style={{ width: `${pct}%`, background: pct >= 80 ? 'var(--success)' : 'var(--primary)' }}
            />
          </div>
        </div>
      </div>

      <div className="progress-card">
        <h2>단원별 성취도</h2>
        <div className="bar-container">
          {units.map((u) => {
            const p = progress[u.id]
            const total = u.questions.length
            const best = p?.best || 0
            const upct = total > 0 ? Math.round((best / total) * 100) : 0
            return (
              <button key={u.id} className="unit-bar-row" onClick={() => onOpen(u.id)}>
                <div className="unit-bar-label">{u.icon} {u.title}</div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${upct}%`,
                      background: best === total && total > 0 ? 'var(--success)' : 'var(--primary)',
                    }}
                  />
                </div>
                <div className="bar-count">{best}/{total}</div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
