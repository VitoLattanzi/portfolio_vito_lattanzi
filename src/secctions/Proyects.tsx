// los trabajos en los q estube y trabaje metemos todo aca esperiencia y projectos

import { projets } from "../data/projets";

export default function Proyects() {
    return (
        <section>
            <h2 className="Proyects_section_title">Proyectos</h2>
            <div className="Proyects_section_container">
                {projets.map((project, index) => (
                    <article key={index} className="border border-gray-800 rounded-2xl p-4">
                        <h3 className="font-semibold mb-1">{project.slug}</h3>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                    </article>
                    
                ))}
            </div>
        </section>
    )
}
//modelo de el recuadro de cada proyecto
/* return (
    <section id="Proyects" className="min-h-screen px-6 py-12 bg-gray-900">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* placeholder de cards *//*}
            <article className="border border-gray-800 rounded-2xl p-4">
              <h3 className="font-semibold mb-1">Proyecto demo</h3>
              <p className="text-gray-400 text-sm">Descripción breve del proyecto…</p>
              <div className="flex gap-4 mt-3 text-sm">
                <a className="underline" href="#" target="_blank">GitHub</a>
                <a className="underline" href="#" target="_blank">Web</a>
                <a className="underline" href="#">Detalle</a>
              </div>
            </article>
            {/* repetí o reemplazá por <ProjectGrid /> luego *//*}
          </div>
      </div>
    </section>
  ) */