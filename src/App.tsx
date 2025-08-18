import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import AIEngine from './components/AIEngine';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BetaSignupModal from './components/BetaSignupModal';

function App() {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  const handleJoinGame = () => {
    setIsBetaModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBetaModalOpen(false);
  };

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <main>
        <section id="hero">
          <Hero onJoinGame={handleJoinGame} />
        </section>
        
        <section id="problem-solution">
          <ProblemSolution />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="ai-engine">
          <AIEngine />
        </section>
        
        <section id="cta">
          <CallToAction onJoinGame={handleJoinGame} />
        </section>
      </main>
      
      <Footer />
      
      <BetaSignupModal 
        isOpen={isBetaModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;