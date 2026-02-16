
import React, { useState, useEffect, useRef } from 'react';
import { trackCTAEvent } from '../utils/analytics';

interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);
            const currentCount = easeOutExpo * end;
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={countRef}>
      {count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

const TrustStrip: React.FC = () => {
  const handleScrollToContact = () => {
    trackCTAEvent('ANNOTATE DATA WITH US NOW', 'Trust Strip Section');
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-50 py-24 border-y border-slate-100 overflow-hidden">
      {/* Background Subtle Annotation Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
          {/* Faint Bounding Boxes */}
          <rect x="10%" y="20%" width="120" height="80" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="4 2" />
          <rect x="80%" y="60%" width="150" height="100" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="4 2" />
        </svg>
      </div>

      <div className="max-content relative z-10">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal flex flex-col items-center text-center transition-transform hover:-translate-y-1" style={{ transitionDelay: '0.1s' }}>
            <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
              <Counter end={100} suffix="mn+" />
            </div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Data points</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal flex flex-col items-center text-center transition-transform hover:-translate-y-1" style={{ transitionDelay: '0.2s' }}>
            <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
              <Counter end={300} suffix="+" />
            </div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Data annotators</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal flex flex-col items-center text-center transition-transform hover:-translate-y-1" style={{ transitionDelay: '0.3s' }}>
            <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
              <Counter end={100} suffix="+" />
            </div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Data types annotated</div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal flex flex-col items-center text-center transition-transform hover:-translate-y-1" style={{ transitionDelay: '0.4s' }}>
            <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">
              <Counter end={99.5} suffix="%" decimals={1} />
            </div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Accuracy</div>
          </div>

        </div>

        {/* Action Area */}
        <div className="text-center max-w-2xl mx-auto space-y-8 reveal" style={{ transitionDelay: '0.5s' }}>
          <p className="text-xl lg:text-2xl font-bold text-slate-800 leading-tight">
            Create high quality training datasets to power your AI and ML models
          </p>
          
          <div>
            <button 
              onClick={handleScrollToContact}
              className="h-16 px-12 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-xl shadow-xl shadow-blue-100 transition-all transform hover:scale-105 active:scale-95 animate-pulse-cta"
            >
              ANNOTATE DATA WITH US NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
