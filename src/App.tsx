import Navbar from '@/secctions/Navbar'
import Profile from '@/secctions/Profile'
import Proyects from '@/secctions/Proyects'
import AboutMe from '@/secctions/Aboutme'
import Footer from '@/secctions/Footer'
import Skills from '@/secctions/Skills'
import Contact from '@/secctions/contact'
import SEO from '@/components/SEO'

export default function App() {
  return (
    <div className="pagina_completa">
      <SEO 
        title="Vito Lattanzi | Full Stack Developer & Automatización" 
        description="Portfolio de Vito Lattanzi, Desarrollador Full Stack apasionado por la automatización de procesos y el desarrollo web eficiente."
      />
      <Navbar />
      <main className="flex flex-col gap-16 py-16">
        <Profile />
        <div className="flex flex-col gap-12 max-w-5xl mx-auto w-full px-6">
          <AboutMe />
          <Skills />
        </div>
        <Proyects />
        <Contact/>
      </main>
      <hr className="page_divider" />
      <Footer />
    </div>
  )
}




