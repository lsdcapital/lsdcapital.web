import { useState, useEffect } from 'react';
import { Heart, Mail, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-xl transition-transform duration-300 opacity-20"></div>
              <Heart className="relative w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 ${!isScrolled && 'lg:text-gray-100 lg:from-gray-100 lg:to-gray-300'}`}>
              LSD Capital
            </span>
          </div>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:hello@lsd.capital"
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl md:hidden p-4">
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
  );
}
