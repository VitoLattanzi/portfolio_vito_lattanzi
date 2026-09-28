import { vitoSkills } from '@/data/person'

export default function Skills() {
  return (
    <section id="skills" className="h-full bg-bg-alt/50 border border-white/10 p-8 rounded-2xl">
      <h2 className="text-2xl font-bold mb-8 text-text-main text-center lg:text-left">Habilidades</h2>
      <div className="flex flex-col gap-6">
        {Object.entries(vitoSkills).map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-3">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-text-muted">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(skills as Array<{name: string}>).map((skill) => (
                <span 
                  key={skill.name} 
                  className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
