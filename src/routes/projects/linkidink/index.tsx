import { createFileRoute, Link } from '@tanstack/react-router'
import { Apple, ChevronRight, Shield } from 'lucide-react'

export const Route = createFileRoute('/projects/linkidink/')({
  component: LinkidinkPage,
  head: () => ({
    meta: [
      { title: 'LinkiDink — A word connection puzzle game | LSD Capital' },
      {
        name: 'description',
        content:
          'LinkiDink is a word connection puzzle game inspired by NYT Connections. Solve grids by aligning words from hidden categories.',
      },
      { property: 'og:title', content: 'LinkiDink — A word connection puzzle game' },
      {
        property: 'og:description',
        content:
          'A word connection puzzle game inspired by NYT Connections, built by LSD Capital.',
      },
    ],
  }),
})

function LinkidinkPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-[#030712] flex-shrink-0 shadow-2xl">
              <img
                src="/linkidink-logo.png"
                alt="LinkiDink logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-green-400 mb-3 uppercase tracking-wider">
                LinkiDink
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
                A word connection puzzle game
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl">
                Discover hidden categories by swapping word tiles. Inspired by NYT Connections, with 100 levels across five tiers of difficulty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">How it plays</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <p>
              Each puzzle is a grid of shuffled words hiding four categories. Drag and swap tiles until each row contains words that belong together. When a row matches, it locks and collapses into a single icon tile.
            </p>
            <p>
              Solve all four categories to win. Later tiers introduce cascade puzzles, where solved categories reveal new tiles, and a final bonus round connects everything together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-8">Try the beta</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://testflight.apple.com/join/9cAsk5zA"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex items-center gap-4">
                <Apple className="w-8 h-8 text-gray-300" />
                <div>
                  <p className="text-sm text-gray-500">iOS</p>
                  <p className="text-lg font-semibold text-gray-100">TestFlight</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://play.google.com/apps/internaltest/4701281913755935060"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-green-500 to-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Android</p>
                  <p className="text-lg font-semibold text-gray-100">Google Play</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects/linkidink/privacy"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Shield className="w-4 h-4" />
            Privacy policy
          </Link>
        </div>
      </section>
    </>
  )
}
