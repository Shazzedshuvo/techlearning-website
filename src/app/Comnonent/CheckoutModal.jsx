"use client";
import React, { useState } from "react";
import { FiX, FiCheckCircle, FiShield, FiPhone, FiCreditCard } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";

const CheckoutModal = ({ isOpen, onClose, cartDetails }) => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [accountNumber, setAccountNumber] = useState("");
  const [trxId, setTrxId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const total = cartDetails?.total || 0;

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      dispatch(clearCart());
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0e1322] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
        >
          <FiX className="text-xl" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <FiShield className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Secure Checkout</h3>
                <p className="text-xs text-slate-400">Encrypted 256-bit SSL Gateway</p>
              </div>
            </div>

            {/* Total Summary */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6 flex justify-between items-center">
              <div>
                <span className="text-xs text-slate-400">Payable Amount:</span>
                <div className="text-2xl font-black text-indigo-400">৳{total.toLocaleString()}</div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                Instant Course Access
              </span>
            </div>

            {/* Payment Method Selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Select Payment Method
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("bkash")}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition ${
                    paymentMethod === "bkash"
                      ? "border-pink-500 bg-pink-500/10 text-pink-400 shadow-lg shadow-pink-500/10"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="font-bold text-sm">bKash</span>
                  <span className="text-[10px] text-slate-400">Instant</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("nagad")}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition ${
                    paymentMethod === "nagad"
                      ? "border-orange-500 bg-orange-500/10 text-orange-400 shadow-lg shadow-orange-500/10"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="font-bold text-sm">Nagad</span>
                  <span className="text-[10px] text-slate-400">Zero Fee</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition ${
                    paymentMethod === "card"
                      ? "border-indigo-500 bg-indigo-500/10 text-indigo-400 shadow-lg shadow-indigo-500/10"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="font-bold text-sm">Cards</span>
                  <span className="text-[10px] text-slate-400">Visa / MC</span>
                </button>
              </div>
            </div>

            {/* Payment Details Form */}
            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {paymentMethod === "card" ? "Card Number" : `${paymentMethod === "bkash" ? "bKash" : "Nagad"} Account Number`}
                </label>
                <div className="relative">
                  {paymentMethod === "card" ? (
                    <FiCreditCard className="absolute left-3.5 top-3.5 text-slate-500" />
                  ) : (
                    <FiPhone className="absolute left-3.5 top-3.5 text-slate-500" />
                  )}
                  <input
                    type="text"
                    required
                    placeholder={paymentMethod === "card" ? "4242 •••• •••• 4242" : "017XXXXXXXX"}
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              {paymentMethod !== "card" ? (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Transaction ID (TrxID)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BL99X87ZQ"
                    value={trxId}
                    onChange={(e) => setTrxId(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 uppercase transition"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Send ৳{total.toLocaleString()} to Merchant <strong>01719052334</strong> and enter TrxID.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Expiry</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      required
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">CVC</label>
                    <input
                      type="password"
                      placeholder="•••"
                      maxLength={4}
                      required
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition disabled:opacity-50 mt-4"
              >
                {isProcessing ? "Verifying Payment..." : `Confirm Payment of ৳${total.toLocaleString()}`}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <FiCheckCircle className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Enrollment Confirmed!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Congratulations! Your admission has been verified. Check your email for class schedule, Discord community invite, and LMS login access.
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left mb-6 text-xs space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Payment Reference:</span>
                <span className="font-mono text-indigo-400 font-bold">TL-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Method:</span>
                <span className="capitalize text-slate-200">{paymentMethod} Verified</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Access Status:</span>
                <span className="text-emerald-400 font-semibold">Active Lifetime</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-500/30"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
