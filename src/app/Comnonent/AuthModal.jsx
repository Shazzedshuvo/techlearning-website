"use client";
import React, { useState } from "react";
import { FiX, FiMail, FiLock, FiUser, FiCheckCircle } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedInUser({
      name: tab === "login" ? (email.split("@")[0] || "Student") : name,
      email: email,
    });
  };

  const handleDemoLogin = (role) => {
    setLoggedInUser({
      name: role === "student" ? "Tanvir Ahmed (Learner)" : "Sheikh Sakibul (Mentor)",
      email: role === "student" ? "student@techlearning.com" : "mentor@techlearning.com",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0d1220] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
        >
          <FiX className="text-xl" />
        </button>

        {!loggedInUser ? (
          <div>
            {/* Header Tabs */}
            <div className="flex border-b border-slate-800 mb-6">
              <button
                onClick={() => setTab("login")}
                className={`pb-3 text-sm font-semibold flex-1 border-b-2 transition ${
                  tab === "login"
                    ? "border-indigo-500 text-indigo-400"
                    : "border-transparent text-slate-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setTab("register")}
                className={`pb-3 text-sm font-semibold flex-1 border-b-2 transition ${
                  tab === "register"
                    ? "border-indigo-500 text-indigo-400"
                    : "border-transparent text-slate-400 hover:text-white"
                }`}
              >
                Create Account
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {tab === "login" ? "Welcome back!" : "Start your tech journey"}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {tab === "login"
                ? "Enter your credentials to access your courses & projects."
                : "Join thousands of learners building modern tech careers."}
            </p>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => handleDemoLogin("student")}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 transition"
              >
                <FaGoogle className="text-red-400" /> Google
              </button>
              <button
                onClick={() => handleDemoLogin("student")}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 transition"
              >
                <FaGithub /> GitHub
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-slate-800 w-full" />
              <span className="bg-[#0d1220] px-3 text-[11px] text-slate-500 uppercase tracking-wider absolute">
                or email
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === "register" && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shakil Hossain"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition mt-2"
              >
                {tab === "login" ? "Sign In" : "Create Free Account"}
              </button>
            </form>

            {/* Quick Demo Login */}
            <div className="mt-5 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/15 flex items-center justify-between">
              <span className="text-[11px] text-indigo-300">Quick Test:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDemoLogin("student")}
                  className="px-2.5 py-1 rounded-md bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-[11px] font-medium transition"
                >
                  Demo Student
                </button>
                <button
                  onClick={() => handleDemoLogin("mentor")}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition"
                >
                  Demo Mentor
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <FiCheckCircle className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Welcome, {loggedInUser.name}!</h3>
            <p className="text-sm text-slate-300 mb-6">
              You are signed in as <strong className="text-indigo-400">{loggedInUser.email}</strong>.
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition"
              >
                Continue Learning
              </button>
              <button
                onClick={() => setLoggedInUser(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
