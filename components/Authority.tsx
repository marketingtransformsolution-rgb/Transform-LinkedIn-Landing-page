import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  ShieldCheck,
  Database,
  Globe,
} from "lucide-react";

const Authority: React.FC = () => {
  return (
    <section className="section-spacing bg-slate-50 py-24 border-y border-slate-100 relative overflow-hidden">
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

      <div className="max-content grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 relative z-10">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 mb-6">
            <Globe className="w-3 h-3 text-blue-600" />
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">
              Global Operations
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8">
            Built for Global Scale
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-readable text-lg">
            <p>
              TRANSFORM Solutions was founded on the principle that data
              accuracy is the single most critical bottleneck in modern
              artificial intelligence. Over the last 23 years, we have evolved
              from a business process partner into a specialized AI operations
              powerhouse.
            </p>
            <p>
              Headquartered in Austin, Texas, with production centers globally,
              we provide the secure infrastructure and specialized human capital
              required to support Fortune 500 tech firms and ambitious startups
              alike. Our approach combines US-based strategic governance with
              global operational efficiency.
            </p>
          </div>
        </div>

        {/* Right Column: Authority Markers & Contact */}
        <div className="lg:col-span-5 space-y-10">
          {/* Metrics */}
          <div
            className="grid grid-cols-2 gap-4 reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-3xl font-black text-slate-900 tracking-tighter">
                23+
              </p>
              <p className="text-[10px] text-slate-400 uppercase font-black mt-1 tracking-widest">
                Years Expertise
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-3xl font-black text-slate-900 tracking-tighter">
                500M+
              </p>
              <p className="text-[10px] text-slate-400 uppercase font-black mt-1 tracking-widest">
                Labels Verified
              </p>
            </div>
          </div>

          {/* Certifications / Trust Badges */}
          <div className="space-y-3 reveal" style={{ transitionDelay: "0.3s" }}>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  ISO/IEC 27001 Certified
                </p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                  Information Security Management
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  SOC 2 Type II Compliant
                </p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                  Enterprise-Grade Governance
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details with Enhanced Icons */}
          <div
            className="pt-6 space-y-6 reveal border-t border-slate-200"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 group-hover:border-blue-400 transition-colors shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Headquarters
                </p>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  1005 Congress Avenue, Suite 925
                  <br />
                  Austin, TX 78701
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 group-hover:border-blue-400 transition-colors shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Inquiries
                </p>
                <p className="text-sm font-bold text-slate-900">
                  (512) 955 8808
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 group-hover:border-blue-400 transition-colors shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Partnerships
                </p>
                <p className="text-sm font-bold text-slate-900">
                  sales@transformsolution.com
                </p>
              </div>
            </div>
          </div>

          {/* Credibility Badges / Industry Logos */}
          <div
            className="pt-8 flex items-center gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 reveal"
            style={{ transitionDelay: "0.5s" }}
          >
            <img
              src="https://clutch.co/sites/all/themes/clutch/logo.svg"
              alt="Clutch Logo"
              className="h-5 w-auto"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <img
              src="https://www.goodfirms.co/assets/img/logo.svg"
              alt="GoodFirms Logo"
              className="h-6 w-auto"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="h-4 w-px bg-slate-300"></div>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Verified reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
