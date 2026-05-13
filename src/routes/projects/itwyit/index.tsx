import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/itwyit/')({
  component: ItwyitPage,
  head: () => ({
    meta: [
      { title: 'itwyit — If I only knew, that\'s what you\'re into | LSD Capital' },
      {
        name: 'description',
        content:
          'A private space for two people to compare notes — on what they’re into, and on how they like to be loved. No accounts, no tracking, just between you two.',
      },
      { property: 'og:title', content: 'itwyit — Honesty without shame' },
      {
        property: 'og:description',
        content:
          'Two questionnaires for two people: the namesake intimacy questionnaire and a take on the five love languages. Only mutual yeses are revealed.',
      },
    ],
  }),
})

const questionnaires = [
  {
    n: '01',
    kind: 'Intimacy',
    title: 'If that’s what you’re into',
    dek: 'Discover the overlap of shared interests — without anyone having to go first.',
  },
  {
    n: '02',
    kind: 'Connection',
    title: 'Love languages',
    dek: 'A take on the five love languages — how each of you gives, and likes to receive, love.',
  },
] as const

function ItwyitPage() {
  return (
    <>
      <header className="relative border-b border-rule overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-ink origin-left animate-[rule-draw_700ms_ease-out_forwards]"
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              § Project
              <br />
              <span className="text-ink-muted/70">itwyit</span>
              <br />
              <span className="text-ink-muted/70">2026 — present</span>
            </p>

            <div className="col-span-12 md:col-span-10">
              <h1 className="font-display font-medium text-ink leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl lg:text-8xl">
                Honesty
                <br />
                without <em className="italic font-normal text-accent">shame.</em>
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-ink-muted leading-snug mt-8 max-w-2xl">
                If I only knew — that’s what you’re into.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              § Chapter I
              <br />
              <span className="text-ink-muted/70">How it works</span>
            </p>
            <div className="col-span-12 md:col-span-10 grid md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              <p className="text-ink leading-relaxed text-lg drop-cap">
                Each partner answers a short questionnaire on their own. Nothing is shared until both of you have answered. When you have, only the things you both said yes to are revealed — the rest stays private, on both sides.
              </p>
              <p className="text-ink leading-relaxed text-lg">
                No accounts to create. No long-lived data linked to your identity. Discovery without risk: nobody has to go first, and nobody has to know what the other said no to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              § Chapter II
              <br />
              <span className="text-ink-muted/70">The two questionnaires</span>
            </p>
            <div className="col-span-12 md:col-span-10 max-w-3xl">
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                Two ways to <em className="italic text-accent">compare notes.</em>
              </h2>
              <p className="font-display italic text-xl text-ink-muted mt-4 max-w-xl">
                Pick a questionnaire and answer at your own pace.
              </p>

              <ul className="mt-10 border-t border-ink">
                {questionnaires.map((q) => (
                  <li key={q.n} className="border-b border-rule">
                    <div className="grid grid-cols-12 gap-x-4 gap-y-1 items-baseline py-7">
                      <span className="col-span-2 md:col-span-1 text-[10px] uppercase tracking-[0.22em] text-ink-muted tabular-nums">
                        {q.n}
                      </span>
                      <span className="col-span-10 md:col-span-2 text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                        {q.kind}
                      </span>
                      <span className="col-span-12 md:col-span-9 font-display text-2xl md:text-3xl text-ink">
                        {q.title}
                      </span>
                      <p className="col-span-12 md:col-start-4 md:col-span-9 text-ink-muted leading-relaxed max-w-prose mt-1">
                        {q.dek}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              § Chapter III
              <br />
              <span className="text-ink-muted/70">Try it</span>
            </p>
            <div className="col-span-12 md:col-span-10 max-w-3xl">
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                Just between <em className="italic text-accent">you two.</em>
              </h2>
              <p className="font-display italic text-xl text-ink-muted mt-4 max-w-xl">
                Open it on a phone, with your partner. That’s it.
              </p>

              <a
                href="https://itwyit.lsd.capital"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-2 mt-10 text-[11px] uppercase tracking-[0.24em] text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                <span>Visit itwyit.lsd.capital</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-start-3 md:col-span-10 flex flex-wrap items-baseline gap-x-8 gap-y-3">
              <Link
                to="/projects"
                className="text-[11px] uppercase tracking-[0.22em] text-ink-muted hover:text-ink transition-colors"
              >
                ← Back to projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
