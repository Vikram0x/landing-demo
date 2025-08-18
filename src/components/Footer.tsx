import React from 'react';
import { FileText, Play, Mail, Twitter, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(59,130,246,0.1) 50%, transparent 60%)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/PP.jpg" alt="Powerplay logo" className="w-32 md:w-48 mb-4 rounded-lg" />
              <p className="text-gray-400 text-lg max-w-md">
                AI-powered, blockchain-native, and designed for true cricket enthusiasts.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://zealous-rook-259.notion.site/PowerPlay-2459062b846880d8b4f0c140ee235929"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white rounded-lg transition-all duration-300 group"
              >
                <FileText className="w-4 h-4 mr-2" />
                Whitepaper
                <ExternalLink className="w-3 h-3 ml-2 opacity-60 group-hover:opacity-100" />
              </a>
              
              <a 
                href="https://drive.google.com/file/d/1wzGf2qTNOcx2VqFjnPI6H9bHuocshKN_/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white rounded-lg transition-all duration-300 group"
              >
                <Play className="w-4 h-4 mr-2" />
                Gameplay Video
                <ExternalLink className="w-3 h-3 ml-2 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#ai-engine" className="text-gray-400 hover:text-white transition-colors duration-300">
                  AI Engine
                </a>
              </li>
              <li>
                <a 
                  href="https://zealous-rook-259.notion.site/PowerPlay-2459062b846880d8b4f0c140ee235929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center"
                >
                  Whitepaper
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <a 
                href="mailto:info@power-play.live"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 mr-3 text-blue-400 group-hover:text-blue-300" />
                info@power-play.live
              </a>
              
              <a 
                href="https://x.com/Powerplay_web3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 mr-3 text-blue-400 group-hover:text-blue-300" />
                @Powerplay_web3
              </a>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">Stay updated with our latest news</p>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-400 text-center">
                  🚀 Beta launching soon!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Powerplay. All rights reserved. Built for the future of cricket gaming.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Powered by AI & Blockchain</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;