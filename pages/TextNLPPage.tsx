
import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, ArrowRight, FileText, Shield, Scale, MessageSquare, Users, Brain, AlertTriangle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const painPoints = [
    {
        title: 'Semantic inconsistency reduces model reliability',
        body: 'Different annotators interpret context differently, creating noisy training data that directly affects language model accuracy and response quality.',
    },
    {
        title: 'Dataset bias introduces safety concerns',
        body: 'Without structured review workflows, annotation can unintentionally introduce bias into language models, creating downstream safety and compliance risks.',
    },
    {
        title: 'Scaling LLM training increases operational complexity',
        body: 'Large datasets require consistent labeling standards that many teams struggle to maintain internally as content volume and source diversity grows.',
    },
    {
        title: 'Engineering teams spend time correcting data instead of models',
        body: 'Manual rework of annotation errors slows experimentation, delays deployment cycles, and diverts resources from core model development.',
    },
];

const solutions = [
    {
        icon: Shield,
        title: 'Human-in-the-loop semantic governance',
        body: 'Specialists review context-sensitive annotations to maintain consistent interpretation across diverse datasets and content sources.',
    },
    {
        icon: Scale,
        title: 'Standardized annotation frameworks',
        body: 'Defined guidelines reduce ambiguity in entity recognition, sentiment analysis, and conversational labeling workflows.',
    },
    {
        icon: FileText,
        title: 'Scalable workflows for evolving language datasets',
        body: 'Processes adapt to new content sources while maintaining annotation consistency across LLM training pipelines.',
    },
];

const capabilities = [
    {
        title: 'Named Entity Recognition',
        body: 'Supporting knowledge extraction and data structuring with consistent, context-aware entity labeling across diverse text domains.',
    },
    {
        title: 'Intent Classification & Sentiment Labeling',
        body: 'Improving conversational AI and customer interaction models with precise semantic categorization at scale.',
    },
    {
        title: 'Content Moderation Annotation',
        body: 'Enhancing AI safety and policy compliance workflows with structured human review for harmful or ambiguous content.',
    },
    {
        title: 'Dialogue & Conversational Annotation',
        body: 'Supporting chatbot and virtual assistant training with turn-level semantic labeling and conversational context mapping.',
    },
];

const deploymentScenarios = [
    {
        icon: Brain,
        industry: 'LLM Development',
        body: 'LLM developers training conversational models often face inconsistent intent labeling across datasets. Structured annotation workflows improve response accuracy and reduce retraining cycles.',
    },
    {
        icon: MessageSquare,
        industry: 'Customer Support Automation',
        body: 'Customer support automation platforms rely on sentiment and intent annotation to enhance chatbot performance. Consistent semantic labeling improves user experience and reduces escalation rates.',
    },
    {
        icon: AlertTriangle,
        industry: 'AI Safety & Compliance',
        body: 'AI safety teams require precise content moderation datasets. Human-in-the-loop review ensures policy alignment and reduces risk in production environments.',
    },
];

const faqs = [
    {
        q: 'What is text and NLP annotation in enterprise AI?',
        a: 'Text annotation involves labeling language data such as entities, sentiment, or intent to train AI models that understand and generate human language.',
    },
    {
        q: 'Why is human-in-the-loop important for LLM training data?',
        a: 'Human oversight ensures consistent interpretation of context and nuance, improving semantic accuracy and reducing bias that automated tools cannot reliably detect.',
    },
    {
        q: 'When should companies outsource NLP annotation operations?',
        a: 'Outsourcing becomes strategic when dataset scale grows rapidly or when maintaining consistent annotation quality internally becomes difficult.',
    },
    {
        q: 'How does annotation affect LLM performance?',
        a: 'High-quality labeled datasets improve model understanding, reduce hallucination risk, and enhance response accuracy across diverse prompts and domains.',
    },
    {
        q: 'Which industries benefit most from NLP annotation services?',
        a: 'Conversational AI platforms, customer support automation, AI safety teams, enterprise SaaS companies, and data analytics platforms rely heavily on structured NLP annotation workflows.',
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

const TextNLPPage: React.FC = () => {
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
            <section className="relative min-h-[80vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="nlpGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#nlpGrid)" />
                    </svg>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-50 opacity-60 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />

                <div className="max-content w-full relative z-10">
                    <div className="max-w-3xl">
                        <div className="reveal" style={{ transitionDelay: '0.05s' }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Text &amp; NLP Annotation</span>
                            </div>
                        </div>
                        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900 mb-6 sm:mb-8">
                                Text and NLP Annotation Operations Built for{' '}
                                <span className="text-blue-600">Scalable Language AI</span>
                            </h1>
                        </div>
                        <div className="reveal space-y-6" style={{ transitionDelay: '0.2s' }}>
                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                                Language AI models depend on high-quality text datasets, but scaling annotation across diverse content sources often introduces inconsistency, bias, and operational complexity.
                            </p>
                            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
                                As LLM training datasets grow, semantic interpretation becomes harder to standardize. What begins as a manageable workflow quickly evolves into a bottleneck that slows model improvement.{' '}
                                <span className="text-blue-600 font-bold">TRANSFORM</span> provides managed text and NLP annotation operations designed to support enterprise language AI through structured governance, human-in-the-loop validation, and scalable delivery.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-100 transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                                >
                                    Start Your NLP Annotation Assessment
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-bold rounded-xl transition-all text-sm sm:text-base hover:bg-blue-50"
                                >
                                    Talk With a Language Data Specialist
                                </button>
                            </div>
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
                            When Text Annotation Becomes a Strategic Risk
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Annotation challenges in language AI are rarely obvious at first but have significant long-term impact on model performance.
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
                            How TRANSFORM Solves Enterprise NLP Annotation Challenges
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            TRANSFORM approaches language annotation as a managed operations discipline focused on semantic precision and AI safety.
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
                            {['Higher quality training data', 'Reduced bias risk', 'Faster model iteration cycles'].map((o, i) => (
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
                            Text and NLP Annotation Capabilities <br className="hidden sm:block" />Designed for Language AI
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Each workflow integrates structured QA governance to maintain semantic accuracy at scale.
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
                            Real Deployment Scenarios in Language AI
                        </h2>
                        <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base">
                            These examples reflect common operational challenges faced by US-based language AI companies.
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
                                Human-in-the-Loop Quality Governance for Language Data
                            </h2>
                            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                                Automation can accelerate annotation but cannot fully interpret context, nuance, or evolving language patterns. TRANSFORM integrates expert review layers that maintain semantic consistency and AI safety standards.
                            </p>
                            <div className="space-y-4 mb-8">
                                {['Multi-stage semantic QA reviews', 'Clear annotation guidelines', 'Continuous feedback loops between AI teams and annotators'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Executive Impact</p>
                                <div className="space-y-2">
                                    {['Improved language model performance', 'Reduced bias and safety risk', 'Predictable training data delivery timelines'].map((item, i) => (
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
                                { stat: '99%+', label: 'Semantic Accuracy Rate' },
                                { stat: '10+', label: 'Languages Supported' },
                                { stat: '500M+', label: 'Text Samples Labeled' },
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
                            Why Enterprise Language AI Teams Choose TRANSFORM
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
                            Language AI leaders increasingly seek partners who understand the complexity of semantic data operations rather than traditional outsourcing vendors.
                        </p>
                    </div>
                    <div className="reveal bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Operational Scenario</p>
                                <h3 className="font-bold text-slate-900 text-lg">Structured NLP Annotation Governance</h3>
                            </div>
                        </div>
                        <blockquote className="text-slate-600 text-base sm:text-lg leading-relaxed border-l-4 border-blue-100 pl-6 italic">
                            "A conversational AI company experienced inconsistent entity recognition across multiple vendors. After implementing structured annotation governance, dataset accuracy improved and model fine-tuning cycles accelerated."
                        </blockquote>
                        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                            {['Managed workflows aligned to LLM roadmaps', 'Structured semantic QA methodologies', 'Scalable delivery with consistency guarantee'].map((p, i) => (
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
                                    <pattern id="nlpCtaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#nlpCtaGrid)" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] block mb-4">Get Started</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5">
                                Strengthen the Foundation of Your Language AI Models
                            </h2>
                            <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
                                If text annotation workflows are creating inconsistencies or slowing LLM training cycles, an operations assessment can identify governance improvements that stabilize your data pipeline.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
                                >
                                    Request Your NLP Annotation Review
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                                >
                                    Connect With a Language Data Operations Specialist
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
                        <p className="text-slate-500 mt-2 text-sm sm:text-base">Common questions on enterprise text and NLP annotation.</p>
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

export default TextNLPPage;
