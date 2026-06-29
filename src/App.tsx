import { lazy, Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Contact } from '@/sections/Contact'

const Hero = lazy(() => import('@/sections/Hero').then((m) => ({ default: m.Hero })))
function MetaTags() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', t('meta.description'))
    setMeta('og:title', t('meta.title'), true)
    setMeta('og:description', t('meta.description'), true)
    setMeta('og:type', 'website', true)
    document.documentElement.lang = i18n.language.startsWith('en') ? 'en' : 'pt-BR'
  }, [t, i18n.language])

  return null
}

export default function App() {
  return (
    <>
      <MetaTags />
      <ScrollProgress />
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Hero />
        </Suspense>        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
