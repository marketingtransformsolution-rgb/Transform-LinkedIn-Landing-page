
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Solutions', id: 'solutions', href: null },
        { label: 'Services', id: 'services', href: '/services/image-video-annotation' },
        { label: 'Case Studies', id: 'case-studies', href: null },
        { label: 'About', id: 'about', href: null },
        { label: 'Contact', id: 'contact-section', href: null },
    ];

    const handleNavItem = (item: { id: string; href: string | null }) => {
        if (item.href) {
            navigate(item.href);
            setIsMobileMenuOpen(false);
        } else {
            scrollToSection(item.id);
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
                : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-content">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="https://www.transformsolution.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src="/logo.png"
                            alt="Transform Solutions Logo"
                            className="h-20 w-auto transition-all duration-300"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavItem(item)}
                                className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors duration-200 uppercase tracking-wide relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-slate-200 bg-white">
                        <div className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavItem(item)}
                                    className="text-left px-4 py-3 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 uppercase tracking-wide"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('contact-section')}
                                className="mx-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-xl transition-all duration-200"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
