import type { DynamicAllPageResponse } from "@/types/dynamicPage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface dynamicPageState {
  items: DynamicAllPageResponse | null;
  status: string;
}

const initialState: dynamicPageState = {
  items: null,
  status: "",
};

export const dynamicPageFatching = createAsyncThunk(
  "dynamicpage/dynamicPageFatching",
  async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_SITE_URL}/dynamic-pages`
    );
    return res.data;
  }
);

export const dynamicPageSlice = createSlice({
  name: "dynamicpage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(dynamicPageFatching.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(dynamicPageFatching.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });

    builder.addCase(dynamicPageFatching.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default dynamicPageSlice.reducer;
