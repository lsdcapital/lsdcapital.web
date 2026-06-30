import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/linkidink/privacy')({
  component: LinkidinkPrivacy,
  head: () => ({
    meta: [
      { title: 'LinkiDink Privacy Policy | LSD Capital' },
      {
        name: 'description',
        content: 'Privacy policy for the LinkiDink mobile game by LSD Capital.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
  }),
})

const LAST_UPDATED = '30 June 2026'

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Who we are',
    body: (
      <p>
        LinkiDink is a mobile game published by LSD Capital. References to "we", "us", and "our" mean LSD Capital. You can reach us at{' '}
        <a href="mailto:hello@lsd.capital" className="text-accent border-b border-accent/40 hover:border-accent">
          hello@lsd.capital
        </a>
        .
      </p>
    ),
  },
  {
    title: 'Data we collect',
    body: (
      <>
        <p>
          LinkiDink is designed to be played anonymously. We do not ask for your name, email address, phone number, or any account credentials.
        </p>
        <ul className="mt-4 space-y-3 border-l border-rule pl-5">
          <li>
            <strong className="font-display font-medium text-ink">Anonymous device identifier —</strong>{' '}
            a randomly generated ID stored on your device, used to save your progress and associate it with the app installation. This is not linked to your name, email, or other personal data.
          </li>
          <li>
            <strong className="font-display font-medium text-ink">Display name (nickname) —</strong>{' '}
            a nickname that you choose. You can change it at any time.
          </li>
          <li>
            <strong className="font-display font-medium text-ink">Game progress —</strong>{' '}
            such as your current level and hint coins, saved so you can resume play.
          </li>
          <li>
            <strong className="font-display font-medium text-ink">Optional feedback —</strong>{' '}
            when you tap "report" on a puzzle, we record that report along with any text comment you choose to add.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'How we use your data',
    body: (
      <>
        <p>We use the data described above only to:</p>
        <ul className="mt-4 space-y-2 border-l border-rule pl-5">
          <li>Provide the game and save your progress between sessions.</li>
          <li>Review reported puzzles and prove puzzle quality.</li>
          <li>Improve gameplay and balance difficulty across the level pool.</li>
        </ul>
        <p className="mt-5">
          We do <strong className="font-display font-medium text-ink">not</strong> sell your data, use it for advertising, or track you across other apps or websites. The app contains no third-party advertising or analytics trackers. We do not share your data with third parties except as described in the next section.
        </p>
      </>
    ),
  },
  {
    title: 'Third-party services',
    body: (
      <>
        <p>LinkiDink uses the following third-party services to operate:</p>
        <ul className="mt-4 space-y-3 border-l border-rule pl-5">
          <li>
            <strong className="font-display font-medium text-ink">Expo and Expo Application Services —</strong>{' '}
            used to build, distribute, and update the app. Expo processes basic device and runtime information to deliver app updates. See{' '}
            <a
              href="https://expo.dev/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent border-b border-accent/40 hover:border-accent"
            >
              Expo's privacy policy
            </a>
            .
          </li>
          <li>
            <strong className="font-display font-medium text-ink">Convex —</strong>{' '}
            used as our backend to store your anonymous identifier, nickname, game progress, and any report feedback, solely to run the game and prove puzzle quality. See{' '}
            <a
              href="https://www.convex.dev/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent border-b border-accent/40 hover:border-accent"
            >
              Convex's privacy policy
            </a>
            .
          </li>
          <li>
            <strong className="font-display font-medium text-ink">Apple App Store and Google Play Store —</strong>{' '}
            used to distribute the app. Apple and Google may collect their own data when you download or use the app; see their respective privacy policies.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Children',
    body: (
      <p>
        LinkiDink is suitable for general audiences. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, contact us and we will delete it.
      </p>
    ),
  },
  {
    title: 'Data retention and deletion',
    body: (
      <p>
        Your progress, nickname, and any feedback are retained for as long as the app is installed on your device. To delete your data, uninstall the app — local data is removed automatically. To delete cloud-stored data associated with your anonymous identifier, email{' '}
        <a href="mailto:hello@lsd.capital" className="text-accent border-b border-accent/40 hover:border-accent">
          hello@lsd.capital
        </a>{' '}
        with your device identifier and we will remove it within 30 days.
      </p>
    ),
  },
  {
    title: 'Security',
    body: (
      <p>
        We use industry-standard encryption in transit (HTTPS / TLS) when data is sent to our third-party providers. No system is perfectly secure; we will notify affected users in the event of a breach involving personal data.
      </p>
    ),
  },
  {
    title: 'Your rights',
    body: (
      <p>
        Depending on your jurisdiction (including GDPR and POPIA in South Africa), you may have rights to access, correct, or delete personal data we hold about you. Because LinkiDink collects only anonymous game data, in most cases there is no personal data to access — but if you believe we hold data about you, email{' '}
        <a href="mailto:hello@lsd.capital" className="text-accent border-b border-accent/40 hover:border-accent">
          hello@lsd.capital
        </a>
        .
      </p>
    ),
  },
  {
    title: 'Changes to this policy',
    body: (
      <p>
        We will post any changes to this policy on this page and update the "Last updated" date above. Material changes will be highlighted in the app on next launch.
      </p>
    ),
  },
  {
    title: 'Contact',
    body: (
      <p>
        Questions about this policy or how we handle your data?{' '}
        <a href="mailto:hello@lsd.capital" className="text-accent border-b border-accent/40 hover:border-accent">
          hello@lsd.capital
        </a>
      </p>
    ),
  },
]

function LinkidinkPrivacy() {
  return (
    <article>
      <header className="relative border-b border-rule overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-ink origin-left animate-[rule-draw_700ms_ease-out_forwards]"
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6">
            <p className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              § LinkiDink
              <br />
              <span className="text-ink-muted/70">Last updated {LAST_UPDATED}</span>
            </p>
            <h1 className="col-span-12 md:col-span-10 font-display font-medium text-ink leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl">
              Privacy <em className="italic font-normal text-accent">policy.</em>
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
                      {String(i + 1).padStart(2, '0')}
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
  )
}
