import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md py-3' : 'bg-white border-b border-gray-100 py-4'
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Original Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src="/assets/images/logo.png" 
            alt="Venus Global Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(216,35,92,0.4)] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-tight text-[#1A1D20] leading-none">
              VENUS<span className="text-[#D8235C]">GLOBAL</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-0.5">
              AGENCY & TECH
            </span>
          </div>
        </a>

        {/* Center: Multi-tiered Nav Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#home" className="font-heading font-semibold text-sm text-[#1A1D20] hover:text-[#D8235C] transition-colors">
            Home
          </a>

          <a href="#about" className="font-heading font-semibold text-sm text-[#1A1D20] hover:text-[#D8235C] transition-colors">
            About Us
          </a>

          {/* Multi-tiered Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button className="flex items-center gap-1 font-heading font-semibold text-sm text-[#1A1D20] hover:text-[#D8235C] transition-colors py-2">
              Services <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 p-3 bg-white rounded-2xl border border-gray-100 shadow-2xl flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2">
                <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 text-xs font-bold text-[#1A1D20] hover:text-[#D8235C] transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#D8235C]"></span> Agentic AI & Automation
                </a>
                <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 text-xs font-bold text-[#1A1D20] hover:text-[#D8235C] transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#1A1D20]"></span> Cloud & Software Architecture
                </a>
                <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 text-xs font-bold text-[#1A1D20] hover:text-[#D8235C] transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#D8235C]"></span> Digital Marketing & Growth
                </a>
                <a href="#services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 text-xs font-bold text-[#1A1D20] hover:text-[#D8235C] transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#1A1D20]"></span> IATF Compliance Audits
                </a>
              </div>
            )}
          </div>

          <a href="#portfolio" className="font-heading font-semibold text-sm text-[#1A1D20] hover:text-[#D8235C] transition-colors">
            Portfolio
          </a>

          <a href="#team" className="font-heading font-semibold text-sm text-[#1A1D20] hover:text-[#D8235C] transition-colors">
            Team
          </a>

          <a href="#blog" className="font-heading font-semibold text-sm text-[#1A1D20] hover:text-[#D8235C] transition-colors">
            Blog
          </a>
        </nav>

        {/* Right: Search, Cart, CTA Button */}
        <div className="hidden md:flex items-center gap-5">
          {/* Search Toggle */}
          <div className="relative">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-[#D8235C] transition-colors rounded-full hover:bg-gray-100"
            >
              <Search className="w-5 h-5" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 p-2 bg-white rounded-xl shadow-xl border border-gray-200">
                <input 
                  type="text" 
                  placeholder="Search platform..." 
                  className="w-full px-3 py-1.5 text-xs text-[#1A1D20] outline-none border border-gray-200 rounded-lg focus:border-[#D8235C]"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <button className="relative p-2 text-gray-600 hover:text-[#D8235C] transition-colors rounded-full hover:bg-gray-100">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#D8235C] text-white text-[9px] font-bold flex items-center justify-center">
              2
            </span>
          </button>

          {/* CTA Action Button */}
          <button 
            onClick={onOpenModal}
            className="px-6 py-2.5 rounded-full bg-[#D8235C] text-white font-heading font-bold text-xs tracking-wide shadow-md hover:bg-[#B81B4B] hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1A1D20] hover:text-[#D8235C]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-3">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#1A1D20] hover:text-[#D8235C]">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#1A1D20] hover:text-[#D8235C]">About Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#1A1D20] hover:text-[#D8235C]">Services</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#1A1D20] hover:text-[#D8235C]">Portfolio</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#1A1D20] hover:text-[#D8235C]">Team</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#1A1D20] hover:text-[#D8235C]">Blog</a>
          
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
            className="mt-2 w-full py-3 rounded-full bg-[#D8235C] text-white font-heading font-bold text-xs uppercase shadow-md"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
