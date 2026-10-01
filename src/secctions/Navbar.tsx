export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4">
      <nav className="flex items-center gap-2 bg-bg-alt/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-xl">
        <a href="#profile" className="nav-link">Inicio</a>
        <a href="#about" className="nav-link">Sobre mí</a>
        <a href="#projects" className="nav-link">Proyectos</a>
        <a href="#contact" className="nav-link">Contacto</a>
      </nav>
    </header>
  )
}
