import MiniCarousel from '@/components/Carousel_de_img'
import SafeLink from '@/components/SafeLinks'
import { projects } from '@/data/projects'

export default function Proyects() {
  const repoLabel = (i: number) => (i === 0 ? 'Frontend' : i === 1 ? 'Backend' : `Repo ${i + 1}`)

  return (
    <section id="projects" className="Proyects">
      <h2 className="Proyects_section_title">Proyectos</h2>
      <div className="Proyects_section_container">
        {projects.map(project => (
          <article key={project.slug} className="Proyects_section_card">
            <div className="proyect_body">
              <div className="proyect_text_conteiner">
                <h3 className="proyect_name">{project.title}</h3>
                <p className="proyect_description">{project.description}</p>

                {project.stack?.length ? (
                  <div className="proyect_stack">
                    {project.stack.map(tech => (
                      <span key={tech} className="proyect_chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              {project.images?.length ? (
                <MiniCarousel images={project.images} aspect={project.aspect ?? '16 / 9'} />
              ) : null}
            </div>

            <div className="proyect_icons_conteiner">
              {(Array.isArray(project.repoUrl) ? project.repoUrl : [project.repoUrl]).map((url, i) => (
                url ? (
                  <SafeLink
                    className="proyect_icon"
                    href={url}
                    external
                    key={url + i}
                    aria-label={`${repoLabel(i)} en GitHub`}
                    title={repoLabel(i)}
                    data-label={repoLabel(i)}
                  >
                    <img className="logos" src="/icons/github.svg" alt="GitHub" />
                  </SafeLink>
                ) : null
              ))}
              {project.siteUrl ? (
                <SafeLink className="proyect_icon" href={project.siteUrl} external>
                  <img className="logos" src="/icons/globe.svg" alt="Sitio Web" />
                </SafeLink>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
