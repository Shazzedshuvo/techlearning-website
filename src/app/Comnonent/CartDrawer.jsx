"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCart, removeFromCart, clearCart } from "../Redux/cartSlice";
import { FiX, FiTrash2, FiShoppingBag, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FaTag } from "react-icons/fa";
import Link from "next/link";

const CartDrawer = ({ onOpenCheckout }) => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart || { items: [], isOpen: false });
  const [coupon, setCoupon] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + Number(item.offerPrice || item.price || item.fee || 0), 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const total = subtotal - discountAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === "TECH25" || coupon.trim().toUpperCase() === "LEARN25") {
      setAppliedDiscount(0.25);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon! Try 'TECH25' for 25% off.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => dispatch(closeCart())}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0b0f19] border-l border-indigo-500/20 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <FiShoppingBag className="text-lg" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Your Cart</h2>
                <p className="text-xs text-slate-400">{items.length} {items.length === 1 ? 'course' : 'courses'} selected</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(closeCart())}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close cart"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500 mb-4 border border-slate-700/50">
                  <FiShoppingBag className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
                <p className="text-sm text-slate-400 max-w-xs mb-6">
                  Explore our industry-standard courses and boost your career today!
                </p>
                <button
                  onClick={() => dispatch(closeCart())}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium text-sm transition shadow-lg shadow-indigo-500/20"
                >
                  Browse Courses
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition"
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg border border-slate-700/50 flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-1">
                      {item.category || "Course"}
                    </span>
                    <h4 className="text-sm font-semibold text-white truncate mb-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-bold text-emerald-400">
                        ৳{item.offerPrice || item.price || item.fee || 0}
                      </span>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-slate-400 hover:text-red-400 transition p-1"
                        title="Remove"
                      >
                        <FiTrash2 className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/70 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <FaTag className="absolute left-3 top-3 text-slate-500 text-xs" />
                  <input
                    type="text"
                    placeholder="Coupon code (e.g. TECH25)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition"
                >
                  Apply
                </button>
              </form>
              {appliedDiscount > 0 && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <FiCheckCircle /> 25% Early-bird discount applied!
                </div>
              )}
              {couponError && (
                <div className="text-xs text-rose-400">{couponError}</div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span>৳{subtotal.toLocaleString()}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (25%)</span>
                    <span>-৳{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Access</span>
                  <span className="text-indigo-400 font-medium">Lifetime Support & Updates</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                  <span>Total Amount</span>
                  <span className="text-indigo-400">৳{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  dispatch(closeCart());
                  if (onOpenCheckout) onOpenCheckout({ items, total, subtotal, discountAmount });
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-500/25"
              >
                Proceed to Checkout <FiArrowRight />
              </button>

              <button
                onClick={() => dispatch(clearCart())}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-400 transition"
              >
                Clear all items
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
