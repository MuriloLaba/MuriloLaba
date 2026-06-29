import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function ScrollProgress() {
  const progress = useScrollProgress()
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-[2px] w-full bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-accent shadow-[0_0_8px_rgba(212,160,23,0.5)] transition-[width] duration-75"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
