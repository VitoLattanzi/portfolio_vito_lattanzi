export type Contact = {
  label: string
  url: string
}

export type Person = {
  name: string
  role: string
  location?: string
  birthdate?: string // de forma "YYYY-MM-DD"
  tagline: string
  shortBio: string
  longBio?: string
  contacts: Contact[]
  skills: { name: string; icon: string }[]
}

export type Project = {
  slug: string
  title: string
  description: string
  stack: string[]
  repoUrl: string
  siteUrl: string
  cover?: string
}