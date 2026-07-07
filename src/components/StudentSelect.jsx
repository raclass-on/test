import { students, getUnitsForStudent } from '../grammar'

export default function StudentSelect({ onSelect }) {
  return (
    <div className="select-container">
      <div className="select-intro">
        <div className="select-emoji">✏️</div>
        <h2>누구인가요?</h2>
        <p>본인의 반(또는 이름)을 선택하면 배정된 문법 범위가 열려요.</p>
      </div>

      <div className="student-grid">
        {students.map((s) => {
          const count = getUnitsForStudent(s).length
          return (
            <button
              key={s.id}
              className="student-card"
              onClick={() => onSelect(s)}
            >
              <span className="student-name">{s.name}</span>
              <span className="student-meta">문법 {count}단원</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
