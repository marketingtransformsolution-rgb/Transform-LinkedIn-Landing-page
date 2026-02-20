
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-500 py-8 sm:py-10 lg:py-12 border-t border-slate-100">
      <div className="max-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <a
              href="https://www.transformsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <img src="/logo.png" alt="Transform Solutions Logo" className="h-14 w-auto" />
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Human-in-the-loop data annotation services for production-grade AI.
              Bridging the gap between raw data and model intelligence.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest">US Presence</h4>
            <div className="text-sm space-y-2">
              <p>1005 Congress Avenue, Suite 925</p>
              <p>Austin, TX 78701</p>
              <p className="text-blue-600 font-bold mt-4">+1 (512) 955 8808</p>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest">Global Reach</h4>
            <div className="text-sm space-y-2">
              <p>24/7 Operational Centers</p>
              <p>ISO/IEC 27001 Security</p>
              <p className="text-blue-600 font-bold mt-4">sales@transformsolution.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-5 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-3 text-[9px] uppercase font-bold tracking-[0.2em] text-slate-400">
          <p>© 2024 TRANSFORM Solutions. Dedicated to Data Quality.</p>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
