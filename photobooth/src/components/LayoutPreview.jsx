// 레이아웃 모양을 보여주는 작은 그림
export default function LayoutPreview({ layout, height = 120 }) {
  const k = height / layout.H
  return (
    <span className="layout-preview" style={{ width: layout.W * k, height }}>
      {layout.slots.map((s, i) => (
        <span key={i} style={{ left: s.x * k, top: s.y * k, width: s.w * k, height: s.h * k }} />
      ))}
    </span>
  )
}
