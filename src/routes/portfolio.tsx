import { createFileRoute } from '@tanstack/react-router'
import { Investments } from '~/components/Investments'
import { portfolio } from '~/data/portfolio'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: 'Portfolio — LSD Capital' },
      {
        name: 'description',
        content:
          'Companies we have invested in — tech-focused angel and seed-stage startups led by founders we believe in.',
      },
    ],
  }),
})

function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-green-400 mb-4 uppercase tracking-wider">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 tracking-tight">
            Companies we believe in
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            We partner with founders building tech-focused angel and seed startups across Africa and beyond.
          </p>
        </div>
      </section>
      <Investments items={portfolio} />
    </>
  )
}
