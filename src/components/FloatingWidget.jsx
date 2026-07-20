import React from 'react';
import { ShoppingBag, Settings, MessageSquare, ArrowUp, Sparkles } from 'lucide-react';

export default function FloatingWidget({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-3 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200/80 text-[#1A1D20]">
      {/* Shopping Cart Shortcut */}
      <button className="relative group p-2.5 rounded-full hover:bg-[#D8235C] hover:text-white transition-colors duration-200">
        <ShoppingBag className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D8235C] text-white text-[9px] font-extrabold flex items-center justify-center group-hover:bg-white group-hover:text-[#D8235C]">
          2
        </span>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#1A1D20] text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          View Cart
        </span>
      </button>

      {/* Settings Wheel */}
      <button className="relative group p-2.5 rounded-full hover:bg-[#D8235C] hover:text-white transition-colors duration-200">
        <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#1A1D20] text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Preferences
        </span>
      </button>

      {/* Quick Consultation Chat */}
      <button 
        onClick={onOpenModal}
        className="relative group p-2.5 rounded-full bg-[#D8235C] text-white hover:bg-[#B81B4B] shadow-md transition-colors duration-200"
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#1A1D20] text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Book Call
        </span>
      </button>

      <div className="w-4 h-[1px] bg-gray-200 my-0.5"></div>

      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className="relative group p-2.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-[#1A1D20] transition-colors duration-200"
      >
        <ArrowUp className="w-4 h-4" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#1A1D20] text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Back to Top
        </span>
      </button>
    </aside>
  );
}
