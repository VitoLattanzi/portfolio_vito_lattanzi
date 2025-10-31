// presentacion inicial, persona foto contacto dpoquito blabla
import { vito, vitoAge } from '@/data/person'

export default function Profile() {
  return (
    <section id="profile" className="profile_section">
      <div className="profile_section_vito">
        <img
          src="/foto.jpg" /* falta poner la foto */
          alt={vito.name}
          className="profile_section_vito_img"
        />
        <div className='profile_section_data_container'>
          <h1 className="profile_section_vito_name">{vito.name}</h1>
          <p className="profile_section_vito_info">
            {vitoAge ? `  ${vitoAge} años` : ''} • {vito.tagline}
          </p>
          <p className="profile_section_vito_shortbio">{vito.shortBio}</p>
          <div className="profile_section_buttons_container">
            <a href="#projects" className="profile_section_buttons">
              Ver proyectos
            </a>
            <a href="#contact" className="profile_section_buttons">
              Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}