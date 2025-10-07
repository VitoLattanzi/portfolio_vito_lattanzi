//contacto derechos y blabla

export default function Footer() {
  return (
    <footer id="contact" className="px-6 py-10 border-t border-gray-800 bg-black/40">
      <div className="max-w-5xl mx-auto grid gap-2">
        <h3 className="text-lg font-semibold">Contacto</h3>
        <div className="text-gray-300">
          <a className="underline mr-4" href="mailto:vitofrancolattanzi@gmail.com">Mail</a>
          <a className="underline mr-4" href="https://wa.me/541138916445" target="_blank">WhatsApp</a>
          <a className="underline mr-4" href="https://github.com/tu-usuario" target="_blank">GitHub</a>
          <a className="underline" href="https://www.linkedin.com/in/tu-perfil" target="_blank">LinkedIn</a>
        </div>
        <p className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} Vito Lattanzi</p>
      </div>
    </footer>
  )
}