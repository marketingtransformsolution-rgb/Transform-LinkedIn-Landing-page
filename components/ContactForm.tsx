
import React, { useEffect } from 'react';

// Fix: Use capital 'Window' to correctly extend the global Window interface in TypeScript
declare global {
  interface Window {
    hbspt: any;
    lintrk: any;
  }
}

const ContactForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "245030364",
          formId: "cbcec5da-b477-4077-8a9f-0d32d6fa7672",
          region: "na2",
          target: '#hubspot-form-container',
        });
      }
    };

    return () => {
      // Optional: Cleanup if necessary
    };
  }, []);

  return (
    <section id="contact-section" className="section-spacing bg-slate-50 border-y border-slate-100">
      <div className="max-content">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-16 shadow-xl shadow-slate-200/50 reveal">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Ready to Scale Your Training Data?
            </h2>
            <p className="text-slate-500 font-medium text-sm sm:text-base">
              Submit your project details and an AI operations expert will contact you to discuss a custom annotation workflow.
            </p>
          </div>

          {/* Container where HubSpot will inject the form */}
          <div id="hubspot-form-container" className="min-h-[400px]">
            {/* Loading placeholder */}
            <div className="flex items-center justify-center py-20">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-2.5 bg-slate-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-slate-100 rounded-full w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
