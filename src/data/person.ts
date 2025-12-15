import type { Person } from '@/types'
import { calcAge } from '@/utils/strings'

export const vito: Person = {
  name: 'Vito Lattanzi',
  role: 'Full Stack Developer',
  location: 'CABA, Argentina',
  birthdate: '2006-03-02',
  tagline: 'Full stack orientado a productos simples y usables',
  shortBio:
    'Desarrollador web enfocado en React/TypeScript y Node. Me gustan los productos claros, rapidos y bien disenados.',
  longBio:
    'Trabajo con React + TypeScript, Node/Express y Mongo. Tengo experiencia arreglando hardware y dando soporte IT, lo que me da una mirada completa del stack. Busco crear productos simples, bien ejecutados y con buen rendimiento.',
  contacts: [
    { label: 'Email', url: 'mailto:vitofrancolattanzi@gmail.com' },
    { label: 'WhatsApp', url: 'https://wa.me/541138916445' },
    { label: 'GitHub', url: 'https://github.com/VitoLattanzi' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vito-lattanzi-ab9927338' },
  ],
  skills: {
    frontend: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored', level: 80 },
      { name: 'CSS3', icon: 'devicon-css3-plain colored', level: 80 },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 60 },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored', level: 60 },
      { name: 'React', icon: 'devicon-react-original colored', level: 60 },
    ],
    backend: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 60 },
      { name: 'Python', icon: 'devicon-python-plain colored', level: 50 },
    ],
    database: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 60 },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored', level: 60 },
    ],
  },
}

// Ejemplo: si queres mostrar edad dinamica en el Hero
export const vitoAge = vito.birthdate ? calcAge(vito.birthdate) : undefined

export const vitoSkills = vito.skills ? vito.skills : {}
