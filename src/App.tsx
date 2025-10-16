import Navbar from '@/secctions/Navbar'
import Profile from '@/secctions/Profile'
import Jobs from '@/secctions/Jobs'
import AboutMe from '@/secctions/Aboutme'
import Footer from '@/secctions/Footer'

export default function App() {
  return (
    <div className="pagina_completa">
      <Navbar />
      <main className="main" >
         <Profile/>
         <Jobs />
         <AboutMe />
      </main>
      <Footer />
    </div>
  )
}
