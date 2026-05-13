import { Link } from '@tanstack/react-router'
import { Heart, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-200 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold">LSD Capital</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Investing with heart, leading with purpose. Building the future of technology and innovation across Africa and beyond.
            </p>
            <a
              href="mailto:hello@lsd.capital"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@lsd.capital
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              Site
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/portfolio" className="hover:text-gray-100 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-100 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-gray-100 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              Where
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>South Africa</li>
              <li>Seychelles</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LSD Capital. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <span>Heart led investments</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
