import SafeLink from '@/components/SafeLinks'
import ResponsiveImage from '@/components/ResponsiveImage'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

function getRepoUrl(project: Project): string | undefined {
  const repo = Array.isArray(project.repoUrl) ? project.repoUrl[0] : project.repoUrl
  return repo?.trim() ? repo : undefined
}

export default function Proyects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Proyectos</h2>

      <div className="flex flex-col gap-14">
        {projects.map((project, index) => {
          const repoUrl = getRepoUrl(project)
          const title = (
            <h3 className="text-2xl font-bold text-text-main transition-colors">
              {project.title}
            </h3>
          )

          return (
            <div key={project.slug}>
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-accent/60 font-mono text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {project.siteUrl ? (
                  <SafeLink
                    href={project.siteUrl}
                    external
                    className="group"
                    aria-label={`Abrir el sitio de ${project.title}`}
                  >
                    <h3 className="text-2xl font-bold text-text-main transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                  </SafeLink>
                ) : (
                  title
                )}
              </div>

              <article className="card flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:flex-1 flex flex-col gap-5">
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {(project.stack?.length ?? 0) > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-actions">
                    {repoUrl && (
                      <SafeLink
                        className="project-link"
                        href={repoUrl}
                        external
                        aria-label={`Ver el código fuente de ${project.title} en GitHub`}
                      >
                        <img className="w-5 h-5 filter invert" src="/icons/github.svg" alt="" />
                        <span>Código</span>
                      </SafeLink>
                    )}
                    {project.siteUrl && (
                      <SafeLink
                        className="project-link"
                        href={project.siteUrl}
                        external
                        aria-label={`Ver el sitio en vivo de ${project.title}`}
                      >
                        <img className="w-5 h-5 filter invert" src="/icons/globe.svg" alt="" />
                        <span>Sitio en vivo</span>
                      </SafeLink>
                    )}
                  </div>
                </div>

                {project.siteUrl ? (
                  <SafeLink
                    href={project.siteUrl}
                    external
                    className="project-media aspect-[16/9] w-full lg:w-1/3 block group"
                    aria-label={`Abrir el sitio de ${project.title}`}
                  >
                    <ResponsiveImage
                      desktopSrc={`/projects/${project.slug}/desktop.png`}
                      mobileSrc={`/projects/${project.slug}/mobile.png`}
                      alt={`Vista previa del proyecto ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                  </SafeLink>
                ) : (
                  <div className="project-media aspect-[16/9] w-full lg:w-1/3">
                    <ResponsiveImage
                      desktopSrc={`/projects/${project.slug}/desktop.png`}
                      mobileSrc={`/projects/${project.slug}/mobile.png`}
                      alt={`Vista previa del proyecto ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
