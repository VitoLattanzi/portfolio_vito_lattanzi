import type { Project } from '@/types'

export const projects: Project[] = [
  {
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
  },
  {
    slug: 'momentum',
    title: 'Momentum - Gestor de habitos',
    aspect: '16 / 9',
    description:
      'App para seguimiento de habitos con dashboard, rachas, historial de 7 dias y registro diario. Frontend en React/Context API y backend Node/Express + Mongo con JWT y verificacion por email.',
    stack: ['React', 'Vite', 'Context API', 'CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    repoUrl: [
      'https://github.com/VitoLattanzi/tp_final_frontend',
      'https://github.com/VitoLattanzi/tp_final_vito_lattanzi_',
    ],
    siteUrl: 'https://momentum-orcin-six.vercel.app/',
    images: [
      { src: '/projects/momentum/inicio.png', alt: 'Pantalla de inicio con resumen de habitos' },
      { src: '/projects/momentum/add.habits.png', alt: 'Formulario para agregar un nuevo habito' },
      { src: '/projects/momentum/entradas,diarias.png', alt: 'Seccion de entradas diarias de habitos' },
      { src: '/projects/momentum/LOGIN.png', alt: 'Pantalla de login de Momentum' },
      { src: '/projects/momentum/homemobile.png', alt: 'Vista mobile del dashboard de Momentum' },
    ],
  },
]
