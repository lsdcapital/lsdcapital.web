import { Link } from '@tanstack/react-router'
import { HeartMark } from '~/components/HeartMark'

export function Footer() {
  return (
    <footer className="border-t border-rule bg-paper relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24 grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5 group">
            <HeartMark className="w-4 h-4 text-accent transition-colors group-hover:text-ink" />
            <span className="font-display text-2xl text-ink">LSD Capital</span>
          </Link>
          <p className="font-display italic text-ink-muted mt-5 max-w-sm text-lg leading-snug">
            Heart-led investments, leading with purpose. Building the future of technology and innovation across Africa and beyond.
          </p>
          <a
            href="mailto:hello@lsd.capital"
            className="inline-block mt-8 text-[11px] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            hello@lsd.capital →
          </a>
        </div>

        <nav className="col-span-6 md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.24em] text-ink-muted mb-5">
            Sections
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/portfolio" className="font-display text-lg text-ink hover:text-accent transition-colors">
                Investments
              </Link>
            </li>
            <li>
              <Link to="/projects" className="font-display text-lg text-ink hover:text-accent transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/community" className="font-display text-lg text-ink hover:text-accent transition-colors">
                Community
              </Link>
            </li>
          </ul>
        </nav>

        <div className="col-span-6 md:col-span-4">
          <h4 className="text-[10px] uppercase tracking-[0.24em] text-ink-muted mb-5">
            Based in
          </h4>
          <ul className="space-y-2.5 font-display text-lg text-ink">
            <li>
              South Africa <span className="text-ink-muted text-sm uppercase tracking-widest ml-1">ZA</span>
            </li>
            <li>
              Seychelles <span className="text-ink-muted text-sm uppercase tracking-widest ml-1">SC</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-3 text-[10px] uppercase tracking-[0.22em] text-ink-muted">
          <span>
            © {new Date().getFullYear()} LSD Capital · Vol. 01 / 2026
          </span>
          <span className="font-display italic normal-case tracking-normal text-sm text-ink">
            Heart led investments.
          </span>
        </div>
      </div>
    </footer>
  )
}
