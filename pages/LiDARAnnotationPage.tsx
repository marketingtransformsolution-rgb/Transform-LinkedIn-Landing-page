
import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, ArrowRight, Box, Shield, Layers, Cpu, Navigation, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

/* ── helpers ─────────────────────────────────────────────────────────── */

const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/* ── data ────────────────────────────────────────────────────────────── */

const painPoints = [
    {
        title: 'Spatial inaccuracies impact model reliability',
        body: 'Incorrect cuboids or segmentation errors create inconsistencies that reduce perception confidence and affect autonomous decision making.',
    },
    {
        title: 'Multi-sensor alignment becomes difficult at scale',
        body: 'Combining LiDAR, radar, and camera data requires precise synchronization that many internal workflows cannot maintain.',
    },
    {
        title: 'Annotation speed conflicts with precision requirements',
        body: 'Teams often sacrifice accuracy to keep up with dataset growth, leading to long-term model instability.',
    },
    {
        title: 'Engineering teams lose time reviewing training data',
        body: 'Instead of focusing on autonomy algorithms, teams spend hours correcting annotation inconsistencies.',
    },
];

const solutions = [
    {
        icon: Shield,
        title: 'Human-in-the-loop spatial governance',
        body: 'Trained specialists validate cuboids, segmentation, and object classification across complex 3D environments.',
    },
    {
        icon: Layers,
        title: 'Standardized annotation frameworks',
        body: 'Clear labeling rules ensure consistency across annotators and reduce interpretation gaps in spatial datasets.',
    },
    {
        icon: Cpu,
        title: 'Scalable multi-sensor workflows',
        body: 'Integrated processes maintain alignment between LiDAR, camera, and radar datasets at enterprise scale.',
    },
];

const capabilities = [
    {
        title: '3D Cuboid Annotation',
        body: 'Precise object tracking in autonomous mobility and robotics systems with structured spatial positioning.',
    },
    {
        title: 'Point Cloud Semantic Segmentation',
        body: 'Improves environmental understanding and scene classification for perception models.',
    },
    {
        title: 'Sensor Fusion Alignment',
        body: 'Ensures accurate synchronization between LiDAR, camera, and radar inputs for reliable multi-modal AI.',
    },
    {
        title: 'Trajectory Labeling & Spatial Tracking',
        body: 'Supports behavior analysis and predictive modeling for autonomous systems.',
    },
];

const deploymentScenarios = [
    {
        icon: Navigation,
        industry: 'Autonomous Vehicles',
        body: 'Autonomous vehicle platforms often struggle with inconsistent cuboid placement across large datasets. Standardized workflows improve perception model stability and reduce retraining cycles.',
    },
    {
        icon: Cpu,
        industry: 'Robotics Navigation',
        body: 'Robotics navigation systems require precise environment mapping. Accurate point cloud segmentation enhances path planning and obstacle detection.',
    },
    {
        icon: Zap,
        industry: 'Smart Logistics & Automation',
        body: 'Smart logistics and warehouse automation platforms rely on sensor data to optimize movement and safety monitoring. Structured annotation governance ensures reliable training data.',
    },
];

const faqs = [
    {
        q: 'Why is LiDAR annotation more complex than traditional image labeling?',
        a: 'LiDAR datasets contain spatial depth and 3D structure, which require precise cuboid placement and segmentation to maintain perception accuracy. Unlike 2D images, point clouds demand spatial reasoning at every annotation step.',
    },
    {
        q: 'How does human-in-the-loop governance improve autonomy training data?',
        a: 'Specialists review spatial edge cases and validate object positioning, ensuring datasets remain consistent across large-scale deployments and reducing errors that affect safety-critical models.',
    },
    {
        q: 'When should robotics companies outsource sensor annotation operations?',
        a: 'Outsourcing becomes valuable when internal teams cannot maintain annotation precision while scaling data volume or expanding deployment environments.',
    },
    {
        q: 'How does sensor annotation affect safety performance?',
        a: 'Accurate spatial labeling improves object detection reliability, which directly influences safety validation and real-world deployment readiness.',
    },
    {
        q: 'Which industries benefit most from LiDAR annotation services?',
        a: 'Autonomous mobility, robotics, smart infrastructure, logistics automation, and spatial mapping platforms rely heavily on structured LiDAR annotation workflows.',
    },
];

/* ── sub-components ──────────────────────────────────────────────────── */

const FAQItem: React.FC<{ faq: { q: string; a: string }; index: number }> = ({ faq, index }) => {
    const [open, setOpen] = useState(index === 0);
    return (
        <div
            className="reveal border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between"
            >
                <span className="font-bold text-slate-900 leading-snug pr-4 text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 sm:p-6 pt-0 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-50">
                    {faq.a}
                </div>
            </div>
        </div>
    );
};

/* ── page ────────────────────────────────────────────────────────────── */

const LiDARAnnotationPage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal-active'); }),
            { threshold: 0.1 }
        );
        const els = document.querySelectorAll('.reveal');
        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* ── SECTION 1 · HERO ─────────────────────────────────────────── */}
            <section className="relative bg-white pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">

                {/* Accent blob */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-50 opacity-50 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />

                <div className="max-content w-full relative z-10">
                    {/* Two-column grid: 60% text / 40% image */}
                    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">

                        {/* LEFT — badge + H1 + body + CTAs */}
                        <div>
                            <div className="reveal" style={{ transitionDelay: '0.05s' }}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                    <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">LiDAR &amp; Sensor Annotation</span>
                                </div>
                            </div>

                            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold tracking-tight leading-[1.07] text-slate-900 mb-6 sm:mb-8">
                                    LiDAR and Sensor Annotation Operations Built for{' '}
                                    <span className="text-blue-600">High-Fidelity Spatial AI</span>
                                </h1>
                            </div>

                            <div className="reveal space-y-5" style={{ transitionDelay: '0.18s' }}>
                                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                                    Autonomous systems do not fail because of a lack of data. They fail when spatial data lacks consistency, precision, and reliable governance.
                                </p>
                                <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
                                    As LiDAR and multi-sensor datasets grow, annotation complexity increases rapidly. Small inaccuracies in point cloud labeling can affect perception models and slow deployment timelines.{' '}
                                    <span className="text-blue-600 font-bold">TRANSFORM</span> provides managed LiDAR and sensor annotation operations designed to deliver precise spatial data labeling, structured QA workflows, and scalable governance frameworks.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button
                                        onClick={scrollToContact}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-100 transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                                    >
                                        Start Your Sensor Annotation Assessment
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={scrollToContact}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-bold rounded-xl transition-all text-sm sm:text-base hover:bg-blue-50"
                                    >
                                        Talk With a Spatial Data Specialist
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — hero image, top-aligned with H1 */}
                        <div className="reveal w-full order-last lg:order-none mt-10 lg:mt-0" style={{ transitionDelay: '0.25s' }}>
                            <img
                                src="/LiAdr annotation/hero-image.webp"
                                alt="LiDAR and sensor data annotation for autonomous systems"
                                className="w-full h-auto rounded-2xl shadow-xl shadow-slate-200/60 object-cover"
                                loading="eager"
                                onError={(e) => {
                                    const t = e.currentTarget;
                                    t.style.display = 'none';
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 2 · DEPLOYMENT RISK ──────────────────────────────── */}
            <section className="section-spacing bg-slate-50 border-y border-slate-100">
                <div className="max-content">
                    <div className="text-center mb-12 sm:mb-16 reveal">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">Deployment Risk</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                            When Sensor Annotation Becomes a Deployment Risk
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            LiDAR annotation is not simply a data task. It directly influences perception accuracy and safety performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {painPoints.map((pt, i) => (
                            <div
                                key={i}
                                className="reveal bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                        <div className="w-3 h-3 rounded-full bg-blue-600 group-hover:bg-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2 text-base sm:text-lg">{pt.title}</h3>
                                        <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed">{pt.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 3 · HOW TRANSFORM SOLVES ─────────────────────────── */}
            <section className="section-spacing">
                <div className="max-content">
                    <div className="text-center mb-12 sm:mb-16 reveal">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">Our Approach</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                            How TRANSFORM Solves High-Precision Annotation Challenges
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            TRANSFORM builds annotation operations focused on spatial accuracy, safety alignment, and long-term dataset reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        {solutions.map((sol, i) => {
                            const Icon = sol.icon;
                            return (
                                <div
                                    key={i}
                                    className="reveal bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group text-center"
                                    style={{ transitionDelay: `${i * 0.12}s` }}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-3">{sol.title}</h3>
                                    <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed">{sol.body}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* outcome strip */}
                    <div className="reveal bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white">
                        <p className="text-xs font-black uppercase tracking-widest text-blue-200 mb-4">Outcome Focused Execution</p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                            {['Higher fidelity perception data', 'Reduced rework cycles', 'Improved model training stability'].map((o, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0" />
                                    <span className="font-semibold text-sm sm:text-base">{o}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4 · CAPABILITIES ─────────────────────────────────── */}
            <section className="section-spacing bg-slate-50 border-y border-slate-100">
                <div className="max-content">
                    <div className="text-center mb-12 sm:mb-16 reveal">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">Capabilities</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                            LiDAR and Sensor Annotation Capabilities <br className="hidden sm:block" />Designed for Autonomous AI
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Each workflow is governed by structured QA processes that prioritize spatial accuracy and consistency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {capabilities.map((cap, i) => (
                            <div
                                key={i}
                                className="reveal bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-8 rounded-full bg-blue-600 group-hover:h-10 transition-all duration-300" />
                                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">{cap.title}</h3>
                                </div>
                                <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed pl-5">{cap.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 5 · DEPLOYMENT SCENARIOS ─────────────────────────── */}
            <section className="section-spacing">
                <div className="max-content">
                    <div className="text-center mb-12 sm:mb-16 reveal">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">Real World Scenarios</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                            Real Deployment Scenarios in Autonomy and Robotics
                        </h2>
                        <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base">
                            These scenarios reflect common operational challenges faced by spatial AI teams across the US market.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {deploymentScenarios.map((sc, i) => {
                            const Icon = sc.icon;
                            return (
                                <div
                                    key={i}
                                    className="reveal relative bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group overflow-hidden"
                                    style={{ transitionDelay: `${i * 0.12}s` }}
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full translate-x-8 -translate-y-8 group-hover:bg-blue-100 transition-colors duration-300" />
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300 relative">
                                        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">{sc.industry}</span>
                                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">{sc.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SECTION 6 · HUMAN-IN-THE-LOOP QA ────────────────────────── */}
            <section className="section-spacing bg-slate-50 border-y border-slate-100">
                <div className="max-content">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        <div className="reveal">
                            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">Quality Governance</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-5">
                                Human-in-the-Loop Quality Governance for Spatial Data
                            </h2>
                            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                                Automated annotation tools accelerate labeling but cannot fully manage complex spatial edge cases. TRANSFORM integrates expert review layers that validate data accuracy at multiple checkpoints.
                            </p>
                            <div className="space-y-4 mb-8">
                                {['Precision-focused QA reviews', 'Standardized spatial labeling frameworks', 'Continuous validation of point cloud datasets'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Executive Impact</p>
                                <div className="space-y-2">
                                    {['Reduced perception model risk', 'More reliable autonomy performance', 'Predictable dataset delivery timelines'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                            <span className="text-slate-700 text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ transitionDelay: '0.15s' }}>
                            {[
                                { stat: '99.5%+', label: 'Spatial Accuracy Rate' },
                                { stat: '3D', label: 'Point Cloud Expertise' },
                                { stat: '50M+', label: 'LiDAR Frames Labeled' },
                                { stat: '24/7', label: 'Operational Support' },
                            ].map((s, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-200 hover:shadow-md transition-all">
                                    <p className="text-3xl font-black text-blue-600 mb-1">{s.stat}</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 7 · WHY TRANSFORM ────────────────────────────────── */}
            <section className="section-spacing">
                <div className="max-content">
                    <div className="text-center mb-12 reveal">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">Why TRANSFORM</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                            Why Autonomous AI Teams Choose TRANSFORM
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Enterprise autonomy teams seek partners who understand safety requirements and spatial data complexity.
                        </p>
                    </div>

                    <div className="reveal bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                <Box className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Operational Scenario</p>
                                <h3 className="font-bold text-slate-900 text-lg">Structured LiDAR Annotation Governance</h3>
                            </div>
                        </div>
                        <blockquote className="text-slate-600 text-base sm:text-lg leading-relaxed border-l-4 border-blue-100 pl-6 italic">
                            "A robotics company faced inconsistent object classification across LiDAR datasets. After implementing structured annotation governance, training data reliability improved and model validation cycles accelerated."
                        </blockquote>
                        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                            {['Managed workflows aligned to autonomy roadmaps', 'Structured spatial QA methodologies', 'Scalable delivery with accuracy guarantee'].map((p, i) => (
                                <div key={i}>
                                    <p className="text-xs text-slate-500 leading-snug font-medium">{p}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 8 · CONVERSION CTA ───────────────────────────────── */}
            <section className="section-spacing bg-slate-50 border-y border-slate-100">
                <div className="max-content">
                    <div className="reveal bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="lidarCtaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#lidarCtaGrid)" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] block mb-4">Get Started</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5">
                                Stabilize Your Spatial Data Pipeline Before It Slows Deployment
                            </h2>
                            <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
                                If LiDAR annotation complexity is increasing faster than internal teams can manage, a structured operations assessment can identify where governance and workflow improvements will reduce risk and improve dataset accuracy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
                                >
                                    Request a LiDAR Annotation Review
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                                >
                                    Connect With a Spatial AI Operations Specialist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 9 · FAQ ──────────────────────────────────────────── */}
            <section className="section-spacing">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16 reveal">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">FAQ</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
                        <p className="text-slate-500 mt-2 text-sm sm:text-base">Common questions on LiDAR and sensor annotation operations.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} faq={faq} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HubSpot Contact Form ──────────────────────────────────────── */}
            <ContactForm />

            {/* ── Footer ───────────────────────────────────────────────────── */}
            <Footer />
        </>
    );
};

export default LiDARAnnotationPage;
