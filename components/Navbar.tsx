
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Camera, Box, Map } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

/* ── Services sub-menu items ─────────────────────────────────────────── */
const subServices = [
    {
        href: '/services/image-video-annotation',
        icon: Camera,
        label: 'Image & Video Annotation',
        desc: 'Precision bounding boxes, segmentation & keypoints',
    },
    {
        href: '/services/lidar-sensor-annotation',
        icon: Box,
        label: 'LiDAR & Sensor Annotation',
        desc: '3D point cloud cuboids & sensor fusion workflows',
    },
    {
        href: '/services/gis-mapping-annotation',
        icon: Map,
        label: 'GIS Mapping Annotation',
        desc: 'Road extraction, terrain classification & building footprints',
    },
];

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setIsServicesOpen(false);
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [location]);

    const scrollToSection = (id: string) => {
        // If we're not on home, navigate home first then scroll
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        { label: 'Solutions', id: 'solutions' },
        { label: 'Case Studies', id: 'case-studies' },
        { label: 'About', id: 'about' },
        { label: 'Contact', id: 'contact-section' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
                : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        .dropdown-animate { animation: dropdownIn 0.18s ease-out; }
      `}</style>

            <div className="max-content">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <a
                        href="https://www.transformsolution.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
                    >
                        <img src="/logo.png" alt="Transform Solutions Logo" className="h-20 w-auto" />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">

                        {/* Solutions */}
                        <button
                            onClick={() => scrollToSection('solutions')}
                            className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wide relative group"
                        >
                            Solutions
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                        </button>

                        {/* Services dropdown */}
                        <div
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className={`flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide relative group transition-colors duration-200 ${isServicesOpen ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                                    }`}
                            >
                                Services
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                            </button>

                            {isServicesOpen && (
                                <div className="dropdown-animate absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                                    <div className="p-2">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 pt-2 pb-2">
                                            Sub-Services
                                        </p>
                                        {subServices.map((svc) => {
                                            const Icon = svc.icon;
                                            const isActive = location.pathname === svc.href;
                                            return (
                                                <button
                                                    key={svc.href}
                                                    onClick={() => { navigate(svc.href); setIsServicesOpen(false); }}
                                                    className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all duration-200 text-left group ${isActive ? 'bg-blue-50' : 'hover:bg-slate-50'
                                                        }`}
                                                >
                                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${isActive ? 'bg-blue-600' : 'bg-blue-50 group-hover:bg-blue-600'
                                                        }`}>
                                                        <Icon className={`w-4 h-4 transition-colors duration-200 ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-white'
                                                            }`} />
                                                    </div>
                                                    <div>
                                                        <p className={`text-sm font-bold leading-tight ${isActive ? 'text-blue-600' : 'text-slate-900'}`}>
                                                            {svc.label}
                                                        </p>
                                                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">{svc.desc}</p>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Rest of menu items */}
                        {menuItems.filter(m => !['solutions'].includes(m.id)).map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wide relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}

                        <button
                            onClick={() => scrollToSection('contact-section')}
                            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-slate-200 bg-white">
                        <div className="flex flex-col gap-1">

                            <button
                                onClick={() => scrollToSection('solutions')}
                                className="text-left px-4 py-3 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all uppercase tracking-wide"
                            >
                                Solutions
                            </button>

                            {/* Mobile Services section */}
                            <div>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all uppercase tracking-wide"
                                >
                                    Services
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isServicesOpen && (
                                    <div className="ml-4 mt-1 border-l-2 border-blue-100 pl-4 space-y-1 mb-2">
                                        {subServices.map((svc) => {
                                            const Icon = svc.icon;
                                            return (
                                                <button
                                                    key={svc.href}
                                                    onClick={() => navigate(svc.href)}
                                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-left"
                                                >
                                                    <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                    <span className="text-sm font-semibold text-slate-800">{svc.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {menuItems.filter(m => !['solutions'].includes(m.id)).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-left px-4 py-3 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all uppercase tracking-wide"
                                >
                                    {item.label}
                                </button>
                            ))}

                            <div className="px-4 mt-2">
                                <button
                                    onClick={() => scrollToSection('contact-section')}
                                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
