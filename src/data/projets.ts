// src/data/projets.ts
export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  description: string;
  stack: string[];
  repoUrl: string;
  siteUrl?: string;
  images?: ProjectImage[]; // opcional
};

export const projets: Project[] = [
  {
    slug: 'copia whatsapp',
    description: 'Copia de la interfaz de WhatsApp Web utilizando React y CSS.',
    stack: ['React', 'CSS'],
    repoUrl: 'https://github.com/VitoLattanzi/tp-final-front-end.git',
    siteUrl: 'https://tp-final-front-end-nine.vercel.app/chats/',
    images: [
      { src: '/projects/whatsapp/home.webp', alt: 'Home de la copia de WhatsApp' },
      { src: '/projects/whatsapp/chat.webp', alt: 'Vista de chat' },
      { src: '/projects/whatsapp/settings.webp', alt: 'Pantalla de ajustes' },
    ],
  },
  {
    slug: '', //nombre del proyecto
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


/* {
    slug: '', //nombre del proyecto
    description: '', //descripcion de la funcion
    stack: [''], //stack tecnologico usado ej HTML Y CSS
    repoUrl: '',  //link de git
    siteUrl: '', // link de deploy
    images: [
      { src: '', alt: ' },
      { src: '', alt: '' },
      { src: '', alt: '' },
    ],
  }, */

/* export const projets = [
    {
        slug: 'copia whatsapp',
        description: 'Copia de la interfaz de WhatsApp Web utilizando React y CSS.',
        stack: ['React', 'CSS'],
        repoUrl: 'https://github.com/VitoLattanzi/tp-final-front-end.git',
        siteUrl: 'https://tp-final-front-end-nine.vercel.app/chats/',
    }   
]; */