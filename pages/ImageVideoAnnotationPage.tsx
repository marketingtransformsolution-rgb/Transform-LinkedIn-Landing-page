
import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, ArrowRight, Camera, Shield, Zap, Target, Users, BarChart3 } from 'lucide-react';
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
        title: 'Dataset inconsistency reduces model reliability',
        body: 'Different labeling interpretations create unpredictable outputs, especially when projects scale across multiple annotators or vendors.',
    },
    {
        title: 'Engineering teams shift into supervision roles',
        body: 'AI teams begin reviewing annotations instead of building new capabilities, slowing innovation cycles.',
    },
    {
        title: 'Scaling data increases operational friction',
        body: 'Adding more annotators often leads to more variation, more revisions, and longer delivery timelines.',
    },
    {
        title: 'Delays impact revenue driven roadmaps',
        body: 'Annotation bottlenecks slow model training cycles, affecting feature releases and deployment schedules.',
    },
];

const solutions = [
    {
        icon: Shield,
        title: 'Human-in-the-loop governance',
        body: 'Specialists review complex edge cases to maintain consistent interpretation across datasets, preventing model drift.',
    },
    {
        icon: Target,
        title: 'Operational standardization',
        body: 'Clear annotation frameworks reduce ambiguity and improve reliability across large-scale projects.',
    },
    {
        icon: Users,
        title: 'Scalable delivery without hiring pressure',
        body: 'AI leaders expand data operations capacity while keeping quality centralized and predictable.',
    },
];

const capabilities = [
    {
        title: 'Bounding Box Annotation',
        body: 'Enables accurate object detection in dynamic environments such as retail analytics and traffic monitoring.',
    },
    {
        title: 'Polygon & Semantic Segmentation',
        body: 'Improves precision for complex visual scenes where pixel-level accuracy matters.',
    },
    {
        title: 'Keypoint Tracking & Motion Analysis',
        body: 'Supports behavior recognition, safety monitoring, and advanced computer vision applications.',
    },
    {
        title: 'Video Sequence Annotation',
        body: 'Maintains consistency across frames, helping models understand motion and temporal patterns.',
    },
];

const deploymentScenarios = [
    {
        icon: BarChart3,
        industry: 'Retail Analytics',
        body: 'Retail analytics platforms managing high-volume video streams often experience inconsistent labeling across locations. Standardized annotation workflows improve detection accuracy and reduce manual QA.',
    },
    {
        icon: Zap,
        industry: 'Smart Infrastructure & Mobility',
        body: 'Smart infrastructure and mobility solutions require precise tracking across varied environments. Structured video annotation ensures reliable traffic analysis and behavior modeling.',
    },
    {
        icon: Target,
        industry: 'Industrial Automation',
        body: 'Industrial automation companies rely on accurate image annotation to detect defects or anomalies. Consistent datasets reduce false positives and improve operational performance.',
    },
];

const faqs = [
    {
        q: 'What makes enterprise image and video annotation different from basic labeling services?',
        a: 'Enterprise annotation focuses on governance, consistency, and long-term model performance. Structured workflows ensure datasets follow standardized logic, reducing variation and improving reliability across deployments.',
    },
    {
        q: 'How does human-in-the-loop annotation improve computer vision models?',
        a: 'Human review layers validate edge cases and maintain interpretation consistency. This improves dataset quality and reduces errors that can affect training outcomes.',
    },
    {
        q: 'When should companies outsource video annotation operations?',
        a: 'Outsourcing becomes strategic when internal teams spend more time managing annotation than improving AI systems, or when dataset scale exceeds internal capacity.',
    },
    {
        q: 'How do annotation workflows affect deployment timelines?',
        a: 'Delayed or inconsistent annotation slows training cycles, which directly impacts product releases and feature rollouts.',
    },
    {
        q: 'Which industries benefit most from structured image and video annotation?',
        a: 'Retail analytics, autonomous mobility, industrial automation, robotics, and smart infrastructure solutions rely heavily on consistent visual data interpretation.',
    },
];

/* ── sub-components ──────────────────────────────────────────────────── */

const FAQItem: React.FC<{ faq: { q: string; a: string }; index: number }> = ({ faq, index }) => {
    const [open, setOpen] = useState(index === 0);
    return (
        <div className="reveal border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
            style={{ transitionDelay: `${index * 0.08}s` }}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between group"
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

const ImageVideoAnnotationPage: React.FC = () => {

    /* re-run scroll-reveal observer on mount */
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
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-50 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />

                <div className="max-content w-full relative z-10">
                    {/* Two-column grid: 60% text / 40% image */}
                    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">

                        {/* LEFT — badge + H1 + body + CTAs */}
                        <div>
                            <div className="reveal" style={{ transitionDelay: '0.05s' }}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                    <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Image &amp; Video Annotation</span>
                                </div>
                            </div>

                            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold tracking-tight leading-[1.07] text-slate-900 mb-6 sm:mb-8">
                                    Image and Video Annotation Operations Built for{' '}
                                    <span className="text-blue-600">Production Scale AI</span>
                                </h1>
                            </div>

                            <div className="reveal space-y-5" style={{ transitionDelay: '0.18s' }}>
                                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                                    Computer vision initiatives rarely slow down because of algorithms. They slow down because annotation workflows cannot keep up with real-world deployment demands.
                                </p>
                                <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
                                    As datasets expand, annotation standards become inconsistent, review cycles grow longer, and engineering teams spend more time fixing training data than improving models.{' '}
                                    <span className="text-blue-600 font-bold">TRANSFORM</span> delivers managed image and video annotation operations built for enterprise scale.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button
                                        onClick={scrollToContact}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-100 transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                                    >
                                        Start Your Annotation Operations Assessment
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={scrollToContact}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-bold rounded-xl transition-all text-sm sm:text-base hover:bg-blue-50"
                                    >
                                        Talk With an Annotation Strategy Specialist
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — hero image, top-aligned with H1 */}
                        <div className="reveal w-full order-last lg:order-none mt-10 lg:mt-0" style={{ transitionDelay: '0.25s' }}>
                            <img
                                src="/image video annotation/hero-image.webp"
                                alt="Enterprise image and video annotation services for computer vision AI"
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

            {/* ── SECTION 2 · WHEN ANNOTATION BECOMES A BUSINESS RISK ─────── */}
            <section className="section-spacing bg-slate-50 border-y border-slate-100">
                <div className="max-content">
                    <div className="text-center mb-12 sm:mb-16 reveal">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] block mb-3">Business Risk</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                            When Annotation Becomes a Business Risk
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Many organizations initially treat annotation as a production task. Over time it evolves into a strategic challenge that directly impacts product performance.
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
                            How TRANSFORM Solves Enterprise Annotation Challenges
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            TRANSFORM approaches annotation as a managed operations discipline rather than a simple labeling task. Every workflow is structured to support long-term AI growth.
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
                            {['Reduced dataset revision cycles', 'Improved model stability', 'Faster iteration speed for AI teams'].map((o, i) => (
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
                            Image and Video Annotation Capabilities <br className="hidden sm:block" />Designed for Production AI
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Each capability is implemented through structured workflows that prioritize data consistency and operational efficiency rather than volume-driven delivery.
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
                            Real Deployment Scenarios Enterprise Teams Face
                        </h2>
                        <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base">
                            These scenarios reflect real operational challenges faced by AI teams scaling computer vision products across North America.
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
                                Human-in-the-Loop Quality Governance
                            </h2>
                            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                                Automation alone cannot maintain annotation quality at enterprise scale. TRANSFORM integrates trained specialists with structured QA layers to ensure consistent training data delivery.
                            </p>
                            <div className="space-y-4">
                                {['Multi-stage review checkpoints', 'Annotation guideline enforcement', 'Continuous feedback loops between AI teams and annotators'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ transitionDelay: '0.15s' }}>
                            {[
                                { stat: '99%+', label: 'Annotation Accuracy' },
                                { stat: '3x', label: 'Faster QA Cycles' },
                                { stat: '500M+', label: 'Annotations Delivered' },
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
                            Why Enterprise AI Teams Choose TRANSFORM
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Enterprise buyers increasingly look for partners who can take ownership of annotation operations instead of simply providing labor.
                        </p>
                    </div>

                    <div className="reveal bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Operational Scenario</p>
                                <h3 className="font-bold text-slate-900 text-lg">Centralized Annotation Governance</h3>
                            </div>
                        </div>
                        <blockquote className="text-slate-600 text-base sm:text-lg leading-relaxed border-l-4 border-blue-100 pl-6 italic">
                            "A computer vision company experienced inconsistent bounding box standards across multiple vendors. After centralizing annotation governance under TRANSFORM, revision cycles decreased and engineering teams regained development speed."
                        </blockquote>
                        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                            {['Managed workflows aligned to product roadmaps', 'Structured QA methodologies', 'Delivery frameworks for long-term growth'].map((p, i) => (
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
                                    <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#ctaGrid)" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] block mb-4">Get Started</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5">
                                Remove Annotation Bottlenecks from Your Computer Vision Roadmap
                            </h2>
                            <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
                                If annotation workflows are slowing deployment or creating quality uncertainty, an operations assessment can identify where governance improvements and process changes will stabilize your training data pipeline.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
                                >
                                    Request Your Annotation Operations Review
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                                >
                                    Connect With a Data Operations Specialist
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
                        <p className="text-slate-500 mt-2 text-sm sm:text-base">Common questions on enterprise image and video annotation operations.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} faq={faq} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HubSpot Contact Form (reused) ─────────────────────────────── */}
            <ContactForm />

            {/* ── Footer (reused) ───────────────────────────────────────────── */}
            <Footer />
        </>
    );
};

export default ImageVideoAnnotationPage;
