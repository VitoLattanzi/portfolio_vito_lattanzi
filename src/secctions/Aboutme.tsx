import { vito, workExperience, education } from '@/data/person'
import type { ExperienceItem } from '@/types'

export default function AboutMe() {
  const Timeline = ({ items }: { items: ExperienceItem[] }) => (
    <div className="about-timeline">
      {items.map((item: ExperienceItem, index: number) => (
        <div key={index} className="timeline-item">
          <div className="timeline-node" />
          <div className="timeline-content">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-meta">{item.company} • {item.period}</p>
            <p className="timeline-desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section id="about" className="about-container">
      <h2 className="section-title">Sobre Mí</h2>
      
      <p className="about-text">
        {vito.longBio}
      </p>

      <div className="about-grid">
        <div>
          <h3 className="about-subtitle">Experiencia</h3>
          <Timeline items={workExperience} />
        </div>
        <div>
          <h3 className="about-subtitle">Educación</h3>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  )
}

