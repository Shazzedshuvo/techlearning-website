import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./app/Redux/productSlice";
import courseReducer from "./app/Redux/courseSlice";
import fatchReducer from "./app/Redux/FatchData";
import ebookReducer from "./app/Redux/EbookSlice";
import mentorReducer from "./app/Redux/MentorSlice"; // ✅ fixed

const store = configureStore({
  reducer: {
    product: productReducer,
    course: courseReducer,
    fatch: fatchReducer,
    ebook: ebookReducer,
    mentor: mentorReducer,
  },
});

export default store;
export { store };
