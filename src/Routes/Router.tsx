import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "@/Pages/ProductDetails";

import TermsContitions from "@/Pages/TermsConditions";
import AllCategories from "@/Pages/AllCategories";
import Error from "@/Pages/Error";
import Pages from "@/Pages/Pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "/product", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/category", element: <AllCategories /> },
      { path: "/pages/:slug", element: <Pages /> },
      { path: "terms-contitions", element: <TermsContitions /> },
    ],
  },
]);
