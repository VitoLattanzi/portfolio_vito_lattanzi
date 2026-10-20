import SafeLink from '@/components/SafeLinks'
import { vito } from '@/data/person'

export default function Contact() {
  const email = vito.contacts.find(c => c.label === 'Email')?.url
  const linkedin = vito.contacts.find(c => c.label === 'LinkedIn')?.url
  const whatsapp = vito.contacts.find(c => c.label === 'WhatsApp')?.url

  return (
    <section id="contact" className="section-slim">
      <div className="card text-center">
        <h2 className="section-title contact-title">
          {vito.contact?.title ?? 'Contacto'}
        </h2>
        <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto mb-12">
          {vito.contact?.subtitle}
        </p>

        <div className="contact-actions">
          {email && (
            <SafeLink
              href={email}
              external
              aria-label={`Enviar un correo electrónico a ${vito.name}`}
              className="btn-primary"
            >
              <img className="w-5 h-5 filter invert" src="/icons/gmail.svg" alt="" />
              Enviar email
            </SafeLink>
          )}
          {linkedin && (
            <SafeLink
              href={linkedin}
              external
              aria-label="Perfil de LinkedIn de Vito Lattanzi"
              className="btn-secondary"
            >
              <img className="w-5 h-5 filter invert" src="/icons/linkedin.svg" alt="" />
              LinkedIn
            </SafeLink>
          )}
          {whatsapp && (
            <SafeLink
              href={whatsapp}
              external
              aria-label="Contactar a Vito Lattanzi por WhatsApp"
              className="btn-secondary"
            >
              <img className="w-5 h-5 filter invert" src="/icons/whatsapp.svg" alt="" />
              WhatsApp
            </SafeLink>
          )}
        </div>
      </div>
    </section>
  )
}
