"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentors } from "../Redux/MentorSlice";
import {
  FaStar,
  FaUsers,
  FaTimes,
  FaSearch,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";
import { FiCalendar, FiClock, FiMessageCircle, FiArrowRight } from "react-icons/fi";

const MentorList = () => {
  const dispatch = useDispatch();
  const { loading, mentors, error } = useSelector((state) => state.mentor ?? {});

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookingMentor, setBookingMentor] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [sessionTopic, setSessionTopic] = useState("Code Review & Architecture");

  useEffect(() => {
    dispatch(fetchMentors());
  }, [dispatch]);

  const handleBookSession = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-slate-400 text-sm">Loading expert mentors...</p>
      </div>
    );
  }

  if (error || !mentors || mentors.length === 0) {
    return null;
  }

  const categories = ["All", ...new Set(mentors.map((m) => m.category).filter(Boolean))];

  const filteredMentors = mentors.filter((m) => {
    const matchesCategory = selectedCategory === "All" || m.category === selectedCategory;
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.specialty && m.specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="mentors" className="py-20 md:py-28 bg-[#090d16]/80 border-b border-indigo-500/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            World-Class Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Learn From Active <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Industry Engineers</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our mentors are seasoned tech leads and staff engineers with real-world experience across top software companies and global freelancing platforms.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMentors.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Mentor Photo & Category */}
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-indigo-500/30 group-hover:border-cyan-400 transition-colors shadow-lg">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#07090e] border border-cyan-500/40 text-cyan-300 whitespace-nowrap shadow-md">
                    {m.experience || "5+ Years"}
                  </span>
                </div>

                {/* Name & Role */}
                <div className="text-center space-y-1 mb-4">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {m.name}
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium">{m.designation}</p>
                </div>

                {/* Specialty Pill */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-4 text-center">
                  <span className="text-[10px] text-slate-500 block uppercase font-semibold mb-0.5">Specialty</span>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
                    {m.specialty}
                  </p>
                </div>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4 text-center">
                  {m.bio}
                </p>
              </div>

              {/* Booking Button */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex gap-2 text-slate-400 text-sm">
                  {m.socials?.linkedin && (
                    <a href={m.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400">
                      <FaLinkedin />
                    </a>
                  )}
                  {m.socials?.github && (
                    <a href={m.socials.github} target="_blank" rel="noreferrer" className="hover:text-white">
                      <FaGithub />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => {
                    setBookingMentor(m);
                    setIsBooked(false);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 text-xs font-semibold flex items-center gap-1 transition"
                >
                  <FiCalendar className="text-xs" /> Book 1:1
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 1-on-1 Mentorship Booking Modal */}
      {bookingMentor && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#0e1322] border border-cyan-500/30 rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl text-slate-200">
            <button
              onClick={() => setBookingMentor(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <FaTimes />
            </button>

            {!isBooked ? (
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                  Private Mentorship Session
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  Book 1-on-1 with {bookingMentor.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6">{bookingMentor.designation}</p>

                <form onSubmit={handleBookSession} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Session Focus Area</label>
                    <select
                      value={sessionTopic}
                      onChange={(e) => setSessionTopic(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option>Code Review & Architecture</option>
                      <option>Career Guidance & Resume Review</option>
                      <option>Mock Technical Interview</option>
                      <option>Freelancing Strategy (Upwork/Fiverr)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arif Hossain"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email for Google Meet Link</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <strong className="text-white">45 Minutes</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Fee for Enrolled Students:</span>
                      <strong className="text-emerald-400">FREE (Included in Course)</strong>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs transition shadow-lg shadow-cyan-500/20"
                  >
                    Confirm 1:1 Booking
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <FaCheckCircle className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Session Scheduled!</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto mb-6">
                  {bookingMentor.name} has reserved your 1:1 session for <strong>{sessionTopic}</strong>. Check your inbox for the calendar invite and Google Meet link.
                </p>
                <button
                  onClick={() => setBookingMentor(null)}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs transition"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MentorList;
