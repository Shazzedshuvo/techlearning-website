"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
  import { useRouter } from "next/navigation";
import { addProduct } from "./Redux/productSlice";
import { useDispatch } from "react-redux";

const Produx = () => {

  const dispatch = useDispatch();
  
  const Routerr = useRouter();

  const PorductId = (product) => {
     dispatch(addProduct(product)) 
    Routerr.push(`/productPage/`);
    
   ;
  };

  const [products, setProducts] = useState([]);

  const fatchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    setProducts(res.data);
  };

  useEffect(() => {
    fatchData();
  }, []);

  return (
    <div className="text-white bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900  h-screen ">
      <h1 className="text-center text-4xl mt-7">Redux exmaple</h1>
      <div className="grid grid-cols-4 gap-8 w-10/12 mx-auto py-10">
        {" "}
        {products.map((product) => (
          <div className="bg-blue-500 rounded-xl p-6 shadow" key={product.id}>
            {product.title.slice(0, 20)}....
            <button
              onClick={() => PorductId(product)}
              className=" bg-green-500 text-white font-medium py-3 rounded-lg w-full active:scale-80 duration-300 mt-4"
            >
              Vew details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produx;
