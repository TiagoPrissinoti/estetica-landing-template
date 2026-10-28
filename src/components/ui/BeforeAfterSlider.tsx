import { useId, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  title: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt, title }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const activePointer = useRef<number | null>(null)
  const handleRef = useRef<HTMLButtonElement>(null)
  const hintId = useId()
  const clamp = (value: number) => Math.min(100, Math.max(0, value))
  function updatePosition(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    if (bounds.width) setPosition(clamp((event.clientX - bounds.left) / bounds.width * 100))
  }
  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return
    activePointer.current = event.pointerId
    event.currentTarget.setPointerCapture(event.pointerId)
    handleRef.current?.focus({ preventScroll: true })
    setDragging(true)
    updatePosition(event)
    if (event.pointerType === 'mouse') event.preventDefault()
  }
  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerId !== activePointer.current) return
    activePointer.current = null
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const step = event.shiftKey ? 10 : 2
    const changes: Record<string, number> = { ArrowLeft: -step, ArrowDown: -step, ArrowRight: step, ArrowUp: step, PageDown: -10, PageUp: 10 }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      setPosition(event.key === 'Home' ? 0 : 100)
    } else if (event.key in changes) {
      event.preventDefault()
      setPosition(value => clamp(value + changes[event.key]))
    }
  }
  return <div className="comparison-widget">
    <div className={`comparison-viewport ${dragging ? 'is-dragging' : ''}`} onPointerDown={startDrag} onPointerMove={event => { if (activePointer.current === event.pointerId) updatePosition(event) }} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag}>
      <img className="comparison-image" src={afterImage} alt={afterAlt} width={600} height={680} loading="lazy" draggable={false} />
      <div className="comparison-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}><img className="comparison-image" src={beforeImage} alt={beforeAlt} width={600} height={680} loading="lazy" draggable={false} /></div>
      <span className="comparison-label label-before">Antes</span><span className="comparison-label label-after">Depois</span>
      <span className="comparison-demo">Estudo visual · demonstração</span>
      <div className="comparison-divider" style={{ left: `${position}%` }} />
      <button ref={handleRef} type="button" className="comparison-handle" style={{ left: `clamp(24px, ${position}%, calc(100% - 24px))` }} role="slider" aria-label={`Comparar antes e depois: ${title}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(position)} aria-valuetext={`${Math.round(position)}% da imagem antes visível`} aria-orientation="horizontal" aria-describedby={hintId} onKeyDown={onKeyDown}><ChevronLeft size={17} /><ChevronRight size={17} /></button>
    </div>
    <p className="comparison-hint" id={hintId}><MoveHorizontal size={14} />Arraste para explorar<span className="sr-only">. Use as setas para ajustar, Home e End para os extremos.</span></p>
  </div>
}
