"use client";
import React, { useState } from "react";
import { FaBuilding, FaUsers, FaHandshake } from "react-icons/fa";

const Campain = () => {
  const [activeTab, setActiveTab] = useState("working");

  // total 40 image dynamically
  const allImages = Array.from({ length: 40 }, (_, i) => `/images/${i + 1}.png`);

  const workingWith = allImages.slice(0, 18);
  const membersOf = allImages.slice(18, 33);
  const ourConcerns = allImages.slice(33, 40);

  const renderImages = (images) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-8">
      {images.map((src, i) => (
        <div
          key={i}
          className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 flex justify-center items-center hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300"
        >
          <img
            src={src}
            alt={`Company-${i + 1}`}
            className="w-full h-24 object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-gray-300 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="text-blue-400">3000+</span> Companies Are Connected to Us
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Collaborating with world-leading organizations to build digital success together.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("working")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "working"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <FaHandshake /> Working with
          </button>

          <button
            onClick={() => setActiveTab("members")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "members"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <FaUsers /> Members of
          </button>

          <button
            onClick={() => setActiveTab("concerns")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "concerns"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <FaBuilding /> Our Concerns
          </button>
        </div>

        {/* Content Section */}
        <div className="transition-all duration-500">
          {activeTab === "working" && renderImages(workingWith)}
          {activeTab === "members" && renderImages(membersOf)}
          {activeTab === "concerns" && renderImages(ourConcerns)}
        </div>
      </div>
    </div>
  );
};

export default Campain;
