"use client";
import React from "react";
import Link from "next/link";
import {
  FaGlobe,
  FaUserFriends,
  FaLaptopCode,
  FaChartLine,
  FaUserTie,
  FaUsers,
  FaGraduationCap,
  FaRocket,
  FaChalkboardTeacher,
  FaAward,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";
import { FiArrowRight, FiShield, FiDollarSign, FiClock, FiStar } from "react-icons/fi";

const FreelancingPage = () => {
  const marketplaces = [
    { name: "Upwork", tag: "Enterprise Contracts", color: "text-emerald-400 border-emerald-500/30" },
    { name: "Fiverr Pro", tag: "Gig Marketplace", color: "text-green-400 border-green-500/30" },
    { name: "Toptal", tag: "Top 3% Global Talent", color: "text-blue-400 border-blue-500/30" },
    { name: "RemoteOK", tag: "Remote Tech Jobs", color: "text-cyan-400 border-cyan-500/30" },
    { name: "Freelancer.com", tag: "Competitive Bidding", color: "text-sky-400 border-sky-500/30" },
    { name: "99designs", tag: "Creative Contests", color: "text-pink-400 border-pink-500/30" },
  ];

  const pillars = [
    {
      title: "100% Profile Approval Support",
      description: "Our mentors personally guide you through ID verification, profile description copywriting, and portfolio uploads to get accepted quickly.",
      icon: <FiShield className="text-2xl text-emerald-400" />,
    },
    {
      title: "Proposal Writing & Bidding Formula",
      description: "Learn our proprietary cover letter frameworks that win contracts with high-paying clients in the US, UK, and European markets.",
      icon: <FaChartLine className="text-2xl text-cyan-400" />,
    },
    {
      title: "Client Communication & Negotiation",
      description: "Master client calls, milestone-based pricing, and client retention tactics to turn one-time buyers into recurring monthly retainers.",
      icon: <FaUsers className="text-2xl text-indigo-400" />,
    },
    {
      title: "Direct Payment & Tax Setup",
      description: "Guidance on connecting Bank Asia, Payoneer, and local bank transfers safely with zero hassle and government incentive bonuses.",
      icon: <FiDollarSign className="text-2xl text-amber-400" />,
    },
  ];

  const stats = [
    { value: "34,000+", label: "Active Freelancers Mentored" },
    { value: "$4.8M+", label: "Total Student Earnings" },
    { value: "89%", label: "First Contract Rate Within 90 Days" },
    { value: "4.9 / 5.0", label: "Mentor Guidance Rating" },
  ];

  return (
    <div className="bg-[#07090e] text-slate-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow-hero pointer-events-none" />

      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-20 space-y-4 relative z-10">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Career Freedom
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Launch a High-Earning <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Global Freelancing Career
          </span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Break free from location boundaries. We combine specialized coding & design training with dedicated international freelancing mentorship to help you win global clients.
        </p>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 text-center">
        {stats.map((s, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-white">{s.value}</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </section>

      {/* MARKETPLACES */}
      <section className="max-w-6xl mx-auto mb-20 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Target Verified Global Marketplaces</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            We guide you in building top-rated profiles across leading platforms tailored to your specific skill set.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {marketplaces.map((m, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition flex flex-col items-center justify-center text-center group hover:-translate-y-1"
            >
              <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition mb-1">
                {m.name}
              </h4>
              <span className="text-[10px] text-slate-400">{m.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4 CORE FREELANCING PILLARS */}
      <section className="max-w-6xl mx-auto mb-20 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">How TechLearning Prepares You to Win</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Freelancing requires more than just technical skills. We teach the entire business and communication pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 flex gap-5 items-start"
            >
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0">
                {p.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto text-center p-10 rounded-2xl bg-slate-900/70 border border-slate-800 relative z-10 space-y-4">
        <h3 className="text-2xl font-bold text-white">Ready to Start Earning Independently?</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
          Enroll in our career programs. Every tech course includes the comprehensive Freelance Career Masterclass module.
        </p>
        <Link
          href="/course"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition"
        >
          Browse Courses with Freelance Module <FiArrowRight />
        </Link>
      </section>

    </div>
  );
};

export default FreelancingPage;
