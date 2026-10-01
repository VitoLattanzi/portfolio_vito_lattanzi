import { vito } from '@/data/person'

export default function Contact() {
  const email = vito.contacts.find(c => c.label === 'Email')?.url
  const linkedin = vito.contacts.find(c => c.label === 'LinkedIn')?.url
  const whatsapp = vito.contacts.find(c => c.label === 'WhatsApp')?.url

  return (
    <section id="contact" className="section-slim">
      <h2 className="section-title">¿Trabajamos juntos?</h2>
      <p className="text-lg text-text-muted leading-relaxed max-w-lg mx-auto mb-10">
        Siempre estoy abierto a nuevas oportunidades y desafíos. Si tienes una propuesta o simplemente quieres saludar, no dudes en contactarme.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-2 mb-8">
        {email && (
          <a
            href={email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar correo electrónico a Vito Lattanzi"
            className="btn-primary"
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
            className="btn-secondary"
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
            className="btn-secondary"
          >
            WhatsApp
          </a>
        )}
      </div>
    </section>
  )
}

