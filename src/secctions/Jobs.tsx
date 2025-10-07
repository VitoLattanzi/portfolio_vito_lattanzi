// los trabajos en los q estube y trabaje metemos todo aca esperiencia y projectos

export default function Jobs() {
  return (
    <section id="jobs" className="min-h-screen px-6 py-12 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Trabajos</h2>
        <p className="text-gray-400">
          Acá van tus experiencias (Soporte IT, Electrónica LD, etc.) o servicios que ofrecés.
        </p>
    </div>
    <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* placeholder de cards */}
          <article className="border border-gray-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-1">Proyecto demo</h3>
            <p className="text-gray-400 text-sm">Descripción breve del proyecto…</p>
            <div className="flex gap-4 mt-3 text-sm">
              <a className="underline" href="#" target="_blank">GitHub</a>
              <a className="underline" href="#" target="_blank">Web</a>
              <a className="underline" href="#">Detalle</a>
            </div>
          </article>
          {/* repetí o reemplazá por <ProjectGrid /> luego */}
        </div>
    </div>
    </section>
  )
}

