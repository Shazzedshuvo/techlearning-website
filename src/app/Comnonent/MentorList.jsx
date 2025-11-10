"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentors } from "../Redux/MentorSlice";
import {
  FaStar,
  FaUsers,
  FaTimes,
  FaSearch,
  FaTags,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const MentorList = () => {
  const dispatch = useDispatch();
  const { loading, mentors, error } = useSelector((state) => state.mentor ?? {});

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    dispatch(fetchMentors());
  }, [dispatch]);

  if (loading)
    return <div className="text-center text-blue-400 text-lg mt-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-400 mt-10">Error: {error}</div>;
  if (!mentors || mentors.length === 0)
    return <div className="text-center text-gray-400 mt-10">No mentors found.</div>;

  const categories = ["All", ...new Set(mentors.map((m) => m.category).filter(Boolean))];

  const filteredMentors = mentors.filter((m) => {
    const matchesCategory = selectedCategory === "All" || m.category === selectedCategory;
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleMentors = showAll ? filteredMentors : filteredMentors.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300 px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="flex justify-center items-center gap-3 text-4xl md:text-5xl font-extrabold text-blue-400 mb-3">
          <FaUsers className="text-white" />
          Our <span className="text-white">Mentors</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Learn from experienced professionals guiding your IT journey.
        </p>
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 max-w-5xl mx-auto">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-blue-500/30 rounded-full py-2.5 pl-10 pr-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-blue-500/40 text-blue-400 hover:bg-blue-500/10"
              }`}
            >
              <FaTags /> {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mentor Grid */}
      {filteredMentors.length === 0 ? (
        <p className="text-center text-gray-400">No mentors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleMentors.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedMentor(m)}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border border-blue-500/30 rounded-xl p-5 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-1 truncate">{m.name}</h3>
              <p className="text-sm text-gray-400 mb-2 truncate">{m.designation}</p>
              <p className="text-sm text-gray-400 mb-2 truncate">{m.category}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-blue-400 font-semibold">{m.experience}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show More / Less */}
      {filteredMentors.length > visibleCount && (
        <div className="text-center mt-10">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center justify-center gap-2 mx-auto px-6 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
            >
              Show More <FaChevronDown />
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="flex items-center justify-center gap-2 mx-auto px-6 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
            >
              Show Less <FaChevronUp />
            </button>
          )}
        </div>
      )}

      {/* Mentor Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-gray-900 border border-blue-500/40 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl text-gray-300 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedMentor(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              <FaTimes />
            </button>
            <img
              src={selectedMentor.img}
              alt={selectedMentor.name}
              className="w-full h-64 object-cover rounded-lg mb-5"
            />
            <h2 className="text-2xl font-bold text-white mb-2">{selectedMentor.name}</h2>
            <p className="text-blue-400 mb-2">{selectedMentor.designation}</p>
            <p className="text-gray-400 text-sm mb-3">{selectedMentor.experience}</p>
            <p className="text-gray-300 mb-3">{selectedMentor.specialty}</p>
            <div className="flex justify-between items-center mt-3">
              <div>
                <span className="block text-gray-400 text-sm">
                  Category: {selectedMentor.category}
                </span>
              </div>
              <div className="text-right">
                <a
                  href="#"
                  className="mt-2 inline-block bg-blue-500 hover:bg-blue-400 text-white px-4 py-1.5 rounded-full text-sm transition"
                >
                  Contact Mentor
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorList;
