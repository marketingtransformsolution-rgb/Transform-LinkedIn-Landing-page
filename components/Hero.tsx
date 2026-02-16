
import React from 'react';
import { trackCTAEvent } from '../utils/analytics';

const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    trackCTAEvent('Start Your Pilot Project', 'Hero Section');
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      
      {/* Background Subtle technical grid overlay */}
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

      <div className="max-content w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Scale Your ML Pipelines</span>
              </div>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
                Are Your AI Models Slowing Down Because Training Data Cannot Keep Up?
              </h1>
            </div>
            
            <div className="reveal space-y-8" style={{ transitionDelay: '0.25s' }}>
              <p className="text-xl lg:text-2xl font-semibold text-slate-600 leading-tight">
                Inconsistent labels or unreliable outputs holding back your deployment?
              </p>
              
              <p className="text-lg lg:text-xl font-medium text-slate-500 leading-relaxed text-readable">
                <a 
                  href="https://www.transformsolution.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold uppercase tracking-wide hover:underline decoration-2 underline-offset-4"
                >
                  TRANSFORM
                </a> delivers high-precision Human-in-the-Loop data annotation built to bring accuracy and scale to production AI teams.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleScrollToContact}
                  className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-100 transition-all transform hover:scale-105 active:scale-95"
                >
                  Start Your Pilot Project
                </button>
                <div className="flex items-center gap-2 justify-center lg:justify-start px-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trusted by 50+ ML Teams</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="relative reveal hidden lg:block" style={{ transitionDelay: '0.4s' }}>
            {/* The Main "Annotation View" Mockup */}
            <div className="relative bg-slate-900 rounded-3xl p-3 shadow-2xl shadow-slate-300 transform rotate-1 transition-transform hover:rotate-0 duration-700">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                  alt="AI Data Annotation Interface" 
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Visual Bounding Box Overlays to simulate annotation software */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Bounding Box 1 */}
                  <div className="absolute top-[20%] left-[30%] w-[120px] h-[150px] border-2 border-blue-500 rounded-sm">
                    <span className="absolute -top-6 left-0 bg-blue-500 text-[10px] text-white px-2 py-0.5 font-bold rounded-t">
                      OBJECT_DETECT: Person
                    </span>
                  </div>
                  
                  {/* Bounding Box 2 */}
                  <div className="absolute bottom-[30%] right-[20%] w-[180px] h-[100px] border-2 border-emerald-500 rounded-sm">
                    <span className="absolute -top-6 left-0 bg-emerald-500 text-[10px] text-white px-2 py-0.5 font-bold rounded-t">
                      SEMANTIC_SEG: Component
                    </span>
                  </div>

                  {/* UI Elements */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 space-y-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-blue-500"></div>
                    </div>
                    <p className="text-[10px] text-white font-bold">Accuracy: 99.8%</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom UI Bar */}
              <div className="mt-3 flex justify-between items-center px-4 py-2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-500">TRANSFORM_OS v2.4.0</div>
              </div>
            </div>

            {/* Floating Decorative Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce-subtle">
              <p className="text-3xl font-black text-blue-600">500M+</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Annotations Delivered</p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
