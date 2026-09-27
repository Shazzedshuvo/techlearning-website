"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiClock, FiMapPin, FiCalendar, FiArrowRight, FiUsers, FiCheckCircle } from "react-icons/fi";
import SeminarModal from "./SeminarModal";

export default function UpcomingEvents() {
  const [selectedSeminar, setSelectedSeminar] = useState(null);

  const events = [
    {
      id: 1,
      title: "Full-Stack Web Development Career Roadmap 2026",
      date: "Saturday, 15 March 2026 • 4:00 PM - 6:00 PM",
      mode: "HYBRID",
      venue: "Daisy Garden, House 14, Main Road, Banasree, Dhaka & Zoom Live",
      mentor: "Sheikh Sakibul Hasan (Senior MERN Lead)",
      description: "Learn how to build full-stack projects, prepare an ATS-friendly portfolio, and target international remote jobs with modern Next.js and TypeScript.",
      img: "/e1.jpg",
      seatsLeft: 14,
    },
    {
      id: 2,
      title: "UI/UX Design Systems & Figma Interactive Prototyping",
      date: "Friday, 21 March 2026 • 6:30 PM - 8:30 PM",
      mode: "ONLINE",
      venue: "Live Interactive Session via Zoom HD",
      mentor: "Zayed Uddin (Product Designer)",
      description: "Master user research, auto-layout 5.0, variables, and handoff to front-end developers for commercial client projects.",
      img: "/e2.jpg",
      seatsLeft: 22,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07090e] border-b border-indigo-500/10 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Free Live Masterclasses
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Upcoming <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Seminars & Workshops</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Join free career orientation seminars. Get direct advice from industry veterans on career planning and portfolio strategies.
            </p>
          </div>

          <button
            onClick={() => setSelectedSeminar(events[0])}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition group self-start md:self-auto"
          >
            <span>Reserve Priority Seat</span>
            <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Event Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={ev.img}
                    alt={ev.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500 text-slate-950 shadow-md">
                      {ev.mode}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md text-slate-200 border border-slate-700">
                      Free Entry
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs font-medium text-amber-300 border border-slate-700 flex items-center gap-1.5">
                    <FiUsers className="text-xs" /> {ev.seatsLeft} Seats Available
                  </span>
                </div>

                {/* Event Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <FiClock /> {ev.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-slate-500 flex-shrink-0" />
                      <span className="truncate">{ev.venue}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                    {ev.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {ev.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
                    <strong className="text-white">Speaker:</strong> {ev.mentor}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => setSelectedSeminar(ev)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2 active:scale-95"
                >
                  Register For Free Seat <FiArrowRight />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Seminar Registration Modal */}
      {selectedSeminar && (
        <SeminarModal
          isOpen={!!selectedSeminar}
          onClose={() => setSelectedSeminar(null)}
          seminar={selectedSeminar}
        />
      )}
    </section>
  );
}
