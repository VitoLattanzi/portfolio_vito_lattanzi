import { useEffect, useState } from 'react'
import { useI18n } from '@/i18n/useI18n'

type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  const stored = document.documentElement.dataset.theme
  return stored === 'light' ? 'light' : 'dark'
}

export default function ThemeToggle() {
  const { t } = useI18n()
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // localStorage puede estar bloqueado; el tema sigue funcionando en la sesión.
    }
  }, [theme])

  const isDark = theme === 'dark'
  const label = isDark ? t.theme.toLight : t.theme.toDark

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(current => (current === 'dark' ? 'light' : 'dark'))}
      aria-label={label}
      title={label}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
      </svg>
    </button>
  )
}
