import type { Person } from '@/types'
import { calcAge } from '@/utils/strings'

export const vito: Person = {
  name: 'Vito Lattanzi',
  avatar: '/avatar.jpg',
  role: 'Full Stack Developer & Automatización',
  location: 'Buenos Aires, Argentina',
  birthdate: '2006-03-02',

  tagline: 'Estudiante de Ingeniería en Sistemas. Desarrollo web y automatización con enfoque práctico y orientado a soluciones.',

  shortBio:
    'Estudiante de Ingeniería en Sistemas apasionado por construir aplicaciones web eficientes y automatizar procesos que generan valor real.',

  longBio:
    'Soy estudiante de Ingeniería en Sistemas de la Información en UTN y me enfoco en el desarrollo de aplicaciones web y automatización de procesos. Trabajo con tecnologías como React, TypeScript, Node.js, Express y bases de datos como MongoDB y MySQL, construyendo aplicaciones completas con enfoque en simplicidad, rendimiento y usabilidad. Además, cuento con experiencia práctica en soporte técnico, hardware y redes.',

  experience: [
    {
      title: 'Junior Freelance Software Developer',
      company: 'Freelance',
      period: '2025 - Presente',
      description: 'Desarrollo web full-stack, automatización con n8n, scraping con Apify y optimización de flujos con Groq API.',
    },
    {
      title: 'IT Technician',
      company: 'Freelance / Local',
      period: '2024 - Presente',
      description: 'Soporte técnico integral, mantenimiento de hardware, redes y optimización de sistemas.',
    },
    {
      title: 'Diplomatura Full Stack Programming',
      company: 'UTN',
      period: '2024 - 2025',
      description: 'Certificación profesional en desarrollo de aplicaciones web full-stack.',
    },
    {
      title: 'Ingeniería en Sistemas de Información',
      company: 'UTN',
      period: '2024 - Presente',
      description: 'Formación universitaria en arquitectura de sistemas, algoritmos y gestión de proyectos.',
    },
  ],

  contacts: [
    { label: 'Email', url: 'mailto:vitofrancolattanzi@gmail.com' },
    { label: 'WhatsApp', url: 'https://wa.me/541138916445' },
    { label: 'GitHub', url: 'https://github.com/VitoLattanzi' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vito-lattanzi-ab9927338' },
    { label: 'CV', url: '/cv_vito_lattanzi.pdf' },
  ],

  skills: {
    frontend: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    ],
    backend: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
      { name: 'Prisma', icon: 'devicon-prisma-original colored' },
    ],
    database: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    ],
    tools: [
      { name: 'API Integration', icon: 'devicon-rss-plain' },
      { name: 'Workflow Automation', icon: 'devicon-cogs-plain' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
    ],
  },
}

export const vitoAge = vito.birthdate ? calcAge(vito.birthdate) : undefined
export const vitoSkills = vito.skills ? vito.skills : {}
export const vitoExperience = vito.experience ? vito.experience : []

