import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import { useI18n } from '@/i18n/useI18n'

const sectionIds = ['profile', 'about', 'skills', 'projects', 'contact'] as const

export default function Navbar() {
  const { locale, setLocale, t } = useI18n()
  const [active, setActive] = useState('profile')

  const labels = t.nav
  const sections = [
    { id: 'profile', label: labels.profile },
    { id: 'about', label: labels.about },
    { id: 'skills', label: labels.skills },
    { id: 'projects', label: labels.projects },
    { id: 'contact', label: labels.contact },
  ]

  useEffect(() => {
    const elements = sectionIds
      .map(sectionId => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const nextLocale = locale === 'es' ? 'en' : 'es'

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-3 py-4">
      <nav
        aria-label={t.nav.aria}
        className="navbar-pill flex items-center gap-1 sm:gap-2 bg-bg-alt/80 backdrop-blur-md border border-border rounded-full px-2 sm:px-4 py-2 shadow-xl max-w-full overflow-x-auto"
      >
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav-link ${active === section.id ? 'is-active' : ''}`}
            aria-current={active === section.id ? 'page' : undefined}
          >
            {section.label}
          </a>
        ))}
        <button
          type="button"
          className="lang-toggle"
          onClick={() => setLocale(nextLocale)}
          aria-label={t.language.switchTo}
          title={t.language.switchTo}
        >
          {nextLocale.toUpperCase()}
        </button>
        <ThemeToggle />
      </nav>
    </header>
  )
}
