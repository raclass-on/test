import { useCallback, useLayoutEffect, useRef, useState } from 'react'

// 부모 영역 안에 비율을 지키며 가장 크게 들어가는 크기
export function useFitBox(ref, aspect) {
  const [box, setBox] = useState({ width: 0, height: 0 })
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const W = el.clientWidth
      const H = el.clientHeight
      let width = W
      let height = W / aspect
      if (height > H) {
        height = H
        width = H * aspect
      }
      setBox({ width: Math.floor(width), height: Math.floor(height) })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref, aspect])
  return box
}

export function useToast() {
  const [message, setMessage] = useState(null)
  const timer = useRef(null)
  const show = useCallback((text) => {
    clearTimeout(timer.current)
    setMessage(text)
    timer.current = setTimeout(() => setMessage(null), 2600)
  }, [])
  return [message, show]
}

export const cls = (...names) => names.filter(Boolean).join(' ')
