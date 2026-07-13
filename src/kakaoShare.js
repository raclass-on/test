// ============================================================================
//  카카오톡 공유 (Kakao JS SDK v2) — 키 없으면 호출부에서 복사·기기공유로 폴백
//  JavaScript 키는 브라우저 노출이 정상인 공개 키(비밀 아님).
// ============================================================================

const SDK_URL = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js'
let sdkLoading = null

/** Kakao SDK를 1회만 동적 로드하고 JS 키로 초기화한다. */
export function loadKakaoSdk(jsKey) {
  const key = (jsKey || '').trim()
  if (!key) return Promise.reject(new Error('카카오 JavaScript 키가 없습니다.'))
  if (typeof window === 'undefined') return Promise.reject(new Error('브라우저에서만 사용할 수 있습니다.'))
  if (window.Kakao?.isInitialized?.()) return Promise.resolve()
  if (!sdkLoading) {
    sdkLoading = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${SDK_URL}"]`)
      const onReady = () => {
        try {
          if (!window.Kakao) throw new Error('Kakao SDK 로드 실패')
          if (!window.Kakao.isInitialized()) window.Kakao.init(key)
          resolve()
        } catch (e) { reject(e) }
      }
      if (existing) { onReady(); return }
      const s = document.createElement('script')
      s.src = SDK_URL
      s.async = true
      s.onload = onReady
      s.onerror = () => { sdkLoading = null; reject(new Error('카카오 SDK 로드에 실패했습니다.')) }
      document.head.appendChild(s)
    })
  }
  return sdkLoading
}

/**
 * 하이브리드 공유. 반환값 = 실제 사용된 방식 ('kakao' | 'native' | 'copied')
 * @param {{title:string, text:string, linkUrl?:string, buttonTitle?:string}} p
 * @param {string} [jsKey] 카카오 JS 키 (없으면 native/copy 폴백)
 */
export async function shareSmart({ title, text, linkUrl, buttonTitle }, jsKey) {
  const url = (linkUrl || '').trim()
  const btn = (buttonTitle || '전체 레포트 보기').trim()

  // 1) 카카오 카드 (키가 있을 때) — 카톡 text 템플릿 200자 제한
  if ((jsKey || '').trim()) {
    await loadKakaoSdk(jsKey)
    const body = text.length > 200 ? text.slice(0, 199) + '…' : text
    const payload = { objectType: 'text', text: body }
    if (url) {
      payload.link = { mobileWebUrl: url, webUrl: url }
      payload.buttonTitle = btn
    } else {
      payload.link = { mobileWebUrl: window.location.origin, webUrl: window.location.origin }
    }
    window.Kakao.Share.sendDefault(payload)
    return 'kakao'
  }

  // 버튼이 없는 폴백에서는 링크를 본문 끝에 붙여 전달
  const full = url ? `${text}\n\n${btn}:\n${url}` : text

  // 2) 기기 기본 공유 시트 (모바일 — 카톡 선택 가능)
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({ title, text: full })
      return 'native'
    } catch (e) {
      if (e?.name === 'AbortError') return 'native' // 사용자가 닫음 — 정상
    }
  }

  // 3) 클립보드 복사 (PC)
  await navigator.clipboard.writeText(full)
  return 'copied'
}
