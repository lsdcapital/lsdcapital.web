import { useState, useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { HeartMark } from '~/components/HeartMark'

const links = [
  { to: '/portfolio', label: 'Investments' },
  { to: '/projects', label: 'Projects' },
  { to: '/community', label: 'Community' },
] as const

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [isMobileMenuOpen])

  return (
    <nav ref={menuRef} className="sticky top-0 z-50 bg-paper border-b border-rule">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <HeartMark className="w-4 h-4 text-accent transition-colors group-hover:text-ink" />
            <span className="font-display text-xl tracking-tight text-ink">
              LSD Capital
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] uppercase tracking-[0.22em] text-ink-muted hover:text-ink transition-colors"
                activeProps={{ className: 'text-ink' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.22em] text-ink-muted tabular-nums">
              Vol. 01 / 2026
            </span>
            <a
              href="mailto:hello@lsd.capital"
              className="text-[11px] uppercase tracking-[0.22em] text-ink hover:text-accent transition-colors"
            >
              Contact →
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-ink"
          >
            <span className="block w-6 h-px bg-ink mb-1.5" />
            <span className={`block w-6 h-px bg-ink transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className="block w-6 h-px bg-ink mt-1.5" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-paper border-b border-rule md:hidden"
        >
          <div className="max-w-6xl mx-auto px-6 py-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className="block py-3 font-display text-2xl text-ink border-b border-rule"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hello@lsd.capital"
              onClick={closeMobileMenu}
              className="block pt-6 text-[11px] uppercase tracking-[0.22em] text-ink"
            >
              Contact →
            </a>
            <p className="pt-4 text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              Vol. 01 / 2026
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}
