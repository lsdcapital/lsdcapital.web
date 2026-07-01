import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/ficta/')({
  component: FictaPage,
  head: () => ({
    meta: [
      { title: 'ficta — A local secret airlock for coding agents | LSD Capital' },
      {
        name: 'description',
        content:
          'ficta swaps secrets for deterministic placeholders before requests leave your machine, then restores them locally. Fails closed if a protected value would leak.',
      },
      { property: 'og:title', content: 'ficta — A local secret airlock for coding agents' },
      {
        property: 'og:description',
        content:
          'A local secret airlock for coding agents. Swap secrets for placeholders before requests leave your machine; restore them locally. No telemetry, MIT-licensed.',
      },
    ],
  }),
})

const flow = [
  {
    n: '01',
    kind: 'Discover',
    title: 'Find the secrets',
    dek: 'Pulls values from .env / .env.local, Doppler, and secret-like environment variable names — the things that should never be typed into a prompt.',
  },
  {
    n: '02',
    kind: 'Redact',
    title: 'Swap before it leaves',
    dek: 'Request bodies, query strings and non-auth headers are rewritten, replacing each secret with a deterministic placeholder as traffic passes an ephemeral loopback proxy for the session.',
  },
  {
    n: '03',
    kind: 'Restore',
    title: 'Put it back locally',
    dek: 'Placeholders in the model’s response are swapped back to the real values on your machine, so the agent keeps working exactly as before.',
  },
  {
    n: '04',
    kind: 'Fail closed',
    title: 'Block on leak',
    dek: 'If a protected value would survive redaction in a surface it should have left, ficta blocks the request rather than letting it through.',
  },
] as const

function FictaPage() {
  return (
    <>
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              Project
              <br />
              <span className="text-ink-muted/70">ficta</span>
              <br />
              <span className="text-ink-muted/70">2026 — present</span>
            </p>

            <div className="col-span-12 md:col-span-10">
              <h1 className="font-display font-medium text-ink leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl lg:text-8xl">
                Secrets that
                <br />
                never <em className="italic font-normal text-accent">leave.</em>
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-ink-muted leading-snug mt-8 max-w-2xl">
                A local secret airlock for coding agents.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              Chapter I
              <br />
              <span className="text-ink-muted/70">Why</span>
            </p>
            <div className="col-span-12 md:col-span-10 grid md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              <p className="text-ink leading-relaxed text-lg">
                Coding agents are useful precisely because they see your project — but that means your API keys, tokens and connection strings can ride along into a request bound for a model provider. ficta sits between the agent and the provider and makes sure the real values stop at your machine.
              </p>
              <p className="text-ink leading-relaxed text-lg">
                It’s deliberately small in scope: personal secret hygiene, not enterprise DLP, not a compliance product, not a sandbox. No telemetry, MIT-licensed, still pre-1.0 beta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              Chapter II
              <br />
              <span className="text-ink-muted/70">How it works</span>
            </p>
            <div className="col-span-12 md:col-span-10 max-w-3xl">
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                Swap, then <em className="italic text-accent">restore.</em>
              </h2>
              <p className="font-display italic text-xl text-ink-muted mt-4 max-w-xl">
                Four steps, all on your machine.
              </p>

              <ul className="mt-10 border-t border-ink">
                {flow.map((s) => (
                  <li key={s.n} className="border-b border-rule">
                    <div className="grid grid-cols-12 gap-x-4 gap-y-1 items-baseline py-7">
                      <span className="col-span-2 md:col-span-1 text-[10px] uppercase tracking-[0.22em] text-ink-muted tabular-nums">
                        {s.n}
                      </span>
                      <span className="col-span-10 md:col-span-2 text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                        {s.kind}
                      </span>
                      <span className="col-span-12 md:col-span-9 font-display text-2xl md:text-3xl text-ink">
                        {s.title}
                      </span>
                      <p className="col-span-12 md:col-start-4 md:col-span-9 text-ink-muted leading-relaxed max-w-prose mt-1">
                        {s.dek}
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
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              Chapter III
              <br />
              <span className="text-ink-muted/70">Honest edges</span>
            </p>
            <div className="col-span-12 md:col-span-10 grid md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-3">Works with</p>
                <p className="text-ink leading-relaxed text-lg">
                  Verified against Claude Code, Codex and Pi. IDE clients like Cursor aren’t supported.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-3">Won’t catch</p>
                <p className="text-ink leading-relaxed text-lg">
                  Encoded or split secrets, path-like tokens (unless you opt in), anything sent through tool execution, curl or MCP tools, and binary responses. It protects the request surfaces it can see — no more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              Chapter IV
              <br />
              <span className="text-ink-muted/70">Try it</span>
            </p>
            <div className="col-span-12 md:col-span-10 max-w-3xl">
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                Read the <em className="italic text-accent">source.</em>
              </h2>
              <p className="font-display italic text-xl text-ink-muted mt-4 max-w-xl">
                Open source on GitHub — install it, or just read how it works.
              </p>

              <p className="mt-8 font-mono text-sm text-ink border border-rule bg-ink/[0.03] rounded-lg px-4 py-3 inline-block">
                pnpm add -g @steflsd/ficta
              </p>

              <div className="mt-10">
                <a
                  href="https://github.com/steflsd/ficta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 text-[11px] uppercase tracking-[0.24em] text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  <span>View on GitHub</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </div>
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
