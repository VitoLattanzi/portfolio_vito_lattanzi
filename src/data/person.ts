import type { Locale, Person } from '@/types'
import { calcAge } from '@/utils/strings'

const es: Person = {
  name: 'Vito Lattanzi',
  avatar: '/avatar.jpg',
  role: 'Full Stack Developer & Automatización',
  email: 'vitofrancolattanzi@gmail.com',
  location: 'Buenos Aires, Argentina',
  availability: 'Disponible para remoto',
  birthdate: '2006-03-02',

  tagline:
    'Estudiante de Ingeniería en Sistemas. Desarrollo web y automatización con enfoque práctico y orientado a soluciones.',

  shortBio:
    'Estudiante de Ingeniería en Sistemas apasionado por construir aplicaciones web eficientes y automatizar procesos que generan valor real.',

  longBio:
    'Soy estudiante de Ingeniería en Sistemas de la Información en UTN y me enfoco en el desarrollo de aplicaciones web y automatización de procesos. Trabajo con tecnologías como React, TypeScript, Node.js, Express y bases de datos como MongoDB y MySQL, construyendo aplicaciones completas con enfoque en simplicidad, rendimiento y usabilidad. Además, cuento con experiencia práctica en soporte técnico, hardware y redes.',

  seo: {
    title: 'Vito Lattanzi | Full Stack Developer & Automatización',
    description:
      'Portfolio de Vito Lattanzi, Desarrollador Full Stack en Buenos Aires. Proyectos con React, TypeScript, Node.js y automatización de procesos.',
  },

  contact: {
    title: '¿Trabajamos juntos?',
    subtitle:
      'Estoy abierto a nuevas oportunidades y desafíos. Si tenés una propuesta o simplemente querés saludar, podés contactarme por cualquiera de estos medios.',
  },

  experience: [
    {
      title: 'Junior Freelance Software Developer',
      company: 'Freelance',
      period: '2025 - Presente',
      description:
        'Desarrollo web full-stack, automatización con n8n, scraping con Apify y optimización de flujos con Groq API.',
    },
    {
      title: 'IT Technician',
      company: 'Freelance / Local',
      period: '2024 - Presente',
      description:
        'Soporte técnico integral, mantenimiento de hardware, redes y optimización de sistemas.',
    },
  ],

  education: [
    {
      title: 'Ingeniería en Sistemas de Información',
      company: 'UTN',
      period: '2024 - Presente',
      description:
        'Formación universitaria en arquitectura de sistemas, algoritmos y gestión de proyectos.',
    },
    {
      title: 'Diplomatura Full Stack Programming',
      company: 'UTN',
      period: '2024 - 2025',
      description:
        'Certificación profesional en desarrollo de aplicaciones web full-stack.',
    },
  ],

  contacts: [
    {
      label: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&to=vitofrancolattanzi@gmail.com&su=Contacto%20Portfolio&body=Hola%20Vito,',
    },
    { label: 'WhatsApp', url: 'https://wa.me/541138916445' },
    { label: 'GitHub', url: 'https://github.com/VitoLattanzi' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vito-lattanzi-ab9927338' },
  ],

  skills: {
    frontend: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
    backend: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express', icon: 'express' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Prisma', icon: 'prisma' },
    ],
    database: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
    ],
    tools: [
      { name: 'API Integration', icon: 'rss' },
      { name: 'Workflow Automation', icon: 'n8n' },
      { name: 'Git', icon: 'git' },
    ],
  },
}

const en: Person = {
  name: 'Vito Lattanzi',
  avatar: '/avatar.jpg',
  role: 'Full Stack Developer & Automation',
  email: 'vitofrancolattanzi@gmail.com',
  location: 'Buenos Aires, Argentina',
  availability: 'Open to remote work',
  birthdate: '2006-03-02',

  tagline:
    'Systems Engineering student. Web development and automation with a practical, solution-oriented approach.',

  shortBio:
    'Systems Engineering student passionate about building efficient web applications and automating processes that create real value.',

  longBio:
    'I am an Information Systems Engineering student at UTN focused on web application development and process automation. I work with React, TypeScript, Node.js, Express and databases such as MongoDB and MySQL, building complete applications with an emphasis on simplicity, performance and usability. I also have hands-on experience in technical support, hardware and networking.',

  seo: {
    title: 'Vito Lattanzi | Full Stack Developer & Automation',
    description:
      'Portfolio of Vito Lattanzi, Full Stack Developer based in Buenos Aires. Projects built with React, TypeScript, Node.js and process automation.',
  },

  contact: {
    title: "Let's work together",
    subtitle:
      'I am open to new opportunities and challenges. If you have a proposal or just want to say hi, feel free to reach out through any of these channels.',
  },

  experience: [
    {
      title: 'Junior Freelance Software Developer',
      company: 'Freelance',
      period: '2025 - Present',
      description:
        'Full-stack web development, automation with n8n, scraping with Apify and workflow optimization with Groq API.',
    },
    {
      title: 'IT Technician',
      company: 'Freelance / Local',
      period: '2024 - Present',
      description:
        'End-to-end technical support, hardware maintenance, networking and system optimization.',
    },
  ],

  education: [
    {
      title: 'Information Systems Engineering',
      company: 'UTN',
      period: '2024 - Present',
      description:
        'University training in systems architecture, algorithms and project management.',
    },
    {
      title: 'Full Stack Programming Diploma',
      company: 'UTN',
      period: '2024 - 2025',
      description:
        'Professional certification in full-stack web application development.',
    },
  ],

  contacts: [
    {
      label: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&to=vitofrancolattanzi@gmail.com&su=Portfolio%20Contact&body=Hi%20Vito,',
    },
    { label: 'WhatsApp', url: 'https://wa.me/541138916445' },
    { label: 'GitHub', url: 'https://github.com/VitoLattanzi' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vito-lattanzi-ab9927338' },
  ],

  skills: es.skills,
}

export const personByLocale: Record<Locale, Person> = { es, en }

export const vito = personByLocale.es
export const vitoAge = vito.birthdate ? calcAge(vito.birthdate) : undefined
