"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseData } from "../Redux/FatchData";
import {
  FaClock,
  FaUsers,
  FaStar,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaBookOpen,
  FaSearch,
  FaTags,
} from "react-icons/fa";
import Link from "next/link";

const FiltarCourch = () => {
  const dispatch = useDispatch();
  const { loading, courseData, error } = useSelector(
    (state) => state.fatchSlice ?? {}
  );

  const [visibleCount, setVisibleCount] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  if (loading)
    return (
      <div className="text-center text-blue-400 text-lg mt-10">Loading...</div>
    );
  if (error)
    return <div className="text-center text-red-400 mt-10">Error: {error}</div>;

  const items = Array.isArray(courseData)
    ? courseData
    : courseData?.courses ?? courseData?.items ?? [];

  const categories = [
    "All",
    ...new Set(items.map((c) => c.category).filter(Boolean)),
  ];

  const filteredCourses = items.filter((c) => {
    const matchesCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    const matchesSearch = c.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularCourses = [...items]
    .sort((a, b) => b.rating?.stars - a.rating?.stars)
    .slice(0, 4);

  const visibleCourses = showAll
    ? filteredCourses
    : filteredCourses.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300 px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="flex justify-center items-center gap-3 text-4xl md:text-5xl font-extrabold text-blue-400 mb-3">
          <FaBookOpen className="text-white" />
          Explore Our <span className="text-white">Courses</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Learn, grow, and build your IT career with our expert-led professional
          training programs.
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 max-w-5xl mx-auto">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-blue-500/30 rounded-full py-2.5 pl-10 pr-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-blue-500/40 text-blue-400 hover:bg-blue-500/10"
              }`}
            >
              <FaTags />
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleCourses.map((c, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border border-blue-500/30 rounded-2xl p-5 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {c.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{c.subtitle}</p>
            <div className="flex justify-between items-center text-sm mb-3">
              <span className="flex items-center gap-1 text-blue-400">
                <FaClock /> {c.duration}
              </span>
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar /> {c.rating?.stars} ({c.rating?.reviews})
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <FaUsers className="text-blue-400" /> {c.students}+ students
            </div>
           <Link href={`/course/${c.id}`}> <div className="flex justify-between items-center mt-4">
              <button className="px-4 py-1.5 bg-blue-500 hover:bg-blue-400 rounded-lg text-white text-sm transition">
                {c.buttons?.admission ?? "Enroll"}
              </button>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition">
                {c.buttons?.seminar ?? "Join Seminar"}
              </button>
            </div></Link>
          </div>
        ))}
      </div>

      {/* Show More / Show Less */}
      {filteredCourses.length > visibleCount && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center gap-2 mx-auto px-6 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp />
              </>
            ) : (
              <>
                Show More <FaChevronDown />
              </>
            )}
          </button>
        </div>
      )}

      {/* Popular Courses */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-8 flex items-center justify-center gap-2">
          <FaStar className="text-yellow-400" /> Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularCourses.map((c, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border border-yellow-500/40 rounded-2xl p-5 shadow-md hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300"
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-44 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {c.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-300">
                <span className="flex items-center gap-1 text-yellow-400">
                  <FaStar /> {c.rating?.stars}
                </span>
                <span className="flex items-center gap-1 text-blue-400">
                  <FaUsers /> {c.students}
                </span>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                {c.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltarCourch;
