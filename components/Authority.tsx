
import React from 'react';
import { Award, ShieldCheck, Globe } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section id="about" className="section-spacing bg-slate-50 py-12 sm:py-16 lg:py-24 border-y border-slate-100 relative overflow-hidden">
      {/* Subtle background decoration in empty space */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.05] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100">
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="0.5"
              fill="#3b82f6"
            />
          ))}
        </svg>
      </div>

      <div className="max-content grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 relative z-10">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 mb-6">
            <Globe className="w-3 h-3 text-blue-600" />
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Global Operations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 sm:mb-8">Built for global scale</h2>
          <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed text-readable text-base sm:text-lg">
            <p>
              TRANSFORM Solutions was founded on the principle that data accuracy is the single
              most critical bottleneck in modern artificial intelligence. Over the last 23 years,
              we have evolved from a business process partner into a specialized AI operations powerhouse.
            </p>
            <p>
              Headquartered in Austin, Texas, with production centers globally, we provide
              the secure infrastructure and specialized human capital required to support
              Fortune 500 tech firms and ambitious startups alike. Our approach combines
              US-based strategic governance with global operational efficiency.
            </p>
          </div>
        </div>

        {/* Right Column: Authority Markers & Contact */}
        <div className="lg:col-span-5 space-y-10">
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter">23+</p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-black mt-1 tracking-widest">Years Expertise</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter">50M+</p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-black mt-1 tracking-widest">Annotations Delivered</p>
            </div>
          </div>

          {/* Certifications / Trust Badges */}
          <div className="space-y-3 reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">ISO/IEC 27001 Certified</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Information Security Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">SOC 2 Type II Compliant</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Enterprise-Grade Governance</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Authority;
