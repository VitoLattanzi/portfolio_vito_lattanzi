import type { Person } from '@/types'
import { calcAge } from '@/utils/strings'

export const vito: Person = {
  name: 'Vito Lattanzi',
  role: 'developer',
  location: 'CABA, Argentina',
  birthdate: '2006-03-02',
  tagline: 'full stack developer',
  shortBio:
    'agregar algo nose a q rumbo .',
  longBio:
    'Trabajo con React + TS, Node/Express y Mongo. Experiencia arreglando hardware y soporte IT. Me interesan los productos simples y bien ejecutados.',
  contacts: [
    { label: 'Email', url: 'mailto:vitofrancolattanzi@gmail.com' },
    { label: 'WhatsApp', url: 'https://wa.me/' },
    { label: 'GitHub', url: 'https://github.com/VitoLattanzi' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vito-lattanzi-ab9927338' },
  ],
  skills: ["html", "css", "javascript", "tipescript", "pyhton", "mondoDB", "MySQL", "react", "node.js"]
}

// Ejemplo: si querés mostrar edad dinámica en el Hero
export const vitoAge = vito.birthdate ? calcAge(vito.birthdate) : undefined
