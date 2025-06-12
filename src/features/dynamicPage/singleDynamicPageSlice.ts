import type { DynamicSinglePageResponse } from "@/types/dynamicPage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface dynamicPageState {
  items: DynamicSinglePageResponse | null;
  status: string;
}

const initialState: dynamicPageState = {
  items: null,
  status: "",
};

export const singleDynamicPageFatching = createAsyncThunk(
  "singleDynamicpage/singleDynamicPageFatching",
  async (slug: string) => {
    const res = await axios.get(
      `${import.meta.env.VITE_SITE_URL}/dynamic-pages/single/${slug}`
    );
    return res.data;
  }
);

export const singleDynamicPageSlice = createSlice({
  name: "singleDynamicpage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singleDynamicPageFatching.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(singleDynamicPageFatching.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });

    builder.addCase(singleDynamicPageFatching.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default singleDynamicPageSlice.reducer;
