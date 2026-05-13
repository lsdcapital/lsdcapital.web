import { useState, useEffect, useRef } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Heart, Mail, Menu, X } from 'lucide-react'

const links = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/projects', label: 'Projects' },
  { to: '/community', label: 'Community' },
] as const

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isHome = pathname === '/'
  const transparentHero = isHome && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

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
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparentHero
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-xl transition-transform duration-300 opacity-20"></div>
              <Heart className="relative w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span
              className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                transparentHero
                  ? 'lg:from-gray-100 lg:to-gray-300 from-gray-900 to-gray-600'
                  : 'from-gray-900 to-gray-600'
              }`}
            >
              LSD Capital
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  transparentHero
                    ? 'text-gray-200 hover:text-white hover:bg-white/10'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                activeProps={{
                  className: transparentHero
                    ? 'bg-white/10 text-white'
                    : 'bg-gray-100 text-gray-900',
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hello@lsd.capital"
              className="flex items-center space-x-2 bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ml-2"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">Get in Touch</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className={`p-2 rounded-lg ${transparentHero ? 'text-white' : 'text-gray-900'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl md:hidden p-4 space-y-2"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-3 rounded-xl text-gray-900 font-medium hover:bg-gray-100"
              activeProps={{ className: 'bg-gray-100' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@lsd.capital"
            className="flex items-center justify-center space-x-2 bg-gray-900 text-white w-full px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="font-medium">Get in Touch</span>
          </a>
        </div>
      )}
    </nav>
  )
}
