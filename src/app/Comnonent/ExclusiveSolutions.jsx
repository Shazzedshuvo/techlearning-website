"use client";
import React from "react";
import { FaLaptopCode, FaBriefcase, FaVideo, FaHeadset, FaAward, FaInfinity } from "react-icons/fa";

const ExclusiveSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Lifetime Mentorship & Community",
      description:
        "The relationship between TechLearning and its students is continuous. We provide ongoing mentor assistance, alumni code reviews, and project support even after course completion.",
      icon: <FaInfinity className="text-3xl text-indigo-400" />,
      accent: "border-indigo-500/20 hover:border-indigo-500/40",
      pill: "Lifetime",
    },
    {
      id: 2,
      title: "Dedicated Job Placement Cell",
      description:
        "Our specialized career team prepares your professional CV, portfolio, and connects you directly to hiring managers across 250+ enterprise and agency partners.",
      icon: <FaBriefcase className="text-3xl text-emerald-400" />,
      accent: "border-emerald-500/20 hover:border-emerald-500/40",
      pill: "95% Placement",
    },
    {
      id: 3,
      title: "Lifetime HD Class Recordings",
      description:
        "Never fall behind if you miss a live session. All lectures are recorded in full 1080p HD, indexed by chapter topics, and available on our modern LMS forever.",
      icon: <FaVideo className="text-3xl text-cyan-400" />,
      accent: "border-cyan-500/20 hover:border-cyan-500/40",
      pill: "Always Available",
    },
    {
      id: 4,
      title: "Real Client & Freelance Training",
      description:
        "We guide you step-by-step through profile verification, winning proposals, project pricing, and payment withdrawals on Upwork, Fiverr, and remote contract boards.",
      icon: <FaLaptopCode className="text-3xl text-violet-400" />,
      accent: "border-violet-500/20 hover:border-violet-500/40",
      pill: "Global Income",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07090e] border-b border-indigo-500/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Why TechLearning
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Facilities That <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Set Us Apart</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our mission is to build an environment where learning is engaging, outcome-focused, and supported at every milestone.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className={`p-7 rounded-2xl bg-slate-900/60 border ${sol.accent} backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
                    {sol.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950 border border-slate-800 text-slate-400">
                    {sol.pill}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition">
                  {sol.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-[11px] font-semibold text-indigo-400">
                <span>Included in every program</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExclusiveSolutions;
