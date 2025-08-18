import React from 'react';
import { Play, FileText, ChevronRight } from 'lucide-react';

interface HeroProps {
  onJoinGame: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinGame }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-slate-900/90"></div>
        
        {/* Blockchain Network Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-40 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-32 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <line x1="88" y1="88" x2="320" y2="168" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.6"/>
            <line x1="320" y1="168" x2="168" y2="320" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.6"/>
            <line x1="168" y1="320" x2="320" y2="420" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.6"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Powerplay
              </span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl">
                Turning Cricket Watching Into AI-Powered Interactive Gameplay
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Play, Strategize, and Win – Real Cricket, Real Stakes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onJoinGame}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Play Now
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <a 
                href="https://zealous-rook-259.notion.site/PowerPlay-2459062b846880d8b4f0c140ee235929"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <span className="flex items-center justify-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Read Whitepaper
                </span>
              </a>
            </div>
          </div>
          
          {/* Right Content - Video */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
              <div className="aspect-video">
                <iframe 
                  src="https://drive.google.com/file/d/1fGgLtNyET0STYksAZctHMTMPObVyabEZ/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  title="Powerplay Gameplay Video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default Hero;