export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4">
      <nav className="flex items-center gap-2 bg-bg-alt/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-xl">
        <a href="#profile" className="px-4 py-2 rounded-full text-text-main/90 hover:bg-accent/10 hover:text-accent transition-all font-medium text-sm">Inicio</a>
        <a href="#about" className="px-4 py-2 rounded-full text-text-main/90 hover:bg-accent/10 hover:text-accent transition-all font-medium text-sm">Sobre mí</a>
        <a href="#projects" className="px-4 py-2 rounded-full text-text-main/90 hover:bg-accent/10 hover:text-accent transition-all font-medium text-sm">Proyectos</a>
        <a href="#contact" className="px-4 py-2 rounded-full text-text-main/90 hover:bg-accent/10 hover:text-accent transition-all font-medium text-sm">Contacto</a>
      </nav>
    </header>
  )
}
