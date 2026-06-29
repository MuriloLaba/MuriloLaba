import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillCategories } from '@/data/skills'
import { SkillIcon } from '@/components/SkillIcon'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !sectionRef.current) return

    const categories = sectionRef.current.querySelectorAll('[data-category]')

    const ctx = gsap.context(() => {
      categories.forEach((cat) => {
        const pills = cat.querySelectorAll('[data-pill]')
        gsap.fromTo(
          pills,
          { opacity: 0, y: -20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: cat,
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
    <section id="skills" className="section-container" ref={sectionRef}>
      <div>
        <h2 className="section-title">{t('skills.title')}</h2>
        <p className="section-subtitle">{t('skills.subtitle')}</p>
      </div>

      <div className="mt-16 space-y-12">
        {skillCategories.map((category) => (
          <div key={category.id} data-category>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              {t(`skills.categories.${category.id}`)}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  data-pill
                  className="accent-border group inline-flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5 text-sm text-foreground transition-all duration-300 hover:border-accent/50 hover:shadow-accent"
                >
                  <SkillIcon name={skill.icon} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
