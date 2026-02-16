
import React from 'react';
import { trackCTAEvent } from '../utils/analytics';
import ImageCarousel from './ImageCarousel';

const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    trackCTAEvent('Start Your Pilot Project', 'Hero Section');
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-white">

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-[9px] sm:text-[10px] font-black text-blue-700 uppercase tracking-widest">Scale Your ML Pipelines</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.08] lg:leading-[1.05] text-slate-900">
                Are Your AI Models Slowing Down Because Training Data Cannot Keep Up?
              </h1>
            </div>

            <div className="reveal space-y-4 sm:space-y-6 lg:space-y-8" style={{ transitionDelay: '0.25s' }}>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-600 leading-tight">
                Inconsistent labels or unreliable outputs holding back your deployment?
              </p>

              <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-500 leading-relaxed text-readable mx-auto lg:mx-0">
                <a
                  href="https://www.transformsolution.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold uppercase tracking-wide hover:underline decoration-2 underline-offset-4"
                >
                  TRANSFORM
                </a> delivers high-precision Human-in-the-Loop data annotation built to bring accuracy and scale to production AI teams.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                <button
                  onClick={handleScrollToContact}
                  className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold rounded-xl shadow-xl shadow-blue-100 transition-all transform hover:scale-105 active:scale-95"
                >
                  Start Your Pilot Project
                </button>
                <div className="flex items-center gap-2 justify-center lg:justify-start px-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Trusted by 50+ ML Teams</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Image Carousel with 3D Deck Effect */}
          <div className="relative reveal hidden lg:block ml-12" style={{ transitionDelay: '0.4s' }}>
            {/* Simple Carousel Container without frame */}
            <div className="relative">
              {/* Carousel with 3D deck effect */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-visible shadow-2xl">
                <ImageCarousel />
              </div>

              {/* Bottom Stats Badge */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl border border-slate-100 z-30">
                <p className="text-3xl font-black text-blue-600 text-center">500M+</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center mt-1">Annotations Delivered</p>
              </div>
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
