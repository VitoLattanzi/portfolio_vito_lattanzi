import { vito } from '@/data/person'

export default function Footer() {
  return (
    <footer className="Footer_section">
      <div className="Footer_content_container">
        <p className="Footer_rights_reserved">
          © {new Date().getFullYear()} {vito.name}. Todos los derechos reservados.
        </p>
        {vito.location && (
          <p className="Footer_rights_reserved mt-1 text-text-muted/70">{vito.location}</p>
        )}
      </div>
    </footer>
  )
}
