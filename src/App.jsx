import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Marquee from './components/Marquee';
import CTA from './components/CTA';
import Locations from './components/Locations';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { CheckCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-[#05050A] text-[#F8FAFC] relative">
      {/* Noise Texture Background Overlay */}
      <div className="noise-overlay"></div>

      {/* Navigation Header */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* Page Sections */}
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <About onOpenModal={() => setModalOpen(true)} />
        <Services onOpenModal={() => setModalOpen(true)} />
        <Process onOpenModal={() => setModalOpen(true)} />
        <Marquee />
        <Locations showToast={showToast} />
        <CTA onOpenModal={() => setModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={() => setModalOpen(true)} />

      {/* Modal Dialog */}
      <QuoteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        showToast={showToast}
      />

      {/* Toast Notification Container */}
      {toastShow && (
        <div className="fixed bottom-8 right-8 z-[3000] px-6 py-4 rounded-full bg-[#0B0F19] border border-[#5B5BF6] text-white font-heading font-bold text-sm shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle className="w-5 h-5 text-[#2EE6A6]" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
