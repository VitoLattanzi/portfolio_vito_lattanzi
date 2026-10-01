import MiniCarousel from '@/components/Carousel_de_img'
import SafeLink from '@/components/SafeLinks'
import { projects } from '@/data/projects'

export default function Proyects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Proyectos</h2>
      
      <div className="flex flex-col gap-16">
        {projects.map(project => (
          <div key={project.slug}>
            <h3 className="text-2xl font-bold text-text-main mb-6 hover:text-accent transition-colors">
              {project.title}
            </h3>
            
            <article className="card flex flex-col lg:flex-row gap-8">
              
              {/* Información - Lado Izquierdo */}
              <div className="w-full lg:w-2/3 flex flex-col gap-6">
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.stack?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="flex gap-4 mt-2">
                  {project.repoUrl?.length > 0 && (typeof project.repoUrl === 'string' ? project.repoUrl !== '' : project.repoUrl[0] !== '') && (
                    <SafeLink
                      className="btn-icon"
                      href={Array.isArray(project.repoUrl) ? project.repoUrl[0] : project.repoUrl}
                      external
                      aria-label="Código fuente en GitHub"
                    >
                      <img className="w-7 h-7 filter invert" src="/icons/github.svg" alt="GitHub" />
                    </SafeLink>
                  )}
                  {project.siteUrl && (
                    <SafeLink 
                      className="btn-icon"
                      href={project.siteUrl} 
                      external
                      aria-label="Sitio web en vivo"
                    >
                      <img className="w-7 h-7 filter invert" src="/icons/globe.svg" alt="Sitio Web" />
                    </SafeLink>
                  )}
                </div>
              </div>

              {/* Carrusel - Lado Derecho */}
              {(project.images?.length ?? 0) > 0 && (
                <div className="w-full lg:w-1/3">
                   <MiniCarousel images={project.images ?? []} aspect={project.aspect ?? '16 / 9'} />
                </div>
              )}
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

