"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchCourseData } from "../../Redux/FatchData";
import { addToCart } from "../../Redux/cartSlice";
import {
  FaStar,
  FaUserGraduate,
  FaCheckCircle,
  FaClock,
  FaBookOpen,
  FaLaptopCode,
  FaArrowLeft,
  FaShareAlt,
} from "react-icons/fa";
import { FiCheck, FiShoppingCart, FiShield, FiAward, FiPlay } from "react-icons/fi";
import VideoModal from "../../Comnonent/VideoModal";

const SingleCoursePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const courseId = params?.id;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Redux store selector (using state.fatch)
  const { loading, courseData, error } = useSelector((state) => state.fatch ?? {});

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  const course = Array.isArray(courseData)
    ? courseData.find((c) => c.id === Number(courseId))
    : null;

  const handleAddToCart = () => {
    if (course) {
      dispatch(addToCart(course));
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  if (loading || !courseData) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-slate-300">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
        <h2 className="text-xl font-semibold text-white">Loading Course Curriculum...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-rose-400 mb-2">Error Loading Course</h2>
        <p className="text-slate-400 mb-6">{error}</p>
        <Link href="/course" className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold">
          Return to All Courses
        </Link>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Course Not Found</h2>
        <p className="text-slate-400 mb-6">The requested course could not be located in our catalog.</p>
        <Link href="/course" className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold">
          Back to Courses
        </Link>
      </div>
    );
  }

  const {
    title,
    duration,
    category,
    lectures,
    projects,
    description,
    fee,
    offerPrice,
    rating,
    totalRatings,
    students,
    img,
    courseIncludes,
    courseOverview,
  } = course;

  const discountPercent = fee && offerPrice ? Math.round(((fee - offerPrice) / fee) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          href="/course"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition"
        >
          <FaArrowLeft className="text-xs" /> Back to All Courses
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Course Main Content */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header Area */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Admissions Open 2026
              </span>
              <button
                onClick={handleShare}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white transition"
              >
                <FaShareAlt className="text-xs" /> {isCopied ? "Link Copied!" : "Share"}
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {description}
            </p>

            {/* Ratings & Key Metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <FaStar />
                <span>{rating} / 5.0</span>
                <span className="text-slate-500 font-normal">({totalRatings || 450} student ratings)</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <FaUserGraduate />
                <span>{students || 1200} Students Enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <FaClock />
                <span>{duration}</span>
              </div>
            </div>
          </div>

          {/* Course Overview Section */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FaBookOpen className="text-indigo-400" /> Comprehensive Program Overview
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {courseOverview || description}
            </p>
          </div>

          {/* Curriculum & Deliverables */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FaLaptopCode className="text-cyan-400" /> What You Will Build & Learn
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(courseIncludes || [
                "Hands-on Projects and Real-World Assignments",
                "Production Architecture & Code Reviews",
                "1-on-1 Mentoring Sessions with Staff Engineers",
                "Professional Portfolio Development",
                "Freelancing Guidance and Career Support",
                "Lifetime Access to Course Materials & LMS",
              ]).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
              <div className="text-2xl font-black text-indigo-400 mb-1">{lectures || 50}+</div>
              <div className="text-xs text-slate-400 font-medium">Interactive Live Classes</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
              <div className="text-2xl font-black text-cyan-400 mb-1">{projects || 5}+</div>
              <div className="text-xs text-slate-400 font-medium">Industry Portfolio Projects</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
              <div className="text-2xl font-black text-emerald-400 mb-1">100%</div>
              <div className="text-xs text-slate-400 font-medium">Placement Cell Referral</div>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Enrollment Box */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 rounded-2xl bg-[#0c111f] border border-indigo-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            
            {/* Thumbnail Preview with Play Icon */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-500/40 group-hover:scale-110 transition-all"
                >
                  <FiPlay className="text-lg ml-0.5" />
                </button>
              </div>
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-semibold text-slate-300">
                Preview Lecture Available
              </span>
            </div>

            {/* Pricing Section */}
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">
                  ৳{(offerPrice || fee).toLocaleString()}
                </span>
                {offerPrice && fee > offerPrice && (
                  <span className="text-base text-slate-500 line-through">
                    ৳{fee.toLocaleString()}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
              <p className="text-[11px] text-amber-400 font-semibold mt-1">
                ⏳ Early bird offer valid for this intake only
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition flex items-center justify-center gap-2 active:scale-95"
              >
                <FiShoppingCart /> Enroll Now (Add to Cart)
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                Watch Free Sample Class
              </button>
            </div>

            {/* Guarantee Pills */}
            <div className="pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <FiShield className="text-emerald-400 flex-shrink-0" />
                <span>100% Money-Back Guarantee (7 Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <FiAward className="text-indigo-400 flex-shrink-0" />
                <span>Govt & Industry Recognized Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserGraduate className="text-cyan-400 flex-shrink-0" />
                <span>Direct Placement Referral Cell</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Free Demo Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube-nocookie.com/embed/gn_dh66cI8c?si=iEnlY1jQJB9DWO5F&start=4"
        title={title}
        description={description}
      />
    </div>
  );
};

export default SingleCoursePage;
