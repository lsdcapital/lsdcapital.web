import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { projects } from '~/data/projects'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: 'Projects — LSD Capital' },
      {
        name: 'description',
        content:
          'Things we are building. LinkiDink — a word connection puzzle game for iOS and Android.',
      },
    ],
  }),
})

function ProjectsPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-green-400 mb-4 uppercase tracking-wider">
            Projects
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 tracking-tight">
            Things we're building
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Apps, tools, and experiments we work on ourselves — shipped, in beta, or still in the kitchen.
          </p>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={project.internalUrl}
                className="group relative bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 bg-[#030712] flex items-center justify-center">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-100 mb-2">{project.name}</h2>
                <p className="text-gray-400 leading-relaxed mb-4">{project.tagline}</p>
                <span className="inline-flex items-center text-green-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
