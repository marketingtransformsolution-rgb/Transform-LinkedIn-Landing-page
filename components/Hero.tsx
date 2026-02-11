
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      
      {/* Background Image with "Light Effect" */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 saturate-[0.8] scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1554350342-84cbb65fd7c6?auto=format&fit=crop&q=80&w=1600')`,
            filter: 'blur(1px)'
          }}
        ></div>
        
        {/* Light Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        
        {/* Subtle technical grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      <div className="max-content w-full relative z-10">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          
          {/* Headline */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900 drop-shadow-sm">
              Are Your AI Models Slowing Down Because Training Data Cannot Keep Up
            </h1>
          </div>
          
          {/* Pain Line & Solution Line */}
          <div className="reveal space-y-8" style={{ transitionDelay: '0.25s' }}>
            <p className="text-xl lg:text-3xl font-semibold text-slate-600 leading-tight mx-auto max-w-[850px]">
              Inconsistent labels, delayed datasets, or unreliable outputs holding back your AI deployment
            </p>
            
            <div className="h-px w-24 bg-blue-600 mx-auto opacity-40"></div>
            
            <p className="text-xl lg:text-2xl font-medium text-slate-700 leading-relaxed text-readable mx-auto">
              <a 
                href="https://www.transformsolution.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-bold uppercase tracking-wide hover:underline decoration-2 underline-offset-4"
              >
                TRANSFORM
              </a> delivers Human in the Loop data annotation built to bring structure, accuracy, and scale to production AI teams.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
