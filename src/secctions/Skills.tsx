import { vitoSkills } from '@/data/person'

interface Skill {
  name: string;
  icon: string;
  level?: number;
}

interface SkillGroups {
  frontend?: Skill[];
  backend?: Skill[];
  database?: Skill[];
}

export default function Skills() {

    // 🔥 DEBUG 1
    console.log('vitoSkills:', vitoSkills);

    const skillGroups: SkillGroups = vitoSkills;

    const front = skillGroups.frontend ?? [];
    const db    = skillGroups.database ?? [];
    const back  = skillGroups.backend ?? [];

    // 🔥 DEBUG 2
    console.log('frontend:', front);
    console.log('backend:', back);
    console.log('database:', db);

    return (
        <section id="skills" className="skills_section">
            <h2 className="skills_section_title">Habilidades</h2>

            <div className="skills_section_groups_container">
                
                {/* FRONTEND */}
                <div className="skills_section_subgroup">
                    <h3 className="skills_section_subtitle">Frontend</h3>
                    <ul className="skills_section_list">
                        {front.map((s) => {
                            console.log('ICON FRONT:', s.icon); // 🔥 DEBUG 3
                            return (
                                <li key={s.name} className="skills_section_list_item">
                                    <i className={s.icon} style={{ fontSize: '30px' }}></i>
                                    <p className="skills_section_list_name">{s.name}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="skills_section_DB_Backend_container">

                    {/* BACKEND */}
                    <div className="skills_section_subgroup">
                        <h3 className="skills_section_subtitle">Backend</h3>
                        <ul className="skills_section_list">
                            {back.map((s) => {
                                console.log('ICON BACK:', s.icon); // 🔥 DEBUG
                                return (
                                    <li key={s.name} className="skills_section_list_item">
                                        <i className={s.icon} style={{ fontSize: '30px' }}></i>
                                        <p className="skills_section_list_name">{s.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* DATABASE */}
                    <div className="skills_section_subgroup">
                        <h3 className="skills_section_subtitle">Bases de datos</h3>
                        <ul className="skills_section_list">
                            {db.map((s) => {
                                console.log('ICON DB:', s.icon); // 🔥 DEBUG
                                return (
                                    <li key={s.name} className="skills_section_list_item">
                                        <i className={s.icon} style={{ fontSize: '30px' }}></i>
                                        <p className="skills_section_list_name">{s.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}