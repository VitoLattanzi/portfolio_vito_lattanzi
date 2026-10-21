import type { ExperienceItem } from '@/types'
import { useI18n } from '@/i18n/useI18n'

function Timeline({ items, empty }: { items: ExperienceItem[]; empty: string }) {
  if (!items.length) {
    return <p className="timeline-desc">{empty}</p>
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
  const { person, t } = useI18n()

  return (
    <section id="about" className="about-container" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        {t.sections.about}
      </h2>

      <p className="about-text">{person.longBio}</p>

      <div className="about-grid">
        <div>
          <h3 className="about-subtitle">{t.about.experience}</h3>
          <Timeline items={person.experience ?? []} empty={t.about.empty} />
        </div>
        <div>
          <h3 className="about-subtitle">{t.about.education}</h3>
          <Timeline items={person.education ?? []} empty={t.about.empty} />
        </div>
      </div>
    </section>
  )
}
