import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Cloud, Flame, BarChart3, Lock } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Agentic AI Automation',
    description: 'Self-improving AI workflows that automatically execute complex business routines with full audit logs.',
  },
  {
    icon: ShieldCheck,
    title: 'IATF 16949 Compliance',
    description: 'Comprehensive compliance verification and continuous automotive quality management software.',
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud Scale',
    description: 'Resilient cloud architecture deployed across AWS, Azure, and Google Cloud with instant failovers.',
  },
  {
    icon: Flame,
    title: 'Rapid Engineering',
    description: 'Agile software delivery cycles with 100% automated testing pipelines and zero regression risk.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Enterprise telemetry dashboard offering predictive insights and live operational health metrics.',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Security',
    description: 'Military-grade end-to-end encryption, strict role-based access control, and identity defense.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="services" className="py-24 bg-[#1A1D20] text-white relative overflow-hidden border-b border-gray-800">
      
      {/* Soft Background Accent Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#D8235C]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-heading font-extrabold uppercase tracking-widest text-[#D8235C] mb-4">
            Core Capabilities
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Built For Enterprise Performance & Scale
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Our suite of technological solutions equips modern enterprises with unmatched speed, security, and intelligence.
          </p>
        </div>

        {/* 3-Column, 2-Row Minimalist Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#24282D] border border-gray-800 hover:border-[#D8235C]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start"
              >
                {/* Small Stylized White Line-Art Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-[#D8235C] group-hover:border-[#D8235C] transition-colors duration-300 mb-6">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Bold White Sub-Heading */}
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Short Gray Body Text */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
