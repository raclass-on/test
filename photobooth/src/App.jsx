import { useEffect, useState } from 'react'
import Editor from './components/Editor'
import Home from './components/Home'
import Shoot from './components/Shoot'
import { LAYOUTS } from './lib/layouts'

// 부스로 쓰는 동안 화면이 꺼지지 않게
function useWakeLock() {
  useEffect(() => {
    let lock
    const request = () => {
      if (document.visibilityState === 'visible') navigator.wakeLock?.request('screen').then((l) => (lock = l)).catch(() => {})
    }
    request()
    document.addEventListener('visibilitychange', request)
    return () => {
      document.removeEventListener('visibilitychange', request)
      lock?.release().catch(() => {})
    }
  }, [])
}

export default function App() {
  const [screen, setScreen] = useState('home')
  const [layoutId, setLayoutId] = useState('grid')
  const [shots, setShots] = useState([])
  const [session, setSession] = useState(0)
  useWakeLock()

  const goHome = () => {
    setShots([])
    setSession((s) => s + 1)
    setScreen('home')
  }

  if (screen === 'shoot') {
    return (
      <Shoot
        layout={LAYOUTS[layoutId]}
        onCancel={goHome}
        onDone={(taken) => {
          setShots(taken)
          setScreen('edit')
        }}
      />
    )
  }
  if (screen === 'edit') {
    return <Editor key={session} initialLayoutId={layoutId} shots={shots} onHome={goHome} />
  }
  return <Home layoutId={layoutId} onLayout={setLayoutId} onStart={() => setScreen('shoot')} />
}
