import Newslater from "@/Components/Home/Newslater"
import About from "../Components/Home/About"
import Banner from "../Components/Home/Banner"
import Feature from "../Components/Home/Feature"
import OurPartners from "../Components/Home/OurPartners"
import Room from "../Components/Home/Room"
import SelcetionArea from "../Components/Home/SelecetionArea"


const Home = () => {
  return (
    <>
      <Banner />
      <SelcetionArea />
      <About />
      <OurPartners />
      <Room />
      <Feature />
      <Newslater/>
    </>
  )
}

export default Home