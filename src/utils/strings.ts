// Helpers para strings reutilizables en el portfolio
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // sin tildes
    .replace(/[^a-z0-9]+/g, '-') // separadores
    .replace(/(^-|-$)+/g, '')
}

// Corta un texto si es muy largo y le agrega puntos suspensivos.
export function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1) + '...' : s
}

// Capitaliza titulos si llegan en minusculas
export function titleCase(s: string): string {
  return s
    .toLowerCase()
    .split(' ')
    .map(word => (word ? word[0].toUpperCase() + word.slice(1) : word))
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
