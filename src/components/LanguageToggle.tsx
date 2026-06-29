import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('en') ? 'en' : 'pt'

  const setLang = (lang: 'pt' | 'en') => {
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-surface/50 p-1 text-xs font-medium">
      <button
        onClick={() => setLang('pt')}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          current === 'pt'
            ? 'bg-accent/20 text-accent'
            : 'text-foreground-muted hover:text-foreground'
        }`}
        aria-label="Português"
      >
        PT
      </button>
      <span className="text-foreground-subtle">|</span>
      <button
        onClick={() => setLang('en')}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          current === 'en'
            ? 'bg-accent/20 text-accent'
            : 'text-foreground-muted hover:text-foreground'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
