import { Link } from '@tanstack/react-router'
import type { Project } from '~/data/projects'

/**
 * The two product mocks below (LinkiDink word-ladder, itwyit match list) are
 * illustrative placeholders to make the products feel tangible. Replace with
 * real product screenshots or accurate UI before shipping.
 */
function ProjectMock({ slug }: { slug: string }) {
  if (slug === 'linkidink') {
    return (
      <div
        aria-hidden="true"
        className="flex-none w-[130px] bg-ink rounded-2xl px-[13px] py-4 flex flex-col gap-2 justify-center"
      >
        <div className="text-center text-[9px] tracking-[0.16em] uppercase text-[#a9805a] mb-0.5">
          Today
        </div>
        <div className="bg-[#3a322a] rounded-lg py-2 text-center text-[12.5px] font-semibold text-cream">
          OCEAN
        </div>
        <div className="text-center text-accent text-[11px] leading-[0.5]">•</div>
        <div className="bg-[#3a322a] rounded-lg py-2 text-center text-[12.5px] font-semibold text-cream">
          BLUE
        </div>
        <div className="text-center text-accent text-[11px] leading-[0.5]">•</div>
        <div className="bg-accent rounded-lg py-2 text-center text-[12.5px] font-bold text-cream">
          PRINT
        </div>
        <div className="text-center text-[#6b5f50] text-[11px] leading-[0.5]">•</div>
        <div className="border border-dashed border-[#6b5f50] rounded-lg py-2 text-center text-[12.5px] text-[#8a7d6b]">
          ? ? ? ?
        </div>
      </div>
    )
  }

  if (slug === 'itwyit') {
    const dot = 'w-3.5 h-3.5 rounded-full'
    const filled = `${dot} bg-accent`
    const empty = `${dot} border-[1.5px] border-[#d9cdb8]`
    return (
      <div
        aria-hidden="true"
        className="flex-none w-[130px] bg-white border border-rule rounded-2xl px-[13px] py-[15px] flex flex-col gap-[9px] justify-center"
      >
        <div className="flex justify-between text-[9px] tracking-[0.1em] uppercase text-faint">
          <span>You</span>
          <span>Them</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={filled} />
          <span className={filled} />
        </div>
        <div className="text-center text-[9.5px] font-semibold text-accent bg-[#e7efe7] rounded-md py-1">
          a match
        </div>
        <div className="flex justify-between items-center">
          <span className={filled} />
          <span className={empty} />
        </div>
        <div className="flex justify-between items-center">
          <span className={empty} />
          <span className={filled} />
        </div>
      </div>
    )
  }

  if (slug === 'ficta') {
    return (
      <div
        aria-hidden="true"
        className="flex-none w-[130px] bg-ink rounded-2xl px-3.5 py-4 flex flex-col gap-2 justify-center font-mono"
      >
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="w-2 h-2 rounded-full bg-[#6b5f50]" />
          <span className="text-[8px] tracking-[0.16em] uppercase text-[#8a7d6b]">.env</span>
        </div>
        <div className="rounded-lg bg-[#3a322a] px-2 py-1.5 text-[9px] text-cream truncate">
          sk-live-9f2a…
        </div>
        <div className="text-center text-accent text-[13px] leading-[0.5]">↓</div>
        <div className="rounded-lg bg-accent px-2 py-1.5 text-[9px] font-semibold text-cream truncate">
          ⟨REDACTED_01⟩
        </div>
      </div>
    )
  }

  return null
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={project.internalUrl}
      className="bg-surface border border-rule rounded-[18px] p-[30px] flex gap-[26px] items-start transition-colors hover:border-faint"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5 mb-2.5">
          {project.logo ? (
            <img src={project.logo} alt="" className="h-[26px] w-auto" />
          ) : (
            <span className="w-[26px] h-[26px] rounded-[7px] bg-ink text-cream flex items-center justify-center font-display font-semibold text-[13px]">
              {project.name.slice(0, 2).toLowerCase()}
            </span>
          )}
          <span className="font-display font-semibold text-2xl text-ink">
            {project.name}
          </span>
        </div>

        <p className="mb-5 text-[15.5px] leading-[1.55] text-ink-muted">
          {project.cardBody ?? project.tagline}
        </p>

        {project.chips && project.chips.length > 0 && (
          <div className="flex gap-2.5 text-xs text-faint">
            {project.chips.map((chip) => (
              <span
                key={chip}
                className="border border-rule rounded-full px-[13px] py-[5px]"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>

      <ProjectMock slug={project.slug} />
    </Link>
  )
}
