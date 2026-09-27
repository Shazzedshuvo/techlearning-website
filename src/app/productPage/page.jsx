"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { addToCart } from "../Redux/cartSlice";
import { FaArrowLeft, FaStar, FaCheckCircle, FaBookOpen } from "react-icons/fa";
import { FiShoppingCart, FiClock, FiShield } from "react-icons/fi";

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  if (!product || !product.title) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl mb-6">
          <FaBookOpen />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">No Program Selected</h2>
        <p className="text-slate-400 text-sm max-w-md mb-8 leading-relaxed">
          Please select a program or resource from our catalog to review details and proceed to enrollment.
        </p>
        <Link
          href="/course"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-500/25 inline-flex items-center gap-2"
        >
          <FaArrowLeft className="text-xs" /> Explore All Programs
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          href="/course"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition"
        >
          <FaArrowLeft className="text-xs" /> Back to Programs
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Media / Preview Card */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-xl p-3">
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover rounded-xl"
              />
            )}
            <div className="p-4 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <FaCheckCircle /> Lifetime Curriculum Access
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <FiShield /> 100% Satisfaction Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
              Selected Item
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              {product.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Tuition Fee:</span>
              <span className="text-3xl font-black text-white">৳{product.price || 0}</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm transition shadow-lg shadow-indigo-500/25 active:scale-95 flex items-center justify-center gap-2"
            >
              <FiShoppingCart /> Add to Cart & Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
