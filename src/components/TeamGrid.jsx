import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Alexander Wright',
    title: 'Chief Executive Officer',
    description: '18+ years leading enterprise cloud transformation and artificial intelligence innovation.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Dr. Evelyn Carter',
    title: 'Head of Agentic AI',
    description: 'Former MIT AI research fellow specializing in autonomous multi-agent system execution.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Marcus Sterling',
    title: 'VP of Cloud Infrastructure',
    description: 'Expert architect behind zero-downtime multi-cloud deployments for Fortune 500 networks.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    title: 'Director of Compliance Auditing',
    description: 'Certified IATF 16949 auditor leading global quality assurance and security engineering.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
];

export default function TeamGrid() {
  return (
    <section id="team" className="py-24 bg-white text-[#1A1D20] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8235C]/10 text-[#D8235C] font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            Leadership & Visionaries
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1D20] tracking-tight mb-4">
            Meet Our World-Class Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            The visionary minds and senior engineers driving innovation across global technology operations.
          </p>
        </div>

        {/* 4-Column Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-gray-50/70 border border-gray-100 hover:bg-white hover:border-[#D8235C]/40 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Large Perfectly Circular Portrait Headshot */}
              <div className="relative mb-6">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#D8235C] transition-colors duration-300">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Bold Name */}
              <h3 className="font-heading font-extrabold text-xl text-[#1A1D20] mb-1 group-hover:text-[#D8235C] transition-colors">
                {member.name}
              </h3>

              {/* Colored Job Title Label (Raspberry Accent) */}
              <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#D8235C] mb-3">
                {member.title}
              </span>

              {/* Brief Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-auto">
                <button className="w-8 h-8 rounded-full bg-gray-200/70 hover:bg-[#D8235C] hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-200/70 hover:bg-[#D8235C] hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-200/70 hover:bg-[#D8235C] hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
