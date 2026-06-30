import { createFileRoute, Link } from '@tanstack/react-router'
import { Hero } from '~/components/Hero'
import { ProjectCard } from '~/components/ProjectCard'
import { HeartMark } from '~/components/HeartMark'
import { projects } from '~/data/projects'
import { portfolio } from '~/data/portfolio'
import { community } from '~/data/community'

export const Route = createFileRoute('/')({ component: Home })

// Curated handful for the homepage logo strip — all backed by local /public svgs.
const featuredNames = ['Dope', 'WeR1', 'DIDX', 'Inv.es', 'Frsh Minds']
const featured = featuredNames
  .map((name) => portfolio.find((company) => company.name === name))
  .filter((company): company is (typeof portfolio)[number] => Boolean(company))

const container = 'max-w-[1180px] mx-auto px-[clamp(20px,5vw,46px)]'

function Home() {
  const camp = community[0]

  return (
    <>
      <Hero />

      {/* Things we're building */}
      <section id="build" className={`${container} scroll-mt-20 py-[clamp(40px,5vw,64px)]`}>
        <div className="flex items-baseline justify-between flex-wrap gap-2.5 mb-[26px]">
          <h2 className="font-display font-semibold text-[clamp(24px,3vw,30px)] text-ink">
            Things we're building
          </h2>
          <span className="text-sm text-faint">Shipped quietly, no fanfare</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* …and we back people, too */}
      <section id="back" className={`${container} scroll-mt-20 py-[clamp(28px,4vw,48px)]`}>
        <div className="bg-surface border border-rule rounded-[18px] p-[clamp(28px,4vw,44px)]">
          <div className="flex items-baseline justify-between flex-wrap gap-2.5 mb-2">
            <h2 className="font-display font-semibold text-[clamp(24px,3vw,30px)] text-ink">
              …and we back people, too
            </h2>
            <span className="text-sm text-faint">18 founders · Africa &amp; beyond</span>
          </div>
          <p className="mb-[30px] max-w-[560px] text-base leading-[1.55] text-ink-muted">
            Tech-focused angel and seed companies, led by founders we genuinely
            believe in.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-[clamp(20px,4vw,44px)] items-center border-t border-b border-rule py-7">
            {featured.map((company) => (
              <img
                key={company.name}
                src={company.logo}
                alt={company.name}
                className="h-6 max-w-[130px] object-contain grayscale opacity-60"
              />
            ))}
          </div>
          <Link
            to="/portfolio"
            className="inline-block mt-6 text-[15px] font-semibold text-accent hover:opacity-80 transition-opacity"
          >
            See the full portfolio →
          </Link>
        </div>
      </section>

      {/* Where we show up */}
      <section
        id="community"
        className={`${container} scroll-mt-20 pt-0 pb-[clamp(40px,5vw,64px)]`}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(24px,4vw,48px)] items-center border-t border-rule pt-[clamp(32px,4vw,52px)]">
          <div>
            <span className="text-[13px] tracking-[0.04em] text-faint">
              Where we show up
            </span>
            <h2 className="mt-2 mb-4 font-display font-semibold text-[clamp(28px,4vw,42px)] leading-[1.05] text-ink">
              Beyond capital.
            </h2>
            <p className="mb-6 max-w-[460px] text-[16.5px] leading-[1.6] text-ink-muted">
              We run a theme camp at Afrikaburn — the South African regional
              Burning Man — and help bring it to life each year. It's where a lot
              of the heart comes from.
            </p>
            <a
              href={camp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-accent hover:opacity-80 transition-opacity"
            >
              Visit NDL — our camp ↗
            </a>
          </div>
          <div className="bg-ink rounded-[18px] p-[clamp(28px,4vw,40px)] min-h-[220px] flex flex-col justify-between">
            <HeartMark strokeWidth={1.2} className="w-11 h-10 text-accent" />
            <p className="mt-7 font-display font-medium text-[clamp(20px,2.4vw,26px)] leading-[1.25] text-cream">
              NDL — our home in the desert, once a year.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
