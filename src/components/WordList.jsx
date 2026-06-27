import { useState } from 'react'

const FILTERS = [
  { key: 'all', label: '전체' },
  { key: 'unlearned', label: '미학습' },
  { key: 'learned', label: '학습완료' },
  { key: 'beginner', label: '초급' },
  { key: 'intermediate', label: '중급' },
  { key: 'advanced', label: '고급' },
]

export default function WordList({ words, learned, onLearn, onUnlearn }) {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = words.filter(w => {
    const matchFilter =
      filter === 'all' ? true :
      filter === 'learned' ? learned[w.id] :
      filter === 'unlearned' ? !learned[w.id] :
      w.level === filter
    const matchSearch = w.word.toLowerCase().includes(search.toLowerCase()) ||
      w.meaning.includes(search)
    return matchFilter && matchSearch
  })

  return (
    <div>
      <input
        type="text"
        placeholder="단어 또는 의미 검색..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%', padding: '10px 16px', borderRadius: 10,
          border: '2px solid var(--border)', fontSize: '0.95rem',
          marginBottom: 12, outline: 'none', fontFamily: 'inherit'
        }}
        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />

      <div className="wordlist-filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`filter-btn ${filter === f.key ? 'active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 12 }}>
        {filtered.length}개 단어
      </p>

      <div className="word-grid">
        {filtered.map(word => (
          <div key={word.id} className={`word-item ${learned[word.id] ? 'learned' : ''}`}>
            <div className="word-item-left">
              <div className="word-item-word">{word.word}</div>
              <div className="word-item-meaning">{word.meaning}</div>
              <div className="word-item-example">{word.example}</div>
            </div>
            <div className="word-item-right">
              <span className={`level-badge ${word.level}`}>{word.level}</span>
              <button
                className={`check-btn ${learned[word.id] ? 'checked' : ''}`}
                onClick={() => learned[word.id] ? onUnlearn(word.id) : onLearn(word.id)}
                title={learned[word.id] ? '학습 취소' : '학습 완료 표시'}
              >
                ✓
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
