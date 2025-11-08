 "use client";
import React from 'react';
import { useSelector } from 'react-redux';
const page = () => {

  const {productSlice} = useSelector((state) => state);
  console.log( productSlice);

    return (
        <div>
            <h1 className='text-center text-4xl mt-7'>Product Details Page</h1>
            <h1 className='text-black'>{productSlice.title}</h1>
            {productSlice && <img src={productSlice.image} alt={productSlice.title} className='w-52 h-52 mx-auto mt-5'/>}
            <h1 className='text-black w-10/12 mx-auto mt-5'>{productSlice.description}</h1>
            <h1 className='text-black text-2xl font-bold mt-5'>${productSlice.price}</h1>       
          
        </div>
    );
};

export default page;