"use client";

import { useState } from "react";

export default function BetaSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
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
      setMessage(data?.duplicate ? "You're already on the beta list." : "Thanks! You're on the beta list.");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={submit} className={`grid grid-cols-1 gap-3 ${compact ? "sm:grid-cols-[1fr_auto]" : ""}`}>
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-emerald-400 focus:outline-none dark:border-white/10 dark:bg-zinc-800 dark:text-white"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-500 disabled:opacity-60"
      >
        {status === "loading" ? "Joining..." : "Join beta"}
      </button>
      {message && (
        <div className="sm:col-span-2 text-sm text-emerald-700 dark:text-emerald-300">{message}</div>
      )}
    </form>
  );
}

