import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import FloatingWidget from './components/FloatingWidget';
import HeroSlider from './components/HeroSlider';
import MediaTextBlock from './components/MediaTextBlock';
import FeatureGrid from './components/FeatureGrid';
import GraphicShowcase from './components/GraphicShowcase';
import StatsBlock from './components/StatsBlock';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import TeamGrid from './components/TeamGrid';
import MasonryPortfolio from './components/MasonryPortfolio';
import InteractiveTabs from './components/InteractiveTabs';
import ParallaxCTA from './components/ParallaxCTA';
import BlogCards from './components/BlogCards';
import Locations from './components/Locations';
import ClientMarquee from './components/ClientMarquee';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastShow, setToastShow] = useState(false);

  // Initialize Lenis Smooth Inertia Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setToastShow(true);
    setTimeout(() => setToastShow(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1D20] relative font-body selection:bg-[#D8235C] selection:text-white">
      
      {/* Sticky White Header Navigation */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* Fixed Vertical Floating Right Widget Bar */}
      <FloatingWidget onOpenModal={() => setModalOpen(true)} />

      {/* Sequential Layout Sections */}
      <main>
        {/* Section 1: Hero Image Carousel Slider */}
        <HeroSlider onOpenModal={() => setModalOpen(true)} />

        {/* Section 2: Split Media & Text Block (White Background) */}
        <MediaTextBlock onOpenModal={() => setModalOpen(true)} />

        {/* Section 3: Feature Grid (Dark Slate Theme) */}
        <FeatureGrid />

        {/* Section 4: Split Graphic Showcase */}
        <GraphicShowcase onOpenModal={() => setModalOpen(true)} />

        {/* Section 5: Metric Counters & Stats Block */}
        <StatsBlock />

        {/* Section 6: Customer Testimonials Carousel (Dark Slate Theme) */}
        <TestimonialsCarousel />

        {/* Section 7: Team Member Profile Grid */}
        <TeamGrid />

        {/* Section 8: Masonry Visual Portfolio */}
        <MasonryPortfolio />

        {/* Section 9: Feature Tabs / Interactive List */}
        <InteractiveTabs onOpenModal={() => setModalOpen(true)} />

        {/* Section 10: Call to Action (Parallax Space Theme) */}
        <ParallaxCTA onOpenModal={() => setModalOpen(true)} />

        {/* Section 11: Recent Blog Cards */}
        <BlogCards onOpenModal={() => setModalOpen(true)} />

        {/* Global Locations Section (Toronto, Michigan, India Hubs) */}
        <Locations showToast={showToast} />

        {/* Section 12: Client Logo Marquee */}
        <ClientMarquee />
      </main>

      {/* Footer Layout (Dark Slate 4 Columns) */}
      <Footer onOpenModal={() => setModalOpen(true)} />

      {/* Modal Dialog */}
      <QuoteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        showToast={showToast}
      />

      {/* Toast Notification Container */}
      {toastShow && (
        <div className="fixed bottom-8 right-8 z-[3000] px-6 py-3.5 rounded-full bg-[#1A1D20] text-white font-heading font-bold text-xs shadow-2xl flex items-center gap-3 animate-bounce border border-[#D8235C]">
          <CheckCircle2 className="w-4 h-4 text-[#D8235C]" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
