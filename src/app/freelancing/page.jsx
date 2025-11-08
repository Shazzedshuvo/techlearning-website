"use client";
import React from "react";
import {
  FaGlobe,
  FaUserFriends,
  FaLaptopCode,
  FaChartLine,
  FaUserTie,
  FaUsers,
  FaGraduationCap,
  FaRocket,
  FaChalkboardTeacher,
  FaHandHoldingHeart,
  FaAward,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";

const FreelancingPage = () => {
  const marketplaces = [
    "Upwork",
    "Fiverr",
    "Freelancer",
    "Toptal",
    "PeoplePerHour",
    "Guru",
    "99Designs",
    "Truelancer",
    "SimplyHired",
    "+9 More",
  ];

  const stats = [
    { icon: <FaGraduationCap />, value: "90,000+", label: "Successful Students" },
    { icon: <FaUserTie />, value: "34,000+", label: "Expert Freelancers" },
    { icon: <FaBriefcase />, value: "42,000+", label: "Skilled Job Holders" },
    { icon: <FaUsers />, value: "600+", label: "Industry Experts" },
    { icon: <FaChartLine />, value: "89%", label: "Success Ratio" },
    { icon: <FaGlobe />, value: "3,000+", label: "Companies" },
  ];

  const whoCan = [
    { icon: <FaUserFriends />, title: "Homemakers" },
    { icon: <FaBriefcase />, title: "Job Seekers" },
    { icon: <FaRocket />, title: "Entrepreneurs" },
    { icon: <FaGraduationCap />, title: "Students" },
    { icon: <FaGlobe />, title: "Immigrants" },
    { icon: <FaLaptopCode />, title: "Anyone Interested in Freelancing" },
  ];

  const initiatives = [
    { icon: <FaChalkboardTeacher />, value: "1,000,000+", label: "Students received career counseling" },
    { icon: <FaHandHoldingHeart />, value: "6,000+", label: "Women got IT training (Free Scholarship)" },
    { icon: <FaRocket />, value: "5,000+", label: "Students got online internship facility" },
    { icon: <FaAward />, value: "200+", label: "Physically challenged people trained" },
    { icon: <FaHandHoldingHeart />, value: "12,000+", label: "Financially deprived got scholarships" },
    { icon: <FaUsers />, value: "500+", label: "Polytechnics attached for training" },
    { icon: <FaGraduationCap />, value: "6,000+", label: "Senior citizens got scholarships" },
    { icon: <FaChartLine />, value: "45+", label: "Trendy courses for professional training" },
  ];

  const courses = [
    "Graphic & Multimedia",
    "Web & Software",
    "Digital Marketing",
    "3D Animation & Visualization",
    "Film & Media",
    "1 Year Diploma Programs",
    "Networking & Cyber Security",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 px-6 py-12">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
          Freelancing
        </h1>
        <p className="text-gray-400 leading-relaxed text-lg">
          According to a survey done by Bangladesh ICT Division, more than 6
          lakh freelancers are currently working in the global marketplace. It
          has become a trendy source of income, helping thousands gain financial
          stability through independent work. Over 1 billion people globally
          have entered freelancing by mastering their technical skills. We offer
          more than 30 demanding courses to help you build your freelancing
          career.
        </p>
      </section>
      <div>
         <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 transform hover:-translate-y-1 w-160 items-center mx-auto p-2 m-10">
          <iframe
            className="w-full h-64 sm:h-72 md:h-80 lg:h-90"
            src="https://www.youtube-nocookie.com/embed/S9T4uqxVYO0?si=HuEprsLN4wXmUd6s&amp;start=4"
            title="Learn Next.js from Scratch"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="p-5 bg-gray-900/70 backdrop-blur-md border-t border-gray-700">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-2">
              Learn <span className="text-white">Next.js</span> from Scratch
            </h4>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              lorem....
            </p>
            <p className="text-blue-300 font-semibold text-base sm:text-lg">
             
            </p>
          </div>
        </div></div>

      {/* MARKETPLACES */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <FaGlobe className="text-blue-400 text-3xl" />
          Available Workplaces
        </h2>
        <p className="text-gray-400 mb-6">
          Freelancing is a great option if you prefer an independent career.
          Marketplaces offer thousands of jobs daily — all you need is the
          skill!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {marketplaces.map((market, i) => (
            <div
              key={i}
              className="bg-blue-900/20 border border-blue-800 text-blue-300 font-semibold py-3 rounded-xl text-center hover:scale-105 hover:bg-blue-800/30 transition-all duration-300"
            >
              {market}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <FaChartLine className="text-green-400 text-3xl" />
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-gray-800/40 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-3 text-blue-400 mx-auto">{s.icon}</div>
              <h3 className="text-2xl font-bold text-white">{s.value}</h3>
              <p className="text-gray-400 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO CAN DO FREELANCING */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <FaUserFriends className="text-yellow-400 text-3xl" />
          Who Can Do Freelancing?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {whoCan.map((item, i) => (
            <div
              key={i}
              className="bg-gray-800/40 p-6 rounded-xl text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-3 text-blue-400">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <FaRocket className="text-pink-400 text-3xl" />
          Our Initiatives on Freelancing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="bg-gray-800/40 p-6 rounded-xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-3 text-blue-400">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white">{item.value}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <FaLaptopCode className="text-cyan-400 text-3xl" />
          Our Popular Courses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-blue-900/20 border border-blue-800 text-blue-300 font-semibold py-4 rounded-xl text-center hover:bg-blue-800/40 hover:scale-105 transition-all duration-300"
            >
              {course}
            </div>
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
          <FaBuilding className="text-blue-400 text-3xl" />
          Our Infrastructure
        </h2>
        <p className="text-gray-400">
          We take pride in our top-rated freelancers, modern labs, professional mentors, and career-focused training environment that builds global freelancers every year.
        </p>
      </section>
    </div>
  );
};

export default FreelancingPage;
