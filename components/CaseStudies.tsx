
import React, { useState, useEffect, useRef } from 'react';

const cases = [
  {
    metric: "98%",
    label: "QA Acceptance",
    challenge: "A leading GIS provider struggled with inconsistent road network labeling across complex urban intersections, leading to mapping errors.",
    solution: "TRANSFORM deployed a specialized team of cartographic experts with a double-blind QA workflow to resolve semantic ambiguity.",
    results: ["98% Verified Accuracy", "20% Reduction in False Positives"]
  },
  {
    metric: "40%",
    label: "Faster Turnaround",
    challenge: "An autonomous trucking startup had a 3-week data backlog, stalling their weekly model deployment and safety validation cycles.",
    solution: "We implemented an automated triage system paired with 24/7 expert labeling cycles to clear the backlog and move to a 48-hour SLA.",
    results: ["40% Faster Release Cycle", "5k Frames Labeled Per Day"]
  },
  {
    metric: "52%",
    label: "Efficiency Gain",
    challenge: "Internal engineering teams were spending half their time auditing labels instead of developing their core ML architecture.",
    solution: "By shifting governance to TRANSFORM, the client re-allocated 12 senior engineers back to core product development.",
    results: ["52% Throughput Increase", "$2.4M Saved in Engineering Time"]
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="section-spacing bg-white overflow-hidden">
      <div className="max-content">
        <div className="mb-12 sm:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">Proven Performance Metrics</h2>
          <p className="text-slate-500 mt-3 sm:mt-4 text-sm sm:text-base">Real results from complex global annotation projects.</p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {cases.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center reveal group"
            >
              {/* Left: Metric */}
              <div className="lg:col-span-4 text-center lg:text-left">
                <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors duration-500">
                  {item.metric}
                </span>
                <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
              </div>

              {/* Right: Explanation */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                <div>
                  <h4 className="text-xs font-bold text-blue-600 uppercase mb-3 tracking-wider">The Challenge</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-600 uppercase mb-3 tracking-wider">The Solution</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.solution}</p>
                </div>
                <div className="md:col-span-2 pt-6 border-t border-slate-100 flex flex-wrap gap-8">
                  {item.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="font-bold text-slate-900">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
