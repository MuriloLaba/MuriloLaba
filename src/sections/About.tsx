import { useTranslation } from 'react-i18next'
import { useSectionReveal } from '@/hooks/useSectionReveal'

const stats = [
  { value: '4+', key: 'years' as const },
  { value: '9', key: 'ecosystem' as const },
  { value: '✓', key: 'saas' as const },
]

export function About() {
  const { t } = useTranslation()
  const ref = useSectionReveal<HTMLElement>()

  return (
    <section id="about" className="section-container" ref={ref}>
      <div data-reveal>
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="section-subtitle">{t('about.subtitle')}</p>
      </div>

      <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
        <div data-reveal className="relative mx-auto w-full max-w-sm">
          <div className="accent-border relative overflow-hidden rounded-xl bg-surface p-1 shadow-accent">
              <div className="aspect-square overflow-hidden rounded-lg bg-surface-2">
                <img
                  src="/murilo-laba-picture.png"
                  alt="Murilo Laba"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-lg border border-accent/20 bg-accent/5" />
          </div>
        </div>

        <div className="space-y-6">
          <p data-reveal className="text-lg leading-relaxed text-foreground-muted">
            {t('about.bio1')}
          </p>
          <p data-reveal className="leading-relaxed text-foreground-muted">
            {t('about.bio2')}
          </p>

          <div data-reveal className="grid grid-cols-3 gap-4 pt-4">
            {stats.map(({ value, key }) => (
              <div
                key={key}
                className="accent-border rounded-lg bg-surface p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-accent">
                  {value}
                </p>
                <p className="mt-1 text-xs text-foreground-subtle">
                  {t(`about.stats.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
