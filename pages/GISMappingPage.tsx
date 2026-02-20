
import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, ArrowRight, Map, Shield, RefreshCw, Globe, BarChart3, Building2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const painPoints = [
    {
        title: 'Spatial inconsistencies reduce analytical accuracy',
        body: 'Different interpretations of terrain, roads, or land usage lead to unreliable geospatial insights that affect downstream AI performance.',
    },
    {
        title: 'Dataset scale outpaces internal teams',
        body: 'Satellite and aerial imagery volumes grow faster than in-house annotation workflows can manage, creating backlogs.',
    },
    {
        title: 'Mapping updates introduce operational friction',
        body: 'Frequent updates to infrastructure or environmental conditions require continuous annotation adjustments that strain resources.',
    },
    {
        title: 'Poor governance affects decision making',
        body: 'If datasets lack consistency, predictive models used in logistics, climate analysis, or urban planning lose reliability.',
    },
];

const solutions = [
    {
        icon: Shield,
        title: 'Human-in-the-loop spatial governance',
        body: 'Specialists validate complex mapping features to maintain consistent labeling across datasets.',
    },
    {
        icon: Map,
        title: 'Standardized geospatial annotation frameworks',
        body: 'Clear classification rules reduce interpretation differences and improve dataset reliability across regions.',
    },
    {
        icon: RefreshCw,
        title: 'Scalable workflows for continuous mapping updates',
        body: 'Structured processes support ongoing dataset refresh cycles without disrupting AI model training.',
    },
];

const capabilities = [
    {
        title: 'Land Use & Terrain Classification',
        body: 'Supporting environmental monitoring and climate analytics with precise spatial feature labeling.',
    },
    {
        title: 'Road Network Extraction & Infrastructure Labeling',
        body: 'Enabling logistics optimization and smart mobility analysis with consistent road feature annotation.',
    },
    {
        title: 'Building Footprint Annotation',
        body: 'Improving urban planning models and real estate intelligence platforms with accurate 2D and 3D building extraction.',
    },
    {
        title: 'Multi-Spectral & Aerial Imagery Annotation',
        body: 'Enhancing advanced geospatial analysis with structured labeling across diverse satellite and aerial data sources.',
    },
];

const deploymentScenarios = [
    {
        icon: Globe,
        industry: 'Climate Technology',
        body: 'Climate technology platforms rely on accurate terrain classification to monitor environmental change. Structured annotation improves model consistency and reduces analysis errors.',
    },
    {
        icon: BarChart3,
        industry: 'Logistics Intelligence',
        body: 'Logistics intelligence companies use road extraction annotation to optimize route planning. Standardized workflows increase prediction reliability.',
    },
    {
        icon: Building2,
        industry: 'Urban Planning & Smart Cities',
        body: 'Urban planning and smart city platforms require building footprint annotation for infrastructure analysis. Consistent spatial datasets support better planning outcomes.',
    },
];

const faqs = [
    {
        q: 'What is GIS mapping annotation in geospatial AI?',
        a: 'GIS annotation involves labeling spatial features such as roads, terrain, buildings, and environmental elements to train AI models that analyze geographic data.',
    },
    {
        q: 'Why is human-in-the-loop important for geospatial datasets?',
        a: 'Human review ensures accurate interpretation of complex spatial patterns that automated tools may misclassify, improving overall dataset quality and model reliability.',
    },
    {
        q: 'When should geospatial companies outsource annotation operations?',
        a: 'Outsourcing becomes strategic when imagery volume grows rapidly or when maintaining consistent spatial labeling internally becomes difficult.',
    },
    {
        q: 'How does mapping annotation affect logistics and climate analytics?',
        a: 'Accurate spatial datasets improve prediction models used for route optimization, environmental monitoring, and infrastructure planning.',
    },
    {
        q: 'Which industries benefit most from GIS annotation services?',
        a: 'Climate technology, logistics intelligence, urban planning platforms, smart infrastructure, and spatial analytics companies rely heavily on structured GIS annotation workflows.',
    },
];

const FAQItem: React.FC<{ faq: { q: string; a: string }; index: number }> = ({ faq, index }) => {
    const [open, setOpen] = useState(index === 0);
    return (
        <div
            className="reveal border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            <button onClick={() => setOpen(!open)} className="w-full p-5 sm:p-6 text-left flex items-center justify-between">
                <span className="font-bold text-slate-900 leading-snug pr-4 text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 sm:p-6 pt-0 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-50">{faq.a}</div>
            </div>
        </div>
    );
};

const GISMappingPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal-active'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* ── SECTION 1 · HERO ─────────────────────────────────────────── */}
            <section className="relative bg-white pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-50 opacity-50 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />

                <div className="max-content w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">

                        {/* LEFT — badge + H1 + body + CTAs */}
                        <div>
                            <div className="reveal" style={{ transitionDelay: '0.05s' }}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                    <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">GIS Mapping Annotation</span>
                                </div>
                            </div>
                            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold tracking-tight leading-[1.07] text-slate-900 mb-6 sm:mb-8">
                                    GIS Mapping Annotation Operations Built for{' '}
                                    <span className="text-blue-600">Enterprise Geospatial AI</span>
                                </h1>
                            </div>
                            <div className="reveal space-y-5" style={{ transitionDelay: '0.18s' }}>
                                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                                    Geospatial AI models depend on accurate mapping data, but annotation workflows often struggle to keep pace with expanding satellite imagery, aerial datasets, and spatial intelligence requirements.
                                </p>
                                <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
                                    As mapping platforms grow, inconsistencies in road extraction, land use classification, and spatial labeling affect analytics accuracy.{' '}
                                    <span className="text-blue-600 font-bold">TRANSFORM</span> delivers managed GIS mapping annotation operations designed to maintain spatial accuracy, enforce structured governance, and support large-scale geospatial AI deployments.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button
                                        onClick={scrollToContact}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-100 transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                                    >
                                        Start Your GIS Annotation Assessment
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={scrollToContact}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-bold rounded-xl transition-all text-sm sm:text-base hover:bg-blue-50"
                                    >
                                        Talk With a Geospatial Data Specialist
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — hero image, top-aligned with H1 */}
                        <div className="reveal w-full order-last lg:order-none mt-10 lg:mt-0" style={{ transitionDelay: '0.25s' }}>
                            <img
                                src="/Geospatial annotation/hero-image.webp"
                                alt="GIS mapping annotation for geospatial AI platforms"
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

            {/* ── SECTION 2 · STRATEGIC RISK ───────────────────────────────── */}
            <section className="section-spacing bg-slate-50 border-y border-slate-100">
                <div className="max-content">
                    <div className="text-center mb-12 sm:mb-16 reveal">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">Strategic Risk</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                            When GIS Annotation Becomes a Strategic Risk
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Geospatial annotation challenges often appear gradually but create significant downstream impact on AI performance.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {painPoints.map((pt, i) => (
                            <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group" style={{ transitionDelay: `${i * 0.1}s` }}>
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
                            How TRANSFORM Solves Enterprise GIS Annotation Challenges
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            TRANSFORM treats geospatial annotation as an operational discipline rather than a production task.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        {solutions.map((sol, i) => {
                            const Icon = sol.icon;
                            return (
                                <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group text-center" style={{ transitionDelay: `${i * 0.12}s` }}>
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-3">{sol.title}</h3>
                                    <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed">{sol.body}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="reveal bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white">
                        <p className="text-xs font-black uppercase tracking-widest text-blue-200 mb-4">Outcome Focused Execution</p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                            {['Improved spatial accuracy', 'Reduced dataset revisions', 'Stable geospatial AI performance'].map((o, i) => (
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
                            GIS Mapping Annotation Capabilities <br className="hidden sm:block" />Designed for Spatial Intelligence
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Each workflow is executed through structured QA governance to maintain mapping precision across large datasets.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="reveal bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group" style={{ transitionDelay: `${i * 0.1}s` }}>
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
                            Real Deployment Scenarios in Geospatial AI
                        </h2>
                        <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base">
                            These examples reflect common operational challenges faced by US-based geospatial AI companies.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {deploymentScenarios.map((sc, i) => {
                            const Icon = sc.icon;
                            return (
                                <div key={i} className="reveal relative bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group overflow-hidden" style={{ transitionDelay: `${i * 0.12}s` }}>
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
                                Human-in-the-Loop Quality Governance for GIS Data
                            </h2>
                            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                                Automated tools accelerate geospatial labeling but cannot fully interpret complex spatial patterns. TRANSFORM integrates expert review layers to ensure consistent mapping annotation.
                            </p>
                            <div className="space-y-4 mb-8">
                                {['Multi-stage spatial QA reviews', 'Standardized geospatial classification guidelines', 'Continuous dataset validation processes'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Executive Impact</p>
                                <div className="space-y-2">
                                    {['More reliable geospatial insights', 'Reduced model retraining cycles', 'Predictable annotation delivery timelines'].map((item, i) => (
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
                                { stat: '99%+', label: 'Spatial Accuracy Rate' },
                                { stat: '4', label: 'Annotation Modalities' },
                                { stat: '1B+', label: 'Map Features Labeled' },
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
                            Why Geospatial AI Teams Choose TRANSFORM
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Geospatial companies need annotation partners who understand mapping complexity, spatial accuracy, and long-term dataset governance.
                        </p>
                    </div>
                    <div className="reveal bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                <Map className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Operational Scenario</p>
                                <h3 className="font-bold text-slate-900 text-lg">Standardized Road Labeling Governance</h3>
                            </div>
                        </div>
                        <blockquote className="text-slate-600 text-base sm:text-lg leading-relaxed border-l-4 border-blue-100 pl-6 italic">
                            "A mapping analytics platform struggled with inconsistent road labeling across regions. After implementing structured annotation governance, dataset accuracy improved and analytics outputs became more reliable."
                        </blockquote>
                        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                            {['Workflows aligned to spatial intelligence roadmaps', 'Structured geospatial QA methodologies', 'Scalable delivery across imagery modalities'].map((p, i) => (
                                <div key={i}>
                                    <p className="text-xs text-slate-500 leading-snug font-medium">{p}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 8 · CTA ──────────────────────────────────────────── */}
            <section className="section-spacing bg-slate-50 border-y border-slate-100">
                <div className="max-content">
                    <div className="reveal bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="gisCtaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#gisCtaGrid)" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] block mb-4">Get Started</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5">
                                Strengthen the Accuracy of Your Geospatial AI Models
                            </h2>
                            <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
                                If GIS annotation workflows are slowing analysis or creating uncertainty in mapping data, an operations assessment can identify governance gaps and improve spatial dataset reliability.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
                                >
                                    Request Your GIS Annotation Review
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                                >
                                    Connect With a Geospatial Operations Specialist
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
                        <p className="text-slate-500 mt-2 text-sm sm:text-base">Common questions on enterprise GIS mapping annotation.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
                    </div>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </>
    );
};

export default GISMappingPage;
