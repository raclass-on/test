export default function Progress({ words, learned }) {
  const learnedCount = Object.keys(learned).length
  const total = words.length

  const byLevel = ['beginner', 'intermediate', 'advanced'].map(level => {
    const levelWords = words.filter(w => w.level === level)
    const learnedInLevel = levelWords.filter(w => learned[w.id]).length
    return { level, total: levelWords.length, learned: learnedInLevel }
  })

  const levelLabel = { beginner: '초급', intermediate: '중급', advanced: '고급' }

  const recentLearned = words.filter(w => learned[w.id]).slice(0, 5)

  const pct = total > 0 ? Math.round((learnedCount / total) * 100) : 0

  return (
    <div className="progress-container">
      <div className="progress-card">
        <h2>전체 진도</h2>
        <div className="progress-stats">
          <div className="stat-item">
            <div className="stat-value">{learnedCount}</div>
            <div className="stat-label">학습 완료</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{total - learnedCount}</div>
            <div className="stat-label">미학습</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{pct}%</div>
            <div className="stat-label">달성률</div>
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
        <h2>레벨별 진도</h2>
        <div className="bar-container">
          {byLevel.map(({ level, total: t, learned: l }) => (
            <div key={level} className="bar-row">
              <div className="bar-label">{levelLabel[level]}</div>
              <div className="bar-track">
                <div
                  className={`bar-fill ${level}`}
                  style={{ width: t > 0 ? `${(l / t) * 100}%` : '0%' }}
                />
              </div>
              <div className="bar-count">{l}/{t}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-card">
        <h2>학습 완료 단어 ({learnedCount}개)</h2>
        {recentLearned.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            아직 학습한 단어가 없어요. 단어카드에서 시작해보세요!
          </p>
        ) : (
          <div className="recent-learned">
            {recentLearned.map(w => (
              <div key={w.id} className="recent-word-item">
                <span className="recent-word">{w.word}</span>
                <span className="recent-meaning">{w.meaning}</span>
              </div>
            ))}
            {learnedCount > 5 && (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center' }}>
                외 {learnedCount - 5}개 더...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
