import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowDown, Download } from 'lucide-react'
import gsap from 'gsap'
import { DottedSurface } from '@/components/ui/dotted-surface'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Hero() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced || !containerRef.current) return

    const items = containerRef.current.querySelectorAll('[data-hero]')
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      },
    )
  }, [reduced])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen">
      <DottedSurface className="min-h-screen">
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
          <div
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
              'bg-[radial-gradient(ellipse_at_center,rgba(245,245,245,0.06),transparent_50%)]',
              'blur-[30px]',
            )}
          />

          <div
            ref={containerRef}
            className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center md:px-8"
          >
            <p
              data-hero
              className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent"
            >
              {t('hero.greeting')}{' '}
              <span className="text-foreground">{t('hero.name')}</span>
            </p>

            <h1
              data-hero
              className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
            >
              {t('hero.headline')}
            </h1>

            <p
              data-hero
              className="mx-auto mt-6 max-w-2xl text-lg text-foreground-muted md:text-xl"
            >
              {t('hero.subtitle')}
            </p>

            <div
              data-hero
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button onClick={scrollToProjects} className="btn-primary">
                {t('hero.ctaProjects')}
              </button>
              <a href="/cv-murilo-laba.pdf" download className="btn-secondary">
                <Download size={16} />
                {t('hero.ctaCV')}
              </a>
            </div>

            <div
              data-hero
              className="mt-20 flex flex-col items-center gap-2 text-foreground-subtle"
            >
              <span className="text-xs uppercase tracking-widest">
                {t('hero.scrollHint')}
              </span>
              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </div>
        </div>
      </DottedSurface>
    </section>
  )
}
