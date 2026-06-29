import { useTranslation } from 'react-i18next'
import { Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/murilovclaba',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:murilolaba@outlook.com', label: 'Email' },
]

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="section-container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold">Murilo Laba</p>
          <p className="mt-1 text-sm text-foreground-muted">
            Product Engineer · InovaAxis · Curitiba, PR
          </p>
          <p className="mt-1 text-sm text-foreground-muted">
            © {year} — {t('footer.rights')}
          </p>
          <p className="mt-1 text-xs text-foreground-subtle">{t('footer.madeWith')}</p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg p-2 text-foreground-muted transition-all hover:scale-110 hover:text-accent hover:shadow-accent"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
