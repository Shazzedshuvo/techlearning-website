"use client";
import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaPlay, FaArrowRight, FaLinkedin } from "react-icons/fa";
import { FiCheckCircle, FiTrendingUp, FiBriefcase } from "react-icons/fi";
import VideoModal from "./VideoModal";

const SuccessStoriesSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const stories = [
    {
      id: 1,
      name: "Tanvir Ahmed",
      role: "Frontend Engineer at Brain Station 23",
      transition: "Non-CS Background → High-Growth Tech Career",
      salary: "৳65,000/mo Starting",
      quote: "The project-based curriculum and 1-on-1 mentor guidance helped me build a portfolio of 4 full-stack Next.js apps. I cleared technical interviews on my first try!",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      company: "Brain Station 23",
      videoUrl: "https://www.youtube-nocookie.com/embed/gn_dh66cI8c",
      track: "Full-Stack Web Dev",
    },
    {
      id: 2,
      name: "Farhana Yasmin",
      role: "Top-Rated UI/UX Freelancer on Upwork",
      transition: "Student → $3,500+/month Freelancer",
      salary: "$40/hour Contract Rate",
      quote: "TechLearning didn't just teach me Figma; they taught me client acquisition, design systems, and international freelance negotiation. I reached Top Rated status in 6 months.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
      company: "Upwork & Remote",
      videoUrl: "https://www.youtube-nocookie.com/embed/y7hyxsjcPaY",
      track: "UI/UX & Product Design",
    },
    {
      id: 3,
      name: "Shakil Mahmud",
      role: "Backend Node.js Developer at Pathao",
      transition: "Career Shift → Production API Specialist",
      salary: "৳80,000/mo Package",
      quote: "The deep dive into MongoDB indexing, microservices, and Docker at TechLearning made me confident with large-scale backend systems.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      company: "Pathao",
      videoUrl: "https://www.youtube-nocookie.com/embed/vKfqca7AC3c",
      track: "MERN Stack Engineering",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07090e] border-b border-indigo-500/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Real Proof & Career Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Stories From Our <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Graduates</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            See how individuals from diverse academic backgrounds transitioned into high-paying engineering and freelancing careers.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Company */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                    <FiTrendingUp /> {story.salary}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <FiBriefcase className="text-cyan-400" /> {story.company}
                  </span>
                </div>

                {/* Transition Highlight */}
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 mb-4 text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                  <FiCheckCircle className="text-emerald-400 flex-shrink-0" />
                  <span>{story.transition}</span>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-300 italic leading-relaxed mb-6">
                  “{story.quote}”
                </p>
              </div>

              {/* Student Profile & Video Watch */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{story.name}</h4>
                    <p className="text-[11px] text-slate-400">{story.role}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVideo(story)}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-slate-700 transition"
                  title="Watch Video Story"
                >
                  <FaPlay className="text-xs ml-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.videoUrl}
          title={`${selectedVideo.name} — Career Transformation Story`}
          description={`Watch how ${selectedVideo.name} secured their role at ${selectedVideo.company} after graduating from TechLearning.`}
        />
      )}
    </section>
  );
};

export default SuccessStoriesSection;
