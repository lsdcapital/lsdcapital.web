export type Project = {
  slug: string;
  name: string;
  tagline: string;
  body: string;
  /** Short copy for the homepage project card (distinct from the detail-page body). */
  cardBody?: string;
  /** Platform chips shown on the homepage card, e.g. ['iOS', 'Android']. */
  chips?: string[];
  logo?: string;
  bg?: "white" | "dark";
  internalUrl: string;
  externalUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "linkidink",
    name: "LinkiDink",
    tagline: "A word connection puzzle game",
    body: "A daily word connection puzzle for iOS and Android — link words by their hidden meanings, climb a small daily ladder, share with friends. Built quietly in spare hours, shipped without fanfare. It's an experiment in what a calm game on your phone can feel like.",
    cardBody:
      "A calm daily word-connection puzzle. Link words by their hidden meanings, climb a small daily ladder, share with friends.",
    chips: ["iOS", "Android"],
    logo: "/linkidink-logo.png",
    bg: "dark",
    internalUrl: "/projects/linkidink",
  },
  {
    slug: "itwyit",
    name: "itwyit",
    tagline: "If I only knew — that's what you're into",
    body: "A private space for two people to compare notes — on what they’re into, and on how they like to be loved. Each partner answers independently; only mutual yeses are ever shared. Two questionnaires today: the namesake intimacy questionnaire, and a take on the five love languages. No accounts to create, no data to leak, no shame in the room.",
    cardBody:
      "A private space for two people to compare notes — on what they’re into, and how they like to be loved. Only mutual yeses are ever shared. No accounts, no shame.",
    chips: ["On the web"],
    internalUrl: "/projects/itwyit",
    externalUrl: "https://itwyit.lsd.capital",
  },
  {
    slug: "ficta",
    name: "ficta",
    tagline: "A local secret airlock for coding agents",
    body: "A local secret airlock for coding agents. ficta sits between your coding agent and the model provider, swapping secret values — from .env or Doppler — for deterministic placeholders before any request leaves your machine, then restoring the real values locally so the agent works normally. If a protected value would survive redaction, ficta fails closed and blocks the request. No telemetry, MIT-licensed, pre-1.0 beta.",
    cardBody:
      "Swaps secrets for deterministic placeholders before requests leave your machine, then restores them locally. Fails closed if a secret would leak.",
    chips: ["CLI", "Open source"],
    logo: "/ficta-logo.svg",
    bg: "dark",
    internalUrl: "/projects/ficta",
    externalUrl: "https://github.com/steflsd/ficta",
  },
];
