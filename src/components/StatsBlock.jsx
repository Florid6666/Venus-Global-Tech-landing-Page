import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '15+', label: 'Years of Global Tech Excellence' },
  { number: '500+', label: 'Enterprise Projects Shipped' },
  { number: '100+', label: 'Worldwide Corporate Clients' },
  { number: '24/7', label: 'Autonomous AI Operations' },
];

export default function StatsBlock() {
  return (
    <section className="py-20 bg-white text-[#1A1D20] border-b border-gray-100 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* 4-Column Layout of Large Prominent Bold Numerical Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-[#D8235C]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              {/* Prominent Bold Numerical Statistic */}
              <span className="font-heading font-extrabold text-5xl sm:text-6xl text-[#1A1D20] group-hover:text-[#D8235C] transition-colors duration-300 mb-2">
                {item.number}
              </span>

              {/* Simple Small Dark Label Underneath */}
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-600 leading-snug">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
