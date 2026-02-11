import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How is labeling quality maintained across high volumes?",
    a: "We utilize a multi-layered verification process including cross-annotator consensus, senior lead audits, and an automated sanity-check layer. This redundant system allows us to guarantee 99%+ accuracy even at scale.",
  },
  {
    q: "Are you compliant with international data protection regulations like GDPR?",
    a: "Yes, TRANSFORM is fully GDPR compliant. We implement strict data minimization principles, right-to-be-forgotten protocols, and maintain detailed audit logs. Our global production centers are audited annually to ensure compliance with regional and international privacy standards.",
  },
  {
    q: "How quickly can you scale up a project team?",
    a: "We maintain a bench of pre-vetted, domain-specific annotators. Depending on complexity, we can typically ramp from a pilot team to a 50+ person dedicated operation within 10-14 business days.",
  },
  {
    q: "How do you handle edge cases or ambiguous data points?",
    a: "Ambiguous data is flagged and routed to a senior domain expert or a dedicated 'exception queue' for your review. This feedback loop is used to update the project guidelines in real-time, ensuring that similar edge cases are handled with increasing consistency as the project matures.",
  },
  {
    q: "What security standards do you follow for sensitive data?",
    a: "TRANSFORM is SOC2 Type II and ISO 27001 compliant. We offer secure remote data access, air-gapped workstations where required, and strict PII/PHI handling protocols to ensure enterprise-grade data protection.",
  },
  {
    q: "Can you scale operations across multiple data modalities simultaneously?",
    a: "Absolutely. Our infrastructure is built to handle multi-modal projects where video, audio, and LiDAR data must be synchronized and annotated in parallel. We assign dedicated cross-functional leads to ensure consistency across different data types within the same model environment.",
  },
  {
    q: "Is there a minimum project size for a pilot?",
    a: "Our pilots are designed to prove concept and accuracy. We typically recommend a dataset size that allows for at least 3-5 full QA cycles, which usually starts at 1,000 frames or 40 hours of complex LiDAR annotation.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-spacing">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 mt-2">
            Everything you need to know about our operational model.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 md:p-6 text-left flex items-center justify-between group"
              >
                <span className="font-bold text-slate-900 leading-tight pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0 text-slate-600 text-[15px] leading-relaxed border-t border-slate-50">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
