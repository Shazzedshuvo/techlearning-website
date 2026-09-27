"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import CheckoutModal from "./CheckoutModal";
import AuthModal from "./AuthModal";

export default function AppShell({ children }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState(null);

  const handleOpenCheckout = (details) => {
    setCheckoutDetails(details);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar onOpenAuth={() => setIsAuthOpen(true)} />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer onOpenAuth={() => setIsAuthOpen(true)} />

      {/* Global Interactive Modals & Drawers */}
      <CartDrawer onOpenCheckout={handleOpenCheckout} />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartDetails={checkoutDetails}
      />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
}
