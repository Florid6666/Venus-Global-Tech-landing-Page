import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Network, ChevronDown } from 'lucide-react';
import Hero3DScene from './3d/Hero3DScene';
import ErrorBoundary from './ErrorBoundary';

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-dot-matrix">
      
      {/* Background Aurora Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#5B5BF6]/20 via-[#8B5CF6]/15 to-[#FF6B4A]/10 rounded-full blur-[100px] pointer-events-none aurora-blob"></div>

      <div className="max-w-[1260px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[#7C5CFF]/30 text-xs font-heading font-extrabold uppercase tracking-widest text-[#A5B4FC] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2EE6A6] animate-pulse shadow-[0_0_10px_#2EE6A6]"></span>
              AGENTIC AI & ENTERPRISE COMPLIANCE 2.0
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6">
              Driving Growth Through <br className="hidden sm:inline" />
              <span className="gradient-text">Technology, Compliance</span> <br />
              & Innovation
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed mb-8">
              Empowering global enterprises with cutting-edge Agentic AI, cloud architecture, and end-to-end digital transformation tailored to achieve sustainable business excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button 
                onClick={onOpenModal}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-[#5B5BF6] via-[#8B5CF6] to-[#FF6B4A] text-white font-heading font-bold text-sm tracking-wide shadow-[0_10px_35px_rgba(124,92,255,0.4)] hover:shadow-[0_15px_45px_rgba(124,92,255,0.6)] hover:scale-[1.03] transition-all duration-300 flex items-center gap-3"
              >
                Schedule Strategy Call <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="#services"
                className="px-7 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-heading font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2"
              >
                Explore Platform <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Bar Metrics */}
            <div className="w-full pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs sm:text-sm font-heading font-semibold text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5B5BF6]" /> 100% Audit Verified
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FF6B4A]" /> 24/7 Agentic AI
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-[#2EE6A6]" /> Multi-Cloud Scale
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Scene */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]"
          >
            <ErrorBoundary fallback={
              <div className="w-full h-[400px] glass-panel rounded-3xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#5B5BF6] to-[#FF6B4A] animate-pulse blur-md absolute"></div>
                <img src="/assets/images/logo.png" alt="Venus Global Logo" className="w-20 h-20 relative z-10 drop-shadow-[0_0_20px_#5B5BF6]" />
                <span className="mt-4 font-heading font-bold text-lg text-white relative z-10">Venus Global Core</span>
              </div>
            }>
              <Hero3DScene />
            </ErrorBoundary>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
