import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const SolutionOverview: React.FC = () => {
  return (
    <section id="solutions" className="section-spacing bg-white">
      {/* Top Center Content */}
      <div className="max-content text-center mb-12 sm:mb-16 lg:mb-24 reveal">
        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4">
          DATA ANNOTATION SERVICES
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-6">
          For ML Teams Who Need Production Grade Training Data
        </h2>
        <p className="text-slate-600 text-base sm:text-lg lg:text-xl text-readable mx-auto px-4 sm:px-0">
          Deploy AI models faster while your engineering teams focus on architecture and optimization.
          TRANSFORM delivers Human in the Loop data annotation designed to produce high quality,
          production ready training datasets.
        </p>
      </div>

      {/* Main Two Column Layout */}
      <div className="max-content grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">

        {/* Left Side Content Block */}
        <div className="space-y-8 reveal" style={{ transitionDelay: '0.1s' }}>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
            We Fix AI Model Accuracy Problems
          </h3>
          <div className="space-y-4 sm:space-y-6 text-slate-600 text-readable text-base sm:text-lg">
            <p>
              TRANSFORM delivers security, accuracy, and speed through structured Human in the Loop
              annotation workflows. Our approach removes data quality bottlenecks that slow model
              training, reduces labeling inconsistencies, and enables scalable annotation operations
              aligned with production AI requirements.
            </p>
            <p>
              Our flexible integration models ensure that we sync perfectly with your existing
              pipelines, providing a scalable workforce that improves delivery timelines without
              compromising on granular precision.
            </p>
          </div>
        </div>

        {/* Right Side Structured Comparison Card - Redesigned with larger titles and perfect alignment */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Left Column: The Challenge */}
              <div className="p-6 sm:p-8 lg:p-12 space-y-8 sm:space-y-10 border-b md:border-b-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <h4 className="text-slate-900 font-extrabold text-lg sm:text-xl lg:text-2xl uppercase tracking-tight">
                      The Challenge
                    </h4>
                  </div>
                  <div className="h-1 w-16 bg-rose-100 rounded-full"></div>
                </div>

                <ul className="space-y-0">
                  {[
                    "Endless manual labeling effort",
                    "Inconsistent annotation quality",
                    "Scaling challenges as datasets grow"
                  ].map((text, i) => (
                    <li key={i} className={`flex gap-3 sm:gap-4 items-start min-h-[70px] sm:min-h-[80px] py-4 sm:py-5 ${i !== 2 ? 'border-b border-slate-50' : ''}`}>
                      <div className="bg-rose-50 p-1.5 rounded-full shrink-0 mt-0.5">
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Our Solution - With Tinted Background and Enhanced Hierarchy */}
              <div className="bg-blue-50/40 p-6 sm:p-8 lg:p-12 space-y-8 sm:space-y-10 border-l border-slate-50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <h4 className="text-blue-600 font-extrabold text-xl lg:text-2xl uppercase tracking-tight">
                      Our Solution
                    </h4>
                  </div>
                  <div className="h-1 w-16 bg-blue-200 rounded-full"></div>
                </div>

                <ul className="space-y-0">
                  {[
                    "Human reviewers supported by AI assisted workflows",
                    "Domain experts validate annotations for accuracy",
                    "Scalable teams aligned with project complexity"
                  ].map((text, i) => (
                    <li key={i} className={`flex gap-3 sm:gap-4 items-start min-h-[70px] sm:min-h-[80px] py-4 sm:py-5 ${i !== 2 ? 'border-b border-blue-100/50' : ''}`}>
                      <div className="bg-blue-100 p-1.5 rounded-full shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionOverview;