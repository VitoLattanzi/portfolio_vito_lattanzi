import Navbar from '@/secctions/Navbar'
import Profile from '@/secctions/Profile'
import Proyects from '@/secctions/Proyects'
import AboutMe from '@/secctions/Aboutme'
import Footer from '@/secctions/Footer'
import Skills from '@/secctions/Skills'
import Contact from '@/secctions/contact'
import SEO from '@/components/SEO'
import { vito } from '@/data/person'

export default function App() {
  return (
    <div className="pagina_completa">
      <SEO
        title={vito.seo?.title ?? vito.name}
        description={vito.seo?.description ?? vito.tagline}
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
