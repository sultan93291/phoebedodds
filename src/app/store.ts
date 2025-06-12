import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../features/cms/banner/bannerSlice";
import aboutReducer from "../features/cms/about/aboutSlice";
import partnerReducer from "@/features/cms/partners/partnerSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    about: aboutReducer,
    partner: partnerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
