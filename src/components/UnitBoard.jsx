import Stars from './Stars'

export default function UnitBoard({ course, records, onStart }) {
  return (
    <div className="unit-board">
      <p className="board-hint">
        유닛을 눌러 <b>객관식 25 + 주관식 10</b>문제를 풀어요. 예습으로 미리 풀고, 복습으로 다시 풀면 별점이 올라가요! 🌟
      </p>
      <div className="unit-grid">
        {course.units.map((u) => {
          const rec = records[u.id]
          const best = rec?.best
          return (
            <button key={u.id} className={`unit-card ${best ? 'attempted' : ''}`} onClick={() => onStart(u.id)}>
              <div className="unit-card-head">
                <span className="unit-no">Unit {u.unit}</span>
                {best && <Stars count={best.stars} />}
              </div>
              <div className="unit-title">{u.title}</div>
              <div className="unit-concept">{u.concept}</div>
              {best ? (
                <div className="unit-best">
                  최고: 객관식 {best.mc}/{best.mcTotal} · 주관식 {best.sa}/{best.saTotal}
                </div>
              ) : (
                <div className="unit-best muted">아직 풀지 않았어요 · 문제 {u.mc.length + u.sa.length}개</div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
