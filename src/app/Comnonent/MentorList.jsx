"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentors } from "../Redux/MentorSlice";

const MentorList = () => {
  const dispatch = useDispatch();
  const { loading, mentors, error } = useSelector(
    (state) => state.mentor ?? { mentors: [] }
  );

  const [visibleCount, setVisibleCount] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    dispatch(fetchMentors());
  }, [dispatch]);

  const filteredMentors = useMemo(() => {
    if (!Array.isArray(mentors)) return [];
    return mentors.filter((m) => {
      const matchesSearch = m.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || m.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [mentors, searchTerm, selectedCategory]);

  const visibleMentors = showAll
    ? filteredMentors
    : filteredMentors.slice(0, visibleCount);

  if (loading)
    return <p className="text-center text-blue-400 mt-10">Loading...</p>;
  if (error)
    return <p className="text-center text-red-400 mt-10">Error: {error}</p>;
  if (filteredMentors.length === 0)
    return <p className="text-center text-gray-400 mt-10">No mentors found.</p>;

  const categories = [
    "All",
    ...new Set(mentors.map((m) => m.category).filter(Boolean)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300 px-4 sm:px-6 lg:px-16 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
          Meet Our Expert Mentors
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
          Learn from industry professionals and skilled mentors guiding your
          success.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              selectedCategory === cat
                ? "bg-blue-500 text-white border-blue-500"
                : "border-blue-500/40 text-blue-400 hover:bg-blue-500/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search mentor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md bg-gray-800 border border-blue-500/30 rounded-full py-2.5 px-4 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Mentor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {visibleMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-1 duration-300 h-96 cursor-pointer"
            onClick={() => setSelectedMentor(mentor)}
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Details */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">
                {mentor.name}
              </h3>
              <p className="text-blue-400 text-sm mb-1">{mentor.designation}</p>
              <p className="text-gray-400 text-sm mb-1">{mentor.experience}</p>
              <p className="text-gray-400 text-sm mb-2 font-medium">
                {mentor.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {filteredMentors.length > visibleCount && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Mentor Details Modal */}
      {selectedMentor && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMentor(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMentor.img}
              alt={selectedMentor.name}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6 text-gray-300">
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedMentor.name}
              </h2>
              <p className="text-blue-400 mb-1">{selectedMentor.designation}</p>
              <p className="text-gray-400 mb-1">{selectedMentor.experience}</p>
              <p className="text-gray-400 mb-2 font-medium">
                {selectedMentor.specialty}
              </p>
              <p className="text-gray-300">{selectedMentor.bio}</p>
              <button
                className="mt-4 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all"
                onClick={() => setSelectedMentor(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorList;
