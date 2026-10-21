import type { Locale, Project } from '@/types'

const es: Project[] = [
  {
    slug: 'garpa',
    title: 'Garpa - Gestor de Gastos',
    aspect: '16 / 9',
    description:
      'Arquitecté una solución Full Stack para la gestión de gastos compartidos utilizando Next.js, Prisma y Supabase, logrando una reducción del 40% en el tiempo de conciliación de deudas mediante automatización de cálculos y persistencia de datos en tiempo real.',
    stack: ['Next.js', 'Prisma', 'Supabase', 'Tailwind CSS'],
    repoUrl: ['https://github.com/VitoLattanzi/garpa'],
    siteUrl: 'https://garpa.vercel.app/',
    images: [],
  },
  {
    slug: 'momentum',
    title: 'Momentum - Habit Tracker',
    aspect: '16 / 9',
    description:
      'Desarrollé una aplicación MERN (MongoDB, Express, React, Node.js) para el seguimiento de hábitos diarios, implementando autenticación segura con JWT y un sistema de dashboard interactivo que garantiza una experiencia de usuario fluida y persistencia total de datos.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    repoUrl: [
      'https://github.com/VitoLattanzi/tp_final_frontend',
      'https://github.com/VitoLattanzi/tp_final_vito_lattanzi_',
    ],
    siteUrl: 'https://momentum-orcin-six.vercel.app/',
    images: [{ src: '/projects/momentum/inicio.png', alt: 'Pantalla de inicio' }],
  },
  {
    slug: 'logistica-martinez',
    title: 'Logística Martínez - Landing Page',
    aspect: '16 / 9',
    description:
      'Optimicé la presencia digital de Logística Martínez mediante una landing page comercial de alto impacto con integración de CRM y mapas interactivos, facilitando la captación de clientes potenciales a través de formularios optimizados y diseño responsive.',
    stack: ['React', 'Node.js', 'CSS'],
    repoUrl: ['https://github.com/VitoLattanzi/pagina-logisticagys'],
    siteUrl: 'https://logisticamartinez.com.ar/',
    images: [
      { src: '/projects/logistica-martinez/home.png', alt: 'Landing Page Logística Martínez' },
    ],
  },
]

const en: Project[] = [
  {
    slug: 'garpa',
    title: 'Garpa - Expense Manager',
    aspect: '16 / 9',
    description:
      'Architected a full-stack shared expense management solution using Next.js, Prisma and Supabase, reducing debt reconciliation time by 40% through automated calculations and real-time data persistence.',
    stack: ['Next.js', 'Prisma', 'Supabase', 'Tailwind CSS'],
    repoUrl: ['https://github.com/VitoLattanzi/garpa'],
    siteUrl: 'https://garpa.vercel.app/',
    images: [],
  },
  {
    slug: 'momentum',
    title: 'Momentum - Habit Tracker',
    aspect: '16 / 9',
    description:
      'Built a MERN application (MongoDB, Express, React, Node.js) for daily habit tracking, implementing secure JWT authentication and an interactive dashboard that delivers a smooth user experience and full data persistence.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    repoUrl: [
      'https://github.com/VitoLattanzi/tp_final_frontend',
      'https://github.com/VitoLattanzi/tp_final_vito_lattanzi_',
    ],
    siteUrl: 'https://momentum-orcin-six.vercel.app/',
    images: [{ src: '/projects/momentum/inicio.png', alt: 'Home screen' }],
  },
  {
    slug: 'logistica-martinez',
    title: 'Logística Martínez - Landing Page',
    aspect: '16 / 9',
    description:
      'Improved the digital presence of Logística Martínez with a high-impact commercial landing page featuring CRM integration and interactive maps, streamlining lead acquisition through optimized forms and a responsive design.',
    stack: ['React', 'Node.js', 'CSS'],
    repoUrl: ['https://github.com/VitoLattanzi/pagina-logisticagys'],
    siteUrl: 'https://logisticamartinez.com.ar/',
    images: [
      { src: '/projects/logistica-martinez/home.png', alt: 'Logística Martínez landing page' },
    ],
  },
]

export const projectsByLocale: Record<Locale, Project[]> = { es, en }
export const projects = es
