import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-[#02050D] text-[#94A3B8] border-t border-white/10 pt-20 pb-8 relative overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-6 relative z-10">
        
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-3">
              <img 
                src="/assets/images/logo.png" 
                alt="Venus Global Technology Logo" 
                className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(91,91,246,0.5)]"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base tracking-tight text-white leading-none">
                  VENUS GLOBAL
                </span>
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#A5B4FC] uppercase mt-0.5">
                  TECHNOLOGY
                </span>
              </div>
            </a>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Leading provider of innovative technology solutions, digital transformation, and cutting-edge software development services worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#5B5BF6] hover:scale-110 transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#5B5BF6] hover:scale-110 transition-all">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#5B5BF6] hover:scale-110 transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#5B5BF6] hover:scale-110 transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-heading font-bold text-white text-base">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><button onClick={onOpenModal} className="hover:text-white transition-colors text-left">Get Free Quote</button></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-heading font-bold text-white text-base">Our Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Software & Data AI</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Agentic AI Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">ESG Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">IATF Auditing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-heading font-bold text-white text-base">Contact Info</h4>
            <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
              <Mail className="w-4 h-4 text-[#5B5BF6] shrink-0" />
              <a href="mailto:info@venusglobaltech.com" className="hover:text-white transition-colors">
                info@venusglobaltech.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span>© 2024 Venus Global Technology. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
