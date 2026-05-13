export type Project = {
  slug: string
  name: string
  tagline: string
  logo: string
  bg: 'white' | 'dark'
  internalUrl: string
}

export const projects: Project[] = [
  {
    slug: 'linkidink',
    name: 'LinkiDink',
    tagline: 'A word connection puzzle game',
    logo: '/linkidink-logo.png',
    bg: 'dark',
    internalUrl: '/projects/linkidink',
  },
]
