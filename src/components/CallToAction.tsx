import React from 'react';
import { Play, FileText, ArrowRight, Sparkles } from 'lucide-react';

interface CallToActionProps {
  onJoinGame: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onJoinGame }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main CTA Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-8 animate-bounce">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Join the
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> Future</span>
              <br />
              of Cricket Gaming?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the unpredictability of cricket, just like a real batsman.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={onJoinGame}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 min-w-[200px]"
            >
              <span className="flex items-center justify-center">
                <Play className="w-6 h-6 mr-3" />
                Join the Game
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </button>
            
            <a 
              href="https://zealous-rook-259.notion.site/PowerPlay-2459062b846880d8b4f0c140ee235929"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 min-w-[200px]"
            >
              <span className="flex items-center justify-center">
                <FileText className="w-6 h-6 mr-3" />
                Read Whitepaper
              </span>
            </a>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">AI-Powered</div>
              <div className="text-gray-400">Intelligent probability calculations</div>
            </div>
            
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Real Stakes</div>
              <div className="text-gray-400">Compete with tokens</div>
            </div>
            
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Web3 Native</div>
              <div className="text-gray-400">Built for the decentralized future</div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Assets Ownership</div>
              <div className="text-gray-400">Own your game assets as NFTs</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;