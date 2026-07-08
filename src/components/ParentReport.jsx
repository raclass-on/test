import Stars from './Stars'

export default function ParentReport({ course, studentName, records }) {
  // 진도 나간(한 번이라도 푼) 유닛만
  const doneUnits = course.units
    .map((u) => ({ unit: u, best: records[u.id]?.best }))
    .filter((x) => x.best)

  const avgStars = doneUnits.length
    ? Math.round(doneUnits.reduce((s, x) => s + x.best.stars, 0) / doneUnits.length)
    : 0

  if (doneUnits.length === 0) {
    return (
      <div className="report-empty">
        아직 푼 유닛이 없어요. 문제풀이 탭에서 유닛을 완료하면 성취도가 여기에 정리돼요.
      </div>
    )
  }

  return (
    <div className="report">
      <div className="report-card">
        <div className="report-header">
          <div>
            <div className="report-title">학부모 안내문</div>
            <div className="report-sub">{course.name} · {studentName} 학생</div>
          </div>
        </div>

        <div className="report-rows">
          {doneUnits.map((x) => (
            <div key={x.unit.id} className="report-row">
              <div className="report-unit">{x.unit.title}</div>
              <div className="report-scores">
                <span>객관식 {x.best.mc}/{x.best.mcTotal}</span>
                <span>주관식 {x.best.sa}/{x.best.saTotal}</span>
                <Stars count={x.best.stars} />
              </div>
            </div>
          ))}
        </div>

        <div className="report-summary">
          <span>종합 숙제 성취도</span>
          <Stars count={avgStars} />
          <span className="report-fraction">{avgStars}/5 · 학습 {doneUnits.length}/{course.units.length}유닛</span>
        </div>
      </div>
      <p className="report-note">
        ※ 점수는 각 유닛 <b>최고 기록</b> 기준입니다.
      </p>
    </div>
  )
}
