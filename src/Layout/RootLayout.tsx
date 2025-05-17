import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar"
import Footer from "../Components/Shared/Footer"


const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default RootLayout