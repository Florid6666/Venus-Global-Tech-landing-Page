import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Phone, Copy, Check, Clock } from 'lucide-react';
import Globe3DScene from './3d/Globe3DScene';
import ErrorBoundary from './ErrorBoundary';

export default function Locations({ showToast }) {
  const [activeTab, setActiveTab] = useState('toronto');
  const [copied, setCopied] = useState(false);

  const offices = {
    toronto: {
      flag: '🇨🇦',
      title: 'Toronto, Canada Headquarters',
      address: '#205 - 1085 Bellamy Road North, Toronto, ON',
      phone: '647-722-0837',
      tel: 'tel:6477220837',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM EST'
    },
    michigan: {
      flag: '🇺🇸',
      title: 'Michigan, USA Regional Office',
      address: '880 W Long Lake Rd Ste 225, Troy, MI 48098',
      phone: '248-275-1077 / 718-715-0770',
      tel: 'tel:2482751077',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM EST'
    },
    india: {
      flag: '🇮🇳',
      title: 'India Technology Innovation Hub',
      address: 'Mumbai, Surat, Chennai, Hyderabad',
      phone: '+91-261-2601177 / +91-261-391177',
      tel: 'tel:+912612601177',
      hours: 'Mon - Sat: 9:30 AM - 6:30 PM IST'
    }
  };

  const currentOffice = offices[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentOffice.phone);
    setCopied(true);
    if (showToast) {
      showToast(`Copied "${currentOffice.phone}" to clipboard!`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="locations" className="py-24 bg-[#1A1D20] text-white relative overflow-hidden border-b border-gray-800">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D8235C]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-heading font-extrabold uppercase tracking-widest text-[#D8235C] mb-4">
            <Globe className="w-3.5 h-3.5" /> Global Operations
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Our Global Office Locations
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Connect with our engineering teams and regional offices across North America and Asia.
          </p>
        </div>

        {/* Office Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {Object.keys(offices).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-3 ${
                activeTab === key 
                  ? 'bg-[#D8235C] text-white shadow-xl scale-105' 
                  : 'bg-[#24282D] text-gray-300 hover:text-white border border-gray-700'
              }`}
            >
              <span className="text-base">{offices[key].flag}</span> {offices[key].title.split(',')[0]}
            </button>
          ))}
        </div>

        {/* 3D Globe + Office Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3D Interactive Globe */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <ErrorBoundary fallback={
              <div className="w-full h-[380px] bg-[#24282D] rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-gray-800">
                <Globe className="w-16 h-16 text-[#D8235C] animate-pulse mb-4" />
                <h4 className="font-heading font-bold text-white text-lg">Global Operations</h4>
                <p className="text-xs text-gray-400 max-w-xs mt-2">Connecting Toronto, Michigan & Asia Hubs</p>
              </div>
            }>
              <Globe3DScene />
            </ErrorBoundary>
          </div>

          {/* Right Column: Active Location Card */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#24282D] border border-gray-700 shadow-2xl flex flex-col gap-6 relative"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentOffice.flag}</span>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                {currentOffice.title}
              </h3>
            </div>

            <div className="h-px bg-gray-700 my-1"></div>

            <div className="flex items-start gap-4 text-sm sm:text-base text-gray-300">
              <MapPin className="w-5 h-5 text-[#D8235C] shrink-0 mt-1" />
              <span>{currentOffice.address}</span>
            </div>

            <div className="flex items-start gap-4 text-sm sm:text-base text-white font-heading font-bold">
              <Phone className="w-5 h-5 text-[#D8235C] shrink-0 mt-1" />
              <a href={currentOffice.tel} className="hover:text-[#D8235C] transition-colors">
                {currentOffice.phone}
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#D8235C]" /> Operating Hours
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-0.5">{currentOffice.hours}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                Open Now
              </span>
            </div>

            <button 
              onClick={handleCopy}
              className="mt-2 w-full py-4 rounded-full bg-[#D8235C] hover:bg-[#B81B4B] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied to Clipboard!' : 'Copy Phone & Location'}
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
