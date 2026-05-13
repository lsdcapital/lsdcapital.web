import { createFileRoute } from '@tanstack/react-router'

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

// TODO: This is a starter privacy policy. Review every section against what
// LinkiDink actually does and adjust before submitting to the Play Store.
// Required Play Store fields: data collection, sharing, security, deletion request flow.

const LAST_UPDATED = '13 May 2026'

function LinkidinkPrivacy() {
  return (
    <article className="pt-32 pb-24 bg-[#111111]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed space-y-8">
        <header>
          <p className="text-sm font-medium text-green-400 mb-3 uppercase tracking-wider">
            LinkiDink
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">1. Who we are</h2>
          <p>
            LinkiDink is a mobile game published by LSD Capital. References to "we", "us", and "our" mean LSD Capital. You can reach us at{' '}
            <a href="mailto:hello@lsd.capital" className="text-green-400 hover:text-green-300">
              hello@lsd.capital
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">2. Data we collect</h2>
          <p>LinkiDink is designed to collect as little personal data as possible.</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-gray-100">Game progress and settings</strong> — your current level, hint usage, completion times, and preferences (such as your selected learning language) are saved so you can resume play.
            </li>
            <li>
              <strong className="text-gray-100">Anonymous device identifier</strong> — a randomly generated ID stored on your device, used to associate your saved progress with the app installation. This is not linked to your name, email, or other personal data.
            </li>
            <li>
              <strong className="text-gray-100">Crash and error diagnostics</strong> — basic technical information (operating system version, device model, app version) is recorded when the app crashes, to help us fix bugs.
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            {/* TODO: Verify the data list above matches LinkiDink's actual data flow.
                If you use authentication, list account data (email, display name).
                If you use analytics (Firebase, PostHog, etc.), disclose that here.
                If you collect device advertising IDs, disclose that here.
                Remove items that don't apply. */}
            TODO: Verify this list matches the app's actual data flow before publishing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">3. How we use your data</h2>
          <p>We use the data described above only to:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Provide the game and save your progress between sessions.</li>
            <li>Diagnose crashes and improve stability.</li>
            <li>Improve gameplay and balance difficulty across the level pool.</li>
          </ul>
          <p>
            We do not sell your data. We do not use your data for advertising. We do not share your data with third parties except as described in the next section.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">4. Third-party services</h2>
          <p>LinkiDink uses the following third-party services to operate:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-gray-100">Expo and Expo Application Services</strong> — used to build, distribute, and update the app. Expo processes basic device and runtime information to deliver app updates. See{' '}
              <a
                href="https://expo.dev/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                Expo's privacy policy
              </a>
              .
            </li>
            <li>
              <strong className="text-gray-100">Convex</strong> — used to store game progress in the cloud so you can resume across devices. Convex processes only the anonymous identifier and game state described above. See{' '}
              <a
                href="https://www.convex.dev/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                Convex's privacy policy
              </a>
              .
            </li>
            <li>
              <strong className="text-gray-100">Apple App Store and Google Play Store</strong> — used to distribute the app. Apple and Google may collect their own data when you download or use the app; see their respective privacy policies.
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            {/* TODO: Add or remove third parties to match the app's actual integrations.
                Common additions: Sentry (crash reporting), Firebase (analytics),
                PostHog (product analytics), RevenueCat (subscriptions). */}
            TODO: Confirm this list is complete. Add Sentry / Firebase / RevenueCat / etc. if used.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">5. Children</h2>
          <p>
            {/* TODO: If the Play Store age rating is "Everyone" / 4+, this section
                needs to be more specific about COPPA / age compliance. */}
            LinkiDink is suitable for general audiences. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, contact us and we will delete it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">6. Data retention and deletion</h2>
          <p>
            Game progress is retained for as long as the app is installed on your device. To delete your data, uninstall the app — local data is removed automatically. To delete cloud-synced progress associated with your anonymous identifier, email{' '}
            <a href="mailto:hello@lsd.capital" className="text-green-400 hover:text-green-300">
              hello@lsd.capital
            </a>{' '}
            with your device identifier and we will remove it within 30 days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">7. Security</h2>
          <p>
            We use industry-standard encryption in transit (HTTPS / TLS) when data is sent to our third-party providers. No system is perfectly secure; we will notify affected users in the event of a breach involving personal data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">8. Your rights</h2>
          <p>
            Depending on your jurisdiction (including GDPR and POPIA in South Africa), you may have rights to access, correct, or delete personal data we hold about you. Because LinkiDink collects only anonymous game data, in most cases there is no personal data to access — but if you believe we hold data about you, email{' '}
            <a href="mailto:hello@lsd.capital" className="text-green-400 hover:text-green-300">
              hello@lsd.capital
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">9. Changes to this policy</h2>
          <p>
            We will post any changes to this policy on this page and update the "Last updated" date above. Material changes will be highlighted in the app on next launch.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">10. Contact</h2>
          <p>
            Questions about this policy or how we handle your data?{' '}
            <a href="mailto:hello@lsd.capital" className="text-green-400 hover:text-green-300">
              hello@lsd.capital
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}
