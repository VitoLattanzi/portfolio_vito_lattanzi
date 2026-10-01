import { vitoSkills } from '@/data/person'

export default function Skills() {
  return (
    <section id="skills" className="h-full bg-bg-alt/50 border border-white/10 p-8 rounded-2xl">
      <h2 className="section-title">Habilidades</h2>
      <div className="flex flex-col gap-6">
        {Object.entries(vitoSkills).map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-3">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-text-muted">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(skills as Array<{name: string; icon?: string}>).map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                >
                  {skill.icon && <i className={`${skill.icon} text-sm`} />}
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
