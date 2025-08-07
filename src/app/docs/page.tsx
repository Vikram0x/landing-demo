"use client";

import AnchorHeading from "@/components/common/AnchorHeading";

export default function DocsPage() {
  const sections = [
    { id: "intro", label: "Introduction" },
    { id: "gameplay", label: "Gameplay" },
    { id: "audience", label: "Target Audience" },
    { id: "monetization", label: "Monetization" },
    { id: "token", label: "Token Utility" },
    { id: "status", label: "Status" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Header */}
      <section className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-white p-8 dark:border-emerald-500/20 dark:from-emerald-950 dark:to-zinc-950">
        <h1 className="text-4xl font-bold tracking-tight text-emerald-900 dark:text-emerald-300">PowerPlay Whitepaper</h1>
        <p className="mt-3 max-w-3xl text-gray-700 dark:text-gray-300">
          A Web3 cricket strategy game with 1v1 shot-selection duels, transparent on-chain
          logic, and future player-owned assets.
        </p>
      </section>

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="top-24 hidden self-start lg:sticky lg:block">
          <nav className="rounded-xl border border-gray-200/60 bg-white p-4 text-sm dark:border-white/10 dark:bg-zinc-900">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Sections
            </div>
            <ol className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded px-2 py-1 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <main className="space-y-8">
          <section id="intro" className="rounded-2xl border border-gray-200/60 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
            <AnchorHeading id="intro">1. Introduction</AnchorHeading>
            <p className="text-gray-700 dark:text-gray-300">
              PowerPlay transforms passive cricket viewership into interactive 1v1 gameplay.
              Players make tactical shot selections each ball. Decisions are logged on-chain
              and assets will be represented as NFTs.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-200/60 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-500/20 dark:bg-emerald-900/20 dark:text-emerald-200">
                <div className="text-sm font-semibold">Vision</div>
                <p className="text-sm">Trusted cricket gaming ecosystem where every move is strategic and owned.</p>
              </div>
              <div className="rounded-xl border border-emerald-200/60 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-500/20 dark:bg-emerald-900/20 dark:text-emerald-200">
                <div className="text-sm font-semibold">Mission</div>
                <p className="text-sm">Experience cricket strategically and probabilistically on-chain.</p>
              </div>
            </div>
          </section>

          <section id="gameplay" className="rounded-2xl border border-gray-200/60 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
            <AnchorHeading id="gameplay">2. Gameplay</AnchorHeading>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>1v1 batting-only duels (2-over or 4-over).</li>
              <li>Each ball: four shot options with dynamic success rates.</li>
              <li>Toss is fair and random. Highest runs with fewer wickets wins.</li>
              <li>AI tunes probabilities using player history and match context.</li>
            </ul>
            <div className="mt-4 rounded-lg border border-gray-200/60 bg-gray-50 p-4 text-sm text-gray-700 dark:border-white/10 dark:bg-zinc-800 dark:text-gray-200">
              Core loop: alternate balls → pick a shot → see outcome → scoreboard updates.
            </div>
          </section>

          <section id="audience" className="rounded-2xl border border-gray-200/60 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
            <AnchorHeading id="audience">3. Target Audience</AnchorHeading>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Web3-native gamers seeking fair, on-chain competitive play.</li>
              <li>Cricket fans wanting interactive, skill-based gameplay.</li>
              <li>Strategy gamers who enjoy probability and mind games.</li>
            </ul>
          </section>

          <section id="monetization" className="rounded-2xl border border-gray-200/60 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
            <AnchorHeading id="monetization">4. Monetization</AnchorHeading>
            <p className="text-gray-700 dark:text-gray-300">
              Entry fees in PWR with a 10–15% platform fee; the remainder goes to winners.
              Tournaments, passes, and powerups expand monetization.
            </p>
          </section>

          <section id="token" className="rounded-2xl border border-gray-200/60 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
            <AnchorHeading id="token">5. Token Utility (PWR)</AnchorHeading>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Match entry fees and rewards.</li>
              <li>Power-ups and tournament passes.</li>
              <li>Future governance and ecosystem integrations.</li>
            </ul>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 dark:border-amber-500/30 dark:bg-amber-900/20 dark:text-amber-200">
              Tokenomics: Coming soon
            </div>
          </section>

          <section id="status" className="rounded-2xl border border-gray-200/60 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
            <AnchorHeading id="status">6. Status</AnchorHeading>
            <p className="text-gray-700 dark:text-gray-300">Launching soon on Hedera Testnet.</p>
          </section>
        </main>
      </div>
    </div>
  );
}

