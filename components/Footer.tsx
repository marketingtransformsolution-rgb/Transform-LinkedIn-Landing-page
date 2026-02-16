
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-500 py-12 sm:py-16 lg:py-20 border-t border-slate-100">
      <div className="max-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
          {/* Col 1 */}
          <div className="space-y-6">
            <a
              href="https://www.transformsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity inline-flex"
            >
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-white text-lg">T</div>
              <span className="text-slate-900 font-black text-xl tracking-tight">TRANSFORM</span>
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

        <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[9px] uppercase font-bold tracking-[0.2em] text-slate-400">
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
