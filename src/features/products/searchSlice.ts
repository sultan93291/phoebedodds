import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface searchState {
  status: string;
  results: any | null;
  error: any | null;
}

const initialState: searchState = {
  status: "",
  results: null,
  error: null,
};

0;
export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SITE_URL}/search`,
        {
          params: { query },
        }
      );
      console.log(response);

      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || err.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.results = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
