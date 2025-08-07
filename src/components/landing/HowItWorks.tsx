export default function HowItWorks() {
  const steps = [
    {
      title: "Connect Wallet",
      desc: "Use a Hedera-compatible wallet via WalletConnect.",
    },
    {
      title: "Choose Match Format",
      desc: "Enter a 1v1 duel (2-over or 4-over). Entry fee in PWR.",
    },
    { title: "Select a Shot", desc: "Each ball offers four options with dynamic success rates." },
    {
      title: "Score & Earn",
      desc: "Highest runs with fewer wickets wins. Rewards paid in PWR.",
    },
  ];

  return (
    <section id="how" className="bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-300">
            Four simple steps to jump into the action.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

