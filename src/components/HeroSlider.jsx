import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: 'AGENTIC AI & ENTERPRISE COMPLIANCE 2.0',
    title: 'Driving Digital Innovation Through Technology & Intelligence',
    description: 'Empowering global enterprises with cutting-edge Agentic AI, multi-cloud architecture, and end-to-end digital transformation.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85',
    cta: 'Schedule Strategy Call',
  },
  {
    id: 2,
    badge: 'SCALABLE CLOUD ARCHITECTURE',
    title: 'Transforming Ideas into Extraordinary Digital Experiences',
    description: 'Custom software engineering and automated compliance audit frameworks tailored for sustainable business growth.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=85',
    cta: 'Explore Our Platform',
  },
  {
    id: 3,
    badge: '15+ YEARS OF GLOBAL EXCELLENCE',
    title: 'Pioneering Next-Gen Enterprise Software & Growth',
    description: 'Delivering end-to-end cloud infrastructure, AI solutions, and automated audit verification across North America.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=85',
    cta: 'Discover Solutions',
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.4,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0.4,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  }),
};

export default function HeroSlider({ onOpenModal }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = Math.abs(page % slides.length);
  const active = slides[slideIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Automatic slide transition every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section id="home" className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-[#1A1D20]">
      {/* Background Image Carousel (Crisp, Clear Images with Slate/Gray Gradient Vignette) */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${active.image})` }}
        >
          {/* Subtle Dark Slate & Cool Gray Gradient Overlay for Maximum Image Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D20]/90 via-[#1A1D20]/60 to-[#1A1D20]/75"></div>
          <div className="absolute inset-0 bg-radial-vignette opacity-40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Centered White Typography & Action Buttons */}
      <div className="relative z-10 max-w-[1020px] mx-auto px-6 text-center flex flex-col items-center pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Status Pill Badge with Gray & Raspberry Accent */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#24282D]/90 border border-gray-700 text-xs font-heading font-extrabold uppercase tracking-widest text-white mb-6 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#D8235C] animate-pulse shadow-[0_0_8px_#D8235C]"></span>
              <span className="text-gray-200">{active.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 max-w-4xl drop-shadow-md">
              {active.title}
            </h1>

            {/* Concise Description */}
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 font-normal drop-shadow">
              {active.description}
            </p>

            {/* CTA Buttons - Balanced White, Raspberry, & Dark Slate Gray */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 rounded-full bg-[#D8235C] text-white hover:bg-[#B81B4B] font-heading font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
              >
                {active.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#about"
                className="px-8 py-4 rounded-full bg-[#24282D]/90 border border-gray-700 text-white hover:bg-gray-800 font-heading font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#D8235C]" /> Learn About Us
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slim Horizontal Arrow Navigation on Left & Right Borders */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1D20]/80 hover:bg-[#D8235C] border border-gray-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1D20]/80 hover:bg-[#D8235C] border border-gray-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center-Bottom Dot Pagination Indicators & Timer Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > slideIndex ? 1 : -1])}
              className={`transition-all duration-300 rounded-full ${
                slideIndex === idx
                  ? 'w-10 h-3 bg-[#D8235C] shadow-[0_0_12px_#D8235C]'
                  : 'w-3 h-3 bg-gray-500/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
