export function Hero() {
  return (
    <header
      id="top"
      className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,46px)] pt-[clamp(48px,8vw,80px)] pb-[clamp(36px,5vw,56px)]"
    >
      <p className="text-[15px] text-faint">
        A tiny product studio that also invests · Cape Town &amp; Mahé
      </p>

      <h1 className="mt-5 font-display font-semibold text-ink max-w-[980px] text-[clamp(40px,6.4vw,80px)] leading-[1] tracking-[-0.035em]">
        We build the things we wish existed —{' '}
        <span className="text-accent">and back the people building the rest.</span>
      </h1>

      <p className="mt-7 max-w-[600px] text-[clamp(17px,2vw,20px)] leading-[1.55] text-ink-muted">
        Some weeks we ship. Some weeks we invest. It's all the same instinct:
        heart-led, hands-on, in for the long middle.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-[22px]">
        <a
          href="mailto:hello@lsd.capital"
          className="inline-flex bg-accent-strong text-cream rounded-full px-7 py-3.5 text-[15px] font-semibold hover:opacity-90 transition-opacity"
        >
          Start a conversation
        </a>
        <span className="text-[15px] text-faint">
          or just write — hello@lsd.capital
        </span>
      </div>
    </header>
  )
}
