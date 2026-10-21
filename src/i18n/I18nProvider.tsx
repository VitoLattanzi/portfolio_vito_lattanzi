import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Locale } from '@/types'
import { personByLocale } from '@/data/person'
import { projectsByLocale } from '@/data/projects'
import { ui } from '@/data/ui'
import { I18nContext } from './context'
import type { I18nContextValue } from './context'

function getInitialLocale(): Locale {
  const stored = document.documentElement.lang
  return stored === 'en' ? 'en' : 'es'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    try {
      localStorage.setItem('locale', locale)
    } catch {
      // Sin persistencia: el idioma sigue funcionando durante la sesión.
    }
  }, [locale])

  const value: I18nContextValue = {
    locale,
    setLocale,
    t: ui[locale],
    person: personByLocale[locale],
    projects: projectsByLocale[locale],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
