let audio

function ctx() {
  audio ??= new (window.AudioContext || window.webkitAudioContext)()
  if (audio.state === 'suspended') audio.resume()
  return audio
}

export function beep(freq = 880, duration = 0.12) {
  try {
    const a = ctx()
    const osc = a.createOscillator()
    const gain = a.createGain()
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.2, a.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, a.currentTime + duration)
    osc.connect(gain).connect(a.destination)
    osc.start()
    osc.stop(a.currentTime + duration)
  } catch {
    // 소리를 낼 수 없는 환경은 무시
  }
}

export function shutter() {
  try {
    const a = ctx()
    const length = Math.round(a.sampleRate * 0.18)
    const buffer = a.createBuffer(1, length, a.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 3)
    const src = a.createBufferSource()
    const gain = a.createGain()
    gain.gain.value = 0.5
    src.buffer = buffer
    src.connect(gain).connect(a.destination)
    src.start()
  } catch {
    // 소리를 낼 수 없는 환경은 무시
  }
}
