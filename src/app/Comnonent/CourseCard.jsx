"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiPlay, FiClock, FiStar, FiArrowRight, FiBookOpen, FiDownload } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import VideoModal from "./VideoModal";

const CourseCard = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const freeMasterclasses = [
    {
      id: 1,
      title: "Next.js App Router & Server Actions From Zero",
      description: "Master modern full-stack concepts: Server Components, dynamic routing, caching, and real-time database operations.",
      youtube: "https://www.youtube-nocookie.com/embed/gn_dh66cI8c?si=iEnlY1jQJB9DWO5F&start=4",
      duration: "1h 45m",
      views: "14.2K Views",
      instructor: "Sheikh Sakibul Hasan",
      tags: ["Next.js", "Full-Stack"],
      level: "Beginner to Pro",
      courseId: 1,
    },
    {
      id: 2,
      title: "Mastering React 19 Hooks & State Architecture",
      description: "Deep dive into useActionState, useOptimistic, custom hooks, and architectural patterns for scalable UI applications.",
      youtube: "https://www.youtube-nocookie.com/embed/y7hyxsjcPaY?si=mqGVe1j5f6M2ZLoq&start=4",
      duration: "1h 20m",
      views: "18.9K Views",
      instructor: "Zayed Uddin",
      tags: ["React 19", "Frontend"],
      level: "Intermediate",
      courseId: 2,
    },
    {
      id: 3,
      title: "Build Real-World AI Apps with OpenAI & LangChain",
      description: "Learn how to build and deploy intelligent chatbot applications, embedding search, and automated workflows.",
      youtube: "https://www.youtube-nocookie.com/embed/vKfqca7AC3c?si=NtaoNQaPNou4Q-iy&start=4",
      duration: "2h 10m",
      views: "22.5K Views",
      instructor: "Topu Bhowmick",
      tags: ["AI & LLM", "Python"],
      level: "All Levels",
      courseId: 3,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#07090e] border-b border-indigo-500/10">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <MdOutlineOndemandVideo /> Free Knowledge Hub
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Free Video <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Masterclasses</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Experience the quality of our teaching. Watch complete practical workshops taught by senior software engineers.
            </p>
          </div>

          <Link
            href="/course"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition group whitespace-nowrap self-start md:self-auto"
          >
            <span>View All Complete Courses</span>
            <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {freeMasterclasses.map((cls) => (
            <div
              key={cls.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Video Thumbnail Box */}
              <div className="relative aspect-video bg-slate-950 overflow-hidden">
                <iframe
                  className="w-full h-full pointer-events-none opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  src={cls.youtube}
                  title={cls.title}
                  tabIndex="-1"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                  <button
                    onClick={() => setSelectedVideo(cls)}
                    className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-all"
                    aria-label={`Play ${cls.title}`}
                  >
                    <FiPlay className="text-lg ml-0.5" />
                  </button>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-2.5 right-2.5 px-2 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-semibold text-white border border-slate-700 flex items-center gap-1">
                  <FiClock className="text-cyan-400 text-xs" /> {cls.duration}
                </span>

                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-emerald-500/20 backdrop-blur-md text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                  FREE ACCESS
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {cls.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[11px] text-slate-500 ml-auto">{cls.views}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
                    {cls.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {cls.description}
                  </p>
                </div>

                {/* Instructor & Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    <span className="block font-medium text-slate-300">{cls.instructor}</span>
                    <span className="text-[10px] text-slate-500">{cls.level}</span>
                  </div>

                  <button
                    onClick={() => setSelectedVideo(cls)}
                    className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <FiPlay className="text-xs" /> Watch
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.youtube}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </section>
  );
};

export default CourseCard;
