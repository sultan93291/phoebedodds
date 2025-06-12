import type { HomeBannerResponse } from "@/types/cms";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface BannerState {
  items: HomeBannerResponse | null;
  status: string;
}

const initialState: BannerState = {
  items: null,
  status: "",
};

export const bannerFetching = createAsyncThunk(
  "banner/bannerFetching",
  async () => {
    const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/home-banner`);

    return res.data;
  }
);

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(bannerFetching.pending, (state) => {
        state.status = "loading";
      })
      .addCase(bannerFetching.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(bannerFetching.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default bannerSlice.reducer;
