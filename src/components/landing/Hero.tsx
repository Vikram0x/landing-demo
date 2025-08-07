"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import BetaSignup from "@/components/common/BetaSignup";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 text-white"
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,_#ffffff_1px,_transparent_0)] bg-[length:24px_24px]" />
      {/* Subtle animated gradient orb */}
      <div className="pointer-events-none absolute -right-10 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl animate-pulse" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
            Soon on Hedera Testnet
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            1v1 Cricket Strategy. Earn PWR.
          </h1>
          <p className="mt-6 text-base/7 text-emerald-100 sm:text-lg/8">
            PowerPlay is a Web3 cricket strategy game. Make ball-by-ball shot
            selections, outsmart your opponent, and earn PWR. Skill-first,
            transparent, and on-chain.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 font-medium text-emerald-950 shadow hover:bg-emerald-300"
            >
              Start Playing
            </button>
            <Link
              href="#token"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              View Tokenomics
            </Link>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 text-center text-emerald-100">
            <div>
              <div className="text-2xl font-semibold">50K+</div>
              <div className="text-xs uppercase tracking-wide opacity-80">Predictions</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">2.5s</div>
              <div className="text-xs uppercase tracking-wide opacity-80">Avg Settlement</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">0%</div>
              <div className="text-xs uppercase tracking-wide opacity-80">House Edge</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />
      <Modal open={open} onClose={() => setOpen(false)} title="We’re going live soon—join the beta">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Drop your email to get early access when we launch.
        </p>
        <div className="mt-4">
          <BetaSignup compact />
        </div>
      </Modal>
    </section>
  );
}

