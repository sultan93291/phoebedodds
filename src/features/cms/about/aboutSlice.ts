import type { AboutUsResponse } from "@/types/cms";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface aboutState {
  items: AboutUsResponse | null;
  status: string;
}

const initialState: aboutState = {
  items: null,
  status: "",
};

export const aboutFetching = createAsyncThunk(
  "about/bannerFetching",
  async () => {
    const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/about-us`);
    return res.data;
  }
);

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(aboutFetching.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(aboutFetching.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(aboutFetching.rejected, (state) => {
      state.status = "failed";
    });
  }, 
});

export default aboutSlice.reducer;
