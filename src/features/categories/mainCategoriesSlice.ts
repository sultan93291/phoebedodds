import type { MainCategoryResponse } from "@/types/productCategories";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface categoryState {
  items: MainCategoryResponse | null;
  status: string;
}

const initialState: categoryState = {
  items: null,
  status: "",
};

export const mainCategoriesFetching = createAsyncThunk(
  "mainCategories/mainCategoriesFetching",
  async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_SITE_URL}/main-categories`
    );
    return res.data;
  }
);

export const mainCategoriesSlice = createSlice({
  name: "mainCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(mainCategoriesFetching.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(mainCategoriesFetching.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(mainCategoriesFetching.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default mainCategoriesSlice.reducer;
