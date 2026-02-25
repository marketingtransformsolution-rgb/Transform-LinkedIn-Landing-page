
import React from 'react';

const ToolsGrid: React.FC = () => {
  const tools = [
    "LabelImg", "RectLabel", "CVAT", "Supervisely", "Labelbox",
    "Label Studio", "Alegion", "Manthano", "VoTT", "SuperAnnotate",
    "V7", "Doccano", "Scale AI", "Dataloop", "Encord"
  ];

  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="max-content">
        <div className="bg-slate-50 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-20 relative">

          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[800px] mb-12 sm:mb-16 reveal relative z-10">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4 uppercase">
              Platforms and Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Expertise in top data annotation tools
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Our team is proficient in the most advanced data annotation platforms. Whether you use industry-leading software or proprietary internal tools, our human-in-the-loop approach ensures high-quality training data for your AI models.
            </p>
          </div>

          {/* Animated Tools Cloud */}
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5 relative z-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="reveal group cursor-default"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className={`
                  px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white border border-slate-200 
                  shadow-sm group-hover:shadow-md group-hover:border-blue-300 
                  transition-all duration-300 transform group-hover:-translate-y-1
                  animate-float
                `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                    {tool}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ToolsGrid;
