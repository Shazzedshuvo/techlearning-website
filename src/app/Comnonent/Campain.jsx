"use client";
import React, { useState } from "react";
import { FaBuilding, FaUsers, FaHandshake, FaGlobeAmericas } from "react-icons/fa";

const Campain = () => {
  const [activeTab, setActiveTab] = useState("partners");

  const hiringCompanies = [
    { name: "Brain Station 23", category: "Enterprise Software" },
    { name: "Optimizely", category: "Global Tech" },
    { name: "Pathao", category: "Ride-sharing & Logistics" },
    { name: "Chaldal", category: "E-Commerce" },
    { name: "Enosis Solutions", category: "Custom Software" },
    { name: "Therap Services", category: "Healthcare IT" },
    { name: "Kona Software Lab", category: "Fintech & Security" },
    { name: "Kaz Software", category: "Web & Mobile" },
    { name: "Upwork Pro", category: "Global Freelance" },
    { name: "Fiverr Pro", category: "Creative & Dev" },
    { name: "Toptal Network", category: "Elite Talent" },
    { name: "Augmedix", category: "Digital Health" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#090d16]/90 border-b border-indigo-500/10 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Industry Network
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Graduates Work at <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Top Software Companies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Over 250+ tech companies hire directly from TechLearning's verified graduate talent pool and referral program.
          </p>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {hiringCompanies.map((comp, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all duration-300 flex flex-col items-center justify-center text-center group hover:-translate-y-1 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-lg mb-3 group-hover:scale-110 transition-transform">
                {comp.name.charAt(0)}
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                {comp.name}
              </h4>
              <p className="text-[10px] text-slate-500 mt-1 font-medium">
                {comp.category}
              </p>
            </div>
          ))}
        </div>

        {/* Hiring Partner CTA */}
        <div className="mt-14 inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-left">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl flex-shrink-0">
            <FaHandshake />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Looking to hire verified developers or designers?</h4>
            <p className="text-xs text-slate-400">Partner with our placement team for zero-fee direct talent recruitment.</p>
          </div>
          <a
            href="mailto:placement@techlearning.com"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition shadow-lg shadow-indigo-500/25 whitespace-nowrap ml-auto"
          >
            Hire Graduates
          </a>
        </div>

      </div>
    </section>
  );
};

export default Campain;
