// 백엔드(Vercel 서버리스 함수 /api) 호출 클라이언트
const ENDPOINT = '/api'

async function call(action, payload = {}) {
  let res
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action, ...payload }),
    })
  } catch {
    throw new Error('네트워크 오류예요. 잠시 후 다시 시도해 주세요.')
  }
  let data = {}
  try {
    data = await res.json()
  } catch {
    /* ignore */
  }
  if (!res.ok) throw new Error(data.error || '요청에 실패했어요.')
  return data
}

export const api = {
  signup: (course, name, password) => call('signup', { course, name, password }),
  login: (course, name, password) => call('login', { course, name, password }),
  myScores: (token) => call('my-scores', { token }),
  score: (token, payload) => call('score', { token, ...payload }),
  myWrongs: (token) => call('my-wrongs', { token }),
  wrong: (token, op, item) => call('wrong', { token, op, item }),
  adminLogin: (password) => call('admin-login', { password }),
  adminList: (adminToken) => call('admin-list', { adminToken }),
  adminUpdate: (adminToken, course, name, op) => call('admin-update', { adminToken, course, name, op }),
  adminSetPassword: (adminToken, course, name, newPassword) => call('admin-set-password', { adminToken, course, name, newPassword }),
  adminScores: (adminToken) => call('admin-scores', { adminToken }),
  saveReport: (adminToken, html) => call('save-report', { adminToken, html }),
}
