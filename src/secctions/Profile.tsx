import SafeLink from '@/components/SafeLinks'
import { vito } from '@/data/person'

export default function Profile() {
  const github = vito.contacts.find(c => c.label === 'GitHub')?.url

  return (
    <section
      id="profile"
      className="flex flex-col md:flex-row items-center justify-center gap-10 py-6 px-6 max-w-5xl mx-auto"
    >
      <img
        src={vito.avatar}
        alt={`Foto de perfil de ${vito.name}`}
        width={256}
        height={256}
        fetchPriority="high"
        decoding="async"
        className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border border-white/10 shadow-2xl"
      />

      <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
        <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide border border-accent/20">
          {vito.role}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main">
          Hola, soy {vito.name}
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-xl">
          {vito.tagline}
        </p>

        {(vito.location || vito.availability) && (
          <p className="text-sm text-text-muted/80">
            {[vito.location, vito.availability].filter(Boolean).join(' · ')}
          </p>
        )}

        <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
          <a href="#projects" className="btn-primary">
            Ver proyectos
          </a>
          <a href="#contact" className="btn-secondary">
            Contactarme
          </a>
          {github && (
            <SafeLink
              href={github}
              external
              aria-label="Perfil de GitHub de Vito Lattanzi"
              className="btn-secondary"
            >
              GitHub
            </SafeLink>
          )}
        </div>
      </div>
    </section>
  )
}
