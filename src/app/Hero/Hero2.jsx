"use client";
import React from "react";
import Link from "next/link";
import {
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPaintBrush,
  FaCube,
  FaShieldAlt,
  FaArrowRight,
  FaRobot,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiFigma, SiTypescript, SiDocker } from "react-icons/si";
import { FiCheckCircle, FiCompass, FiBriefcase, FiHeadphones } from "react-icons/fi";

const Hero2 = () => {
  const learningPaths = [
    {
      id: "web-dev",
      title: "Web & Software Engineering",
      badge: "Highest Hiring Demand",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      description: "Build robust full-stack web applications with Next.js, React, Node.js, TypeScript, and MongoDB.",
      techs: [
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      ],
      link: "/course",
      accent: "hover:border-indigo-500/40 hover:shadow-indigo-500/10",
    },
    {
      id: "ui-ux",
      title: "UI/UX & Product Design",
      badge: "Creative & In-Demand",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      description: "Master modern user experience research, design systems, interactive Figma prototypes, and responsive UI.",
      techs: [
        { name: "Figma", icon: <SiFigma className="text-purple-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "3D Basics", icon: <FaCube className="text-amber-400" /> },
        { name: "Visual Art", icon: <FaPaintBrush className="text-pink-400" /> },
      ],
      link: "/course",
      accent: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    },
    {
      id: "ai-data",
      title: "AI, Python & Data Science",
      badge: "Future of Tech",
      badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      description: "Leverage Python, LLM APIs, and intelligent data pipelines to build generative AI solutions and automation.",
      techs: [
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "AI APIs", icon: <FaRobot className="text-cyan-400" /> },
        { name: "Data Sci", icon: <FaLaptopCode className="text-indigo-400" /> },
      ],
      link: "/course",
      accent: "hover:border-violet-500/40 hover:shadow-violet-500/10",
    },
    {
      id: "freelancing",
      title: "Global Freelancing & Remote Work",
      badge: "Career Freedom",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description: "Learn how to win contracts on Upwork & Fiverr, manage international clients, and build a high-earning profile.",
      techs: [
        { name: "Upwork", icon: <FiBriefcase className="text-emerald-400" /> },
        { name: "Portfolios", icon: <FiCompass className="text-indigo-400" /> },
        { name: "Clients", icon: <FiHeadphones className="text-cyan-400" /> },
      ],
      link: "/freelancing",
      accent: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#090d16]/60 border-b border-indigo-500/10">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Specialized Career Tracks
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Designed for <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Real Jobs & Growth</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our curricula are created in collaboration with senior tech leads to match exactly what high-growth startups and top software agencies hire for.
          </p>
        </div>

        {/* 4 Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningPaths.map((track) => (
            <div
              key={track.id}
              className={`p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl transition-all duration-300 shadow-lg hover:-translate-y-1 ${track.accent}`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${track.badgeColor}`}>
                  {track.badge}
                </span>
                <span className="text-xs text-slate-500">Live Mentorship</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {track.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {track.description}
              </p>

              {/* Technologies in this track */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
                  Core Technologies You Will Master:
                </span>
                <div className="flex flex-wrap gap-2">
                  {track.techs.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-200"
                    >
                      <span className="text-sm">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <Link
                href={track.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition group"
              >
                <span>Explore curriculum & syllabus</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Value Proposition Highlights Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/70 to-slate-950/60 border border-indigo-500/20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-xl font-bold">
              01
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Project-Based Learning</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build real production web apps with database integration, user auth, and payment gateways for your portfolio.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xl font-bold">
              02
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Daily 1:1 Code Reviews</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Never get stuck. Ask questions and get direct feedback on your code and architecture from full-stack engineers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-xl font-bold">
              03
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Placement & Interview Prep</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Resume building, mock technical interviews, and referral introductions to our network of 40+ software companies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero2;
