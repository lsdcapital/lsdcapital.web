import { ArrowUpRight } from 'lucide-react'
import type { PortfolioCompany } from '~/data/portfolio'

export function Investments({ items }: { items: PortfolioCompany[] }) {
  return (
    <section id="investments" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-100 mb-6">
              Our Investments
            </h2>
            <p className="text-xl text-gray-400">
              We're proud to support innovative companies that are making a positive impact in their industries.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gray-800 ml-12 mb-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.map((investment) => (
            <a
              key={investment.name}
              href={investment.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                investment.bg === 'white' ? 'bg-[#f8f9fa] border border-gray-200' : 'bg-[#1a1a1a] border border-gray-800'
              }`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"></div>

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img
                  src={investment.logo}
                  alt={investment.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-110"
                />
              </div>

              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-900 text-center truncate">
                  {investment.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
