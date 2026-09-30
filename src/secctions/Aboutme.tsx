import { vito, vitoExperience } from '@/data/person'
import { ExperienceItem } from '@/types'

export default function AboutMe() {
  return (
    <section id="about" className="h-full bg-bg-alt/50 border border-white/10 p-8 rounded-2xl">
      <h2 className="text-2xl font-bold mb-8 text-text-main text-center lg:text-left">Sobre Mí</h2>
      
      <p className="text-text-muted mb-12 leading-relaxed">
        {vito.longBio}
      </p>

      <div className="relative pl-6 border-l border-white/10 flex flex-col gap-10">
        {vitoExperience.map((item: ExperienceItem, index: number) => (
          <div key={index} className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-bg-main border-2 border-accent" />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-text-main">{item.title}</h3>
              <p className="text-accent text-sm font-medium">{item.company} • {item.period}</p>
              <p className="text-text-muted text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
