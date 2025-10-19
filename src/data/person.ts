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
  skills: {
    frontend: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
    ],
    backend: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
    ],
    database: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ]
  },
}
// Ejemplo: si querés mostrar edad dinámica en el Hero
export const vitoAge = vito.birthdate ? calcAge(vito.birthdate) : undefined

export const vitoSkills = vito.skills ? vito.skills : {};