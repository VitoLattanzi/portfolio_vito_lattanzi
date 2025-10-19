import SafeLink from "../components/SafeLinks";

//contacto derechos y blabla

export default function Footer() {
  return (
    <footer id="contact" className="Fotter_section">
      <div className="Fotter_content_container">
        <h3 className="Fotter_tittle">Contacto</h3>
        <div className="Fotter_links_container">
          <SafeLink
            className="links"
            href="https://github.com/VitoLattanzi"
            external
          >
            <img className="logos" src="/icons/github.svg" alt="GitHub" />
          </SafeLink>
          <SafeLink
            className="links"
            href="https://www.linkedin.com/in/vito-lattanzi"
            external
          >
           <img className="logos" src="/icons/linkedin.svg" alt="LinkedIn"/>
          </SafeLink>
          <SafeLink
            className="links"
            href="https://wa.me/541138916445"
            external
          >
            <img className="logos" src="/icons/whatsapp.svg" alt="WhatsApp" />
          </SafeLink>
          <SafeLink
            className="links"
            href={`https://mail.google.com/mail/?view=cm&to=vitofrancolattanzi@gmail.com&su=Contratacion%20de%20servicio&body=Hola%20Vito,%20estaba%20interesado%20en`}
            external
          >   
            <img className="logos" src="/icons/gmail.svg" alt="Gmail" />
          </SafeLink>
        </div>
        <hr className="Fotter_linea"/>
        <p className="Fotter_rights_reserved">© {new Date().getFullYear()} - Vito Lattanzi</p>
      </div>
    </footer>
  )
}