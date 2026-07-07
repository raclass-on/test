import { useState } from 'react'
import { courses } from '../grammarData'
import { coursePasswords, siteInfo } from '../config'

export default function Login({ onLogin }) {
  const [courseId, setCourseId] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!courseId) return setError('반을 선택하세요.')
    if (!name.trim()) return setError('이름을 입력하세요.')
    if (password !== coursePasswords[courseId]) return setError('비밀번호가 올바르지 않아요.')
    setError('')
    onLogin({ courseId, name: name.trim() })
  }

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={submit}>
        <div className="login-emoji">📚</div>
        <h2>오늘의 문법 연습</h2>
        <p className="login-desc">{siteInfo.subtitle}</p>

        <label className="field-label">반 선택</label>
        <div className="course-choices">
          {courses.map((c) => (
            <button
              type="button"
              key={c.id}
              className={`course-choice ${courseId === c.id ? 'active' : ''}`}
              onClick={() => setCourseId(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <label className="field-label">이름</label>
        <input
          className="text-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />

        <label className="field-label">비밀번호</label>
        <input
          className="text-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="반 비밀번호"
        />

        {error && <div className="login-error">{error}</div>}

        <button type="submit" className="btn btn-primary login-btn">시작하기</button>
      </form>
    </div>
  )
}
