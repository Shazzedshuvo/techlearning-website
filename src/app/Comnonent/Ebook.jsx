"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEbookData } from "../Redux/EbookSlice";
import {
  FaStar,
  FaDownload,
  FaBookOpen,
  FaTimes,
  FaSearch,
  FaTags,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Ebook = () => {
  const dispatch = useDispatch();
  const { loading, ebookData, error } = useSelector(
    (state) => state.ebook ?? {}
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    dispatch(fetchEbookData());
  }, [dispatch]);

  if (loading)
    return (
      <div className="text-center text-blue-400 text-lg mt-10">Loading...</div>
    );
  if (error)
    return <div className="text-center text-red-400 mt-10">Error: {error}</div>;
  if (!ebookData || ebookData.length === 0)
    return (
      <div className="text-center text-gray-400 mt-10">No eBooks found.</div>
    );

  // Dynamic categories
  const categories = [
    "All",
    ...new Set(ebookData.map((b) => b.category).filter(Boolean)),
  ];

  // Filter books
  const filteredBooks = ebookData.filter((b) => {
    const matchesCategory =
      selectedCategory === "All" || b.category === selectedCategory;
    const matchesSearch = b.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Visible books
  const visibleBooks = showAll
    ? filteredBooks
    : filteredBooks.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300 px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="flex justify-center items-center gap-3 text-4xl md:text-5xl font-extrabold text-blue-400 mb-3">
          <FaBookOpen className="text-white" />
          Explore Our <span className="text-white">eBooks</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover premium design resources, templates, and guides.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 max-w-5xl mx-auto">
        {/* Search */}
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search eBooks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-blue-500/30 rounded-full py-2.5 pl-10 pr-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Category Filter */}
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

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-400">No eBooks found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border border-blue-500/30 rounded-xl p-5 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-1 truncate">
                {book.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2 truncate">
                {book.special}
              </p>
              <div className="flex justify-between text-sm text-gray-300">
                <span className="flex items-center gap-1 text-yellow-400">
                  <FaStar /> {book.rating}
                </span>
                <span className="flex items-center gap-1 text-blue-400">
                  <FaDownload /> {book.downloads}
                </span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-blue-400 font-semibold">
                  ৳{book.offerPrice ?? book.price}
                </span>
                <button className="text-xs bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded-full transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show More / Show Less */}
      {filteredBooks.length > visibleCount && (
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

      {/* Modal for Details */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-gray-900 border border-blue-500/40 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl text-gray-300">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              <FaTimes />
            </button>

            <img
              src={selectedBook.img}
              alt={selectedBook.title}
              className="w-full h-64 object-cover rounded-lg mb-5"
            />

            <h2 className="text-2xl font-bold text-white mb-2">
              {selectedBook.title}
            </h2>
            <p className="text-blue-400 mb-3">{selectedBook.category}</p>
            <p className="text-gray-400 text-sm mb-3">
              {selectedBook.description}
            </p>

            <ul className="mb-4 list-disc list-inside text-gray-300 text-sm">
              {selectedBook.includes?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-yellow-400 flex items-center gap-1">
                  <FaStar /> {selectedBook.rating}
                </span>
                <span className="block text-gray-400 text-sm">
                  Downloads: {selectedBook.downloads}
                </span>
              </div>

              <div className="text-right">
                <p className="text-lg text-blue-400 font-bold">
                  ৳{selectedBook.offerPrice ?? selectedBook.price}
                </p>
                <a
                  href={selectedBook.link}
                  target="_blank"
                  className="mt-2 inline-block bg-blue-500 hover:bg-blue-400 text-white px-4 py-1.5 rounded-full text-sm transition"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ebook;
