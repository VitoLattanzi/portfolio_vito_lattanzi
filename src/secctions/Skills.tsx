import { vitoSkills } from '@/data/person'

interface Skill {
  name: string;
  icon: string;
}

interface SkillGroups {
  [category: string]: Skill[];
}

export default function Skills() {
    const skillGroups: SkillGroups = vitoSkills;

    const front = skillGroups.frontend ?? [];
    const db    = skillGroups.database ?? [];
    const back  = skillGroups.backend ?? [];

    return (
        <section id="skills" className="skills_section">
            <h2 className="skills_section_title">Habilidades</h2>

            <div className="skills_section_groups_container">
                {/* FRONTEND: arriba y a lo ancho */}
                <div className="skills_section_subgroup">
                    <h3 className="skills_section_subtitle">Frontend</h3>
                    <ul className="skills_section_list">
                        {front.map((s) => (
                            <li key={s.name} className="skills_section_list_item">
                                <i className={s.icon}></i>
                                <p className="skills_section_list_name">{s.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="skills_section_DB_Backend_container">

                    {/* BACKEND: abajo derecha */}
                    <div className="skills_section_subgroup">
                        <h3 className="skills_section_subtitle">Backend</h3>
                        <ul className="skills_section_list">
                            {back.map((s) => (
                                <li key={s.name} className="skills_section_list_item">
                                    <i className={s.icon}></i>
                                    <p className="skills_section_list_name">{s.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* DATABASES: abajo izquierda */}
                    <div className="skills_section_subgroup">
                        <h3 className="skills_section_subtitle">Bases de datos</h3>
                        <ul className="skills_section_list">
                            {db.map((s) => (
                                <li key={s.name} className="skills_section_list_item">
                                    <i className={s.icon}></i>
                                    <p className="skills_section_list_name">{s.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}


//SECCION DE SKILLS PARA CUANDO LLENE UN POCO MAS BACK Y DATA BASE
/* <section id="skills" className="skills_section">
            <h2 className="skills_section_title">Habilidades</h2>
            {/* recorre las categorías: frontend, backend, databases, etc. *//*}
            {Object.entries(skillGroups).map(([category, skills]) => (
                <div key={category} className="skills_section_group">
                    <h3 className="skills_section_subtitle">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>

                    <ul className="skills_section_list">
                        {skills.map((skill) => (
                        <li key={skill.name} className="skills_section_list_item">
                            <i className={skill.icon}></i>
                            <p className="skills_section_list_name">{skill.name}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section> */
