import { useEffect, useState } from 'react'
import { BRAND } from '../config'
import { DownloadIcon, ShareIcon } from '../components/Icons'
import { canShareFile, extensionFor, shareFile } from '../lib/save'

const id = new URLSearchParams(location.search).get('id') ?? location.pathname.split('/').filter(Boolean).pop()
const ua = navigator.userAgent
const isIOS = /iP(hone|ad|od)/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
const isKakao = /KAKAOTALK/i.test(ua)
const fileUrl = (kind) => `/api/file/${encodeURIComponent(id)}/${kind}`

function dateLabel(ms) {
  const d = new Date(ms)
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`
}

async function fetchFile(kind, type) {
  const res = await fetch(fileUrl(kind))
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const blob = await res.blob()
  return new File([blob], `fourcut-${id.slice(-4)}.${extensionFor(type)}`, { type })
}

export default function ShareApp() {
  const [info, setInfo] = useState(null)
  const [error, setError] = useState(null)
  const [tab, setTab] = useState('photo')
  const [files, setFiles] = useState({})
  const [notice, setNotice] = useState(null)

  useEffect(() => {
    fetch(`/api/share/${encodeURIComponent(id)}`)
      .then(async (res) => {
        if (res.status === 404) throw new Error('사진을 찾을 수 없어요. QR 코드를 다시 찍어 주세요.')
        if (res.status === 410) throw new Error('보관 기간이 지나 사진이 삭제되었어요.')
        if (!res.ok) throw new Error('잠시 후 다시 시도해 주세요.')
        return res.json()
      })
      .then((data) => {
        setInfo(data)
        // 공유 시트는 클릭 직후에만 열 수 있어서 파일을 미리 받아 둠
        for (const kind of ['photo', 'video']) {
          if (!data[kind]) continue
          fetchFile(kind, data[kind].type)
            .then((file) => setFiles((f) => ({ ...f, [kind]: file })))
            .catch(() => {})
        }
      })
      .catch((err) => setError(err.message))
  }, [])

  const file = files[tab]
  const shareable = file && canShareFile(file)

  async function save() {
    // 아이폰은 공유 시트의 '이미지 저장'/'비디오 저장'이 사진 앱으로 바로 저장됨
    if (isIOS && shareable) {
      try {
        await shareFile(file, BRAND)
        return
      } catch {
        // 공유가 안 되면 아래 다운로드로
      }
    }
    const a = document.createElement('a')
    a.href = `${fileUrl(tab)}?download=1`
    a.download = ''
    document.body.appendChild(a)
    a.click()
    a.remove()
    setNotice(isIOS ? '다운로드한 파일은 ‘파일’ 앱에 있어요' : '갤러리의 ‘Download’ 앨범에서 볼 수 있어요')
  }

  async function share() {
    try {
      await shareFile(file, BRAND)
    } catch {
      setNotice('공유할 수 없어요. 저장하기를 눌러 주세요')
    }
  }

  return (
    <div className="share">
      <header className="share-head">
        <div className="share-logo" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <h1>{BRAND}</h1>
      </header>

      {isKakao && (
        <div className="share-banner">
          카카오톡 안에서는 저장이 안 될 수 있어요
          <button
            onClick={() => (location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(location.href)}`)}
          >
            다른 브라우저로 열기
          </button>
        </div>
      )}

      {error && <p className="share-error">{error}</p>}
      {!error && !info && <div className="share-loading">불러오는 중…</div>}

      {info && (
        <main className="share-main">
          <p className="share-title">오늘의 네컷이 도착했어요 📸</p>
          {info.video && (
            <div className="share-tabs">
              <button className={tab === 'photo' ? 'active' : ''} onClick={() => setTab('photo')}>
                사진
              </button>
              <button className={tab === 'video' ? 'active' : ''} onClick={() => setTab('video')}>
                영상
              </button>
            </div>
          )}

          <div className="share-media">
            {tab === 'photo' ? (
              <img src={fileUrl('photo')} alt="네컷 사진" />
            ) : (
              <video src={fileUrl('video')} autoPlay loop muted playsInline controls />
            )}
          </div>

          <div className="share-actions">
            <button className="share-primary" onClick={save}>
              <DownloadIcon /> {tab === 'photo' ? '사진' : '영상'} 저장하기
            </button>
            {shareable && !isIOS && (
              <button className="share-soft" onClick={share}>
                <ShareIcon /> 공유하기
              </button>
            )}
          </div>
          {notice && <p className="share-notice">{notice}</p>}

          <ul className="share-help">
            {isIOS ? (
              <li>‘저장하기’ → ‘이미지 저장’(영상은 ‘비디오 저장’)을 누르면 사진 앱에 저장돼요</li>
            ) : (
              <li>저장한 파일은 갤러리 앱의 ‘Download’ 앨범에서 볼 수 있어요</li>
            )}
            <li>저장이 안 되면 사진을 길게 눌러 ‘이미지 저장’을 골라 주세요</li>
            <li>
              이 페이지는 <b>{dateLabel(info.expiresAt)}</b>까지 열 수 있어요
            </li>
          </ul>
        </main>
      )}
    </div>
  )
}
