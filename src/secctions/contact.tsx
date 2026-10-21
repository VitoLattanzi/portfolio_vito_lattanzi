import SafeLink from '@/components/SafeLinks'
import { useI18n } from '@/i18n/useI18n'

export default function Contact() {
  const { person, t } = useI18n()
  const email = person.contacts.find(c => c.label === 'Email')?.url
  const linkedin = person.contacts.find(c => c.label === 'LinkedIn')?.url
  const whatsapp = person.contacts.find(c => c.label === 'WhatsApp')?.url

  return (
    <section id="contact" className="section-slim">
      <div className="card text-center">
        <h2 className="section-title contact-title">{person.contact?.title}</h2>
        <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto mb-12">
          {person.contact?.subtitle}
        </p>

        <div className="contact-actions">
          {email && (
            <SafeLink
              href={email}
              external
              aria-label={`${t.contact.emailAria} ${person.name}`}
              className="btn-primary"
            >
              <img className="w-5 h-5 filter invert" src="/icons/gmail.svg" alt="" />
              {t.contact.sendEmail}
            </SafeLink>
          )}
          {linkedin && (
            <SafeLink
              href={linkedin}
              external
              aria-label={`${t.contact.linkedinAria} ${person.name}`}
              className="btn-secondary"
            >
              <img className="w-5 h-5 filter invert" src="/icons/linkedin.svg" alt="" />
              {t.contact.linkedin}
            </SafeLink>
          )}
          {whatsapp && (
            <SafeLink
              href={whatsapp}
              external
              aria-label={`${t.contact.whatsappAria} ${person.name}`}
              className="btn-secondary"
            >
              <img className="w-5 h-5 filter invert" src="/icons/whatsapp.svg" alt="" />
              {t.contact.whatsapp}
            </SafeLink>
          )}
        </div>
      </div>
    </section>
  )
}
