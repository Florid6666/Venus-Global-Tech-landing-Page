import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  [
    {
      id: 1,
      quote: "Venus Global transformed our compliance framework completely. Their Agentic AI tools cut our audit preparation cycles from weeks to just hours.",
      name: "Marcus Vance",
      role: "VP of Engineering, AutoTech Corp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      quote: "The multi-cloud reliability and real-time telemetry give our executive team complete confidence during high-traffic enterprise deployment events.",
      name: "Sophia Chen",
      role: "Chief Technology Officer, Nexus Logistics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      quote: "Exceptional speed, bulletproof security, and outstanding technical communication throughout our entire digital transformation initiative.",
      name: "David Miller",
      role: "Director of Systems, Global Manufacturing",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ],
  [
    {
      id: 4,
      quote: "Their IATF compliance audit software is second to none. We passed our zero-defect verification seamlessly across 14 manufacturing facilities.",
      name: "Elena Rostova",
      role: "Quality Systems Lead, Global Dynamics",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 5,
      quote: "The level of engineering skill and rapid delivery delivered by the Venus Global team exceeded every enterprise benchmark we set.",
      name: "Robert Harrison",
      role: "Head of Infrastructure, CloudScale Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 6,
      quote: "Partnering with Venus Global gave us the competitive edge we needed to launch our AI-driven analytics suite 6 months ahead of schedule.",
      name: "Amara Johnson",
      role: "Chief Product Officer, OmniTech Labs",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
  ],
];

export default function TestimonialsCarousel() {
  const [activeSet, setActiveSet] = useState(0);

  const prevSet = () => {
    setActiveSet((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSet = () => {
    setActiveSet((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#1A1D20] text-white relative overflow-hidden border-b border-gray-800">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D8235C]/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Centered Headline Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-heading font-extrabold uppercase tracking-widest text-[#D8235C] mb-4">
            Client Testimonials
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Trusted By Industry Leaders Worldwide
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            See how our technology solutions transform business performance for enterprise clients.
          </p>
        </div>

        {/* Grid of 3 Elevated Card Containers */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSet}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {testimonials[activeSet].map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-[#24282D] border border-gray-800 shadow-xl flex flex-col justify-between hover:border-[#D8235C]/50 hover:shadow-2xl transition-all duration-300 relative group"
              >
                <Quote className="w-10 h-10 text-[#D8235C]/30 mb-4 group-hover:text-[#D8235C]/60 transition-colors" />

                {/* White Paragraph Text */}
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  "{item.quote}"
                </p>

                {/* Inline Small Circular Headshot + Name & Role Sub-labels */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80">
                  <img 
                    src={item.avatar} 
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D8235C]"
                  />
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-sm text-white">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Arrow & Dot Navigation Underneath */}
        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={prevSet}
            className="w-10 h-10 rounded-full bg-[#24282D] hover:bg-[#D8235C] border border-gray-700 text-white flex items-center justify-center transition-colors"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSet(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeSet === idx ? 'w-8 h-3 bg-[#D8235C]' : 'w-3 h-3 bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSet}
            className="w-10 h-10 rounded-full bg-[#24282D] hover:bg-[#D8235C] border border-gray-700 text-white flex items-center justify-center transition-colors"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
