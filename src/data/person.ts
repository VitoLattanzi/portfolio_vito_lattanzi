import type { Person } from '@/types'
import { calcAge } from '@/utils/strings'

export const vito: Person = {
  name: 'Vito Lattanzi',
  avatar: '/avatar.jpg',
  role: 'Full Stack Developer & Systems Engineering Student',
  location: 'Buenos Aires, Argentina',
  birthdate: '2006-03-02',

  tagline: 'Desarrollo web y automatización con enfoque práctico y orientado a soluciones',

  shortBio:
    'Desarrollador Full Stack en formación y estudiante de Ingeniería en Sistemas. Trabajo con React, TypeScript y Node.js, creando aplicaciones y soluciones prácticas.',

  longBio:
    'Soy estudiante de Ingeniería en Sistemas de la Información en UTN y me enfoco en el desarrollo de aplicaciones web y automatización de procesos.\n\nTrabajo con tecnologías como React, TypeScript, Node.js, Express y bases de datos como MongoDB y MySQL, construyendo aplicaciones completas con enfoque en simplicidad, rendimiento y usabilidad.\n\nAdemás, cuento con experiencia práctica en soporte técnico, hardware y redes, lo que me da una comprensión más profunda del funcionamiento de los sistemas y me permite desarrollar soluciones más eficientes y robustas.\n\nMe interesa participar en proyectos de desarrollo web, automatización y roles Full Stack junior donde pueda seguir creciendo y aportando valor.',

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
      { name: 'Express', icon: 'devicon-express-original', level: 60 },
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
