"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }, 4000);
  };

  const campuses = [
    {
      city: "Dhaka (Dhanmondi)",
      address: "Momtaz Plaza (4th Floor), House #7, Road #4, Dhanmondi, Dhaka-1205",
      phone: "+880 1719 052334",
      hours: "Saturday - Thursday: 9:00 AM - 8:00 PM",
    },
    {
      city: "Dhaka (Banasree)",
      address: "Daisy Garden, House #14 (Level-5), Block A, Main Road, Banasree, Dhaka",
      phone: "+880 1624 666000",
      hours: "Saturday - Thursday: 9:00 AM - 8:00 PM",
    },
    {
      city: "Chattogram",
      address: "Agrabad Commercial Area, Akhtaruzzaman Center (6th Floor), Chattogram",
      phone: "+880 1777 308777",
      hours: "Saturday - Wednesday: 9:30 AM - 7:30 PM",
    },
  ];

  return (
    <div className="bg-[#07090e] text-slate-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow-hero pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto space-y-4 relative z-10">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          We're Here to Help You <br />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Build Your Future
          </span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Have questions regarding our course curriculum, admission schedules, or scholarship eligibility? Visit our campuses or write to us directly.
        </p>
      </div>

      {/* Main Grid: Form + Campuses */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Contact Form (Left) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Send Us an Inquiry</h2>
            <p className="text-xs text-slate-400 mb-8">
              Fill in the form below and an academic counselor will get in touch with you within 2 hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 text-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <FaCheckCircle className="text-4xl text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-1">Inquiry Received!</h3>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Our admissions counselor will call or email you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Full Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-3.5 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shakil Hossain"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mobile Number</label>
                    <div className="relative">
                      <FiPhone className="absolute left-3.5 top-3.5 text-slate-500" />
                      <input
                        type="tel"
                        required
                        placeholder="017XXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-3.5 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Interested Track</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="">Select a Program</option>
                      <option value="MERN">Full-Stack MERN Development</option>
                      <option value="Next">React & Next.js Masterclass</option>
                      <option value="UIUX">UI/UX Product Design</option>
                      <option value="Marketing">Digital Marketing & SEO</option>
                      <option value="Freelancing">Freelance Career Cell</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message / Specific Question</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your background or questions about the course..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 transition flex items-center justify-center gap-2"
                >
                  <FiSend /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Campuses & Hotline Info (Right) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">Our Campuses</h3>
            
            <div className="space-y-6">
              {campuses.map((camp, idx) => (
                <div key={idx} className="pb-6 border-b border-slate-800 last:border-b-0 last:pb-0 space-y-1.5">
                  <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-xs" /> {camp.city}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{camp.address}</p>
                  <div className="flex items-center gap-2 text-xs text-indigo-300 font-semibold pt-1">
                    <FaPhoneAlt className="text-[10px]" /> {camp.phone}
                  </div>
                  <div className="text-[11px] text-slate-500">{camp.hours}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Help Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-slate-900/80 border border-indigo-500/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl flex-shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Direct Admissions Hotline</h4>
              <p className="text-xs text-slate-300">+880 1719 052334 (9:00 AM - 9:00 PM)</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;
