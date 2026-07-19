import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Aurora3DCanvas from './3d/Aurora3DCanvas';
import ErrorBoundary from './ErrorBoundary';

export default function CTA({ onOpenModal }) {
  return (
    <section id="cta" className="py-24 bg-[#05050A] relative overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-6 relative z-10">
        
        {/* Dark 3D Aurora Card */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border-white/20 p-12 sm:p-20 text-center shadow-2xl flex flex-col items-center justify-center">
          
          {/* 3D Aurora Mesh Backdrop */}
          <ErrorBoundary fallback={null}>
            <Aurora3DCanvas />
          </ErrorBoundary>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-sm sm:text-base font-semibold text-[#A5B4FC] tracking-wide mb-3">
              Have a project in mind? Just let us know!
            </span>

            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-8">
              Let's Talk
            </h2>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenModal}
              className="px-9 py-5 rounded-full bg-gradient-to-r from-[#5B5BF6] via-[#8B5CF6] to-[#FF6B4A] text-white font-heading font-bold text-base shadow-[0_0_40px_rgba(124,92,255,0.6)] hover:shadow-[0_0_60px_rgba(124,92,255,0.8)] transition-all flex items-center gap-3"
            >
              Connect With Us <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
