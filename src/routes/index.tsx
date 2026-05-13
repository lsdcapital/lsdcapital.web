import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Briefcase, Smartphone, Heart } from 'lucide-react'
import { Hero } from '~/components/Hero'

export const Route = createFileRoute('/')({ component: Home })

const cards = [
  {
    to: '/portfolio',
    icon: Briefcase,
    title: 'Portfolio',
    description:
      'Companies we invest in — tech-focused angel and seed-stage startups led by founders we believe in.',
  },
  {
    to: '/projects',
    icon: Smartphone,
    title: 'Projects',
    description:
      "Things we're building ourselves. Starting with LinkiDink, a word connection puzzle game for iOS and Android.",
  },
  {
    to: '/community',
    icon: Heart,
    title: 'Community',
    description:
      'Initiatives we participate in beyond capital — like our Afrikaburn theme camp and other projects we care about.',
  },
] as const

function Home() {
  return (
    <>
      <Hero />
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">What we do</h2>
            <p className="text-xl text-gray-400">
              Three things, all flowing from the same idea: backing people and projects with heart.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group relative bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-3">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
