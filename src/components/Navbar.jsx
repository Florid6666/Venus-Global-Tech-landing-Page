import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header className={`w-full max-w-[1260px] transition-all duration-300 rounded-full glass-panel ${
        scrolled ? 'bg-[#05050A]/95 border-[#7C5CFF]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)]' : 'bg-[#0B0F19]/80'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 md:px-8">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src="/assets/images/logo.png" 
              alt="Venus Global Technology Logo" 
              className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(91,91,246,0.5)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
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

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="font-heading font-semibold text-sm text-[#94A3B8] hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="font-heading font-semibold text-sm text-[#94A3B8] hover:text-white transition-colors">
              About Us
            </a>

            {/* Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 font-heading font-semibold text-sm text-[#94A3B8] hover:text-white transition-colors py-2">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 rounded-2xl glass-panel bg-[#0B0F19]/95 border-[#7C5CFF]/30 shadow-2xl flex flex-col gap-1 z-50">
                  <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5B5BF6]/15 text-sm font-semibold text-[#94A3B8] hover:text-white transition-all">
                    <i className="fa-solid fa-code text-[#5B5BF6]"></i> Software & Data AI
                  </a>
                  <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5B5BF6]/15 text-sm font-semibold text-[#94A3B8] hover:text-white transition-all">
                    <i className="fa-solid fa-robot text-[#8B5CF6]"></i> Agentic AI Solutions
                  </a>
                  <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5B5BF6]/15 text-sm font-semibold text-[#94A3B8] hover:text-white transition-all">
                    <i className="fa-solid fa-cloud text-[#5B5BF6]"></i> Cloud Infrastructure
                  </a>
                  <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5B5BF6]/15 text-sm font-semibold text-[#94A3B8] hover:text-white transition-all">
                    <i className="fa-solid fa-bullhorn text-[#FF6B4A]"></i> Digital Marketing
                  </a>
                  <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5B5BF6]/15 text-sm font-semibold text-[#94A3B8] hover:text-white transition-all">
                    <i className="fa-solid fa-leaf text-[#2EE6A6]"></i> ESG Solutions
                  </a>
                  <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#5B5BF6]/15 text-sm font-semibold text-[#94A3B8] hover:text-white transition-all">
                    <i className="fa-solid fa-shield-halved text-[#7C5CFF]"></i> IATF Auditing
                  </a>
                </div>
              )}
            </div>

            <a href="#process" className="font-heading font-semibold text-sm text-[#94A3B8] hover:text-white transition-colors">
              Investment
            </a>
            <a href="#locations" className="font-heading font-semibold text-sm text-[#94A3B8] hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#cta" className="font-heading font-semibold text-sm text-[#94A3B8] hover:text-white transition-colors">
              Blogs
            </a>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#94A3B8]">
              <span className="w-2 h-2 rounded-full bg-[#2EE6A6] animate-pulse shadow-[0_0_8px_#2EE6A6]"></span>
              <span>All Systems Operational</span>
            </div>

            <button 
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5B5BF6] via-[#8B5CF6] to-[#FF6B4A] text-white font-heading font-bold text-xs tracking-wide hover:shadow-[0_0_25px_rgba(124,92,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#5B5BF6]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden p-6 bg-[#0B0F19]/98 rounded-3xl border border-white/10 mt-2 flex flex-col gap-4 shadow-2xl">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#94A3B8] hover:text-white">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#94A3B8] hover:text-white">About Us</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#94A3B8] hover:text-white">Services</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#94A3B8] hover:text-white">Investment</a>
            <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#94A3B8] hover:text-white">Contact Us</a>
            <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#94A3B8] hover:text-white">Blogs</a>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-[#5B5BF6] to-[#FF6B4A] text-white font-heading font-bold text-xs uppercase"
            >
              Book Consultation
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
