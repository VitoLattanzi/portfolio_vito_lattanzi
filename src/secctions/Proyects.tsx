// los trabajos en los q estube y trabaje metemos todo aca esperiencia y projectos

import { projets } from "../data/projets";
import SafeLink from "../components/SafeLinks";
import MiniCarousel from "../components/Carousel_de_img";


export default function Proyects() {
    return (
        <section className="Proyects">
            <h2 className="Proyects_section_title">Proyectos</h2>
            <div className="Proyects_section_container">
                {projets.map((project, index) => (
                    <article key={index} className="Proyects_section_card">
                      <div className="proyect_text_conteiner">
                        <h3 className="proyect_name">{project.slug}</h3>
                        <p className="proyect_description">{project.description}</p>
                      </div>

                      {/* Mini carrusel ENTRE descripción y links */}
                      {project.images && project.images.length > 0 && (
                        <MiniCarousel images={project.images} aspect="16 / 9" />
                      )}

                      <div className="proyect_icons_conteiner">
                        <SafeLink
                          className="proyect_icon"
                          href={project.repoUrl}
                          external
                        >
                          <img className="logos" src="/icons/github.svg" alt="GitHub" />
                        </SafeLink>
                        <SafeLink
                          className="proyect_icon" 
                          href={project.siteUrl}
                          external
                        >
                          <img className="logos" src="/icons/globe.svg" alt="Sitio Web" />
                        </SafeLink>                   
                      </div>
                    </article> 
                ))}
            </div>
        </section>
    )
}
//modelo de el recuadro de cada proyecto
/* return (
    <section id="Proyects" className="min-h-screen px-6 py-12 bg-gray-900">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* placeholder de cards *//*}
            <article className="border border-gray-800 rounded-2xl p-4">
              <h3 className="font-semibold mb-1">Proyecto demo</h3>
              <p className="text-gray-400 text-sm">Descripción breve del proyecto…</p>
              <div className="flex gap-4 mt-3 text-sm">
                <a className="underline" href="#" target="_blank">GitHub</a>
                <a className="underline" href="#" target="_blank">Web</a>
                <a className="underline" href="#">Detalle</a>
              </div>
            </article>
            {/* repetí o reemplazá por <ProjectGrid /> luego *//*}
          </div>
      </div>
    </section>
  ) */