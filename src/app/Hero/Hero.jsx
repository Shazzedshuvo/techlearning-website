"use client";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const CourseSection = () => {
  const [cart, setCart] = useState([]);

  const course = {
    id: 1,
    title: "Learn Next.js from Scratch",
    description:
      "Master building modern, fast, and scalable web applications using Next.js and Tailwind CSS. Perfect for beginners and developers wanting to upgrade their skills.",
    price: 1200,
  };

  const addToCart = (course) => {
    if (cart.some((item) => item.id === course.id)) return;
    setCart([...cart, course]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white flex flex-col justify-center items-center px-4 py-16 md:py-20">
      <div className="container max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ✅ Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 leading-tight">
            Learn <span className="text-white">Next.js</span> from Scratch
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {course.description}
          </p>

          <p className="text-blue-400 font-semibold text-lg sm:text-xl">
             Price: {course.price}৳
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
            <button
              onClick={() => addToCart(course)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition w-full sm:w-auto"
            >
              <FiShoppingCart /> Add to Cart
            </button>

            <Link
              href={`/courses/${course.id}`}
              className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full font-semibold transition w-full sm:w-auto text-center"
            >
              View Course
            </Link>
          </div>
        </div>

        {/* ✅ Right Side (Responsive Video Card) */}
        <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 transform hover:-translate-y-1 w-full">
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
              {course.description.substring(0, 100)}...
            </p>
            <p className="text-blue-300 font-semibold text-base sm:text-lg">
              Price: {course.price}৳
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;