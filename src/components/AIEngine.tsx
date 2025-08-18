import React from 'react';
import { Brain, Database, TrendingUp, Zap } from 'lucide-react';

const AIEngine: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: "Rich Training Data",
      description: "Player types, ball-by-ball statistics, and comprehensive commentary analysis of real cricket game",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Dynamic Probabilities",
      description: "Shot success rates adapt in real-time based on game context and performance",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Real Cricket Feel",
      description: "Authentic unpredictability that mirrors actual cricket match scenarios",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
        
        {/* Neural Network Visualization */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="node-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
              </radialGradient>
            </defs>
            {/* Neural network nodes */}
            <circle cx="20%" cy="20%" r="3" fill="url(#node-gradient)"/>
            <circle cx="40%" cy="15%" r="2" fill="url(#node-gradient)"/>
            <circle cx="60%" cy="25%" r="4" fill="url(#node-gradient)"/>
            <circle cx="80%" cy="20%" r="2" fill="url(#node-gradient)"/>
            <circle cx="30%" cy="40%" r="3" fill="url(#node-gradient)"/>
            <circle cx="70%" cy="45%" r="2" fill="url(#node-gradient)"/>
            <circle cx="50%" cy="60%" r="4" fill="url(#node-gradient)"/>
            <circle cx="25%" cy="75%" r="2" fill="url(#node-gradient)"/>
            <circle cx="75%" cy="80%" r="3" fill="url(#node-gradient)"/>
            
            {/* Connecting lines */}
            <line x1="20%" y1="20%" x2="40%" y2="15%" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="40%" y1="15%" x2="60%" y2="25%" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="60%" y1="25%" x2="80%" y2="20%" stroke="#06B6D4" strokeWidth="0.5" opacity="0.3"/>
            <line x1="30%" y1="40%" x2="70%" y2="45%" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="50%" y1="60%" x2="25%" y2="75%" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="50%" y1="60%" x2="75%" y2="80%" stroke="#06B6D4" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligent <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Engine</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our advanced AI system creates the most realistic cricket gaming experience by analyzing real player data and match dynamics
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-white/20"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 transition-all duration-500 group-hover:scale-110`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right Side - AI Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 relative overflow-hidden">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  How Our AI Works
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Analyzes player batting statistics</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                    <span className="text-gray-300">Processes ball-by-ball performance data</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000"></div>
                    <span className="text-gray-300">Calculates dynamic shot probabilities</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl text-center">
                  <p className="text-lg font-semibold text-white mb-2">
                    "Feels like real cricket unpredictability"
                  </p>
                  <p className="text-gray-400">
                    Every decision matters, every shot has consequence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEngine;