import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMentors = createAsyncThunk(
  "mentor/fetchMentors",
  async () => {
    const res = await fetch("/mentor.json"); // public folder root
    if (!res.ok) throw new Error("Failed to fetch mentors");
    return await res.json();
  }
);

const mentorSlice = createSlice({
  name: "mentor",
  initialState: {
    loading: false,
    mentors: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMentors.fulfilled, (state, action) => {
        state.loading = false;
        state.mentors = action.payload;
      })
      .addCase(fetchMentors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mentorSlice.reducer;
