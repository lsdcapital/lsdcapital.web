import { createFileRoute, Link } from '@tanstack/react-router'
import { Hero } from '~/components/Hero'

export const Route = createFileRoute('/')({ component: Home })

const sections = [
  {
    to: '/portfolio',
    title: 'Investments',
    description:
      'Companies and founders we have backed — tech-focused angel and seed-stage investments across Africa and beyond.',
  },
  {
    to: '/projects',
    title: 'Projects',
    description:
      "Things we're building ourselves. Starting with LinkiDink, a word connection puzzle game for iOS and Android.",
  },
  {
    to: '/community',
    title: 'Community',
    description:
      'Initiatives we participate in beyond capital — like our Afrikaburn theme camp and other projects we care about.',
  },
] as const

function Home() {
  return (
    <>
      <Hero />
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              § Sections
              <br />
              <span className="text-ink-muted/70">Three</span>
            </p>
            <p className="col-span-12 md:col-span-10 font-display text-2xl md:text-3xl leading-snug max-w-3xl drop-cap">
              Three things, all flowing from the same idea — backing people and projects with heart, capital, and time.
            </p>
          </div>

          <ol className="mt-20 border-t border-ink">
            {sections.map((section, i) => (
              <li key={section.to} className="border-b border-rule">
                <Link
                  to={section.to}
                  className="grid grid-cols-12 gap-x-6 gap-y-4 py-10 md:py-14 group items-baseline transition-colors hover:bg-ink/[0.025]"
                >
                  <span className="col-span-2 md:col-span-2 font-display text-3xl md:text-5xl text-ink-muted tabular-nums leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="col-span-10 md:col-span-3 font-display text-3xl md:text-4xl text-ink leading-tight">
                    {section.title}
                  </h3>
                  <p className="col-span-12 md:col-span-6 text-ink-muted leading-relaxed max-w-prose md:pl-2">
                    {section.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="col-span-12 md:col-span-1 text-right text-ink-muted group-hover:text-accent transition-colors text-lg"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
