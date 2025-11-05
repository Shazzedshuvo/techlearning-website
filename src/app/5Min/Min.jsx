
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const Min = () => {
  const [cart, setCart] = useState([]);

  const courses = [
    {
      id: 1,
      title: "Learn Next.js from Scratch",
      description: "Build modern web apps with Next.js and Tailwind CSS.",
      youtube: "https://www.youtube.com/embed/1WmNXEVia8I",
      price: 1200,
    },
    {
      id: 2,
      title: "Mastering React",
      description:
        "Understand React hooks, components, and advanced state management.",
      youtube: "https://www.youtube.com/embed/bMknfKXIFA8",
      price: 900,
    },
    {
      id: 3,
      title: "Intro to AI & ChatGPT",
      description:
        "Learn how AI works and build apps with OpenAI tools.",
      youtube: "https://www.youtube.com/embed/t4C0VvJOM1Q",
      price: 1500,
    },
  ];

  // 🛒 Add to Cart Handler
  const addToCart = (course) => {
    if (cart.some((item) => item.id === course.id)) return;
    setCart([...cart, course]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 backdrop-blur-md bg-gray-900/70 border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">TechLearning</h1>
          <div className="space-x-6 flex items-center">
            <Link href="#courses" className="hover:text-blue-400 transition">
              Courses
            </Link>
            <Link href="#blog" className="hover:text-blue-400 transition">
              Blog
            </Link>
            <Link href="#about" className="hover:text-blue-400 transition">
              About
            </Link>
            <div className="relative">
              <FiShoppingCart className="text-xl text-blue-400" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-24 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Learn <span className="text-blue-400">Tech Skills</span> Anytime, Anywhere
        </motion.h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Explore modern web development, AI, and more through practical video
          tutorials and guided projects.
        </p>
        <div className="mt-8">
          <Link
            href="#courses"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold mb-10 text-center">Popular Courses</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-700 flex flex-col"
            >
              <iframe
                className="w-full h-52"
                src={course.youtube}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <p className="text-blue-400 font-semibold mb-3">
                    Price: {course.price}৳
                  </p>
                </div>

                <div className="flex justify-between items-center">
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
                    <FiShoppingCart /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">From Our Blog</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest in AI, coding, and modern web technologies.
          </p>
          <Link
            href="/blog"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-semibold"
          >
            Visit Blog
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TechLearning — Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
};

export default Min;




















// "use client"
// import React from 'react'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// const Min = () => {
//   const courses = [
//     {
//       id: 1,
//       title: 'Learn Next.js from Scratch',
//       description: 'Build modern web apps with Next.js and Tailwind CSS.',
//       youtube: 'https://www.youtube.com/embed/1WmNXEVia8I',
//     },
//     {
//       id: 2,
//       title: 'Mastering React',
//       description: 'Understand React hooks, components, and advanced state management.',
//       youtube: 'https://www.youtube.com/embed/bMknfKXIFA8',
//     },
//     {
//       id: 3,
//       title: 'Intro to AI & ChatGPT',
//       description: 'Learn how AI works and build apps with OpenAI tools.',
//       youtube: 'https://www.youtube.com/embed/t4C0VvJOM1Q',
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
//       {/* Navbar */}
//       <nav className="sticky top-0 backdrop-blur-md bg-gray-900/70 border-b border-gray-800 z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-blue-400">TechLearning</h1>
//           <div className="space-x-6">
//             <Link href="#courses" className="hover:text-blue-400 transition">Courses</Link>
//             <Link href="#blog" className="hover:text-blue-400 transition">Blog</Link>
//             <Link href="#about" className="hover:text-blue-400 transition">About</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="max-w-6xl mx-auto text-center py-24 px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-6xl font-extrabold mb-6"
//         >
//           Learn <span className="text-blue-400">Tech Skills</span> Anytime, Anywhere
//         </motion.h2>
//         <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
//           Explore modern web development, AI, and more through practical video tutorials and guided projects.
//         </p>
//         <div className="mt-8">
//           <Link href="#courses" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
//             Browse Courses
//           </Link>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="max-w-6xl mx-auto px-4 py-20">
//         <h3 className="text-3xl font-bold mb-10 text-center">Popular Courses</h3>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course) => (
//             <motion.div
//               key={course.id}
//               whileHover={{ scale: 1.05 }}
//               className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-700"
//             >
//               <iframe
//                 className="w-full h-52"
//                 src={course.youtube}
//                 title={course.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//               <div className="p-5">
//                 <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
//                 <p className="text-gray-400 mb-4">{course.description}</p>
//                 <Link href={`/courses/${course.id}`} className="text-blue-400 hover:underline">
//                   View Course →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section id="blog" className="bg-gray-900 py-20">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h3 className="text-3xl font-bold mb-6">From Our Blog</h3>
//           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
//             Stay updated with the latest in AI, coding, and modern web technologies.
//           </p>
//           <Link href="/blog" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-semibold">
//             Visit Blog
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} TechLearning — Built with Next.js & Tailwind CSS
//       </footer>
//     </div>
//   )
// }

// export default Min