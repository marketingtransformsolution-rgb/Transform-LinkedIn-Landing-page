
import React from 'react';

const ToolsGrid: React.FC = () => {
  const tools = [
    { name: "LabelImg", logo: "https://raw.githubusercontent.com/tzutalin/labelImg/master/icons/app.png", type: "both" },
    { name: "RectLabel", logo: "https://rectlabel.com/favicon.ico", type: "both" },
    { name: "CVAT", logo: "", type: "text", textClass: "font-black tracking-tighter text-slate-900" },
    { name: "SUPERVISELY", logo: "https://supervisely.com/favicon.ico", type: "both" },
    { name: "scale", logo: "", type: "text", textClass: "font-extrabold text-purple-600" },
    { name: "ALEGION", logo: "https://alegion.com/wp-content/uploads/2021/04/cropped-favicon-32x32.png", type: "both" },
    { name: "Manthano", logo: "", type: "text", textClass: "font-bold text-blue-700" },
    { name: "Labelbox", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F5jK6eUu3oX_n2m1E8LpY5q5w_Qn6X_F7w&s", type: "both" },
    { name: "Label Studio", logo: "https://labelstud.io/images/logo.svg", type: "both" },
    { name: "VoTT", logo: "https://github.com/microsoft/VoTT/raw/master/public/favicon.ico", type: "both" },
    { name: "SuperAnnotate", logo: "https://superannotate.com/favicon.ico", type: "both" },
    { name: "V7", logo: "", type: "text", textClass: "font-black text-slate-900 text-lg" },
    { name: "Scale Icon", logo: "https://scale.com/favicon.ico", type: "icon" },
    { name: "doccano", logo: "https://raw.githubusercontent.com/doccano/doccano/master/docs/assets/logo.png", type: "both" }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="max-content">
        {/* Large Rounded Container matching the image */}
        <div className="bg-[#f9fafb] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 lg:p-20 shadow-sm border border-slate-50 reveal">

          <div className="max-w-[900px] mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-8">
              PLATFORMS AND TOOLS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Expertise in Top Data Annotation Tools
            </h2>
            <p className="text-slate-600 text-sm sm:text-[15px] lg:text-[17px] leading-[1.7] font-medium">
              Our team of over 120 annotators can handle complex data annotation tasks and manage large-scale data labeling owing to their proficiency in the most prominently used data annotation tools. We can also handle proprietary tools. With a human-in-the-loop data labeling approach, we resolve data annotation bottlenecks to accelerate your AI projects and help you achieve better outcomes.
            </p>
          </div>

          {/* Tools Grid matching image layout */}
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-start">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-100 h-14 sm:h-16 lg:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-md cursor-default"
              >
                {tool.type === 'both' && (
                  <div className="flex items-center gap-3">
                    <img src={tool.logo} alt={tool.name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
                    <span className="text-xs sm:text-[14px] lg:text-[16px] font-bold text-slate-800 whitespace-nowrap">{tool.name}</span>
                  </div>
                )}
                {tool.type === 'text' && (
                  <span className={`${tool.textClass} text-[14px] lg:text-[18px] whitespace-nowrap`}>
                    {tool.name}
                  </span>
                )}
                {tool.type === 'icon' && (
                  <img src={tool.logo} alt={tool.name} className="w-8 h-8 object-contain" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
