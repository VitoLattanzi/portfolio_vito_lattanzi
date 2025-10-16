import { vitoSkills } from '@/data/person'

export default function Skills() {
  return (
    <section id="skills" className="skills_section">
        <h2 className="skills_section_title">Habilidades</h2>
        <ul className="skills_section_list">
            {vitoSkills.map((skill) => (
                <li key={skill.icon} className="skills_section_list_item">
                    {skill.icon}
                </li>
                
            ))}
            <p> s</p>
        </ul>
    </section>
    )
}