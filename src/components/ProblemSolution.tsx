import React from 'react';
import { Users, Zap, Trophy, Target } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #3B82F6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionizing Cricket <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform passive cricket watching into an engaging, strategic gaming experience powered by AI and blockchain technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center justify-center lg:justify-start">
                <Users className="w-8 h-8 mr-3" />
                The Problem
              </h3>
              <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Cricket fans remain passive spectators during matches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Limited engagement beyond watching and discussing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Missed opportunities for interactive entertainment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Solution */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center justify-center lg:justify-start">
                <Zap className="w-8 h-8 mr-3" />
                The Solution
              </h3>
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Trophy className="w-6 h-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">AI-Powered P2P Cricket Game</h4>
                      <p className="text-gray-300">Real-time strategic shot selections with intelligent probability calculations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Target className="w-6 h-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Skill-Based Competition</h4>
                      <p className="text-gray-300">Test your cricket knowledge against other players with real stakes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 text-purple-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Dynamic Gameplay</h4>
                      <p className="text-gray-300">AI adapts to real batsman data and in-game performance for authentic cricket feel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;