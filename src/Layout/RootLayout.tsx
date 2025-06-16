import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
