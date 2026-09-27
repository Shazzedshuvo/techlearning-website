"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiPlay, FiCheckCircle, FiUsers, FiStar, FiAward, FiSearch, FiLayers } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import VideoModal from "../Comnonent/VideoModal";

const Hero = () => {
  const dispatch = useDispatch();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredCourse = {
    id: 1,
    title: "Mastering MERN Stack Web Development",
    category: "Web Development",
    duration: "6 Months",
    fee: 20000,
    offerPrice: 16000,
    rating: 5,
    students: 1260,
    img: "https://i.ibb.co/XZ78JQ9f/Mern-card.jpg",
    video: "https://www.youtube-nocookie.com/embed/S9T4uqxVYO0?si=HuEprsLN4wXmUd6s&start=4",
  };

  const handleAddToCart = () => {
    dispatch(addToCart(featuredCourse));
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-indigo-500/10">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow-hero pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 backdrop-blur-md text-xs sm:text-sm text-indigo-300 shadow-sm hover:border-indigo-500/40 transition">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-white">Spring 2026 Batch Admissions Open:</span>
            <span className="text-cyan-400 font-medium">Use code TECH25 for 25% Off</span>
            <FiArrowRight className="text-xs text-indigo-400" />
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Build Real-World <br />
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Tech & Coding Skills.
              </span>
              <br />
              Learn from Leaders.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Transform your career with project-driven training in Full-Stack Development, 
              AI, and UI/UX. Benefit from daily 1-on-1 code reviews and a dedicated career placement cell.
            </p>

            {/* Quick Search & CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/course"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore All Courses <FiArrowRight className="text-lg" />
              </Link>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/40 text-slate-200 font-semibold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300"
              >
                <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-cyan-400 flex items-center justify-center">
                  <FiPlay className="ml-0.5 text-xs" />
                </div>
                Watch Free Demo Class
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-emerald-400 text-base flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Job Placement Cell</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-emerald-400 text-base flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">1-on-1 Mentorship</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-emerald-400 text-base flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Live Projects</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-emerald-400 text-base flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Lifetime Access</span>
              </div>
            </div>

          </div>

          {/* Right Hero Interactive Preview Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform rotate-1 scale-105" />

            <div className="relative rounded-2xl bg-[#0c111f] border border-indigo-500/30 p-5 shadow-2xl backdrop-blur-xl">
              
              {/* Card Top Pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400">Featured Masterclass</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  <FiStar className="fill-current text-xs" /> 4.9 (985 Reviews)
                </div>
              </div>

              {/* Video Preview Box */}
              <div className="relative rounded-xl overflow-hidden group aspect-video bg-slate-900 border border-slate-800 mb-4">
                <img
                  src={featuredCourse.img}
                  alt={featuredCourse.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="w-14 h-14 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-500/50 hover:scale-110 transition-all duration-300 group-hover:ring-4 ring-indigo-400/30"
                    aria-label="Play Course Preview"
                  >
                    <FiPlay className="text-xl ml-1 text-white" />
                  </button>
                </div>
                <span className="absolute bottom-2.5 left-2.5 px-2 py-1 rounded bg-black/75 backdrop-blur-md text-[11px] font-semibold text-cyan-300 border border-slate-700">
                  Preview Lecture: 12m
                </span>
              </div>

              {/* Course Title and Overview */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-medium">
                  <FiLayers /> Full-Stack Engineering • 60 Live Lectures
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {featuredCourse.title}
                </h3>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                    <SiNextdotjs className="text-white text-xs" /> Next.js
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                    <FaReact className="text-cyan-400 text-xs" /> React
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                    <FaNodeJs className="text-green-500 text-xs" /> Node.js
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                    <SiTailwindcss className="text-sky-400 text-xs" /> Tailwind
                  </span>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-white">৳{featuredCourse.offerPrice.toLocaleString()}</span>
                      <span className="text-xs text-slate-500 line-through">৳{featuredCourse.fee.toLocaleString()}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold">Save ৳4,000 Today</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/course/1"
                      className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
                    >
                      Details
                    </Link>
                    <button
                      onClick={handleAddToCart}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-xs font-bold transition shadow-md shadow-indigo-500/20 active:scale-95"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Global Key Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-black text-white">15,000+</div>
            <div className="text-xs text-slate-400 mt-1">Learners Graduated</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">95%</div>
            <div className="text-xs text-slate-400 mt-1">Placement & Freelance Rate</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-black text-indigo-400">120+</div>
            <div className="text-xs text-slate-400 mt-1">Industry Capstone Projects</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">4.9 / 5.0</div>
            <div className="text-xs text-slate-400 mt-1">Average Student Rating</div>
          </div>
        </div>

      </div>

      {/* Free Demo Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={featuredCourse.video}
        title={featuredCourse.title}
        description="Learn how to architect a modern full-stack web application with Next.js, Node.js, and MongoDB."
      />
    </section>
  );
};

export default Hero;