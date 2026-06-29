import { useEffect, useRef, useState, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Linkedin, Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/murilovclaba',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:murilolaba@outlook.com',
    label: 'Email',
  },
]

export function Contact() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (reduced || !sectionRef.current) return

    const items = sectionRef.current.querySelectorAll('[data-contact]')
    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    )
  }, [reduced])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-container" ref={sectionRef}>
      <div data-contact>
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div data-contact className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="accent-border group flex h-20 w-20 items-center justify-center rounded-xl bg-surface transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:text-accent hover:shadow-accent-lg"
              >
                <Icon
                  size={28}
                  className="text-foreground-muted transition-colors group-hover:text-accent"
                />
              </a>
            ))}
          </div>

          <div className="accent-border rounded-xl bg-surface p-6">
            <p className="text-sm text-foreground-muted">E-mail</p>
            <a
              href="mailto:murilolaba@outlook.com"
              className="mt-1 block font-medium text-accent transition-opacity hover:opacity-80"
            >
              murilolaba@outlook.com
            </a>
            <p className="mt-4 text-sm text-foreground-muted">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/murilovclaba"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-medium text-foreground transition-colors hover:text-accent"
            >
              linkedin.com/in/murilovclaba
            </a>
            <p className="mt-4 text-sm text-foreground-subtle">Curitiba, Paraná — Brasil</p>
          </div>
        </div>

        <form
          data-contact
          onSubmit={handleSubmit}
          className="accent-border space-y-4 rounded-xl bg-surface p-6"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-foreground-muted">
              {t('contact.form.name')}
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-white/10 bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-foreground-muted">
              {t('contact.form.email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-foreground-muted">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full resize-none rounded-lg border border-white/10 bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full disabled:opacity-50"
          >
            {status === 'sending'
              ? t('contact.form.sending')
              : t('contact.form.submit')}
          </button>

          {status === 'success' && (
            <p className="text-sm text-accent">{t('contact.form.success')}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400">{t('contact.form.error')}</p>
          )}
        </form>
      </div>
    </section>
  )
}
