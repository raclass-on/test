import { BRAND, COUNTDOWN_SECONDS, SHOT_COUNT } from '../config'
import { cls } from '../lib/hooks'
import { LAYOUTS } from '../lib/layouts'
import { CameraIcon, ExpandIcon } from './Icons'
import LayoutPreview from './LayoutPreview'

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen?.()
  else document.documentElement.requestFullscreen?.().catch(() => {})
}

export default function Home({ layoutId, onLayout, onStart }) {
  return (
    <div className="home">
      <header className="topbar">
        <span />
        <button className="icon-btn" onClick={toggleFullscreen} aria-label="전체화면">
          <ExpandIcon />
        </button>
      </header>

      <main className="home-main">
        <div className="home-logo" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <h1>{BRAND}</h1>
        <p className="home-sub">
          {COUNTDOWN_SECONDS}초 카운트다운으로 {SHOT_COUNT}장을 찍고, 예쁘게 꾸며서
          <br />
          QR 코드로 각자 휴대폰에 저장하세요
        </p>

        <section className="home-section">
          <h2>프레임 모양</h2>
          <div className="layout-pick">
            {Object.values(LAYOUTS).map((l) => (
              <button
                key={l.id}
                className={cls('layout-card', l.id === layoutId && 'active')}
                onClick={() => onLayout(l.id)}
              >
                <LayoutPreview layout={l} height={130} />
                <span>{l.name}</span>
              </button>
            ))}
          </div>
        </section>

        <button className="primary-btn start-btn" onClick={onStart}>
          <CameraIcon size={28} /> 촬영 시작
        </button>

        <ol className="home-steps">
          <li>
            <b>1</b> {COUNTDOWN_SECONDS}초마다 한 장씩, 총 {SHOT_COUNT}장
          </li>
          <li>
            <b>2</b> 프레임 · 스티커 · 필터로 꾸미기
          </li>
          <li>
            <b>3</b> QR 코드로 내 폰에 저장
          </li>
        </ol>
      </main>
    </div>
  )
}
