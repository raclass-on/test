// ============================================================================
//  화면 문구 · 별점 기준 (프론트 표시용)
//  ※ 어드민 비밀번호는 코드가 아니라 Vercel 환경변수(ADMIN_PASSWORD)로 관리합니다.
// ============================================================================

export const siteInfo = {
  academy: '레이첼 영어학원',
  title: '여름방학 문법 특강',
  subtitle: '반을 선택하고 이름·비밀번호로 로그인하세요',
}

// 숙제 성취도 별점 기준 (정답률 %) — 서버와 동일하게 유지
export const starRules = [
  { min: 90, stars: 5 },
  { min: 75, stars: 4 },
  { min: 60, stars: 3 },
  { min: 40, stars: 2 },
  { min: 0, stars: 1 },
]

export function starsFor(percent) {
  const rule = starRules.find((r) => percent >= r.min)
  return rule ? rule.stars : 1
}
