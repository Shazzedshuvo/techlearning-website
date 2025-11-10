// src/app/productPage/page.jsx
"use client";

import React from "react";
import { useSelector } from "react-redux";

const ProductPage = () => {
  // Redux থেকে product নাও
  const product = useSelector((state) => state.product);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <p className="text-gray-400 text-lg">No product selected.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-5">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-md mx-auto mb-5 rounded-xl"
      />
      <p className="text-gray-300">{product.description}</p>
      <p className="mt-3 font-bold text-blue-400">Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
