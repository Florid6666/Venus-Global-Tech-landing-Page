import React from 'react';
import { motion } from 'framer-motion';
import { Users, FolderOpen, Briefcase, Trophy, Phone, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function About({ onOpenModal }) {
  return (
    <section id="about" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/10">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#5B5BF6]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1260px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[#FF6B4A]/30 text-xs font-heading font-extrabold uppercase tracking-widest text-[#FF6B4A] mb-4">
            <Users className="w-3.5 h-3.5" /> About Us
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Who We Are. Learn About us
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: 3D Tilting Card Frame with Animated '15+' */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden glass-panel border-white/15 p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#1E1B4B] flex flex-col items-center justify-center p-6 text-center shadow-inner group-hover:border-[#5B5BF6]/40 transition-colors">
                
                {/* Ambient Pulsing Glow Aura */}
                <div className="absolute w-52 h-52 rounded-full bg-gradient-to-r from-[#5B5BF6]/30 via-[#8B5CF6]/20 to-[#2EE6A6]/25 blur-[50px] animate-pulse"></div>

                {/* Rotating Cyber Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-56 h-56 rounded-full border border-dashed border-[#7C5CFF]/30 pointer-events-none"
                ></motion.div>

                {/* Floating Sparkle Nodes */}
                <motion.div 
                  animate={{ y: [-6, 6, -6], x: [-3, 3, -3] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-8 w-2.5 h-2.5 rounded-full bg-[#2EE6A6] shadow-[0_0_12px_#2EE6A6]"
                ></motion.div>

                <motion.div 
                  animate={{ y: [6, -6, 6], x: [3, -3, 3] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-[#FF6B4A] shadow-[0_0_15px_#FF6B4A]"
                ></motion.div>

                {/* Main Animated '15+' Text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center justify-center select-none"
                >
                  <motion.span 
                    animate={{ 
                      y: [-4, 4, -4],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="font-heading font-extrabold text-7xl sm:text-8xl lg:text-[100px] leading-none tracking-tight bg-gradient-to-r from-[#FFFFFF] via-[#A5B4FC] to-[#5B5BF6] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(91,91,246,0.7)]"
                  >
                    15+
                  </motion.span>

                  {/* Glowing Sub-caption Badge */}
                  <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#7C5CFF]/40 text-[11px] font-heading font-extrabold uppercase tracking-widest text-[#A5B4FC] shadow-[0_0_15px_rgba(124,92,255,0.3)]">
                    <Sparkles className="w-3.5 h-3.5 text-[#2EE6A6]" />
                    Years of Innovation
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Top Floating Badge */}
            <div className="absolute -top-6 -right-4 glass-panel border-white/20 px-5 py-3 rounded-full flex items-center gap-3 shadow-2xl">
              <Award className="w-5 h-5 text-[#FF6B4A]" />
              <span className="font-heading font-bold text-xs text-white">500+ Projects Shipped</span>
            </div>

            {/* Bottom Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-4 bg-[#05050A] border border-white/15 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B5BF6] to-[#8B5CF6] flex items-center justify-center text-white shadow-[0_0_15px_rgba(91,91,246,0.5)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white leading-tight">
                Global Tech<br />Excellence
              </span>
            </div>
          </div>

          {/* Right Column: 2x2 Stat Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Stat Card 1 */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover p-7 rounded-2xl flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#5B5BF6]">
                <FolderOpen className="w-6 h-6" />
              </div>
              <span className="font-heading font-extrabold text-4xl text-white">10+</span>
              <span className="text-sm font-semibold text-[#94A3B8]">We deliver great work always</span>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover p-7 rounded-2xl flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8B5CF6]">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="font-heading font-extrabold text-4xl text-white">16+</span>
              <span className="text-sm font-semibold text-[#94A3B8]">Experience you can count on</span>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover p-7 rounded-2xl flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B4A]">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="font-heading font-extrabold text-4xl text-white">2</span>
              <span className="text-sm font-semibold text-[#94A3B8]">Award-Winning Work</span>
            </motion.div>

            {/* Stat Card 4 */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover p-7 rounded-2xl flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2EE6A6]">
                <Users className="w-6 h-6" />
              </div>
              <span className="font-heading font-extrabold text-4xl text-white">100+</span>
              <span className="text-sm font-semibold text-[#94A3B8]">We have happy Clients worldwide</span>
            </motion.div>

          </div>

        </div>

        {/* Bottom Action Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
          <button 
            onClick={onOpenModal}
            className="px-8 py-4 rounded-full bg-white text-[#05050A] font-heading font-bold text-sm hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            More About Us
          </button>

          <div className="flex items-center gap-4">
            <a href="tel:6477220837" className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5B5BF6] to-[#FF6B4A] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </a>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">Get Free Quote</span>
              <a href="tel:6477220837" className="font-heading font-extrabold text-base text-white hover:text-[#5B5BF6] transition-colors">
                647-722-0837
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
