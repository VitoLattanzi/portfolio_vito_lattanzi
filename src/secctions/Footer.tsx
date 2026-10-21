import { useI18n } from '@/i18n/useI18n'

export default function Footer() {
  const { person, t } = useI18n()

  return (
    <footer className="Footer_section">
      <div className="Footer_content_container">
        <p className="Footer_rights_reserved">
          © {new Date().getFullYear()} {person.name}. {t.footer.rights}
        </p>
        {person.location && (
          <p className="Footer_rights_reserved mt-1 text-text-muted/70">{person.location}</p>
        )}
      </div>
    </footer>
  )
}
