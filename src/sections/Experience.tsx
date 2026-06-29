import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '@/data/experience'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const lang = i18n.language.startsWith('en') ? 'en' : 'pt'

  useEffect(() => {
    if (reduced || !sectionRef.current) return

    const items = sectionRef.current.querySelectorAll('[data-timeline-item]')

    const ctx = gsap.context(() => {
      items.forEach((item, i) => {
        const direction = i % 2 === 0 ? -50 : 50
        gsap.fromTo(
          item,
          { opacity: 0, x: direction },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="experience" className="section-container" ref={sectionRef}>
      <div>
        <h2 className="section-title">{t('experience.title')}</h2>
        <p className="section-subtitle">{t('experience.subtitle')}</p>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* Gold timeline line */}
        <div
          className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent md:left-1/2 md:-translate-x-px"
          aria-hidden
        />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              data-timeline-item
              className={`relative flex flex-col gap-4 pl-12 md:w-1/2 ${
                i % 2 === 0
                  ? 'md:ml-0 md:pr-12 md:pl-0 md:text-right'
                  : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-1 h-3 w-3 rounded-full border-2 border-accent bg-background animate-pulse-soft ${
                  i % 2 === 0
                    ? 'left-[11px] md:left-auto md:right-[-6px]'
                    : 'left-[11px] md:left-[-6px]'
                }`}
                aria-hidden
              />

              <div className="accent-border rounded-lg bg-surface p-6 transition-shadow hover:shadow-accent">
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {exp.period.start} —{' '}
                  {exp.period.end ?? t('experience.present')}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  {exp.role[lang]}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">{exp.company}</p>
                <p className="mt-0.5 text-xs text-foreground-subtle">
                  {exp.location[lang]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {exp.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
