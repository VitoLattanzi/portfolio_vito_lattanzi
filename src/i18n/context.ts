import { createContext } from 'react'
import type { Locale, Person, Project } from '@/types'
import type { UiStrings } from '@/data/ui'

export interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UiStrings
  person: Person
  projects: Project[]
}

export const I18nContext = createContext<I18nContextValue | null>(null)
