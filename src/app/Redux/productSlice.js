import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
name: "product",
initialState: " null ",
reducers: {
addProduct: (state, action) => {
state = action.payload;
return state;
},
},
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;

