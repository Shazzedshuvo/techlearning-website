// src/Redux/EbookSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Async fetch from ebook.json
export const fetchEbookData = createAsyncThunk(
  "ebook/fetchEbookData",
  async () => {
    const response = await fetch("/ebook.json");
    const data = await response.json();
    return data;
  }
);

const EbookSlice = createSlice({
  name: "ebook",
  initialState: {
    loading: false,
    ebookData: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEbookData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEbookData.fulfilled, (state, action) => {
        state.loading = false;
        state.ebookData = action.payload;
      })
      .addCase(fetchEbookData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default EbookSlice.reducer;
