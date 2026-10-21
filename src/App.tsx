import Navbar from '@/secctions/Navbar'
import Profile from '@/secctions/Profile'
import Proyects from '@/secctions/Proyects'
import AboutMe from '@/secctions/Aboutme'
import Footer from '@/secctions/Footer'
import Skills from '@/secctions/Skills'
import Contact from '@/secctions/contact'
import SEO from '@/components/SEO'
import { useI18n } from '@/i18n/useI18n'

export default function App() {
  const { person } = useI18n()

  return (
    <div className="pagina_completa">
      <SEO
        title={person.seo?.title ?? person.name}
        description={person.seo?.description ?? person.tagline}
        author={person.name}
      />
      <Navbar />
      <main className="main">
        <Profile />
        <div className="main-columns">
          <AboutMe />
          <Skills />
        </div>
        <Proyects />
        <Contact />
      </main>
      <hr className="page_divider" />
      <Footer />
    </div>
  )
}
