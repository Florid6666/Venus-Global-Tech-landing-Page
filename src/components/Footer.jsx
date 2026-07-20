import React, { useState } from 'react';
import { Send, Linkedin, Twitter, Github, Facebook, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#1A1D20] text-white pt-20 pb-8 border-t border-gray-800 relative overflow-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D8235C]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* 4 Distinct Utility Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          
          {/* Column 1: Brand mission tagline & horizontal row of circular social buttons */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/images/logo.png" 
                alt="Venus Global Logo" 
                className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(216,35,92,0.4)]"
              />
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                VENUS<span className="text-[#D8235C]">GLOBAL</span>
              </span>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6 font-normal">
              Empowering global enterprises with cutting-edge Agentic AI, multi-cloud infrastructure, and automated IATF 16949 compliance transformation.
            </p>

            {/* Horizontal Row of Small Circular Social Media Buttons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#24282D] hover:bg-[#D8235C] border border-gray-700 text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#24282D] hover:bg-[#D8235C] border border-gray-700 text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#24282D] hover:bg-[#D8235C] border border-gray-700 text-white flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#24282D] hover:bg-[#D8235C] border border-gray-700 text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Vertical list links for "Latest Posts" */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-heading font-extrabold text-base text-white tracking-tight mb-5 border-l-2 border-[#D8235C] pl-3">
              Latest Posts
            </h4>

            <ul className="space-y-3.5 text-xs text-gray-400 font-medium">
              <li>
                <a href="#blog" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D8235C]" /> Agentic AI in Enterprise Compliance
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D8235C]" /> Multi-Cloud Zero-Downtime Mesh
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D8235C]" /> IATF 16949 Defect-Free Automation
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D8235C]" /> Scaling Data Infrastructure in 2026
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Live integration status string or system feed */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-heading font-extrabold text-base text-white tracking-tight mb-5 border-l-2 border-[#D8235C] pl-3">
              System Status
            </h4>

            <div className="p-4 rounded-2xl bg-[#24282D] border border-gray-800 w-full flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#2EE6A6]"></span>
                <span>All Systems Normal</span>
              </div>
              <span className="text-[11px] text-gray-400 font-normal leading-tight">
                API Mesh: 99.999% SLA<br />
                Audit Engines: Active<br />
                Region: North America East
              </span>
            </div>
          </div>

          {/* Column 4: Email newsletter subscribe form containing inline input box and arrow submission button */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-heading font-extrabold text-base text-white tracking-tight mb-5 border-l-2 border-[#D8235C] pl-3">
              Stay Connected
            </h4>

            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Subscribe to receive technical briefings and enterprise compliance updates.
            </p>

            <form onSubmit={handleSubscribe} className="w-full flex items-center gap-2 p-1.5 rounded-full bg-[#24282D] border border-gray-700 focus-within:border-[#D8235C] transition-colors">
              <input 
                type="email" 
                placeholder="Enter work email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-4 py-2 text-xs text-white outline-none placeholder-gray-500"
                required
              />
              <button 
                type="submit"
                className="w-9 h-9 rounded-full bg-[#D8235C] hover:bg-[#B81B4B] text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-md"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <div className="mt-2 text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Slim full-width copyright band in matching dark slate with muted white text centered */}
        <div className="pt-8 text-center text-xs text-gray-500 font-medium">
          © {new Date().getFullYear()} Venus Global Technology & Agency. All rights reserved. Built with precision and performance.
        </div>

      </div>
    </footer>
  );
}
