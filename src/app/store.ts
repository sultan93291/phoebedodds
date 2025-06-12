import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../features/cms/banner/bannerSlice";
import aboutReducer from "../features/cms/about/aboutSlice";
import partnerReducer from "@/features/cms/partners/partnerSlice";
import socialReducer from "@/features/social/socialSlice";
import siteReducer from "@/features/site-setting/SiteSettingSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    about: aboutReducer,
    partner: partnerReducer,
    social: socialReducer,
    siteSetting: siteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
