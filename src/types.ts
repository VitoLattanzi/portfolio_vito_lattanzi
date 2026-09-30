export type Contact = {
  label: string
  url: string
}

export type ExperienceItem = {
  title: string
  company: string
  period: string
  description: string
}

export type Person = {
  name: string
  avatar: string
  role: string
  location?: string
  birthdate?: string // de forma "YYYY-MM-DD"
  tagline: string
  shortBio: string
  longBio?: string
  experience?: ExperienceItem[]
  contacts: Contact[]
  skills: {
    frontend?: { name: string; icon?: string; level?: number }[]
    backend?: { name: string; icon?: string; level?: number }[]
    database?: { name: string; icon?: string; level?: number }[]
    tools?: { name: string; icon?: string; level?: number }[]
  }
}

export type Project = {
  slug: string
  title: string
  description: string
  stack: string[]
  repoUrl: string | string[]
  siteUrl?: string
  cover?: string
  aspect?: string
  images?: { src: string; alt: string }[]
}
