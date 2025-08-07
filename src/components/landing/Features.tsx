export default function Features() {
  const features = [
    {
      title: "1v1 Shot Selection",
      desc:
        "Batting-only duels where each ball offers four shot options with changing probabilities.",
    },
    {
      title: "Transparent Logic",
      desc:
        "In-house cricket engine with clear inputs/outputs and on-chain logs for trust.",
    },
    {
      title: "Own Your Assets",
      desc:
        "Future NFTs for players, captains, stadiums, and powerups—fully tradable.",
    },
    {
      title: "Leaderboards",
      desc:
        "Compete with friends and the global community. Seasonal rewards for top players.",
    },
  ];

  return (
    <section id="features" className="bg-white py-20 text-gray-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for Cricket Fans</h2>
          <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-300">
            Designed for speed, fairness, and fun. Every over is a chance to win.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
              <div className="mb-3 h-10 w-10 rounded-lg bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20 flex items-center justify-center font-semibold">
                ⚾
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

