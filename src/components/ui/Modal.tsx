import { useEffect, useId, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

export function Modal({ title, children, onClose, className = '' }: { title: string; children: ReactNode; onClose: () => void; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null)
  const headingId = useId()
  useEffect(() => {
    const dialog = ref.current
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])
  return <dialog ref={ref} aria-labelledby={headingId} className={`aura-dialog ${className}`} onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose() } }}>
    <div className="dialog-inner">
      <button className="dialog-close icon-button" aria-label="Fechar janela" onClick={onClose} autoFocus><X size={20} /></button>
      <h2 id={headingId} className="dialog-title">{title}</h2>
      {children}
    </div>
  </dialog>
}
