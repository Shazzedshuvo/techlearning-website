"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaStar, FaUserGraduate, FaCheckCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import { fetchCourseData } from "../../Redux/FatchData";

const SingleCoursePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const courseId = params?.id;

  // Get the course data from Redux store
  const { loading, courseData, error } = useSelector((state) => state.fatchSlice ?? {});

  // Fetch data when component mounts
  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  // Add debugging logs
  useEffect(() => {
    if (courseData) {
      console.log('Available courses:', courseData.map(c => ({ id: c.id, title: c.title })));
      console.log('Looking for course ID:', courseId, 'type:', typeof courseId);
    }
  }, [courseData, courseId]);

  if (loading || !courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl">Loading Course Data...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl text-red-500">Error: {error}</h1>
      </div>
    );
  }

  // Find the specific course based on ID (convert string ID to number since JSON has numeric IDs)
  const course = Array.isArray(courseData) 
    ? courseData.find(c => c.id === Number(courseId))
    : courseData;
    
  // Log if course wasn't found
  if (!course) {
    console.log('Course not found. Available IDs:', 
      Array.isArray(courseData) ? courseData.map(c => c.id) : 'courseData is not an array');
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl">Course not found</h1>
      </div>
    );
  }

  const {
    title,
    subtitle,
    image,
    duration,
    lectures,
    projects,
    fee,
    features,
    rating,
    students,
    buttons,
    video,
  } = course;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Image + Video */}
        <div className="flex flex-col">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg mb-6"
            />
          )}

          {video && (
            <video
              controls
              className="w-full mt-4 rounded-xl shadow-lg"
              onError={(e) =>
                console.log("Video failed to load:", e)
              }
            >
             
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Course Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-extrabold text-white mb-2">{title}</h1>
          <p className="text-gray-400 text-lg mb-6">{subtitle}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-6 text-gray-300">
            <div><strong>Duration:</strong> {duration}</div>
            <div><strong>Lectures:</strong> {lectures}</div>
            <div><strong>Projects:</strong> {projects}</div>
            <div><strong>Fee:</strong> {fee}</div>
          </div>

          {/* Rating & Students */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span>{rating?.stars} ({rating?.reviews} Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserGraduate className="text-blue-400" />
              <span>{students} Students</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Features:</h2>
            <ul className="list-none space-y-2">
              {features?.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <FaCheckCircle className="text-green-400" /> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {buttons?.admission && (
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 active:scale-95">
                {buttons.admission}
              </button>
            )}
            {buttons?.seminar && (
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 active:scale-95">
                {buttons.seminar}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
