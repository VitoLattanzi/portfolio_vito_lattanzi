import { vito, vitoAge } from '@/data/person'

export default function Profile() {
  return (
    <section id="profile" className="profile_section">
      <div className="profile_section_vito">
        <img
          src="/foto.jpg"
          alt={vito.name}
          className="profile_section_vito_img"
          loading="lazy"
          decoding="async"
        />
        <div className="profile_section_data_container">
          <h1 className="profile_section_vito_name">{vito.name}</h1>
          <p className="profile_section_badge">{vito.role}</p>
          <p className="profile_section_vito_info">
            {vitoAge ? `${vitoAge} anos - ` : ''}
            {vito.tagline}
          </p>
          <p className="profile_section_vito_shortbio">{vito.shortBio}</p>
          <div className="profile_section_buttons_container">
            <a href="#projects" className="profile_section_buttons">
              Ver proyectos
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=vitofrancolattanzi@gmail.com&su=Contratacion%20de%20servicio&body=Hola%20Vito,%20estaba%20interesado%20en"
              className="profile_section_buttons profile_section_buttons--ghost"
            >
              Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
