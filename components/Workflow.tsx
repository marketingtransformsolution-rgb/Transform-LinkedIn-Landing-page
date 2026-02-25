
import React from 'react';
import { Database, FileEdit, UserCheck, Layers, PackageCheck } from 'lucide-react';

const steps = [
  { icon: <Database />, title: "Dataset Intake", desc: "Seamless ingestion of raw image, video, LiDAR, and GIS data types." },
  { icon: <FileEdit />, title: "Guideline Design", desc: "Collaborative development of detailed labeling instructions for consistency." },
  { icon: <UserCheck />, title: "Human-in-the-Loop", desc: "Expert annotators apply labels with precision based on specific guidelines." },
  { icon: <Layers />, title: "Multi-layer QA", desc: "Redundant verification cycles ensure 99%+ accuracy before delivery." },
  { icon: <PackageCheck />, title: "Secure Delivery", desc: "Export to your required JSON, COCO, or custom format via secure API." }
];

const Workflow: React.FC = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="max-content grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left: Diagram */}
        <div className="lg:col-span-5 relative py-6 sm:py-8 reveal">
          <div className="absolute left-[27px] top-12 bottom-12 w-[2px] bg-slate-100"></div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start sm:items-center gap-4 sm:gap-6 relative group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors z-10 shadow-sm">
                  {/* Fixed: Use React.ReactElement<any> to avoid type mismatch with className prop */}
                  {React.cloneElement(step.icon as React.ReactElement<any>, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 max-w-[220px] sm:max-w-[240px]">{step.desc}</p>
                </div>
                {/* Connecting Line Progress (Visual only) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[27px] top-14 h-12 w-[2px] bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text Block */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="reveal">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              An operational partner, <br /> Not just a labeling vendor
            </h2>
            <p className="mt-4 sm:mt-6 text-slate-600 text-readable text-sm sm:text-base">
              TRANSFORM operates as a seamless extension of your machine learning team.
              While typical vendors treat annotation as a commodity task, we treat it as
              a foundational engineering requirement. Our structured process ensures
              that labeling nuance is captured at the intake level, reducing back-and-forth
              and accelerating your time-to-production.
            </p>
            <p className="text-slate-600 text-readable">
              Whether you are training autonomous driving models, optimizing satellite imagery
              recognition, or refining medical diagnostics, our workflow is designed to
              maintain rigorous standards under high-volume pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
              <p className="text-blue-600 font-bold text-lg">99%+ Accuracy</p>
              <p className="text-xs text-blue-500">Multi-tier validation cycles</p>
            </div>
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
              <p className="text-emerald-600 font-bold text-lg">SOC2 Compliant</p>
              <p className="text-xs text-emerald-500">Secure data handling protocols</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
