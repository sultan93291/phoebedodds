import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "@/Pages/ProductDetails";
import PrivacyPolicies from "@/Pages/PrivacyPolicies";
import TermsContitions from "@/Pages/TermsConditions";
import AllCategories from "@/Pages/AllCategories";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: "",
    children: [
      { path: "", element: <Home /> },
      { path: "/product", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/category", element: <AllCategories /> },
      { path: "privacy-policies", element: <PrivacyPolicies /> },
      { path: "terms-contitions", element: <TermsContitions /> },
    ],
  },
]);
