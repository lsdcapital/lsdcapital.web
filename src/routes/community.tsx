import { createFileRoute } from "@tanstack/react-router";
import { community } from "~/data/community";

export const Route = createFileRoute("/community")({
  component: CommunityPage,
  head: () => ({
    meta: [
      { title: "Community — LSD Capital" },
      {
        name: "description",
        content:
          "Initiatives and projects we participate in beyond capital — places where we show up with time, energy, and heart.",
      },
    ],
  }),
});

function CommunityPage() {
  return (
    <>
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              Community
              <br />
              <span className="text-ink-muted/70 tabular-nums">
                {community.length} initiative{community.length === 1 ? "" : "s"}
              </span>
            </p>
            <h1 className="col-span-12 md:col-span-10 font-display font-medium text-ink leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl lg:text-8xl">
              Where we <em className="italic font-normal text-accent">show up.</em>
            </h1>
            <p className="col-span-12 md:col-start-3 md:col-span-7 font-display italic text-xl md:text-2xl text-ink-muted leading-snug">
              Initiatives and projects we participate in beyond capital — places where we show up
              with time, energy, and heart.
            </p>
          </div>
        </div>
      </header>

      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {community.map((item, i) => (
            <article
              key={item.url}
              className="grid grid-cols-12 gap-x-6 gap-y-6 py-16 md:py-24 border-b border-rule"
            >
              <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
                No. {String(i + 1).padStart(2, "0")}
                <br />
                <span className="text-ink-muted/70">Initiative</span>
              </p>

              <div className="col-span-12 md:col-span-10 max-w-3xl">
                <h2 className="font-display text-5xl md:text-6xl text-ink leading-[0.95] tracking-[-0.01em]">
                  {item.name}
                </h2>
                <p className="mt-8 leading-relaxed text-ink text-lg">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 mt-10 text-[11px] uppercase tracking-[0.24em] text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  <span>Visit</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
