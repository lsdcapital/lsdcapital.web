import { useState, useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { HeartMark } from '~/components/HeartMark'

const links = [
  { hash: 'build', label: 'What we build' },
  { hash: 'back', label: 'Who we back' },
  { hash: 'community', label: 'Community' },
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
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,46px)]">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <HeartMark
              strokeWidth={1.6}
              className="w-[19px] h-[18px] text-accent transition-colors group-hover:text-ink"
            />
            <span className="font-display font-semibold text-xl tracking-[-0.01em] text-ink">
              LSD Capital
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-[clamp(16px,3vw,32px)]">
            {links.map((link) => (
              <Link
                key={link.hash}
                to="/"
                hash={link.hash}
                className="text-[14.5px] text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="mailto:hello@lsd.capital"
            className="hidden md:inline-flex bg-ink text-paper rounded-full px-5 py-2.5 text-[13.5px] font-medium hover:opacity-90 transition-opacity"
          >
            Say hello
          </a>

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
          <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,46px)] py-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.hash}
                to="/"
                hash={link.hash}
                onClick={closeMobileMenu}
                className="block py-3 font-display font-semibold text-2xl text-ink border-b border-rule"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hello@lsd.capital"
              onClick={closeMobileMenu}
              className="inline-flex mt-6 bg-ink text-paper rounded-full px-5 py-2.5 text-[13.5px] font-medium"
            >
              Say hello
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
