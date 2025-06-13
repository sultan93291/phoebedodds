import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import type { SiteSettingResponse } from "./types/siteSetting.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right" // 👈 change position here
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark" if your site is dark-themed
      />
    </Provider>
  </StrictMode>
);

const fetchSiteSettings = async (): Promise<void> => {
  try {
    const res = await fetch(`${import.meta.env.VITE_SITE_URL}/site-settings`);

    // Optional: validate status
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const formattedData: SiteSettingResponse = await res.json();

    if (formattedData?.data) {
      const { favicon, site_name } = formattedData.data;

      // Update favicon
      const link: HTMLLinkElement =
        document.querySelector("link[rel~='icon']") ||
        document.createElement("link");
      link.rel = "icon";
      link.href = `${import.meta.env.VITE_SITE_URL}/${favicon}`;
      document.head.appendChild(link);

      // Update title
      document.title = site_name || "Phoebedodds";
    }
  } catch (err) {
    console.error("Error fetching site settings:", err);
  }
};

fetchSiteSettings();
