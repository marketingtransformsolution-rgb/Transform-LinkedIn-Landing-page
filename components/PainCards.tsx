
import React from 'react';
import { AlertCircle, Zap, Users, ShieldAlert } from 'lucide-react';

const painPoints = [
  {
    icon: <AlertCircle className="w-8 h-8 text-rose-500" />,
    heading: "Inconsistent labels reducing model accuracy",
    description: "Manual errors and subjective labeling guidelines result in drift, causing costly model retrains and poor production performance."
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    heading: "Dataset turnaround slowing model releases",
    description: "Slow annotation vendors create data debt, preventing your engineering team from shipping updates at the pace required by the market."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    heading: "Internal teams overloaded with manual QA",
    description: "When your best data scientists spend 40% of their time fixing labels, innovation stops. We handle the heavy lifting with precision."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-slate-700" />,
    heading: "Lack of structured annotation governance",
    description: "Without a clear security and compliance framework, enterprise data becomes a liability rather than a strategic asset for growth."
  }
];

const PainCards: React.FC = () => {
  return (
    <section className="section-spacing relative">
      {/* Background decor in empty space */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none p-12">
        <svg width="300" height="300" viewBox="0 0 100 100">
          <path d="M10 10 L90 10 L90 90 L10 90 Z" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
          <circle cx="90" cy="10" r="1" fill="currentColor" />
          <circle cx="90" cy="90" r="1" fill="currentColor" />
          <circle cx="10" cy="90" r="1" fill="currentColor" />
        </svg>
      </div>

      <div className="max-content">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 px-4 sm:px-0">
            Scaling AI Fails When Annotation Workflows <br className="hidden md:block" />
            Cannot Keep Up
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base px-4 sm:px-0">Identify the bottlenecks preventing your models from reaching deployment.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="reveal p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                {point.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
                {point.heading}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainCards;
