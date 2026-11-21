import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/linkidink/terms")({
  component: LinkidinkTerms,
  head: () => ({
    meta: [
      { title: "LinkiDink Terms of Service | LSD Capital" },
      {
        name: "description",
        content: "Terms of service for the LinkiDink mobile game by LSD Capital.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

const LAST_UPDATED = "21 November 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "About these terms",
    body: (
      <p>
        These terms apply to the LinkiDink mobile game ("the app"), published by LSD Capital ("we",
        "us", "our"). By downloading or playing LinkiDink you agree to them. If you do not agree,
        please do not use the app.
      </p>
    ),
  },
  {
    title: "Using the app",
    body: (
      <p>
        We grant you a personal, non-exclusive, non-transferable licence to install and play
        LinkiDink on devices you own or control, for your own non-commercial use. You may not copy,
        modify, resell, reverse engineer, or redistribute the app or its puzzles, except where the
        law allows it.
      </p>
    ),
  },
  {
    title: "Nicknames and feedback",
    body: (
      <>
        <p>
          You choose your own nickname. It must not be offensive, hateful, impersonate someone else,
          or infringe anyone's rights. We may change or remove a nickname that breaks this rule.
        </p>
        <p>
          When you report a puzzle or send us a comment, you allow us to use that feedback to fix
          and improve the game, without owing you anything for it.
        </p>
      </>
    ),
  },
  {
    title: "Hint coins and progress",
    body: (
      <p>
        Hint coins and other in-game items are part of the game only. They have no cash value and
        cannot be exchanged, sold, or transferred. Any purchases made through the Apple App Store or
        Google Play are handled by those stores under their own terms, including their refund
        policies. Your progress is tied to an anonymous identifier on your device, so we may not be
        able to restore it if you uninstall the app or change devices.
      </p>
    ),
  },
  {
    title: "Fair play",
    body: (
      <p>
        Please do not interfere with the app or our servers, use bots or scripts against them, try
        to access data that is not yours, or use the app for anything unlawful. We may suspend or
        reset access for anyone who does.
      </p>
    ),
  },
  {
    title: "Our content",
    body: (
      <p>
        The app, its puzzles, design, artwork, and the LinkiDink name belong to LSD Capital or our
        licensors. LinkiDink is an independent game and is not affiliated with or endorsed by The
        New York Times.
      </p>
    ),
  },
  {
    title: "Privacy",
    body: (
      <p>
        How we handle your data is described in our{" "}
        <Link
          to="/projects/linkidink/privacy"
          className="text-accent border-b border-accent/40 hover:border-accent"
        >
          privacy policy
        </Link>
        .
      </p>
    ),
  },
  {
    title: "Changes and availability",
    body: (
      <p>
        We may update, change, or stop offering the app or any part of it at any time, including
        adding or removing levels. We will post changes to these terms on this page and update the
        "Last updated" date above. If you keep playing after a change, you accept the new terms.
      </p>
    ),
  },
  {
    title: "Disclaimer and liability",
    body: (
      <>
        <p>
          LinkiDink is provided "as is" and "as available". We do not promise that it will be
          error-free or always available.
        </p>
        <p>
          To the extent the law allows, LSD Capital is not liable for any indirect or consequential
          loss, or for loss of game progress, arising from your use of the app. Nothing in these
          terms limits rights you have under consumer protection law that cannot be excluded.
        </p>
      </>
    ),
  },
  {
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the Republic of South Africa. This does not take
        away any protection you have under the mandatory laws of the country where you live.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        Questions about these terms?{" "}
        <a
          href="mailto:hello@lsd.capital"
          className="text-accent border-b border-accent/40 hover:border-accent"
        >
          hello@lsd.capital
        </a>
      </p>
    ),
  },
];

function LinkidinkTerms() {
  return (
    <article>
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              LinkiDink
              <br />
              <span className="text-ink-muted/70">Last updated {LAST_UPDATED}</span>
            </p>
            <h1 className="col-span-12 md:col-span-10 font-display font-medium text-ink leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl">
              Terms of <em className="italic font-normal text-accent">service.</em>
            </h1>
          </div>
        </div>
      </header>

      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-start-3 md:col-span-9 max-w-2xl text-ink leading-relaxed">
              {sections.map((section, i) => (
                <section
                  key={section.title}
                  className="py-10 border-b border-rule first:border-t first:border-ink first:pt-12"
                >
                  <div className="grid grid-cols-12 gap-x-4 mb-5">
                    <span className="col-span-2 md:col-span-1 font-display text-2xl text-ink-muted tabular-nums leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="col-span-10 md:col-span-11 font-display text-2xl md:text-3xl text-ink leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div className="md:pl-[8.33%] space-y-4">{section.body}</div>
                </section>
              ))}

              <div className="pt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3">
                <Link
                  to="/projects/linkidink"
                  className="text-[11px] uppercase tracking-[0.22em] text-ink-muted hover:text-ink transition-colors"
                >
                  ← Back to LinkiDink
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
