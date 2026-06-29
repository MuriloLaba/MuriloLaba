import { useTranslation } from 'react-i18next'
import { ProjectShowcase } from '@/components/ProjectShowcase'

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects">
      <div className="section-container pb-0">
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="section-subtitle">{t('projects.subtitle')}</p>
      </div>

      <ProjectShowcase />
    </section>
  )
}
