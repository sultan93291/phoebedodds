import type {
  FilteredProductsResponse,
  FilterParams,
} from "@/types/productCategories";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductFilterState {
  status: string;
  products: FilteredProductsResponse | null;
  error: string | null;
}

const initialState: ProductFilterState = {
  status: "",
  products: null,
  error: null,
};

export const filterProductsFetching = createAsyncThunk<
  FilteredProductsResponse,
  FilterParams,
  { rejectValue: string }
>("products/filterProductsFetching", async (params, thunkAPI) => {
  try {
    const response = await axios.get<FilteredProductsResponse>(
      `${import.meta.env.VITE_SITE_URL}/filtered-products`,
      {
        params: params || {},
      }
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to fetch products"
    );
  }
});

export const filteredProductSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filterProductsFetching.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(filterProductsFetching.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(filterProductsFetching.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default filteredProductSlice.reducer;
