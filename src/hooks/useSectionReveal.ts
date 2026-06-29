import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  y?: number
  stagger?: number
  start?: string
  direction?: 'left' | 'right' | 'up'
}

export function useSectionReveal<T extends HTMLElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()
  const { y = 30, stagger = 0.1, start = 'top 85%', direction = 'up' } = options

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return

    const items = el.querySelectorAll('[data-reveal]')
    const x = direction === 'left' ? -40 : direction === 'right' ? 40 : 0
    const yVal = direction === 'up' ? y : 0

    gsap.set(items, { opacity: 0, y: yVal, x })

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [reduced, y, stagger, start, direction])

  return ref
}
