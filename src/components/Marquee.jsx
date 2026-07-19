import React from 'react';

export default function Marquee() {
  const row1 = [
    'Agentic AI', 'Cloud Services', 'Data Analytics', 'Machine Learning', 
    'Digital Marketing', 'ESG Solutions', 'IATF Auditing', 'Software Development'
  ];

  const row2 = [
    'Cyber Security', 'Autonomous Workflows', 'Enterprise SaaS', 'DevOps Automation',
    'ISO Standards', 'High-Load Architecture', 'Predictive Intelligence'
  ];

  return (
    <section className="py-8 bg-[#05050A] border-y border-white/10 overflow-hidden flex flex-col gap-4">
      {/* Row 1 */}
      <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
        {[...row1, ...row1].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-panel border-white/15 text-white font-heading font-bold text-sm tracking-wide shadow-lg">
            <i className="fa-solid fa-circle-check text-[#5B5BF6]"></i> {item} <span className="text-white/30">+</span>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-6 whitespace-nowrap animate-marquee-reverse">
        {[...row2, ...row2].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-panel border-white/15 text-[#94A3B8] font-heading font-semibold text-sm tracking-wide">
            <i className="fa-solid fa-bolt text-[#FF6B4A]"></i> {item} <span className="text-white/30">+</span>
          </div>
        ))}
      </div>
    </section>
  );
}
