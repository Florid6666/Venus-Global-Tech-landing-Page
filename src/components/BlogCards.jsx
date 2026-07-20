import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    date: 'JULY 18, 2026',
    author: 'Dr. Evelyn Carter',
    title: 'The Rise of Agentic AI in Enterprise Compliance & Audit Workflows',
    excerpt: 'Discover how autonomous AI agents are replacing static audit checklists with continuous real-time compliance telemetry.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    date: 'JULY 10, 2026',
    author: 'Marcus Sterling',
    title: 'Designing Zero-Downtime Multi-Cloud Architecture for Scale',
    excerpt: 'Key strategies for distributing critical enterprise workloads across AWS, Azure, and Google Cloud with instant failover.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    date: 'JUNE 28, 2026',
    author: 'Sarah Jenkins',
    title: 'IATF 16949 Automation: Eliminating Manufacturing Defects',
    excerpt: 'How machine learning algorithms and sensor networks verify automotive quality standards in high-volume production.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
];

export default function BlogCards({ onOpenModal }) {
  return (
    <section id="blog" className="py-24 bg-white text-[#1A1D20] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8235C]/10 text-[#D8235C] font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
              Latest Insights
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1D20] tracking-tight">
              Recent Blog & Thought Leadership
            </h2>
          </div>

          <button 
            onClick={onOpenModal}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-[#1A1D20] text-white hover:bg-[#D8235C] font-heading font-bold text-xs uppercase tracking-wider transition-colors"
          >
            View All Articles
          </button>
        </div>

        {/* 3 Clean Vertical Blog Post Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col rounded-3xl bg-gray-50/70 border border-gray-100 overflow-hidden hover:bg-white hover:border-[#D8235C]/40 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Blog Image */}
              <div className="relative h-52 overflow-hidden bg-gray-200">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-7 flex flex-col flex-grow">
                {/* Post Date & Author */}
                <div className="flex items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">
                  <span className="flex items-center gap-1 text-[#D8235C]">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </span>
                </div>

                {/* Bold Title */}
                <h3 className="font-heading font-extrabold text-xl text-[#1A1D20] leading-snug mb-3 group-hover:text-[#D8235C] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt Text */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {post.excerpt}
                </p>

                {/* Minimal Text-Link Button with Chevron Arrow */}
                <button 
                  onClick={onOpenModal}
                  className="mt-auto font-heading font-extrabold text-xs uppercase tracking-wider text-[#D8235C] hover:text-[#B81B4B] inline-flex items-center gap-1 transition-colors"
                >
                  Read Full Post <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
