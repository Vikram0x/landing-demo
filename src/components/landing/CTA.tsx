"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import BetaSignup from "@/components/common/BetaSignup";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState(false);

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok && data?.error) throw new Error(data.error);
      setStatus("success");
      setMessage(data?.duplicate ? "You're already on the list. We'll notify you at launch." : "Subscribed! We'll notify you at launch.");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="play" className="relative isolate overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-700 px-6 py-16 text-white shadow-2xl sm:px-16">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to play? Connect your wallet and take your first shot.
            </h3>
            <p className="mt-4 text-emerald-100">
              No signup required. Launching soon on Hedera Testnet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-emerald-900 shadow hover:bg-emerald-50"
              >
                Start Playing
              </button>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10"
              >
                Read Docs
              </Link>
            </div>

            <form onSubmit={subscribe} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 font-medium text-emerald-950 shadow hover:bg-emerald-300 disabled:opacity-60"
              >
                {status === "loading" ? "Joining..." : "Notify me"}
              </button>
            </form>
            {message && (
              <div className="mt-3 text-sm text-emerald-100">{message}</div>
            )}
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-300/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-lime-300/20 blur-2xl" />
        </div>
      </div>
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

