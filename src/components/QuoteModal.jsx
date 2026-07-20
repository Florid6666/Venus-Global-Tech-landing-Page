import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, showToast }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [msg, setMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Thank you! Inquiry submitted successfully.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg p-8 sm:p-10 rounded-3xl bg-[#1A1D20] text-white border border-gray-800 shadow-2xl overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#D8235C]/20 blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8235C]/15 border border-[#D8235C]/30 text-xs font-heading font-extrabold uppercase tracking-widest text-[#D8235C] w-max mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Direct Consultation
        </div>

        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
          Request a Free Strategy Quote
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-6">
          Tell us about your business goals and our technical leads will respond within 24 hours.
        </p>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-heading font-bold text-gray-200">Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. John Smith"
              className="w-full px-4 py-3 rounded-xl bg-[#24282D] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#D8235C] focus:ring-1 focus:ring-[#D8235C] text-xs sm:text-sm transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-heading font-bold text-gray-200">Work Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded-xl bg-[#24282D] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#D8235C] focus:ring-1 focus:ring-[#D8235C] text-xs sm:text-sm transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-heading font-bold text-gray-200">Service Interest</label>
            <select 
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#24282D] border border-gray-700 text-white focus:outline-none focus:border-[#D8235C] focus:ring-1 focus:ring-[#D8235C] text-xs sm:text-sm transition-all"
            >
              <option value="">Select interest...</option>
              <option value="agentic-ai">Agentic AI & Automation</option>
              <option value="cloud">Cloud Architecture & Infrastructure</option>
              <option value="software">Custom Software Engineering</option>
              <option value="iatf">IATF 16949 Compliance Audits</option>
              <option value="marketing">Digital Marketing & Scaling</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-heading font-bold text-gray-200">Message / Requirements</label>
            <textarea 
              rows={3}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Briefly describe your project goals..."
              className="w-full px-4 py-3 rounded-xl bg-[#24282D] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#D8235C] focus:ring-1 focus:ring-[#D8235C] text-xs sm:text-sm transition-all"
            />
          </div>

          <button 
            type="submit"
            className="mt-2 w-full py-4 rounded-full bg-[#D8235C] hover:bg-[#B81B4B] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
          >
            Submit Strategy Request <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
