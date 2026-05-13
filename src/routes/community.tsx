import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { community } from '~/data/community'

export const Route = createFileRoute('/community')({
  component: CommunityPage,
  head: () => ({
    meta: [
      { title: 'Community — LSD Capital' },
      {
        name: 'description',
        content:
          'Initiatives and projects we participate in beyond capital — places where we show up with time, energy, and heart.',
      },
    ],
  }),
})

function CommunityPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-green-400 mb-4 uppercase tracking-wider">
            Community
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 tracking-tight">
            Where we show up
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Initiatives and projects we participate in beyond capital — places where we show up with time, energy, and heart.
          </p>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {community.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-100 mb-3">{item.name}</h2>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
