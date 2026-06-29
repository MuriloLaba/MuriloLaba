import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageToggle } from './LanguageToggle'
import { useNavbarScroll } from '@/hooks/useNavbarScroll'

const navIds = ['about', 'skills', 'experience', 'projects', 'contact'] as const

export function Header() {
  const { t } = useTranslation()
  const scrolled = useNavbarScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-background/80 backdrop-blur-[12px]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          data-cursor
        >
          ML<span className="text-accent">.</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-foreground-muted transition-colors hover:text-accent"
              data-cursor
            >
              {t(`nav.${id}`)}
            </button>
          ))}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-foreground"
            aria-label="Menu"
            data-cursor
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/5 bg-background/95 backdrop-blur-[12px] md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navIds.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="rounded-lg px-4 py-3 text-left text-foreground-muted transition-colors hover:bg-surface hover:text-accent"
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
