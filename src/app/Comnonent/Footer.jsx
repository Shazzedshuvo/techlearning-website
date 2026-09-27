"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiCode, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const Footer = ({ onOpenAuth }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#05070c] text-slate-400 border-t border-indigo-500/15">
      
      {/* 🔹 High-Impact Pre-Footer CTA */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-b border-indigo-500/20 py-16 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            Admissions Open For 2026
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready to Accelerate Your <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Tech Career?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Enroll today to reserve your seat in the next cohort. Get direct 1-on-1 mentorship, complete hands-on projects, and prepare for high-paying roles.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/course"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
            >
              Browse All Courses
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition"
            >
              Book Free Campus Tour
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Company Bio */}
        <div className="lg:col-span-4 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
              <FiCode className="text-xl" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              Tech<span className="text-cyan-400">Learning</span>
            </span>
          </Link>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Empowering passionate individuals with industry-proven software development, UI/UX design, and freelancing skills. Practical, outcome-driven, and career-oriented.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500/40 transition">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Courses</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/course" className="hover:text-cyan-400 transition">MERN Stack Development</Link></li>
            <li><Link href="/course" className="hover:text-cyan-400 transition">React & Next.js Pro</Link></li>
            <li><Link href="/course" className="hover:text-cyan-400 transition">UI/UX Design Masterclass</Link></li>
            <li><Link href="/course" className="hover:text-cyan-400 transition">Graphic Design Fundamentals</Link></li>
            <li><Link href="/course" className="hover:text-cyan-400 transition">Digital Marketing & SEO</Link></li>
          </ul>
        </div>

        {/* Learning Resources */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/ebook" className="hover:text-cyan-400 transition">Free E-Books & Cheat Sheets</Link></li>
            <li><Link href="/mentor" className="hover:text-cyan-400 transition">Our Mentors Directory</Link></li>
            <li><Link href="/freelancing" className="hover:text-cyan-400 transition">Freelance Career Cell</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition">About Our Mission</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition">Campus Locations</Link></li>
          </ul>
        </div>

        {/* Campus & Contact */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Campuses & Contact</h4>
          <div className="space-y-2 text-xs text-slate-400">
            <p className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="mt-0.5 text-indigo-400 flex-shrink-0" />
              <span>Momtaz Plaza (4th Floor), House #7, Road #4, Dhanmondi, Dhaka-1205</span>
            </p>
            <p className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="mt-0.5 text-indigo-400 flex-shrink-0" />
              <span>Daisy Garden, House #14, Main Road, Banasree, Dhaka</span>
            </p>
            <p className="flex items-center gap-2.5 pt-1">
              <FaPhoneAlt className="text-cyan-400 flex-shrink-0" />
              <span className="text-slate-200 font-semibold">+880 1719 052334 • +880 1624 666000</span>
            </p>
            <p className="flex items-center gap-2.5">
              <FaEnvelope className="text-cyan-400 flex-shrink-0" />
              <span className="text-slate-200">admissions@techlearning.com</span>
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="pt-3">
            <span className="text-xs font-semibold text-slate-300 block mb-2">Subscribe to Tech Updates</span>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
              >
                Join
              </button>
            </form>
            {isSubscribed && (
              <span className="text-[11px] text-emerald-400 mt-1 block">Subscribed successfully!</span>
            )}
          </div>
        </div>

      </div>

      {/* 🔹 Payment Badges & Copyright */}
      <div className="border-t border-slate-900 bg-[#040609] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} <strong>TechLearning Ltd.</strong> All rights reserved. Registered Educational Institute.
          </div>

          {/* Payment Gateways */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-[11px] text-slate-500 font-medium">Verified Payment Gateways:</span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-bold text-pink-400">
                bKash
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-bold text-orange-400">
                Nagad
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-bold text-purple-400">
                Rocket
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-bold text-blue-400">
                Visa / MasterCard
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-bold text-emerald-400">
                SSLCommerz
              </span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
