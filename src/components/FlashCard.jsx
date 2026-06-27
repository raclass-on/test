import { useState } from 'react'

export default function FlashCard({ words, learned, onLearn, onUnlearn }) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const word = words[index]
  const isLearned = learned[word.id]

  const next = () => {
    setFlipped(false)
    setTimeout(() => setIndex(i => (i + 1) % words.length), 150)
  }

  const prev = () => {
    setFlipped(false)
    setTimeout(() => setIndex(i => (i - 1 + words.length) % words.length), 150)
  }

  return (
    <div className="flashcard-container">
      <p className="card-counter">{index + 1} / {words.length}</p>

      <div className="card" onClick={() => setFlipped(f => !f)}>
        <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
          <div className="card-front">
            <span className={`card-level ${word.level}`}>{word.level}</span>
            <div className="card-word">{word.word}</div>
            <div className="card-hint">탭하여 의미 확인 👆</div>
          </div>
          <div className="card-back">
            <div className="card-meaning">{word.meaning}</div>
            <div className="card-example">"{word.example}"</div>
          </div>
        </div>
      </div>

      <div className="card-actions">
        <button className="btn btn-outline" onClick={prev}>◀ 이전</button>
        {isLearned ? (
          <button className="btn btn-outline" onClick={() => onUnlearn(word.id)}>
            ✅ 학습완료 취소
          </button>
        ) : (
          <button className="btn btn-success" onClick={() => onLearn(word.id)}>
            ✓ 외웠어요!
          </button>
        )}
        <button className="btn btn-outline" onClick={next}>다음 ▶</button>
      </div>

      {isLearned && (
        <div className="learned-badge">✅ 학습 완료된 단어입니다</div>
      )}
    </div>
  )
}
