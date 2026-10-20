import { vito, workExperience, education } from '@/data/person'
import type { ExperienceItem } from '@/types'

function Timeline({ items }: { items: ExperienceItem[] }) {
  if (!items.length) {
    return <p className="timeline-desc">Sin información disponible.</p>
  }

  return (
    <div className="about-timeline">
      {items.map((item, index) => (
        <div key={`${item.company}-${item.title}-${index}`} className="timeline-item">
          <div className="timeline-node" aria-hidden="true" />
          <div className="timeline-content">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-meta">
              {item.company} · {item.period}
            </p>
            <p className="timeline-desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AboutMe() {
  return (
    <section id="about" className="about-container" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        Sobre Mí
      </h2>

      <p className="about-text">{vito.longBio}</p>

      <div className="about-grid">
        <div>
          <h3 className="about-subtitle">Experiencia</h3>
          <Timeline items={workExperience ?? []} />
        </div>
        <div>
          <h3 className="about-subtitle">Educación</h3>
          <Timeline items={education ?? []} />
        </div>
      </div>
    </section>
  )
}
