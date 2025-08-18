import React from 'react';
import { DollarSign, Dices, Brain, Crown } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: DollarSign,
      title: "Join & Pay Entry",
      description: "Two players join the game and pay entry fee in tokens",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Dices,
      title: "Strategic Shot Selection",
      description: "1 ball each per turn - skill in shot selection, chance in execution",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Brain,
      title: "AI Probability Engine",
      description: "AI sets shot probabilities based on real batsman data & in-game performance",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      icon: Crown,
      title: "Winner Takes All",
      description: "Highest score wins the match and takes the prize pool",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Powerplay</span> Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Simple, engaging gameplay that combines cricket strategy with cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.id} 
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Connection Line (hidden on mobile, visible on lg+) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-400/50 z-0"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:scale-105 hover:border-white/20 group-hover:bg-white/10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {step.id}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 mb-6 mx-auto transition-all duration-500 group-hover:scale-110`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future of Cricket Gaming?
            </h3>
            <p className="text-gray-400 mb-6">
              Join thousands of cricket fans already playing Powerplay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;