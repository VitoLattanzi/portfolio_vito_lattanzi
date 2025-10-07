export default function Navbar() {
  return (
    <header className="contenedor_navbar_completo">
      <nav className="navbar_contenedor">
        <div className="navbar">
          <a href="#home" className="navbar_buttons">Inicio</a>
          <a href="#work" className="navbar_buttons">Trabajos</a>
          <a href="#projects" className="navbar_buttons">Proyectos</a>
          <a href="#about" className="navbar_buttons">Sobre mí</a>
          <a href="#contact" className="navbar_buttons">Contacto</a>
        </div>
      </nav>
    </header>
  )
}