import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface BrandsState {
  status: "idle" | "loading" | "succeeded" | "failed";
  brands: any | null;
  error: string | null;
}

const initialState: BrandsState = {
  status: "idle",
  brands: null,
  error: null,
};

export const brandFetching = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>("brands/brandFetching", async (_, thunkAPI) => {
  try {
    const response = await axios.get<any>(
      `${import.meta.env.VITE_SITE_URL}/brands`
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to fetch brands"
    );
  }
});

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(brandFetching.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(brandFetching.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.brands = action.payload;
      })
      .addCase(brandFetching.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default brandSlice.reducer;
