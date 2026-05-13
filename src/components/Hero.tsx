export function Hero() {
  return (
    <section className="relative border-b border-rule overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-ink origin-left animate-[rule-draw_700ms_ease-out_forwards]"
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-y-14">
          <div className="col-span-12 md:col-span-2 flex md:block">
            <p className="text-[10px] uppercase tracking-[0.24em] text-ink-muted leading-relaxed">
              Vol. 01
              <br className="hidden md:block" />
              <span className="md:hidden"> · </span>
              MMXXVI
              <br className="hidden md:block" />
              <span className="md:hidden"> · </span>
              <span className="md:block mt-3 md:mt-3">Cape Town</span>
              <span className="md:hidden"> · </span>
              <span className="md:block">Mahé · ZA / SC</span>
            </p>
          </div>

          <h1 className="col-span-12 md:col-span-10 font-display font-medium text-ink leading-[0.92] tracking-[-0.02em] text-[3.25rem] sm:text-7xl md:text-[7.5rem] lg:text-[9rem] xl:text-[10rem]">
            Heart-led
            <br />
            leaders,{' '}
            <em className="italic font-normal text-accent">
              solving
              <br />
              real problems.
            </em>
          </h1>

          <p className="col-span-12 md:col-start-3 md:col-span-7 font-display italic text-xl md:text-2xl text-ink-muted leading-snug -mt-2">
            We partner with tech-focused angel and seed startups, investing with purpose, passion, and a commitment to positive impact.
          </p>

          <div className="col-span-12 md:col-start-3 md:col-span-9 flex flex-wrap items-baseline gap-x-10 gap-y-4">
            <a
              href="mailto:hello@lsd.capital"
              className="group inline-flex items-baseline gap-2 text-[11px] uppercase tracking-[0.24em] text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              <span>Start a conversation</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span className="text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              or write — hello@lsd.capital
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
