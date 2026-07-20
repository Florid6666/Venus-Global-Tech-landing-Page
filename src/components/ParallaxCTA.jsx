import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

export default function ParallaxCTA({ onOpenModal }) {
  return (
    <section id="cta" className="py-28 bg-[#0B0E14] bg-starfield text-white relative overflow-hidden border-b border-gray-800">
      
      {/* Soft Nebula Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#D8235C]/20 via-[#8B5CF6]/15 to-[#5B5BF6]/20 blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-heading font-extrabold uppercase tracking-widest text-white mb-6 shadow-xl"
        >
          <Rocket className="w-3.5 h-3.5 text-[#D8235C]" /> Ready To Scale Your Enterprise?
        </motion.div>

        {/* Prominent Centered White Typography */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight mb-6"
        >
          Build Your Agentic AI & Cloud Future <span className="gradient-text-white">With Venus Global</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 font-normal"
        >
          Schedule a 1-on-1 strategic architecture consultation with our principal AI engineers and compliance leads today.
        </motion.p>

        {/* Bright Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={onOpenModal}
            className="px-10 py-5 rounded-full bg-[#D8235C] text-white hover:bg-[#B81B4B] font-heading font-extrabold text-sm uppercase tracking-wider shadow-[0_0_40px_rgba(216,35,92,0.6)] hover:shadow-[0_0_60px_rgba(216,35,92,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5" /> Book Strategy Call <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
