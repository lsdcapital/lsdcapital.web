import { Link } from "@tanstack/react-router";
import { HeartMark } from "~/components/HeartMark";

const exploreLinks = [
  { hash: "build", label: "What we build" },
  { hash: "back", label: "Who we back" },
  { hash: "community", label: "Community" },
] as const;

export function Footer() {
  return (
    <footer className="bg-paper border-t border-rule relative z-10">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,46px)] pt-[clamp(40px,5vw,64px)] pb-[clamp(24px,3vw,32px)] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[clamp(28px,4vw,48px)]">
        <div className="col-span-full max-w-[380px]">
          <Link to="/" className="flex items-center gap-2.5 group">
            <HeartMark
              strokeWidth={1.6}
              className="w-[18px] h-[17px] text-accent transition-colors group-hover:text-ink"
            />
            <span className="font-display font-semibold text-xl text-ink">LSD Capital</span>
          </Link>
          <p className="mt-4 text-base leading-[1.55] text-ink-muted">
            Heart-led — we build things we believe in, and back the people doing the same.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] text-faint">Explore</h4>
          <ul className="flex flex-col gap-2.5 text-base">
            {exploreLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  to="/"
                  hash={link.hash}
                  className="text-ink hover:text-accent-strong transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] text-faint">Based in</h4>
          <ul className="flex flex-col gap-2.5 text-base text-ink">
            <li>
              South Africa <span className="text-faint text-[13px]">ZA</span>
            </li>
            <li>
              Seychelles <span className="text-faint text-[13px]">SC</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] text-faint">Say hello</h4>
          <a
            href="mailto:hello@lsd.capital"
            className="text-base font-semibold text-accent-strong underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            hello@lsd.capital
          </a>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,46px)] py-[18px] flex flex-wrap justify-between gap-2 text-[13px] text-faint">
          <span>© {new Date().getFullYear()} LSD Capital</span>
          <span>Heart-led investments.</span>
        </div>
      </div>
    </footer>
  );
}
