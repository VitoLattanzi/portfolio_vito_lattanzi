import SafeLink from '@/components/SafeLinks'
import { useI18n } from '@/i18n/useI18n'

export default function Profile() {
  const { person, t } = useI18n()
  const github = person.contacts.find(c => c.label === 'GitHub')?.url

  return (
    <section
      id="profile"
      className="flex flex-col md:flex-row items-center justify-center gap-10 py-6 px-6 max-w-5xl mx-auto"
    >
      <img
        src={person.avatar}
        alt={`${t.hero.photoAlt} ${person.name}`}
        width={256}
        height={256}
        fetchPriority="high"
        decoding="async"
        className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border border-border shadow-2xl"
      />

      <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
        <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide border border-accent/20">
          {person.role}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main">
          {t.hero.greeting} {person.name}
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-xl">
          {person.tagline}
        </p>

        {(person.location || person.availability) && (
          <p className="text-sm text-text-muted/80">
            {[person.location, person.availability].filter(Boolean).join(' · ')}
          </p>
        )}

        <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
          <a href="#projects" className="btn-primary">
            {t.hero.projects}
          </a>
          <a href="#contact" className="btn-secondary">
            {t.hero.contact}
          </a>
          {github && (
            <SafeLink
              href={github}
              external
              aria-label={`${t.hero.github} - ${person.name}`}
              className="btn-secondary"
            >
              {t.hero.github}
            </SafeLink>
          )}
        </div>
      </div>
    </section>
  )
}
