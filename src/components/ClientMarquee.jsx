import React from 'react';

const brands = [
  { name: 'NVIDIA AI', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80' },
  { name: 'MICROSOFT AZURE', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80' },
  { name: 'AWS CLOUD', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80' },
  { name: 'IATF GLOBAL', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80' },
  { name: 'DATABRICKS', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80' },
  { name: 'SNOWFLAKE', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80' },
];

export default function ClientMarquee() {
  return (
    <section className="py-14 bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-6 text-center">
        <span className="text-xs font-heading font-extrabold uppercase tracking-[0.25em] text-gray-400">
          Trusted By Industry Leaders & Technology Partners
        </span>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center font-heading font-black text-gray-700 text-sm">
                {brand.name[0]}
              </div>
              <span className="font-heading font-extrabold text-sm tracking-wider text-gray-700">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
