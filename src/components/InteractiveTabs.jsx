import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ShieldAlert, Network, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 'ai',
    icon: Bot,
    title: 'Autonomous Agentic AI',
    subtitle: 'Self-Executing Workflows',
    heading: 'Next-Generation Autonomous Multi-Agent AI',
    description: 'Deploy custom AI agents that manage complex end-to-end operational routines, monitor system metrics, and auto-correct compliance deviations in real-time.',
    features: ['Autonomous task scheduling', 'Self-healing error detection', '100% audit trail transparency'],
    stat: '10x Faster Execution',
  },
  {
    id: 'compliance',
    icon: ShieldAlert,
    title: 'IATF 16949 Auditing',
    subtitle: 'Automotive Quality Guard',
    heading: 'Zero-Defect Automotive Compliance Engine',
    description: 'Ensure total adherence to international IATF 16949 standards with automated documentation, live supplier risk scoring, and zero-defect quality control.',
    features: ['Automated risk matrices', 'Real-time supplier scoring', 'Zero-defect verification'],
    stat: '100% Audit Success',
  },
  {
    id: 'cloud',
    icon: Network,
    title: 'Multi-Cloud Mesh',
    subtitle: 'Enterprise Infrastructure',
    heading: 'Resilient Multi-Cloud Mesh Architecture',
    description: 'Orchestrate seamless cloud workloads across AWS, Google Cloud, and Azure with instant global failover protection and latency optimization.',
    features: ['Multi-region active redundancy', 'Zero downtime deployment', 'Sub-millisecond API response'],
    stat: '99.999% Uptime SLA',
  },
  {
    id: 'transformation',
    icon: Sparkles,
    title: 'Digital Transformation',
    subtitle: 'End-to-End Modernization',
    heading: 'Accelerated Enterprise Legacy Modernization',
    description: 'Refactor legacy codebases into modern cloud-native microservices with automated testing pipelines and zero operational disruption.',
    features: ['Legacy code refactoring', 'Microservices migration', 'DevSecOps automation'],
    stat: '3x Faster Time-to-Market',
  },
];

export default function InteractiveTabs({ onOpenModal }) {
  const [activeTabId, setActiveTabId] = useState('ai');
  const activeTab = tabs.find(t => t.id === activeTabId);

  return (
    <section className="py-24 bg-white bg-dot-matrix-light text-[#1A1D20] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8235C]/10 text-[#D8235C] font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            Interactive Platform Capabilities
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1D20] tracking-tight mb-4">
            Explore Our Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Select a core feature below to see how our engineering architecture powers enterprise operations.
          </p>
        </div>

        {/* 4-Column Row of Icons & Features (Active transitions smoothly to solid dark slate card block) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 relative overflow-hidden ${
                  isActive
                    ? 'bg-[#1A1D20] text-white shadow-xl scale-[1.02] border border-[#D8235C]'
                    : 'bg-white border border-gray-200 text-[#1A1D20] hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold transition-colors ${
                  isActive ? 'bg-[#D8235C] text-white' : 'bg-gray-100 text-[#1A1D20]'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-base leading-tight">
                    {tab.title}
                  </span>
                  <span className={`text-xs mt-1 font-medium ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                    {tab.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Detail Block (Solid Dark Slate Card Block) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#1A1D20] text-white border border-gray-800 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#D8235C]/15 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 flex flex-col items-start">
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#D8235C] mb-3">
                  {activeTab.subtitle}
                </span>

                <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-4">
                  {activeTab.heading}
                </h3>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                  {activeTab.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 w-full">
                  {activeTab.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D8235C] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenModal}
                  className="px-7 py-3.5 rounded-full bg-[#D8235C] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#B81B4B] shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Schedule Technical Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Stat Highlight Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="p-8 rounded-2xl bg-[#24282D] border border-gray-700 text-center flex flex-col items-center justify-center w-full max-w-[280px] shadow-xl">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-gray-400 mb-2">Verified Benchmark</span>
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#D8235C] mb-2">{activeTab.stat}</span>
                  <span className="text-xs text-gray-400 font-medium">Enterprise Performance Tested</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
