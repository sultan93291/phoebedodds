import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../features/cms/banner/bannerSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
