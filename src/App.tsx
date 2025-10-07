import Navbar from '@/secctions/Navbar'
import Profile from '@/secctions/Profile'
import Jobs from '@/secctions/Jobs'
import AboutMe from '@/secctions/Aboutme'
import Footer from '@/secctions/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main className="space-y-24" >
         <Profile/>
         <Jobs />
         <AboutMe />
      </main>
      <Footer />
    </div>
  )
}
