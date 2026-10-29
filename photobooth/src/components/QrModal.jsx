import QRCode from 'qrcode'
import { useEffect, useState } from 'react'
import Modal from './Modal'

function dateLabel(ms) {
  const d = new Date(ms)
  return `${d.getMonth() + 1}월 ${d.getDate()}일`
}

// state: { status: 'working' | 'done' | 'error', message, url, expiresAt, hasVideo }
export default function QrModal({ state, onClose, onRetry, onFinish }) {
  const [qr, setQr] = useState(null)

  useEffect(() => {
    if (state.status !== 'done') return
    let cancelled = false
    QRCode.toDataURL(state.url, { width: 720, margin: 1, errorCorrectionLevel: 'M' }).then((url) => !cancelled && setQr(url))
    return () => {
      cancelled = true
    }
  }, [state.status, state.url])

  return (
    <Modal onClose={state.status === 'working' ? undefined : onClose} className="qr-modal">
      {state.status === 'working' && (
        <div className="qr-working">
          <div className="spinner" />
          <p>{state.message}</p>
          <small>잠시만 기다려 주세요</small>
        </div>
      )}

      {state.status === 'error' && (
        <div className="qr-working">
          <p className="qr-error">QR 코드를 만들지 못했어요</p>
          <small>{state.message}</small>
          <div className="modal-actions">
            <button className="soft-btn" onClick={onClose}>
              닫기
            </button>
            <button className="primary-btn" onClick={onRetry}>
              다시 시도
            </button>
          </div>
        </div>
      )}

      {state.status === 'done' && (
        <>
          <h2>휴대폰 카메라로 찍어 주세요</h2>
          <p className="qr-sub">
            QR 코드를 찍으면 {state.hasVideo ? '사진과 영상을' : '사진을'} 저장할 수 있어요
          </p>
          <div className="qr-box">{qr && <img src={qr} alt="사진 저장 QR 코드" />}</div>
          <p className="qr-note">
            저장 링크는 <b>{dateLabel(state.expiresAt)}</b>까지 열려요
            <br />
            <a href={state.url} target="_blank" rel="noreferrer">
              {state.url.replace(/^https?:\/\//, '')}
            </a>
          </p>
          <div className="modal-actions">
            <button className="soft-btn" onClick={onClose}>
              더 꾸미기
            </button>
            <button className="primary-btn" onClick={onFinish}>
              다 찍었어요 · 처음으로
            </button>
          </div>
        </>
      )}
    </Modal>
  )
}
