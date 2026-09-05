import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/linkidink/")({
  component: LinkidinkPage,
  head: () => ({
    meta: [
      { title: "LinkiDink — A word connection puzzle game | LSD Capital" },
      {
        name: "description",
        content:
          "LinkiDink is a word connection puzzle game inspired by NYT Connections. Solve grids by aligning words from hidden categories.",
      },
      { property: "og:title", content: "LinkiDink — A word connection puzzle game" },
      {
        property: "og:description",
        content: "A word connection puzzle game inspired by NYT Connections, built by LSD Capital.",
      },
    ],
  }),
});

function LinkidinkPage() {
  return (
    <>
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              Project
              <br />
              <span className="text-ink-muted/70">LinkiDink</span>
              <br />
              <span className="text-ink-muted/70">2026 — present</span>
            </p>

            <div className="col-span-12 md:col-span-7">
              <h1 className="font-display font-medium text-ink leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl lg:text-8xl">
                A word
                <br />
                <em className="italic font-normal text-accent">connection</em>
                <br />
                puzzle game.
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-ink-muted leading-snug mt-8 max-w-xl">
                Discover hidden categories by swapping word tiles. Inspired by NYT Connections, with
                100 levels across five tiers of difficulty.
              </p>
            </div>

            <div className="col-span-12 md:col-span-3 md:flex md:justify-end">
              <div className="w-28 h-28 md:w-40 md:h-40 overflow-hidden border border-rule bg-ink/[0.03]">
                <img
                  src="/linkidink-logo.png"
                  alt="LinkiDink logo"
                  className="w-full h-full object-cover"
                />
              </div>
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
              <span className="text-ink-muted/70">How it plays</span>
            </p>
            <div className="col-span-12 md:col-span-10 grid md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              <p className="text-ink leading-relaxed text-lg">
                Each puzzle is a grid of shuffled words hiding four categories. Drag and swap tiles
                until each row contains words that belong together. When a row matches, it locks and
                collapses into a single icon tile.
              </p>
              <p className="text-ink leading-relaxed text-lg">
                Solve all four categories to win. Later tiers introduce cascade puzzles, where
                solved categories reveal new tiles, and a final bonus round connects everything
                together.
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
              <span className="text-ink-muted/70">Try the beta</span>
            </p>
            <div className="col-span-12 md:col-span-10 max-w-3xl">
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                Out now in <em className="italic text-accent">beta.</em>
              </h2>
              <p className="font-display italic text-xl text-ink-muted mt-4 max-w-xl">
                Quietly shipped to TestFlight and Google Play.
              </p>

              <ul className="mt-10 border-t border-ink">
                <li className="border-b border-rule">
                  <a
                    href="https://testflight.apple.com/join/JH1EMcxN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-12 gap-x-4 items-baseline py-6 transition-colors hover:bg-ink/[0.025]"
                  >
                    <span className="col-span-2 md:col-span-1 text-[10px] uppercase tracking-[0.22em] text-ink-muted tabular-nums">
                      01
                    </span>
                    <span className="col-span-3 md:col-span-2 text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                      iOS
                    </span>
                    <span className="col-span-5 md:col-span-7 font-display text-2xl md:text-3xl text-ink">
                      TestFlight
                    </span>
                    <span
                      aria-hidden="true"
                      className="col-span-2 text-right text-ink-muted group-hover:text-accent transition-colors"
                    >
                      ↗
                    </span>
                  </a>
                </li>
                <li className="border-b border-rule">
                  <a
                    href="https://play.google.com/apps/testing/capital.lsd.linkidink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-12 gap-x-4 items-baseline py-6 transition-colors hover:bg-ink/[0.025]"
                  >
                    <span className="col-span-2 md:col-span-1 text-[10px] uppercase tracking-[0.22em] text-ink-muted tabular-nums">
                      02
                    </span>
                    <span className="col-span-3 md:col-span-2 text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                      Android
                    </span>
                    <span className="col-span-5 md:col-span-7 font-display text-2xl md:text-3xl text-ink">
                      Google Play
                    </span>
                    <span
                      aria-hidden="true"
                      className="col-span-2 text-right text-ink-muted group-hover:text-accent transition-colors"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-start-3 md:col-span-10 flex flex-wrap items-baseline gap-x-8 gap-y-3">
              <Link
                to="/projects/linkidink/privacy"
                className="text-[11px] uppercase tracking-[0.22em] text-ink-muted hover:text-ink transition-colors border-b border-rule pb-1"
              >
                Privacy policy →
              </Link>
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
  );
}
