import React from "react";
import { Camera, Map, Box, Type } from "lucide-react";

const services = [
  {
    title: "Image and Video Annotation",
    desc: "Precision bounding boxes, polygons, and keypoint tracking for dynamic computer vision tasks including behavior analysis and obstacle detection.",
    outcome: "Faster model iteration cycles",
    icon: <Camera />,
    bg: "https://picsum.photos/400/300?1",
  },
  {
    title: "LiDAR and Sensor Annotation",
    desc: "High-resolution 3D point cloud cuboid labeling and semantic segmentation for autonomous vehicles and industrial robotics environments.",
    outcome: "Higher dataset consistency standards",
    icon: <Box />,
    bg: "https://picsum.photos/400/300?2",
  },
  {
    title: "GIS Mapping Annotation",
    desc: "Detailed cartographic labeling, road network extraction, and land-use classification using multi-spectral satellite and aerial imagery.",
    outcome: "Superior spatial accuracy rates",
    icon: <Map />,
    bg: "https://picsum.photos/400/300?3",
  },
  {
    title: "Text and NLP Annotation",
    desc: "Entity recognition, sentiment analysis, and intent classification for large language models and intelligent document processing systems.",
    outcome: "Increased semantic depth",
    icon: <Type />,
    bg: "https://picsum.photos/400/300?4",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="section-spacing gradient-bg">
      <div className="max-content">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Core Technical Capabilities
          </h2>
          <p className="text-slate-500">
            End-to-end expertise across all major data modalities for production
            AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal relative bg-white rounded-2xl overflow-hidden border border-slate-100 min-h-[280px] flex flex-col justify-end p-6 md:p-8 shadow-sm"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Background with subtle watermark-style blur - Static, no hover change */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.03] blur-[2px]"
                style={{ backgroundImage: `url(${service.bg})` }}
              ></div>

              <div className="relative z-10 space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md mb-3 md:mb-4">
                  {/* Fixed: Use React.ReactElement<any> to avoid type mismatch with className prop */}
                  {React.cloneElement(service.icon as React.ReactElement<any>, {
                    className: "w-5 h-5 md:w-6 md:h-6",
                  })}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                  {service.desc}
                </p>
                <div className="pt-2 flex items-center gap-3">
                  {/* Distinct thin line accent */}
                  <span className="h-px w-6 bg-blue-600 flex-shrink-0"></span>
                  <p className="text-blue-600 font-black text-[11px] uppercase tracking-tighter">
                    {service.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
