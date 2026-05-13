export type Project = {
  slug: string
  name: string
  tagline: string
  body: string
  logo?: string
  bg?: 'white' | 'dark'
  internalUrl: string
  externalUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'linkidink',
    name: 'LinkiDink',
    tagline: 'A word connection puzzle game',
    body:
      "A daily word connection puzzle for iOS and Android — link words by their hidden meanings, climb a small daily ladder, share with friends. Built quietly in spare hours, shipped without fanfare. It's an experiment in what a calm game on your phone can feel like.",
    logo: '/linkidink-logo.png',
    bg: 'dark',
    internalUrl: '/projects/linkidink',
  },
  {
    slug: 'itwyit',
    name: 'itwyit',
    tagline: "If I only knew — that's what you're into",
    body:
      'A private space for two people to compare notes — on what they’re into, and on how they like to be loved. Each partner answers independently; only mutual yeses are ever shared. Two questionnaires today: the namesake intimacy questionnaire, and a take on the five love languages. No accounts to create, no data to leak, no shame in the room.',
    internalUrl: '/projects/itwyit',
    externalUrl: 'https://itwyit.lsd.capital',
  },
]
