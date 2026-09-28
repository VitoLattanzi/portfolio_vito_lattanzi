import MiniCarousel from '@/components/Carousel_de_img'
import SafeLink from '@/components/SafeLinks'
import { projects } from '@/data/projects'

export default function Proyects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-text-main">Proyectos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map(project => (
          <article 
            key={project.slug} 
            className="group bg-bg-alt/50 border border-white/10 p-8 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 hover:border-accent/30 transition-all shadow-lg hover:shadow-accent/5"
          >
            <div className="flex-1 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {project.description}
              </p>

              {project.stack?.length ? (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {project.images?.length > 0 ? (
              <div className="mt-4">
                 <MiniCarousel images={project.images} aspect={project.aspect ?? '16 / 9'} />
              </div>
            ) : null}

            <div className="flex gap-3 mt-4">
              {project.repoUrl?.length > 0 && project.repoUrl[0] !== '' && (
                <SafeLink
                  className="px-4 py-2 rounded-lg bg-bg-alt text-text-main text-sm font-medium hover:bg-white/5 border border-white/10 transition-all"
                  href={project.repoUrl[0]}
                  external
                >
                  Ver Código
                </SafeLink>
              )}
              {project.siteUrl && (
                <SafeLink 
                  className="px-4 py-2 rounded-lg bg-accent text-bg-main text-sm font-bold hover:bg-accent-strong transition-all shadow-md" 
                  href={project.siteUrl} 
                  external
                >
                  Visitar Sitio
                </SafeLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
