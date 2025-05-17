import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout/>,
    errorElement:"",
    children: [
      { path: "", element: <Home/>},
    ],
  },
]);