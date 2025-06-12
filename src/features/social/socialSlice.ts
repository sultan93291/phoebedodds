import type { SocialTypeResponse } from "@/types/social";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface socialState {
  items: SocialTypeResponse | null;
  status: string;
}

const initialState: socialState = {
  items: null,
  status: "",
};

export const socialFetching = createAsyncThunk(
  "social/socialFetching",
  async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_SITE_URL}/social-links`
    );
    return res.data;
  }
);

export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(socialFetching.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(socialFetching.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(socialFetching.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default socialSlice.reducer;
