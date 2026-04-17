import type { Project } from '@/types'

export const projects: Project[] = [
  
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
  {
    slug: 'logistica martines',
    title: 'Landing Page comercial',
    aspect: '16 / 9',
    description:
      'landing page con integracion de formulario de contacto con mailtrap. Frontend en React/Context API, integracion de mapa para localizar la empresa.',
    stack: ['React', 'Vite', 'Context API', 'CSS', 'Node.js'],
    repoUrl: [
      'https://github.com/VitoLattanzi/pagina-logisticagys',
    ],
    siteUrl: 'https://logisticamartinez.com.ar/',
    images: [
      {src:"/Projects/logistica/home.png",alt:"Pantalla de inicio con carrusel de imagenes "}, 
      {src:"/Projects/logistica/contacto.png",alt:"Pantalla de contacto con formulario de mailtrap"},
      {src:"/Projects/logistica/home_mobile.png",alt:"Pantalla de inicio con carrusel de imagenes desde celular"},
      {src:"/Projects/logistica/contact_mobile.png",alt:"Pantalla de contacto con formulario de mailtrap desde celular"},
      {src:"/Projects/logistica/maps_mobile.png",alt:"Pantalla de maps con integracion de api desde celular"},
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