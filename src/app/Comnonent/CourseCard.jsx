"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { MdOutlineOndemandVideo } from "react-icons/md";
import CourseSection from './../Hero/Hero';

// ✅ Course Card Component
const CourseCard = ({ course, addToCart }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-700 flex flex-col transition-all"
  >
    <iframe
      className="w-full h-56 md:h-64 lg:h-72"
      src={course.youtube}
      title={course.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>

    <div className="p-5 flex flex-col justify-between flex-grow">
      <div>
        <h4 className="text-xl font-semibold mb-2 text-blue-400">{course.title}</h4>
        <p className="text-gray-400 mb-4">{course.description}</p>
        <p className="text-blue-300 font-semibold mb-3"> Price: Free</p>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <Link
          href={`/courses/${course.id}`}
          className="text-blue-400 hover:underline"
        >
          View Course →
        </Link>
        <button
          onClick={() => addToCart(course)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition"
        >
          <MdOutlineOndemandVideo />Vew Now
        </button>
      </div>
    </div>
  </motion.div>
);

// ✅ Courses Section
const CoursesSection = () => {
  const [cart, setCart] = useState([]);

  const courses = [
    {
      id: 1,
      title: "Learn Next.js from Scratch",
      description: "Master modern web app development using Next.js & Tailwind CSS.",
      youtube: "https://www.youtube-nocookie.com/embed/gn_dh66cI8c?si=iEnlY1jQJB9DWO5F&start=4",
      price: 1200,
    },
    {
      id: 2,
      title: "Mastering React.js",
      description: "Deep dive into React hooks, components & real-world projects.",
      youtube: "https://www.youtube-nocookie.com/embed/y7hyxsjcPaY?si=mqGVe1j5f6M2ZLoq&start=4",
      price: 900,
    },
    {
      id: 3,
      title: "AI & ChatGPT Crash Course",
      description: "Learn how AI works & create ChatGPT-powered applications easily.",
      youtube: "https://www.youtube-nocookie.com/embed/vKfqca7AC3c?si=NtaoNQaPNou4Q-iy&start=4",
      price: 1500,
    },
    {
      id: 4,
      title: "Fullstack Web Development",
      description: "Become a fullstack developer using Node.js, Express & MongoDB.",
      youtube: "https://www.youtube-nocookie.com/embed/1WmNXEVia8I",
      price: 1400,
    },
    {
      id: 5,
      title: "Advanced CSS & Tailwind",
      description: "Learn modern styling techniques and responsive design with Tailwind CSS.",
      youtube: "https://www.youtube-nocookie.com/embed/bMknfKXIFA8",
      price: 800,
    },
    {
      id: 6,
      title: "Intro to Data Science",
      description: "Learn Python, Pandas, and basic machine learning techniques.",
      youtube: "https://www.youtube-nocookie.com/embed/t4C0VvJOM1Q",
      price: 1600,
    },
  ];

  const addToCart = (course) => {
    if (cart.some((item) => item.id === course.id)) return;
    setCart([...cart, course]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white px-4 py-20">
    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-35 leading-tight">
       Explor Our <span className="text-blue-400"> Free CourseSection </span>
      </h1>
      {/* ✅ Grid Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" key={courses.id}>
        {courses.slice(0,3).map((course) => (
          <CourseCard key={course.id} course={course} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
