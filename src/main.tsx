import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import '@/styles/globals.css'
import App from './App'
import { I18nProvider } from '@/i18n/I18nProvider'

try {
  const storedTheme = localStorage.getItem('theme')
  document.documentElement.dataset.theme = storedTheme === 'light' ? 'light' : 'dark'

  const storedLocale = localStorage.getItem('locale')
  document.documentElement.lang = storedLocale === 'en' ? 'en' : 'es'
} catch {
  document.documentElement.dataset.theme = 'dark'
  document.documentElement.lang = 'es'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </HelmetProvider>
  </React.StrictMode>
)
