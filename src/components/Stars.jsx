export default function Stars({ count, max = 5 }) {
  return (
    <span className="stars" aria-label={`별 ${count}개`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < count ? 'star on' : 'star'}>★</span>
      ))}
    </span>
  )
}
