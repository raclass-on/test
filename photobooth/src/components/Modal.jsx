export default function Modal({ children, onClose, className = '' }) {
  return (
    <div className="modal-backdrop" onPointerDown={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className={`modal ${className}`} role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  )
}
