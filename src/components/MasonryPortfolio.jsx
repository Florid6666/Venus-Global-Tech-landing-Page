import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Autonomous AI Operations Center',
    category: 'Agentic AI Systems',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Global Manufacturing Compliance Portal',
    category: 'IATF 16949 Software',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Multi-Cloud Mesh Telemetry',
    category: 'Cloud Architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Enterprise Fintech Dashboard',
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Smart Logistics Optimization Engine',
    category: 'Data Analytics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Zero-Trust Cyber Defense Matrix',
    category: 'Security Engineering',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
];

const categories = ['All', 'Agentic AI Systems', 'Cloud Architecture', 'IATF 16949 Software', 'Software Engineering'];

export default function MasonryPortfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-white text-[#1A1D20] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1D20] text-white font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
              Featured Work
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1D20] tracking-tight">
              Masonry Visual Portfolio
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full font-heading font-bold text-xs transition-all ${
                  activeTab === cat
                    ? 'bg-[#D8235C] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Multi-Row Grid System with ZERO GAPS or Padding Between Sharp Square-Cut Graphic Tiles */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-square overflow-hidden group cursor-pointer bg-[#1A1D20]"
            >
              {/* Sharp Graphic Tile Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hovering State Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D20]/95 via-[#1A1D20]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#D8235C] mb-2">
                  {item.category}
                </span>

                <h3 className="font-heading font-extrabold text-2xl text-white leading-tight mb-4 flex items-center justify-between">
                  <span>{item.title}</span>
                  <div className="w-10 h-10 rounded-full bg-[#D8235C] flex items-center justify-center text-white flex-shrink-0 ml-4 shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
