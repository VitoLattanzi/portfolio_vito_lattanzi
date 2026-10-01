import { vito } from '@/data/person'

export default function Contact() {
  const email = vito.contacts.find(c => c.label === 'Email')?.url
  const linkedin = vito.contacts.find(c => c.label === 'LinkedIn')?.url
  const whatsapp = vito.contacts.find(c => c.label === 'WhatsApp')?.url

  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
      <h2 className="text-4xl font-bold text-text-main">¿Trabajamos juntos?</h2>
      <p className="text-lg text-text-muted leading-relaxed max-w-lg">
        Siempre estoy abierto a nuevas oportunidades y desafíos. Si tienes una propuesta o simplemente quieres saludar, no dudes en contactarme.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {email && (
          <a
            href={email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar correo electrónico a Vito Lattanzi"
            className="px-8 py-4 bg-accent text-bg-main font-bold rounded-xl hover:bg-accent-strong transition-all hover:scale-105 shadow-lg w-full sm:w-auto text-center"
          >
            Enviar Email
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn de Vito Lattanzi"
            className="px-8 py-4 bg-bg-alt text-text-main font-medium rounded-xl hover:bg-white/5 border border-white/10 transition-all hover:scale-105 w-full sm:w-auto text-center"
          >
            LinkedIn
          </a>
        )}
        {whatsapp && (
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Vito Lattanzi"
            className="px-8 py-4 bg-bg-alt text-text-main font-medium rounded-xl hover:bg-white/5 border border-white/10 transition-all hover:scale-105 w-full sm:w-auto text-center"
          >
            WhatsApp
          </a>
        )}
      </div>
    </section>
  )
}
