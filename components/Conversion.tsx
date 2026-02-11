
import React from 'react';

const Conversion: React.FC = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 conversion-light relative overflow-hidden">
      {/* Subtle technical background elements in margins */}
      <div className="absolute top-10 left-[10%] opacity-10 pointer-events-none hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#94a3b8" strokeWidth="0.5" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#94a3b8" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-[10%] opacity-10 pointer-events-none hidden lg:block">
        <svg width="150" height="80" viewBox="0 0 150 80">
          <rect x="10" y="10" width="40" height="30" stroke="#94a3b8" strokeWidth="0.5" />
          <rect x="60" y="20" width="40" height="30" stroke="#94a3b8" strokeWidth="0.5" />
          <rect x="110" y="10" width="30" height="40" stroke="#94a3b8" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[680px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 reveal">
          Start With A Structured Review Of Your Annotation Workflow
        </h2>
        <p className="text-slate-600 text-lg mb-12 text-readable mx-auto reveal" style={{ transitionDelay: '0.1s' }}>
          Stop guessing why your model accuracy is plateauing. Speak with an 
          AI operations architect to audit your current labeling process and 
          identify the precision leaks costing you time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ transitionDelay: '0.2s' }}>
          <button 
            onClick={handleScrollToContact}
            className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-100 transition-all animate-pulse-cta"
          >
            Book Strategy Call
          </button>
          <button 
            onClick={handleScrollToContact}
            className="h-14 px-10 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-lg border border-slate-200 shadow-sm transition-all"
          >
            Request Pilot Project
          </button>
        </div>
        
        <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] reveal" style={{ transitionDelay: '0.3s' }}>
          Confidential Strategy Review • No Commitment
        </p>
      </div>
    </section>
  );
};

export default Conversion;
