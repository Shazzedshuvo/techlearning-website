"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEbookData } from "../Redux/EbookSlice";
import { addToCart } from "../Redux/cartSlice";
import {
  FaStar,
  FaDownload,
  FaBookOpen,
  FaTimes,
  FaSearch,
  FaFilePdf,
  FaFigma,
} from "react-icons/fa";
import { FiDownload, FiEye, FiCheck, FiShoppingCart, FiClock, FiFileText } from "react-icons/fi";

const Ebook = () => {
  const dispatch = useDispatch();
  const { loading, ebookData, error } = useSelector((state) => state.ebook ?? {});

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    dispatch(fetchEbookData());
  }, [dispatch]);

  const handleDownload = (book) => {
    setIsDownloading(true);
    setDownloadProgress(20);
    setTimeout(() => setDownloadProgress(60), 400);
    setTimeout(() => {
      setDownloadProgress(100);
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
        alert(`Downloading "${book.title}" in ${book.format || "PDF"} format!`);
      }, 300);
    }, 800);
  };

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-slate-400 text-sm">Loading eBooks & cheat sheets...</p>
      </div>
    );
  }

  if (error || !ebookData || ebookData.length === 0) {
    return null;
  }

  const types = ["All", ...new Set(ebookData.map((b) => b.type || b.category).filter(Boolean))];

  const filteredBooks = ebookData.filter((b) => {
    const matchesCategory =
      selectedCategory === "All" || b.type === selectedCategory || b.category === selectedCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (b.description && b.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="ebooks" className="py-20 md:py-28 bg-[#07090e] border-b border-indigo-500/10 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Free & Premium Developer Resources
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            E-Books, Cheat Sheets & <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Templates</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Accelerate your coding efficiency with hand-crafted cheat sheets, React design kits, and engineering handbooks.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedCategory(t)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === t
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3.5 top-3.5 text-slate-500 text-xs" />
            <input
              type="text"
              placeholder="Search resource..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
          </div>
        </div>

        {/* E-Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.slice(0, 8).map((book) => (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group hover:-translate-y-1"
            >
              <div>
                {/* Book Thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/80 backdrop-blur-md text-violet-300 border border-violet-500/30">
                    {book.type || "E-Book"}
                  </span>
                  {book.special && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {book.special}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <FiFileText className="text-violet-400" /> {book.format || "PDF"}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <FaStar /> {book.rating || 4.9}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition line-clamp-2 leading-snug">
                    {book.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-3 border-t border-slate-800/70 flex items-center justify-between mt-auto">
                <div>
                  <div className="text-sm font-black text-violet-400">
                    {book.offerPrice ? `৳${book.offerPrice}` : "Free"}
                  </div>
                  {book.price && book.offerPrice && (
                    <span className="text-[10px] text-slate-500 line-through">
                      ৳{book.price}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (book.offerPrice) {
                      dispatch(addToCart(book));
                    } else {
                      handleDownload(book);
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition shadow-md shadow-violet-600/20 flex items-center gap-1.5 active:scale-95"
                >
                  {book.offerPrice ? (
                    <><FiShoppingCart className="text-xs" /> Buy</>
                  ) : (
                    <><FiDownload className="text-xs" /> Get Free</>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Book Preview Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="bg-[#0e1322] border border-violet-500/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-slate-200">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <FaTimes />
            </button>

            <div className="flex gap-4 mb-6">
              <img
                src={selectedBook.img}
                alt={selectedBook.title}
                className="w-24 h-32 object-cover rounded-lg border border-slate-800 flex-shrink-0"
              />
              <div className="space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  {selectedBook.type || "Resource"}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">{selectedBook.title}</h3>
                <p className="text-xs text-slate-400">Format: {selectedBook.format || "PDF"}</p>
                <div className="text-sm font-bold text-violet-400 mt-2">
                  {selectedBook.offerPrice ? `Price: ৳${selectedBook.offerPrice}` : "Free Community Access"}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {selectedBook.description}
            </p>

            {isDownloading && (
              <div className="mb-6 space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Downloading resource...</span>
                  <span>{downloadProgress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => handleDownload(selectedBook)}
                disabled={isDownloading}
                className="flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2"
              >
                <FiDownload /> Download Resource
              </button>
              {selectedBook.offerPrice && (
                <button
                  onClick={() => {
                    dispatch(addToCart(selectedBook));
                    setSelectedBook(null);
                  }}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition flex items-center gap-2"
                >
                  <FiShoppingCart /> Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Ebook;
