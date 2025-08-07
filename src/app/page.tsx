import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import TokenSoon from "@/components/landing/TokenSoon";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <HowItWorks />
      <TokenSoon />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} PowerPlay • Cricket x Crypto
      </footer>
    </div>
  );
}
