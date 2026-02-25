
import React from 'react';

const logos = [
    '/Client logo/1c.png',
    '/Client logo/2c.png',
    '/Client logo/3c.png',
    '/Client logo/4c.png',
    '/Client logo/5c.png',
    '/Client logo/6c.png',
    '/Client logo/7c.png',
    '/Client logo/8c.png',
    '/Client logo/9c.png',
    '/Client logo/10c.png',
    '/Client logo/11c.png',
    '/Client logo/12c.png',
    '/Client logo/13c.png',
    '/Client logo/14c.png',
    '/Client logo/15c.png',
    '/Client logo/16c.png',
    '/Client logo/17c.png',
    '/Client logo/18c.png',
    '/Client logo/19c.png',
    '/Client logo/20c.png',
];

const ClientLogos: React.FC = () => {
    return (
        <section className="py-12 bg-white border-b border-slate-50 overflow-hidden">
            <div className="max-content mb-8 text-center px-4">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
                    Trusted by AI innovators globally
                </p>
            </div>

            <div className="relative">
                {/* Infinite Scroll Container */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* First Set of Logos */}
                    <div className="flex items-center gap-12 sm:gap-24 px-12 sm:px-24">
                        {logos.map((logo, index) => (
                            <img
                                key={`logo-1-${index}`}
                                src={logo}
                                alt="Client Logo"
                                className="h-8 sm:h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none sm:pointer-events-auto"
                            />
                        ))}
                    </div>
                    {/* Duplicate Set for Seamless Loop */}
                    <div className="flex items-center gap-12 sm:gap-24 px-12 sm:px-24">
                        {logos.map((logo, index) => (
                            <img
                                key={`logo-2-${index}`}
                                src={logo}
                                alt="Client Logo"
                                className="h-8 sm:h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none sm:pointer-events-auto"
                            />
                        ))}
                    </div>
                </div>

                {/* Gradient Overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default ClientLogos;
