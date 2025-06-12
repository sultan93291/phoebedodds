import type { SiteSettingResponse } from "@/types/siteSetting";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface siteState {
  items: SiteSettingResponse | null;
  status: string;
}

const initialState: siteState = {
  items: null,
  status: "",
};

export const siteFetching = createAsyncThunk("site/siteFetching", async () => {
  const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/site-settings`);
  return res.data;
});

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(siteFetching.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(siteFetching.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });

    builder.addCase(siteFetching.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default siteSlice.reducer;
