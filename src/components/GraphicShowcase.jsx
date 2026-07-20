import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Zap, Shield } from 'lucide-react';

export default function GraphicShowcase({ onOpenModal }) {
  return (
    <section className="py-24 bg-white text-[#1A1D20] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: High-Contrast Black Typography, Descriptive Text, Action Button */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1D20] text-white font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
              <Smartphone className="w-3.5 h-3.5 text-[#D8235C]" /> Mobile First Enterprise
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1D20] leading-tight tracking-tight mb-6">
              Command Your Entire Operation From <span className="text-[#D8235C]">Any Device</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Monitor live compliance audits, review automated AI agent logs, and trigger multi-cloud failovers instantly from our high-performance mobile application suite. Designed for executives on the move.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-9 w-full">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#D8235C]" />
                <span className="text-xs font-bold text-[#1A1D20]">Instant Telemetry Sync</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#D8235C]" />
                <span className="text-xs font-bold text-[#1A1D20]">Biometric Auth Guard</span>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="px-8 py-4 rounded-full bg-[#D8235C] text-white hover:bg-[#B81B4B] font-heading font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              Explore App Experience <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Side: Layered, Stylized Smartphone Product Mockups Tilted Dynamically */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[450px]"
          >
            {/* Background Radial Glow */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-[#D8235C]/15 blur-3xl -z-10"></div>

            {/* Back Smartphone Mockup (Tilted -12deg) */}
            <motion.div 
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-4 w-[240px] sm:w-[270px] h-[460px] rounded-[36px] bg-[#1A1D20] p-3 shadow-2xl border-4 border-gray-800 -rotate-12 z-0 opacity-80 scale-95"
            >
              <div className="w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-gray-900 to-black p-4 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center text-xs font-bold text-gray-400 border-b border-gray-800 pb-2">
                  <span>9:41 AM</span>
                  <span className="text-[#D8235C]">LIVE AUDIT</span>
                </div>
                <div className="space-y-3">
                  <div className="h-16 rounded-xl bg-gray-800/80 p-3">
                    <div className="w-20 h-3 rounded bg-gray-600 mb-1"></div>
                    <div className="w-32 h-2 rounded bg-gray-700"></div>
                  </div>
                  <div className="h-16 rounded-xl bg-gray-800/80 p-3">
                    <div className="w-24 h-3 rounded bg-[#D8235C] mb-1"></div>
                    <div className="w-28 h-2 rounded bg-gray-700"></div>
                  </div>
                </div>
                <div className="text-[10px] text-gray-500 text-center">Venus Global Mobile v2.4</div>
              </div>
            </motion.div>

            {/* Front Smartphone Mockup (Tilted +8deg, Elevated) */}
            <motion.div 
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative right-0 w-[250px] sm:w-[280px] h-[480px] rounded-[40px] bg-[#1A1D20] p-3 shadow-2xl border-4 border-[#D8235C]/80 rotate-6 z-10"
            >
              <div className="w-full h-full rounded-[30px] overflow-hidden bg-gradient-to-b from-[#24282D] to-[#1A1D20] p-5 flex flex-col justify-between text-white">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-xs font-bold text-gray-300">
                  <span>Venus AI</span>
                  <span className="w-2 h-2 rounded-full bg-[#D8235C] animate-pulse"></span>
                </div>

                {/* Dashboard Graphic */}
                <div className="space-y-4 my-auto">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Active System Telemetry</span>
                    <span className="font-heading font-extrabold text-2xl text-white">100% Operational</span>
                    <span className="text-xs text-[#D8235C] font-semibold">↑ 24.8% Efficiency</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#D8235C] to-[#B81B4B] text-white flex justify-between items-center shadow-lg">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold opacity-80">Agentic AI Workflows</span>
                      <span className="font-heading font-extrabold text-lg">1,420 Active</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                      →
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-gray-400 text-center font-semibold">Protected by IATF 16949 Encryption</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
