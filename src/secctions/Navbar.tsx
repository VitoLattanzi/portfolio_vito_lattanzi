import { useEffect, useState } from 'react'

const sections = [
  { id: 'profile', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
]

export default function Navbar() {
  const [active, setActive] = useState('profile')

  useEffect(() => {
    const elements = sections
      .map(section => document.getElementById(section.id))
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

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-3 py-4">
      <nav
        aria-label="Navegación principal"
        className="flex items-center gap-1 sm:gap-2 bg-bg-alt/80 backdrop-blur-md border border-white/10 rounded-full px-2 sm:px-4 py-2 shadow-xl max-w-full"
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
      </nav>
    </header>
  )
}
