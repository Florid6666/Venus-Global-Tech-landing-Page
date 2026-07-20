import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function MediaTextBlock({ onOpenModal }) {
  return (
    <section className="py-24 bg-white text-[#1A1D20] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Off-Center Headline & Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8235C]/10 text-[#D8235C] font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
              Pioneering Enterprise Tech
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1D20] leading-tight tracking-tight mb-6">
              Engineering Intelligent Systems That <span className="text-[#D8235C]">Drive Business Forward</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              We fuse human creativity with autonomous Agentic AI to architect cloud systems that scale seamlessly. From automated IATF compliance audits to real-time data pipelines, our solutions are built for speed and security.
            </p>

            {/* Value Bullet Points */}
            <div className="space-y-4 mb-9 w-full">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D8235C] flex-shrink-0" />
                <span className="text-sm font-bold text-[#1A1D20]">Autonomous AI Agents tailored for high-volume enterprise compliance.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D8235C] flex-shrink-0" />
                <span className="text-sm font-bold text-[#1A1D20]">Multi-cloud infrastructure with zero-downtime reliability guarantees.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D8235C] flex-shrink-0" />
                <span className="text-sm font-bold text-[#1A1D20]">End-to-end digital transformation strategy and execution.</span>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="px-7 py-3.5 rounded-full bg-[#1A1D20] text-white hover:bg-[#D8235C] font-heading font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Column: Isolated Cutout Transparent PNG Graphic Focal Point */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Soft Background Accent Circle */}
            <div className="absolute w-[340px] h-[340px] rounded-full bg-[#D8235C]/10 blur-3xl -z-10"></div>
            
            <div className="relative p-6 rounded-3xl bg-gray-50 border border-gray-100 shadow-xl group hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Digital Transformation Graphic Focal Point"
                className="w-full max-w-[480px] rounded-2xl object-cover shadow-md group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Accent Graphic Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#1A1D20] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-[#D8235C] flex items-center justify-center font-bold text-white text-lg">
                  99%
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-xs">Efficiency Boost</span>
                  <span className="text-[10px] text-gray-400">Verified Audit Results</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
