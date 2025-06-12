import type { PartnerResponse } from "@/types/cms";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface partnerState {
  items: PartnerResponse | null;
  status: string;
}

const initialState: partnerState = {
  items: null,
  status: "",
};

export const partnerFetching = createAsyncThunk(
  "partner/partnerFetching",
  async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_SITE_URL}/our-partners`
    );

    return res.data;
  }
);

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(partnerFetching.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(partnerFetching.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });

    builder.addCase(partnerFetching.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default partnerSlice.reducer;
