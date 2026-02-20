
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import SolutionOverview from './components/SolutionOverview';
import PainCards from './components/PainCards';
import Workflow from './components/Workflow';
import ServicesGrid from './components/ServicesGrid';
import CaseStudies from './components/CaseStudies';
import Authority from './components/Authority';
import ToolsGrid from './components/ToolsGrid';
import Conversion from './components/Conversion';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ImageVideoAnnotationPage from './pages/ImageVideoAnnotationPage';
import LiDARAnnotationPage from './pages/LiDARAnnotationPage';

const globalStyles = `
  .reveal {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
    will-change: opacity, transform;
  }
  .reveal-active {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .max-content {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 1024px) {
    .max-content {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
  .section-spacing {
    margin-top: 56px;
    margin-bottom: 56px;
  }
  @media (min-width: 768px) {
    .section-spacing {
      margin-top: 72px;
      margin-bottom: 72px;
    }
  }
  @media (min-width: 1024px) {
    .section-spacing {
      margin-top: 120px;
      margin-bottom: 120px;
    }
  }
  .text-readable {
    max-width: 75ch;
    line-height: 1.6;
  }
`;

const useRevealObserver = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const HomePage: React.FC = () => {
  useRevealObserver();
  return (
    <>
      <Hero />
      <TrustStrip />
      <SolutionOverview />
      {/* <PainCards /> */}
      <Workflow />
      <ServicesGrid />
      <CaseStudies />
      <Authority />
      <ToolsGrid />
      <Conversion />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <style>{globalStyles}</style>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/image-video-annotation" element={<ImageVideoAnnotationPage />} />
        <Route path="/services/lidar-sensor-annotation" element={<LiDARAnnotationPage />} />
      </Routes>
    </div>
  );
};

export default App;
