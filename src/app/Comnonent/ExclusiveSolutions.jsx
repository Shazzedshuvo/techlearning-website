"use client";
import React from "react";
import { FaReact, FaBriefcase, FaVideo } from "react-icons/fa";

const solutions = [
  {
    id: 1,
    title: "Lifetime Support",
    description:
      "The bond between Creative IT and its students is lifelong. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing their course. The personalized feedback that you receive from us, helps you grow, every day.",
    icon: <FaReact className="text-5xl text-blue-400" />,
    border: "border-blue-400",
  },
  {
    id: 2,
    title: "Job Placement Support",
    description:
      "Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager. So far this department has helped more than 42,000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 46% in 2024.",
    icon: <FaBriefcase className="text-5xl text-green-400" />,
    border: "border-green-400",
  },
  {
    id: 3,
    title: "Class Videos",
    description:
      "No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.",
    icon: <FaVideo className="text-5xl text-purple-400" />,
    border: "border-purple-400",
  },
];

const ExclusiveSolutionsTransparent = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-950 text-white px-6 py-20">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400">
          Exclusive Solutions that Set Us Apart
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Our aim is to make your learning experience the best possible by providing you
          with additional facilities that will help you to grow without bounds.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {solutions.map((sol) => (
          <div
            key={sol.id}
            className={`border ${sol.border} rounded-3xl p-8 flex flex-col items-start bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all transform hover:-translate-y-1`}
          >
            {/* 1st Icon */}
            <div className="mb-6">{sol.icon}</div>

            {/* 2nd Title */}
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
              {sol.title}
            </h3>

            {/* 3rd Description */}
            <p className="text-white/80 text-sm md:text-base">{sol.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveSolutionsTransparent;
