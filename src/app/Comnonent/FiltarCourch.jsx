"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseData } from "../Redux/FatchData";
import { addToCart } from "../Redux/cartSlice";
import Link from "next/link";
import {
  FaStar,
  FaUsers,
  FaBookOpen,
  FaTimes,
  FaSearch,
  FaTags,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
} from "react-icons/fa";
import { FiClock, FiVideo, FiShoppingCart, FiArrowRight, FiEye, FiCheck } from "react-icons/fi";

const Courses = () => {
  const dispatch = useDispatch();
  const { loading, courseData, error } = useSelector((state) => state.fatch ?? {});

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [visibleCount, setVisibleCount] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [addedCourseId, setAddedCourseId] = useState(null);

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  const handleAddToCart = (e, course) => {
    e.stopPropagation();
    dispatch(addToCart(course));
    setAddedCourseId(course.id);
    setTimeout(() => setAddedCourseId(null), 1500);
  };

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-400 font-medium">Loading course catalog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 text-center">
        <p className="text-rose-400">Failed to load courses: {error}</p>
      </div>
    );
  }

  if (!courseData || courseData.length === 0) {
    return (
      <div className="py-24 text-center text-slate-400">
        No courses available at this moment.
      </div>
    );
  }

  // Dynamic categories with counts
  const categories = [
    "All",
    ...new Set(courseData.map((c) => c.category).filter(Boolean)),
  ];

  // Filter courses
  let filtered = courseData.filter((c) => {
    const matchesCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.description && c.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort courses
  if (sortBy === "rating") {
    filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortBy === "price-low") {
    filtered = [...filtered].sort((a, b) => (a.offerPrice || a.fee) - (b.offerPrice || b.fee));
  } else if (sortBy === "price-high") {
    filtered = [...filtered].sort((a, b) => (b.offerPrice || b.fee) - (a.offerPrice || a.fee));
  }

  const visibleCourses = showAll ? filtered : filtered.slice(0, visibleCount);

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#090d16]/70 border-b border-indigo-500/10 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Career-Ready Programs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Explore Our <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Complete Courses</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Gain job-ready practical experience with structured curriculums, live classes, real projects, and 1-on-1 mentor guidance.
          </p>
        </div>

        {/* Filter Toolbar: Search, Categories & Sorting */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3.5 top-3.5 text-slate-500 text-sm" />
              <input
                type="text"
                placeholder="Search by topic, skill, title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-xs text-slate-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-xl py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                      : "bg-slate-900/70 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/30 border border-slate-800 rounded-2xl">
            <p className="text-slate-400 mb-2">No courses found matching "{searchTerm}"</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="text-indigo-400 hover:underline text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleCourses.map((c) => {
              const isAdded = addedCourseId === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCourse(c)}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    {/* Course Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
                        {c.category}
                      </span>
                      {c.rating >= 4.9 && (
                        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Course Info */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <FiClock className="text-cyan-400" /> {c.duration}
                        </span>
                        <span className="flex items-center gap-1 text-amber-400 font-semibold">
                          <FaStar /> {c.rating} ({c.totalRatings || c.students})
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition line-clamp-2 leading-snug">
                        {c.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing & Cart Button */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-800/70 flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-base font-black text-indigo-400">
                        ৳{(c.offerPrice || c.fee).toLocaleString()}
                      </div>
                      {c.offerPrice && c.fee > c.offerPrice && (
                        <span className="text-[11px] text-slate-500 line-through">
                          ৳{c.fee.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleAddToCart(e, c)}
                        className={`p-2.5 rounded-xl font-semibold text-xs flex items-center gap-1.5 transition ${
                          isAdded
                            ? "bg-emerald-500 text-white"
                            : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 active:scale-95"
                        }`}
                        title="Add to Cart"
                      >
                        {isAdded ? <FiCheck /> : <FiShoppingCart />}
                      </button>

                      <Link
                        href={`/course/${c.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
                      >
                        Details
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Show More / Show Less Toggle */}
        {filtered.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 transition text-sm font-semibold"
            >
              {showAll ? (
                <>Show Less <FaChevronUp /></>
              ) : (
                <>Show All ({filtered.length}) Courses <FaChevronDown /></>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Course Quick View Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#0e1322] border border-indigo-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-slate-200 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <FaTimes />
            </button>

            <img
              src={selectedCourse.img}
              alt={selectedCourse.title}
              className="w-full h-56 object-cover rounded-xl mb-5 border border-slate-800"
            />

            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
              {selectedCourse.category}
            </span>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedCourse.title}
            </h3>

            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              {selectedCourse.courseOverview || selectedCourse.description}
            </p>

            {/* Course Includes Checklist */}
            <div className="mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Curriculum Highlights & Deliverables:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {(selectedCourse.courseIncludes || [
                  "Hands-on Projects & Code Architecture",
                  "1-on-1 Senior Mentorship Sessions",
                  "Verified Completion Certificate",
                  "Dedicated Career Placement Referral",
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Bottom Price & CTAs */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Total Admission Fee:</span>
                <div className="text-2xl font-black text-indigo-400">
                  ৳{(selectedCourse.offerPrice || selectedCourse.fee).toLocaleString()}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={(e) => {
                    handleAddToCart(e, selectedCourse);
                    setSelectedCourse(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition shadow-lg shadow-indigo-500/25 flex items-center gap-2"
                >
                  <FiShoppingCart /> Add to Cart
                </button>

                <Link
                  href={`/course/${selectedCourse.id}`}
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
                >
                  Full Syllabus
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;