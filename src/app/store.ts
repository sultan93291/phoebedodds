import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../features/cms/banner/bannerSlice";
import aboutReducer from "../features/cms/about/aboutSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    about: aboutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
