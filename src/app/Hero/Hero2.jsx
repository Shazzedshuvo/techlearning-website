"use client";
import Link from "next/link";
import React from "react";
import {
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPaintBrush,
  FaCube,
  FaUserEdit,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";
// import Saktion from "./Saktion";

const Hero2 = () => {
  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white flex flex-col justify-center items-center px-4 py-20 containe ">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-35 leading-tight">
          Start Your <span className="text-blue-400">Learning Journey </span>
        </h1>

        {/* Cards Container */}
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 🔵 Online Course Card */}
          <div className="relative bg-gradient-to-br from-blue-900/20 via-gray-900 to-blue-950 border border-blue-500/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] transition-all duration-500">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
              Online Courses
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-center mt-6 mb-8 text-gray-300">
              Build Your Skills, Learn from Industry Experts!
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-8">
              {/* 3D Animation */}
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center hover:bg-blue-600/10 border border-blue-500/20 transition-all duration-300">
                <FaCube className="text-5xl text-yellow-400 mb-3" />
                <p className="text-gray-200 font-medium text-sm">
                  3D Animation Fundamentals
                </p>
              </div>

              {/* Graphic Design */}
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center hover:bg-blue-600/10 border border-blue-500/20 transition-all duration-300">
                <FaPaintBrush className="text-5xl text-pink-400 mb-3" />
                <p className="text-gray-200 font-medium text-sm">
                  Graphic Design Masterclass
                </p>
              </div>

              {/* Python */}
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center hover:bg-blue-600/10 border border-blue-500/20 transition-all duration-300">
                <FaPython className="text-5xl text-yellow-300 mb-3" />
                <p className="text-gray-200 font-medium text-sm">
                  Python Programming Essentials
                </p>
              </div>

              {/* UI/UX */}
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center hover:bg-blue-600/10 border border-blue-500/20 transition-all duration-300">
                <SiFigma className="text-5xl text-purple-400 mb-3" />
                <p className="text-gray-200 font-medium text-sm">
                  UI/UX Design Professional
                </p>
              </div>
            </div>

           <Link href="/course"> <p className="text-blue-400 text-center mt-8 cursor-pointer hover:text-blue-300 transition">
              Explore all creative courses →
            </p></Link>
          </div>

          {/* 🟣 Programming / Skill Course Card */}
          <div className="relative bg-gradient-to-br from-purple-900/20 via-gray-900 to-purple-950 border border-purple-500/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-[0_0_45px_rgba(168,85,247,0.45)] transition-all duration-500">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
              Programming Courses
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-center mt-6 mb-8 text-gray-300">
              Learn Popular Tech Stacks & Become a Pro Developer
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center mt-8">
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                <SiNextdotjs className="text-5xl text-white mb-3" />
                <p className="text-gray-200 font-medium">Next.js</p>
              </div>
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                <FaReact className="text-5xl text-cyan-400 mb-3" />
                <p className="text-gray-200 font-medium">React.js</p>
              </div>
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                <FaNodeJs className="text-5xl text-green-500 mb-3" />
                <p className="text-gray-200 font-medium">Node.js</p>
              </div>
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                <SiMongodb className="text-5xl text-green-400 mb-3" />
                <p className="text-gray-200 font-medium">MongoDB</p>
              </div>
              <div className="bg-gray-800 rounded-xl py-6 flex flex-col items-center border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                <SiTailwindcss className="text-5xl text-sky-400 mb-3" />
                <p className="text-gray-200 font-medium">Tailwind</p>
              </div>
            </div>

            <Link href= "/course"><button><p className="text-purple-400 text-center mt-8 cursor-pointer hover:text-purple-300 transition">
              Explore all 30+ programming courses →
            </p></button></Link>
          </div>
        </div>
      </section>
      {/* <Saktion></Saktion> */}
    </div>
  );
};

export default Hero2;
