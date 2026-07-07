import { useState } from 'react'
import { courses } from '../grammarData'
import { siteInfo } from '../config'
import { api } from '../api'

export default function Login({ onLogin, onAdmin }) {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [courseId, setCourseId] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  // 어드민
  const [showAdmin, setShowAdmin] = useState(false)
  const [adminPw, setAdminPw] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setError(''); setNotice('')
    if (!courseId) return setError('반을 선택하세요.')
    if (!name.trim()) return setError('이름을 입력하세요.')
    if (!password) return setError('비밀번호를 입력하세요.')
    setBusy(true)
    try {
      if (mode === 'signup') {
        await api.signup(courseId, name.trim(), password)
        setNotice('가입 신청 완료! 선생님이 승인하면 로그인할 수 있어요. 👌')
        setMode('login'); setPassword('')
      } else {
        const res = await api.login(courseId, name.trim(), password)
        if (res.ok) {
          onLogin({ courseId, name: res.name, token: res.token, scores: res.scores || {} })
        } else if (res.status === 'pending') {
          setError('아직 승인 대기 중이에요. 선생님 승인 후 로그인해 주세요.')
        } else if (res.status === 'rejected') {
          setError('가입이 거절되었어요. 선생님께 문의하세요.')
        }
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const adminSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      const res = await api.adminLogin(adminPw)
      onAdmin(res.adminToken)
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  if (showAdmin) {
    return (
      <div className="login-wrap">
        <form className="login-card" onSubmit={adminSubmit}>
          <div className="login-emoji">🔑</div>
          <h2>선생님(어드민) 로그인</h2>
          <p className="login-desc">어드민 비밀번호를 입력하세요.</p>
          <input
            className="text-input"
            type="password"
            value={adminPw}
            onChange={(e) => setAdminPw(e.target.value)}
            placeholder="어드민 비밀번호"
            autoFocus
          />
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="btn btn-primary login-btn" disabled={busy}>
            {busy ? '확인 중…' : '어드민 입장'}
          </button>
          <button type="button" className="link-btn" onClick={() => { setShowAdmin(false); setError('') }}>
            ← 학생 로그인으로
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={submit}>
        <div className="login-emoji">📚</div>
        <h2>{mode === 'login' ? '오늘의 문법 연습' : '회원가입 신청'}</h2>
        <p className="login-desc">{siteInfo.subtitle}</p>

        <div className="seg">
          <button type="button" className={`seg-btn ${mode === 'login' ? 'active' : ''}`} onClick={() => { setMode('login'); setError(''); setNotice('') }}>로그인</button>
          <button type="button" className={`seg-btn ${mode === 'signup' ? 'active' : ''}`} onClick={() => { setMode('signup'); setError(''); setNotice('') }}>회원가입 신청</button>
        </div>

        <label className="field-label">반 선택</label>
        <div className="course-choices">
          {courses.map((c) => (
            <button type="button" key={c.id} className={`course-choice ${courseId === c.id ? 'active' : ''}`} onClick={() => setCourseId(c.id)}>
              {c.name}
            </button>
          ))}
        </div>

        <label className="field-label">이름</label>
        <input className="text-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력하세요" />

        <label className="field-label">비밀번호</label>
        <input className="text-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={mode === 'signup' ? '사용할 비밀번호' : '비밀번호'} />

        {error && <div className="login-error">{error}</div>}
        {notice && <div className="login-notice">{notice}</div>}

        <button type="submit" className="btn btn-primary login-btn" disabled={busy}>
          {busy ? '처리 중…' : mode === 'login' ? '로그인' : '가입 신청하기'}
        </button>

        <button type="button" className="link-btn" onClick={() => { setShowAdmin(true); setError('') }}>
          선생님(어드민) 로그인
        </button>
      </form>
    </div>
  )
}
