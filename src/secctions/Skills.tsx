import TechIcon from '@/components/TechIcon'
import { useI18n } from '@/i18n/useI18n'

type SkillItem = { name: string; icon?: string; level?: number }

export default function Skills() {
  const { person, t } = useI18n()
  const entries = Object.entries(person.skills ?? {})
  const categoryLabels = t.skillsCategories as Record<string, string>

  return (
    <section id="skills" className="card p-8" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        {t.sections.skills}
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
