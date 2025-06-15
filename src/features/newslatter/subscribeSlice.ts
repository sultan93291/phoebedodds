import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type { NewsLetterSubscribeResponse } from "@/types/newsLetter";

interface NewsletterState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NewsletterState = {
  status: "idle",
  error: null,
};

export const subscribeToNewsletter = createAsyncThunk<
  NewsLetterSubscribeResponse,
  string,
  { rejectValue: string }
>("newsletter/subscribe", async (email, thunkAPI) => {
  try {
    const data = await toast.promise(
      async () => {
        const res = await fetch(
          `${
            import.meta.env.VITE_SITE_URL
          }/newsletter/subscribe?email=${encodeURIComponent(email)}`,
          {
            method: "POST",
          }
        );

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData?.message || "Subscription failed");
        }

        const data: NewsLetterSubscribeResponse = await res.json();
        return data;
      },
      {
        pending: "Subscribing...",
        success: "Subscribed successfully!",
        error: {
          render({ data }) {
            if (data instanceof Error) {
              return data?.message;
            }
          },
        },
      }
    );

    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.message || "Network error");
  }
});

export const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeToNewsletter.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(subscribeToNewsletter.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(subscribeToNewsletter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export default newsletterSlice.reducer;
