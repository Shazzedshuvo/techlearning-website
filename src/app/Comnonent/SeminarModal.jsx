"use client";
import React, { useState } from "react";
import { FiX, FiCheckCircle, FiCalendar, FiClock, FiMapPin, FiUser, FiMail, FiPhone } from "react-icons/fi";

const SeminarModal = ({ isOpen, onClose, seminar }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mode, setMode] = useState("online");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const eventTitle = seminar?.title || "Exclusive Career Guidance & IT Seminar";
  const eventDate = seminar?.date || "Upcoming Saturday • 4:00 PM";
  const eventVenue = seminar?.venue || "TechLearning Campus, Dhanmondi & Zoom Live";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleDone = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0e1322] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
        >
          <FiX className="text-xl" />
        </button>

        {!isSuccess ? (
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
              Free Live Workshop
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{eventTitle}</h3>
            
            {/* Event Info Card */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <FiClock className="text-indigo-400" />
                <span>{eventDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-indigo-400" />
                <span>{eventVenue}</span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name</label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mahfuzur Rahman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Mobile Number</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="017XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Attendance Preference</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode("online")}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition ${
                      mode === "online"
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                        : "border-slate-800 bg-slate-900 text-slate-400"
                    }`}
                  >
                    Online via Zoom
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("offline")}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition ${
                      mode === "offline"
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                        : "border-slate-800 bg-slate-900 text-slate-400"
                    }`}
                  >
                    In-Person Campus
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition mt-2"
              >
                Register For Free Seat
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <FiCheckCircle className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Registration Confirmed!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-white">{name}</strong>! We have reserved your seat. We have sent the event calendar invite and Zoom link to <strong className="text-indigo-400">{email}</strong>.
            </p>
            <button
              onClick={handleDone}
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-500/25"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeminarModal;
