"use client";
import React, { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Graphics & Multimedia",
    videos: [
      "https://www.youtube-nocookie.com/embed/gn_dh66cI8c?si=iEnlY1jQJB9DWO5F&start=4",
      "https://www.youtube-nocookie.com/embed/y7hyxsjcPaY?si=mqGVe1j5f6M2ZLoq&start=4",
      "https://www.youtube-nocookie.com/embed/vKfqca7AC3c?si=NtaoNQaPNou4Q-iy&start=4",
      "https://www.youtube-nocookie.com/embed/S9T4uqxVYO0?si=HuEprsLN4wXmUd6s&start=4",
    ],
  },
  {
    id: 2,
    name: "Web & Software",
    videos: [
      "https://www.youtube-nocookie.com/embed/1WmNXEVia8I",
      "https://www.youtube-nocookie.com/embed/bMknfKXIFA8",
      "https://www.youtube-nocookie.com/embed/t4C0VvJOM1Q",
      "https://www.youtube-nocookie.com/embed/gn_dh66cI8c",
    ],
  },
  {
    id: 3,
    name: "Digital Marketing",
    videos: [
      "https://www.youtube-nocookie.com/embed/y7hyxsjcPaY",
      "https://www.youtube-nocookie.com/embed/vKfqca7AC3c",
      "https://www.youtube-nocookie.com/embed/S9T4uqxVYO0",
      "https://www.youtube-nocookie.com/embed/1WmNXEVia8I",
    ],
  },
  {
    id: 4,
    name: "3D Animation & Visualization",
    videos: [
      "https://www.youtube-nocookie.com/embed/bMknfKXIFA8",
      "https://www.youtube-nocookie.com/embed/t4C0VvJOM1Q",
      "https://www.youtube-nocookie.com/embed/gn_dh66cI8c",
      "https://www.youtube-nocookie.com/embed/y7hyxsjcPaY",
    ],
  },
  {
    id: 5,
    name: "Film & Media",
    videos: [
      "https://www.youtube-nocookie.com/embed/1WmNXEVia8I",
      "https://www.youtube-nocookie.com/embed/y7hyxsjcPaY",
      "https://www.youtube-nocookie.com/embed/gn_dh66cI8c",
      "https://www.youtube-nocookie.com/embed/S9T4uqxVYO0",
    ],
  },
  {
    id: 6,
    name: "Networking & Cyber Security",
    videos: [
      "https://www.youtube-nocookie.com/embed/vKfqca7AC3c",
      "https://www.youtube-nocookie.com/embed/bMknfKXIFA8",
      "https://www.youtube-nocookie.com/embed/1WmNXEVia8I",
      "https://www.youtube-nocookie.com/embed/t4C0VvJOM1Q",
    ],
  },
];

const SuccessStories2x2 = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-950 text-white px-6 py-20">
      {/* Success Stories Text */}
      <div className="max-w-5xl mx-auto text-center space-y-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400">
          Success Stories
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The bright presence of our students in the marketplace inspires us and motivates us
          to engage more people with our vision to make a better future. During the last 16
          years, hundreds of thousands of people learned and grew their expertise with us. By
          bringing economic stability to their own life, many students created job opportunities
          for others. We always appreciate this wonderful journey of our keen learners.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8 space-x-4 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ${
              activeCategory.id === cat.id
                ? "bg-blue-500 text-white"
                : "bg-gray-800/50 text-gray-300 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Videos 2x2 Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {activeCategory.videos.slice(0, 4).map((video, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] transition-all transform hover:-translate-y-1"
          >
            <iframe
              className="w-full h-64 md:h-72 lg:h-80"
              src={video}
              title={`Video ${index + 1} - ${activeCategory.name}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories2x2;
