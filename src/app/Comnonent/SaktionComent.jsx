"use client";
import React from "react";
import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";

const SaktionComent = () => {
  const reviews = [
    {
      id: 1,
      name: "Arif Hossain",
      role: "Graphic Design & Branding Graduate",
      course: "Creative Graphic Design Fundamentals",
      text: "The mentors are genuinely patient and supportive. The portfolio review sessions helped me land my first international design contract on Behance. Highly recommended for beginners!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      role: "Full-Stack Web Developer",
      course: "Mastering MERN Stack Web Development",
      text: "TechLearning creates a community of serious developers. We solved real architectural problems together, built authentication from scratch, and got interview coaching that actually worked.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 3,
      name: "Rakibul Islam",
      role: "Digital Marketing Specialist",
      course: "Digital Marketing Strategy & SEO Mastery",
      text: "The practical Google Ads budget tests and live SEO audits set this academy apart from purely theoretical courses. I was able to grow my agency's client revenue by 300%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#090d16]/70 border-b border-indigo-500/10 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Student Satisfaction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            What Our <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Learners Say</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparent feedback from our alumni who completed intensive training and transitioned into digital careers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <FaQuoteLeft className="text-indigo-400/40 text-2xl" />
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(rev.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight flex items-center gap-1.5">
                    {rev.name}
                    <FaCheckCircle className="text-emerald-400 text-[10px]" title="Verified Graduate" />
                  </h4>
                  <p className="text-[11px] text-slate-400">{rev.role}</p>
                  <p className="text-[10px] text-indigo-400/90 font-medium truncate max-w-[190px]">
                    {rev.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SaktionComent;