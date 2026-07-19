import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, ArrowUpRight } from 'lucide-react';
import Service3DGeometries from './3d/Service3DGeometries';
import ErrorBoundary from './ErrorBoundary';

export default function Services({ onOpenModal }) {
  const servicesList = [
    {
      num: '01',
      title: 'Software Development & Data AI',
      desc: 'Custom enterprise software platforms, automated data processing, and predictive machine learning models.',
      type: 'software',
      bgImage: '/assets/images/bento-software.png',
      span: 'col-span-1 md:col-span-2'
    },
    {
      num: '02',
      title: 'Agentic AI Solutions',
      desc: 'Autonomous intelligent agents that execute multi-step decision matrices and self-healing workflows.',
      type: 'ai',
      bgImage: '/assets/images/bento-agentic.png',
      span: 'col-span-1'
    },
    {
      num: '03',
      title: 'Cloud Services & Infrastructure',
      desc: 'Scalable multi-cloud deployment, Kubernetes cluster management, and high-availability architecture.',
      type: 'cloud',
      bgImage: '/assets/images/bento-cloud.png',
      span: 'col-span-1'
    },
    {
      num: '04',
      title: 'Digital Marketing & Reach',
      desc: 'Data-driven performance growth strategies, global brand positioning, and conversion analytics.',
      type: 'marketing',
      bgImage: '/assets/images/bento-marketing.png',
      span: 'col-span-1'
    },
    {
      num: '05',
      title: 'ESG Solutions & Sustainability',
      desc: 'Environmental tracking, social governance frameworks, and automated carbon reporting software.',
      type: 'esg',
      bgImage: '/assets/images/bento-esg.png',
      span: 'col-span-1'
    },
    {
      num: '06',
      title: 'IATF Auditing & Compliance',
      desc: 'Automotive quality management standard auditing, compliance verification, and risk mitigation.',
      type: 'compliance',
      bgImage: '/assets/images/bento-compliance.png',
      span: 'col-span-1 md:col-start-2' // Centered in middle column
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#05050A] relative overflow-hidden">
      
      {/* Background Aurora Mesh Blob */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none aurora-blob"></div>

      <div className="max-w-[1260px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[#5B5BF6]/30 text-xs font-heading font-extrabold uppercase tracking-widest text-[#A5B4FC] mb-4">
            <Boxes className="w-3.5 h-3.5 text-[#5B5BF6]" /> Services
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Your Needs, Our Expertise
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real results. Let's build something amazing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              onClick={onOpenModal}
              className={`${service.span} glass-panel glass-panel-hover p-8 rounded-3xl cursor-pointer flex flex-col justify-between group relative overflow-hidden min-h-[300px]`}
            >
              {/* Background AI Image with Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img 
                  src={service.bgImage} 
                  alt={service.title}
                  className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/75 to-[#05050A]/40"></div>
              </div>

              {/* Card Top */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span className="font-heading font-extrabold text-sm text-[#FF6B4A] bg-[#FF6B4A]/10 border border-[#FF6B4A]/30 px-3 py-1 rounded-full">
                  {service.num}
                </span>

                <ErrorBoundary fallback={<div className="w-12 h-12 rounded-xl bg-[#5B5BF6]/10 border border-[#5B5BF6]/30 flex items-center justify-center text-[#5B5BF6] font-bold text-xs">{service.num}</div>}>
                  <Service3DGeometries type={service.type} />
                </ErrorBoundary>
              </div>

              {/* Card Bottom */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#5B5BF6] transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#5B5BF6] group-hover:rotate-45 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
