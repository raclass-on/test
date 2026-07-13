// ============================================================================
//  화면 문구 · 별점 기준 (프론트 표시용)
//  ※ 어드민 비밀번호는 코드가 아니라 Vercel 환경변수(ADMIN_PASSWORD)로 관리합니다.
// ============================================================================

export const siteInfo = {
  academy: '레이첼 영어학원',
  title: '여름방학 문법 특강',
  subtitle: '반을 선택하고 이름·비밀번호로 로그인하세요',
}

// ─ 카카오톡 공유 ─────────────────────────────────────────────
// 카카오 개발자 앱의 "JavaScript 키"(브라우저 노출 정상인 공개 키).
// 비우면 카톡 카드 없이 복사·기기공유로만 동작한다.
// ※ 이 키를 쓰려면 카카오 앱 [제품 링크 관리]와 [JavaScript SDK 도메인] 두 곳에
//    이 사이트 도메인(https://class-summer.vercel.app)을 등록해야 카드가 뜬다.
//    (아래 값은 레이첼영어학원 카카오 앱의 공개 JS 키 — 별도 앱을 쓰려면 이 값만 교체)
export const kakaoJsKey = 'c6f9a62b82d82f183410c261d7787377'

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
