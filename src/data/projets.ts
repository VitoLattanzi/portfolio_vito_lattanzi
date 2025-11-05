// src/data/projets.ts
export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  description: string;
  stack: string[];
  repoUrl: string;
  siteUrl?: string;
  aspect: string,
  images?: ProjectImage[]; // opcional
};

export const projets: Project[] = [
  {
    slug: 'copia whatsapp',
    aspect: "9 / 16",
    description: 'Copia de la interfaz de WhatsApp Web utilizando React y CSS.',
    stack: ['React', 'CSS'],
    repoUrl: 'https://github.com/VitoLattanzi/tp-final-front-end.git',
    siteUrl: 'https://tp-final-front-end-nine.vercel.app/chats/',
    images: [
      { src: '/projects/whatsapp/home.png', alt: 'Home de la copia de WhatsApp' },
      { src: '/projects/whatsapp/chat.png', alt: 'Vista de chat' },
      { src: '/projects/whatsapp/info_contacto.png', alt: 'Pantalla de inforacion de contacto' },
      { src: '/projects/whatsapp/home_celular.jpeg', alt: 'Home desde celular' },
      { src: '/projects/whatsapp/chat_celular.jpeg', alt: 'chat desde celular' },
      { src: '/projects/whatsapp/info_celular.jpeg', alt: 'info de contacto desde celular' },
    ],
  },
  {
    slug: '', //nombre del proyecto
    aspect: "9 / 16",
    description: '', //descripcion de la funcion
    stack: [''], //stack tecnologico usado ej HTML Y CSS
    repoUrl: '',  //link de git
    siteUrl: '', // link de deploy
    images: [
      { src: '', alt: '' },
      { src: '', alt: '' },
      { src: '', alt: '' },
    ],
  },
  
  

];


/* 
 {
    slug: '', //nombre del proyecto
    aspect: "9 / 16",
    description: '', //descripcion de la funcion
    stack: [''], //stack tecnologico usado ej HTML Y CSS
    repoUrl: '',  //link de git
    siteUrl: '', // link de deploy
    images: [
      { src: '', alt: '' },
      { src: '', alt: '' },
      { src: '', alt: '' },
    ],
  },
*/