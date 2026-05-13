import { createFileRoute, Link } from '@tanstack/react-router'
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
      <header className="relative border-b border-rule overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-ink origin-left animate-[rule-draw_700ms_ease-out_forwards]"
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              § Projects
              <br />
              <span className="text-ink-muted/70 tabular-nums">{projects.length} in flight</span>
            </p>
            <h1 className="col-span-12 md:col-span-10 font-display font-medium text-ink leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl lg:text-8xl">
              Things we're <em className="italic font-normal text-accent">building.</em>
            </h1>
            <p className="col-span-12 md:col-start-3 md:col-span-7 font-display italic text-xl md:text-2xl text-ink-muted leading-snug">
              Apps, tools, and experiments we work on ourselves — shipped, in beta, or still in the kitchen.
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="grid grid-cols-12 gap-x-6 gap-y-6 py-16 md:py-24 border-b border-rule"
            >
              <div className="col-span-12 md:col-span-2 flex md:block items-center gap-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-ink-muted">
                  No. {String(i + 1).padStart(2, '0')}
                  <br />
                  <span className="text-ink-muted/70">Project</span>
                </p>
              </div>

              <div className="col-span-12 md:col-span-3 md:order-last">
                <div className="aspect-square w-32 md:w-full md:max-w-[12rem] overflow-hidden border border-rule bg-ink/[0.03]">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 max-w-2xl">
                <h2 className="font-display text-5xl md:text-6xl text-ink leading-[0.95] tracking-[-0.01em]">
                  {project.name}
                </h2>
                <p className="font-display italic text-xl md:text-2xl text-ink-muted mt-4 leading-snug">
                  {project.tagline}.
                </p>
                <p className="mt-8 leading-relaxed text-ink drop-cap">
                  A daily word connection puzzle for iOS and Android — link words by their hidden meanings, climb a small daily ladder, share with friends. Built quietly in spare hours, shipped without fanfare. It's an experiment in what a calm game on your phone can feel like.
                </p>
                <Link
                  to={project.internalUrl}
                  className="group inline-flex items-baseline gap-2 mt-10 text-[11px] uppercase tracking-[0.24em] text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  <span>Read more</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
