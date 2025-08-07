export default function Tokenomics() {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Ticker", value: "PWR" },
    { label: "Chain", value: "Hedera Testnet" },
    { label: "Total Supply", value: "1,000,000,000 PWR" },
    { label: "Gameplay Rewards", value: "40%" },
    { label: "Liquidity & Treasury", value: "25%" },
    { label: "Ecosystem & Partnerships", value: "20%" },
    { label: "Team & Contributors", value: "10%" },
    { label: "Airdrops", value: "5%" },
  ];

  return (
    <section id="token" className="bg-gradient-to-b from-emerald-50 to-white py-20 dark:from-black dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 dark:text-emerald-300 sm:text-4xl">PWR Tokenomics</h2>
          <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-300">
            PWR powers gameplay, rewards, and future governance. Earn by winning 1v1 matches and events.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-200/60 bg-white shadow-sm dark:border-emerald-500/20 dark:bg-zinc-900">
          <div className="divide-y divide-emerald-100 dark:divide-white/10">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-2 items-center px-6 py-4 sm:grid-cols-3">
                <div className="text-sm font-medium text-emerald-900 dark:text-emerald-200">{r.label}</div>
                <div className="col-span-1 text-right text-sm text-gray-700 dark:text-gray-300 sm:col-span-2">
                  {r.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

