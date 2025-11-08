import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./app/Redux/productSlice";
import courseSlice from "./app/Redux/courseSlice";
import fatchSlice from "./app/Redux/FatchData";

export const store = configureStore({
  reducer: {
    
productSlice ,
courseSlice,
fatchSlice

  
  },
});