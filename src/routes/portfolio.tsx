import { createFileRoute } from '@tanstack/react-router'
import { portfolio } from '~/data/portfolio'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: 'Portfolio — LSD Capital' },
      {
        name: 'description',
        content:
          'Companies we have invested in — tech-focused angel and seed-stage startups led by founders we believe in.',
      },
    ],
  }),
})

const stripProtocol = (url: string) =>
  url.replace(/^https?:\/\//, '').replace(/\/$/, '')

function PortfolioPage() {
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
              § Portfolio
              <br />
              <span className="text-ink-muted/70 tabular-nums">{portfolio.length} companies</span>
            </p>
            <h1 className="col-span-12 md:col-span-10 font-display font-medium text-ink leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl lg:text-8xl">
              Companies <em className="italic font-normal text-accent">we believe</em> in.
            </h1>
            <p className="col-span-12 md:col-start-3 md:col-span-7 font-display italic text-xl md:text-2xl text-ink-muted leading-snug">
              We back tech-focused angel and seed startups across Africa and beyond — founder-first, conviction-led.
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          <ul className="border-t border-ink">
            {portfolio.map((company, i) => {
              const needsInvert = company.bg === 'slate-800'
              const cleanUrl = stripProtocol(company.url)
              return (
                <li key={company.name} className="border-b border-rule">
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-2 items-center py-5 md:py-6 group transition-colors hover:bg-ink/[0.025]"
                  >
                    <span className="col-span-2 md:col-span-1 tabular-nums text-xs text-ink-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="col-span-10 md:col-span-2 h-8 flex items-center">
                      <img
                        src={company.logo}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={
                          needsInvert
                            ? 'max-h-6 max-w-full object-contain object-left [filter:invert(1)_brightness(0.12)] opacity-90 group-hover:opacity-100'
                            : 'max-h-6 max-w-full object-contain object-left opacity-75 group-hover:opacity-100 transition-opacity'
                        }
                      />
                    </div>
                    <h3 className="col-span-12 md:col-span-4 font-display text-xl md:text-2xl text-ink leading-tight">
                      {company.name}
                    </h3>
                    <span className="col-span-10 md:col-span-4 text-[11px] uppercase tracking-[0.18em] text-ink-muted truncate group-hover:text-ink transition-colors">
                      {cleanUrl}
                    </span>
                    <span
                      aria-hidden="true"
                      className="col-span-2 md:col-span-1 text-right text-ink-muted group-hover:text-accent transition-colors text-base"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
