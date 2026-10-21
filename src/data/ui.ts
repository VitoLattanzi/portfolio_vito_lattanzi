import type { Locale } from '@/types'

export type UiStrings = {
  nav: {
    aria: string
    profile: string
    about: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    projects: string
    contact: string
    github: string
    photoAlt: string
  }
  sections: {
    about: string
    skills: string
    projects: string
  }
  about: {
    experience: string
    education: string
    empty: string
  }
  skillsCategories: {
    frontend: string
    backend: string
    database: string
    tools: string
  }
  projects: {
    code: string
    demo: string
    openSite: string
    viewCode: string
    preview: string
  }
  contact: {
    sendEmail: string
    emailAria: string
    linkedin: string
    linkedinAria: string
    whatsapp: string
    whatsappAria: string
  }
  footer: {
    rights: string
  }
  theme: {
    toLight: string
    toDark: string
  }
  language: {
    switchTo: string
  }
}

export const ui: Record<Locale, UiStrings> = {
  es: {
    nav: {
      aria: 'Navegación principal',
      profile: 'Inicio',
      about: 'Sobre mí',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      projects: 'Ver proyectos',
      contact: 'Contactarme',
      github: 'GitHub',
      photoAlt: 'Foto de perfil de',
    },
    sections: {
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
    },
    about: {
      experience: 'Experiencia',
      education: 'Educación',
      empty: 'Sin información disponible.',
    },
    skillsCategories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Bases de datos',
      tools: 'Herramientas & Automatización',
    },
    projects: {
      code: 'Código',
      demo: 'Demo',
      openSite: 'Abrir el sitio de',
      viewCode: 'Ver el código fuente de',
      preview: 'Vista previa del proyecto',
    },
    contact: {
      sendEmail: 'Enviar email',
      emailAria: 'Enviar un correo electrónico a',
      linkedin: 'LinkedIn',
      linkedinAria: 'Perfil de LinkedIn de',
      whatsapp: 'WhatsApp',
      whatsappAria: 'Contactar por WhatsApp a',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    theme: {
      toLight: 'Cambiar a modo claro',
      toDark: 'Cambiar a modo oscuro',
    },
    language: {
      switchTo: 'Cambiar idioma a inglés',
    },
  },
  en: {
    nav: {
      aria: 'Main navigation',
      profile: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      projects: 'View projects',
      contact: 'Get in touch',
      github: 'GitHub',
      photoAlt: 'Profile photo of',
    },
    sections: {
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
    },
    about: {
      experience: 'Experience',
      education: 'Education',
      empty: 'No information available.',
    },
    skillsCategories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Databases',
      tools: 'Tools & Automation',
    },
    projects: {
      code: 'Code',
      demo: 'Live Demo',
      openSite: 'Open the live site of',
      viewCode: 'View the source code of',
      preview: 'Preview of project',
    },
    contact: {
      sendEmail: 'Send email',
      emailAria: 'Send an email to',
      linkedin: 'LinkedIn',
      linkedinAria: 'LinkedIn profile of',
      whatsapp: 'WhatsApp',
      whatsappAria: 'Contact via WhatsApp:',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    theme: {
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
    },
    language: {
      switchTo: 'Switch language to Spanish',
    },
  },
}
