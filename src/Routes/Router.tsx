import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";


export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout/>,
    errorElement:"",
    children: [
      { path: "", element: <Home/>},
      { path: "/product", element: <Products/>},
    ],
  },
]);