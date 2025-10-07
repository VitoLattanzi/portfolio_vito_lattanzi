// slug: útil para rutas /project/:slug
// Convierte un string “normal” en un slug
// Ejemplo:
/* "Chat estilo WhatsApp (React)" → "chat-estilo-whatsapp-react" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // sin tildes
    .replace(/[^a-z0-9]+/g, '-') // separadores
    .replace(/(^-|-$)+/g, '')
}

// Corta un texto si es muy largo y le agrega puntos suspensivos.
export function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1) + '…' : s
}

// capitalizar títulos si los recibís feos 
// Convierte un texto a “Formato Título” (cada palabra empieza con mayúscula).
export function titleCase(s: string): string {
  return s
    .toLowerCase()
    .split(' ')
    .map(w => w ? w[0].toUpperCase() + w.slice(1) : w)
    .join(' ')
}

// calcular edad desde YYYY-MM-DD (para mostrar en About/Hero)
export function calcAge(birthISO: string): number {
  const [y, m, d] = birthISO.split('-').map(Number)
  const today = new Date()
  let age = today.getFullYear() - y
  const hasHadBirthday =
    today.getMonth() + 1 > m || (today.getMonth() + 1 === m && today.getDate() >= d)
  return hasHadBirthday ? age : age - 1
}
