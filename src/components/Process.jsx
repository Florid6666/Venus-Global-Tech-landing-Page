import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Compass, Code, Rocket } from 'lucide-react';

export default function Process({ onOpenModal }) {
  const steps = [
    {
      num: '01',
      icon: <Compass className="w-6 h-6 text-[#5B5BF6]" />,
      title: 'Discovery & Strategy',
      desc: 'Understanding vision, goals, and target audience to build a comprehensive roadmap aligned with business objectives.',
      tags: ['Vision Mapping', 'Target Analysis', 'Architecture Blueprints']
    },
    {
      num: '02',
      icon: <Code className="w-6 h-6 text-[#8B5CF6]" />,
      title: 'Design & Development',
      desc: 'Creating modern, user-centric designs and building robust, scalable solutions using state-of-the-art tech stacks.',
      tags: ['UI/UX Design', 'Cloud Engine', 'AI Integration']
    },
    {
      num: '03',
      icon: <Rocket className="w-6 h-6 text-[#FF6B4A]" />,
      title: 'Launch & Optimize',
      desc: 'Launching with precision engineering, real-time monitoring, and continuously optimizing for long-term impact.',
      tags: ['Zero-Downtime Deploy', 'Realtime Analytics', '24/7 SLA']
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#0B0F19] relative border-t border-white/10">
      <div className="max-w-[1260px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[#8B5CF6]/30 text-xs font-heading font-extrabold uppercase tracking-widest text-[#A5B4FC] mb-4">
              <Sliders className="w-3.5 h-3.5" /> Working Process
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
              Explore Our 3 Step <br />
              Working Process
            </h2>
            <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
              We follow a streamlined, agile methodology designed to maximize efficiency, quality, and business return.
            </p>
            <button 
              onClick={onOpenModal}
              className="px-8 py-4 rounded-full bg-white text-[#05050A] font-heading font-bold text-sm hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
            >
              Start Projects
            </button>
          </div>

          {/* Right Column: Connected Timeline Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative">
            
            {/* Connected Animated Glowing Path Line */}
            <div className="hidden sm:block absolute left-9 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#5B5BF6] via-[#8B5CF6] to-[#FF6B4A] opacity-40"></div>

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl relative z-10 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-white/20">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {step.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-[#A5B4FC]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
