import { vito } from '@/data/person'

export default function Profile() {
  const github = vito.contacts.find(c => c.label === 'GitHub')?.url

  return (
    <section id="profile" className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6 max-w-5xl mx-auto">
      <img
        src={vito.avatar}
        alt={vito.name}
        className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border border-white/10 shadow-2xl"
        loading="lazy"
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

        <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
          <a href="#projects" className="px-6 py-3 rounded-xl bg-accent text-bg-main font-bold hover:bg-accent-strong transition-all shadow-lg hover:shadow-accent/20">
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-bg-alt text-text-main font-medium hover:bg-white/5 transition-all border border-white/10 hover:border-white/20"
          >
            Contactarme
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="px-6 py-3 rounded-xl bg-bg-alt text-text-main font-medium hover:bg-white/5 transition-all border border-white/10 hover:border-white/20"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
