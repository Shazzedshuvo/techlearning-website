import React from "react";
import Link from "next/link";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase,
  FaGraduationCap,
  FaQuoteLeft,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "About Us — TechLearning Academy",
  description: "Learn about TechLearning's mission to bridge academia and production software engineering through immersive mentorship and project-based training.",
};

const AboutUsSection = () => {
  return (
    <section className="bg-[#07090e] text-slate-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow-hero pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20 max-w-4xl mx-auto space-y-4 relative z-10">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Our Story & Vision
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Pioneering the Next Generation of <br />
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Digital Engineers & Creators
          </span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          TechLearning is a premier tech academy bridging the gap between theoretical academia and production-grade engineering. We equip ambitious learners with practical, job-ready skills.
        </p>
      </div>

      {/* Key Numbers */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 relative z-10 text-center">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-3xl font-black text-white">15,000+</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">Graduates Trained</div>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-3xl font-black text-cyan-400">95%</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">Placement & Freelance Rate</div>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-3xl font-black text-indigo-400">40+</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">Industry Lead Mentors</div>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-3xl font-black text-emerald-400">250+</div>
          <div className="text-xs text-slate-400 mt-1 font-medium">Hiring Partner Companies</div>
        </div>
      </div>

      {/* Our Core Pillars */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-lg text-center group hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
            <FaLaptopCode />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Web & Software Systems</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            From modern frontend architecture with Next.js & React to resilient backends with Node.js, databases, and microservices.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-lg text-center group hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
            <FaNetworkWired />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">DevOps, Cloud & Security</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Master Docker containerization, CI/CD automated deployment, and fundamental cybersecurity best practices.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 transition-all duration-300 shadow-lg text-center group hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
            <FaDatabase />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Data Science & AI APIs</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Leverage Python, LLM integrations, OpenAI APIs, and SQL/NoSQL data design for production applications.
          </p>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-slate-900/80 border border-indigo-500/20 shadow-lg">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-2">Our Long-Term Goal</span>
          <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-indigo-400 mt-1 flex-shrink-0" />
              <span>Become South Asia’s benchmark tech academy for practical coding excellence.</span>
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-indigo-400 mt-1 flex-shrink-0" />
              <span>Enable 10,000+ young engineers to earn high-paying global remote incomes by 2030.</span>
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-indigo-400 mt-1 flex-shrink-0" />
              <span>Empower non-CS students to break into tech with world-class mentorship.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-slate-900/80 border border-cyan-500/20 shadow-lg">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">How We Deliver</span>
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>Deliver project-based learning with zero outdated textbook theories.</span>
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>Provide everyday 1-on-1 code reviews with experienced full-stack leads.</span>
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>Facilitate direct hiring introductions through our network of 250+ enterprise partners.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto text-center p-10 rounded-2xl bg-slate-900/70 border border-slate-800 relative z-10 space-y-4">
        <h3 className="text-2xl font-bold text-white">Join Our Thriving Developer Community</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
          Start building real-world projects today. Connect with peers, mentors, and prospective employers.
        </p>
        <Link
          href="/course"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition"
        >
          Explore Courses & Tracks <FiArrowRight />
        </Link>
      </div>

    </section>
  );
};

export default AboutUsSection;
