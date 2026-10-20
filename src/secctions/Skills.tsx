import TechIcon from '@/components/TechIcon'
import { vitoSkills } from '@/data/person'

type SkillItem = { name: string; icon?: string; level?: number }

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Bases de datos',
  tools: 'Herramientas & Automatización',
}

export default function Skills() {
  const entries = Object.entries(vitoSkills ?? {})

  return (
    <section id="skills" className="card p-8" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Habilidades
      </h2>

      <div className="flex flex-col gap-6 text-center">
        {entries.map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-3">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-text-muted">
              {categoryLabels[category] ?? category}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {((skills ?? []) as SkillItem[]).map(skill => (
                <div key={skill.name} className="badge flex items-center gap-2">
                  <TechIcon slug={skill.icon} className="w-4 h-4 shrink-0" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
