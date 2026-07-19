import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

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
      <div className="relative w-full max-w-lg p-8 sm:p-10 rounded-3xl glass-panel bg-[#0B0F19] border-white/20 shadow-2xl">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
          Get a Free Quote
        </h3>
        <p className="text-sm text-[#94A3B8] mb-6">
          Tell us about your goals and our team will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-heading font-bold text-white">Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. John Smith"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#64748B] focus:outline-none focus:border-[#5B5BF6] text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-heading font-bold text-white">Work Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#64748B] focus:outline-none focus:border-[#5B5BF6] text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-heading font-bold text-white">Service Interest</label>
            <select 
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white focus:outline-none focus:border-[#5B5BF6] text-sm"
            >
              <option value="">Select service...</option>
              <option value="software-ai">Software Development & Data AI</option>
              <option value="agentic-ai">Agentic AI Solutions</option>
              <option value="cloud">Cloud Services & Infrastructure</option>
              <option value="marketing">Digital Marketing & Reach</option>
              <option value="esg">ESG Solutions & Sustainability</option>
              <option value="iatf">IATF Auditing & Compliance</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-heading font-bold text-white">Message</label>
            <textarea 
              rows={3}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Briefly describe your requirements..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#64748B] focus:outline-none focus:border-[#5B5BF6] text-sm"
            />
          </div>

          <button 
            type="submit"
            className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-[#5B5BF6] via-[#8B5CF6] to-[#FF6B4A] text-white font-heading font-bold text-sm tracking-wide shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
          >
            Submit Inquiry <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
