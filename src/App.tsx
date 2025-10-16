import Navbar from '@/secctions/Navbar'
import Profile from '@/secctions/Profile'
import Jobs from '@/secctions/Jobs'
import AboutMe from '@/secctions/Aboutme'
import Footer from '@/secctions/Footer'
import Skills from '@/secctions/Skills'


export default function App() {
  return (
    <div className="pagina_completa">
      <Navbar />
      <main className="main" >
        <Profile/>
        <div className='main_skils'>
          <AboutMe />
          <Skills/>
         </div>
         <Jobs />
      </main>
      <Footer />
    </div>
  )
}
