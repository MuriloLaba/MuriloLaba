import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import {
  projects,
  projectCategories,
  getProjectsByCategory,
  type Project,
  type ProjectCategory,
} from '@/data/projects'

type FilterValue = 'all' | ProjectCategory

const filters: FilterValue[] = ['all', ...projectCategories]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'pt'
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group accent-border relative flex flex-col overflow-hidden rounded-xl bg-surface transition-shadow duration-500 hover:shadow-accent-lg ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className={`relative flex flex-1 flex-col p-6 ${project.featured ? 'md:p-8' : ''}`}>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle">
              {project.brand[lang]}
            </span>
            <span className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent w-fit">
              {t(`projects.categories.${project.category}`)}
            </span>
          </div>
          <span className="font-mono text-xs text-foreground-subtle">{num}</span>
        </div>

        <h3
          className={`font-display font-bold leading-tight ${
            project.featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {project.title[lang]}
        </h3>

        <div className="mt-3 h-px w-10 bg-accent/50 transition-all duration-500 group-hover:w-16" />

        <p
          className={`mt-4 flex-1 leading-relaxed text-foreground-muted ${
            project.featured ? 'text-base md:max-w-lg' : 'text-sm'
          }`}
        >
          {project.description[lang]}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/5 bg-surface-2 px-2.5 py-1 text-xs text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-5">
          {project.links?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-accent transition-opacity hover:opacity-80"
            >
              {link.label[lang]}
              <ArrowUpRight size={14} />
            </a>
          ))}
          {!project.links?.length && (
            <ExternalLink
              size={14}
              className="ml-auto text-foreground-subtle opacity-0 transition-all group-hover:opacity-100 group-hover:text-accent"
            />
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectShowcase() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  const filtered = getProjectsByCategory(activeFilter)

  return (
    <div className="section-container pt-8">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter
          const count =
            filter === 'all'
              ? projects.length
              : projects.filter((p) => p.category === filter).length

          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? 'text-accent'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="project-filter-bg"
                  className="accent-border absolute inset-0 rounded-lg bg-accent/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                {t(`projects.categories.${filter}`)}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono ${
                    isActive
                      ? 'bg-accent/20 text-accent'
                      : 'bg-surface-2 text-foreground-subtle'
                  }`}
                >
                  {count}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Project grid */}
      <div className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-foreground-muted">
          {t('projects.empty')}
        </p>
      )}
    </div>
  )
}
