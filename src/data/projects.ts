import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'garpa',
    title: 'Garpa - Gestor de Gastos',
    aspect: '16 / 9',
    description: 'Arquitecté una solución Full Stack para la gestión de gastos compartidos utilizando Next.js, Prisma y Supabase, logrando una reducción del 40% en el tiempo de conciliación de deudas mediante automatización de cálculos y persistencia de datos en tiempo real.',
    stack: ['Next.js', 'Prisma', 'Supabase', 'Tailwind CSS'],
    repoUrl: ['https://github.com/VitoLattanzi/garpa'],
    siteUrl: 'https://garpa.vercel.app/',
    images: [],
  },
  {
    slug: 'momentum',
    title: 'Momentum - Habit Tracker',
    aspect: '16 / 9',
    description: 'Desarrollé una aplicación MERN (MongoDB, Express, React, Node.js) para el seguimiento de hábitos diarios, implementando autenticación segura con JWT y un sistema de dashboard interactivo que garantiza una experiencia de usuario fluida y persistencia total de datos.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    repoUrl: [
      'https://github.com/VitoLattanzi/tp_final_frontend',
      'https://github.com/VitoLattanzi/tp_final_vito_lattanzi_',
    ],
    siteUrl: 'https://momentum-orcin-six.vercel.app/',
    images: [
      { src: '/projects/momentum/inicio.png', alt: 'Pantalla de inicio' },
    ],
  },
  /* 
  {
    slug: 'electronica-ld',
    title: 'ElectronicaLD - E-commerce',
    aspect: '16 / 9',
    description: 'Desarrollé el ecosistema web para ElectronicaLD integrando automatizaciones con n8n y Groq API para la gestión inteligente de leads y servicios técnicos, optimizando los flujos de trabajo operativos y la conversión de clientes mediante Meta Ads.',
    stack: ['React', 'n8n', 'Groq API', 'Apify'],
    repoUrl: [],
    siteUrl: '',
    images: [],
  },
  */
  {
    slug: 'logistica-martinez',
    title: 'Logística Martínez - Landing Page',
    aspect: '16 / 9',
    description: 'Optimicé la presencia digital de Logística Martínez mediante una landing page comercial de alto impacto con integración de CRM y mapas interactivos, facilitando la captación de clientes potenciales a través de formularios optimizados y diseño responsive.',
    stack: ['React', 'Node.js', 'CSS'],
    repoUrl: ['https://github.com/VitoLattanzi/pagina-logisticagys'],
    siteUrl: 'https://logisticamartinez.com.ar/',
    images: [
      { src: '/projects/logistica-martinez/home.png', alt: 'Landing Page Logística Martínez' },
    ],
  },
]


/* {
    slug: 'whatsapp-clone',
    title: 'Copia de WhatsApp Web',
    aspect: '9 / 16',
    description: 'Replica de la interfaz de WhatsApp Web enfocada en UI responsive y comportamiento basico de chat.',
    stack: ['React', 'CSS'],
    repoUrl: ['https://github.com/VitoLattanzi/tp-final-front-end.git'],
    siteUrl: 'https://tp-final-front-end-nine.vercel.app/chats/',
    images: [
      { src: '/projects/whatsapp/home.png', alt: 'Home de la copia de WhatsApp' },
      { src: '/projects/whatsapp/chat.png', alt: 'Vista de chat' },
      { src: '/projects/whatsapp/info_contacto.png', alt: 'Pantalla de informacion de contacto' },
      { src: '/projects/whatsapp/home_celular.jpeg', alt: 'Home desde celular' },
      { src: '/projects/whatsapp/chat_celular.jpeg', alt: 'Chat desde celular' },
      { src: '/projects/whatsapp/info_celular.jpeg', alt: 'Info de contacto desde celular' },
    ],
  }, */