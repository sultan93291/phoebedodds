import Container from "../Shared/Container";
import Banimg from "../../assets/Images/Banimg.png";
import { FiArrowUpRight } from "react-icons/fi";
import CountUp from "react-countup";
import Banimg1 from "../../assets/Images/banimg1.png";

const Banner = () => {
  return (
    <section className="pb-8 pt-[120px] 2xl:px-0 px-4">
      <Container className="relative overflow-hidden rounded-[36px]">
        <img
          src={Banimg}
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 xl:p-[120px] p-5">
          <div className="xl:flex gap-x-[22px]">
            <div className="w-full xl:w-3/5" data-aos="fade-right">
              <h1 className="2xl:text-[96px] lg:text-[56px] text-[35px] font-semibold leading-normal font-inter text-[#FFF]">
                Design Smarter. Shop Faster.
              </h1>
              <p
                className="font-inter font-normal text-[#FFFFFF] lg:text-[24px] text-[20px] pt-6 pb-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Compare furniture across top brands with one visual search.
              </p>
              <div className="flex" data-aos="fade-up" data-aos-delay="400">
                <button className="rounded-[24px] bg-[#FFF] text-black outline-0 lg:text-[16px] text-[14px] font-inter cursor-pointer lg:py-5 py-3 lg:px-12 px-8 hover:scale-105 duration-300">
                  Start Exploring
                </button>
                <div className="lg:h-[67px] lg:w-[67px] h-12 w-12 rounded-full flex justify-center items-center bg-[#FACE54] hover:border-amber-300 cursor-pointer group">
                  <FiArrowUpRight className="text-[24px] group-hover:translate-y-1 duration-300 ease-in-out" />
                </div>
              </div>
              <div
                className="lg:mt-[120px] mt-10"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <h2 className="2xl:text-[96px] lg:text-[56px] text-[35px] font-semibold leading-normal font-inter text-[#FFF]">
                  <CountUp end={1200} duration={2} suffix="+" />
                </h2>
                <p className="font-inter font-normal text-[#FFFFFF] text-[24px]">
                  Wide range of Collection
                </p>
              </div>
            </div>

            <div
              className="xl:w-2/5 w-full mt-10 relative"
              data-aos="fade-left"
            >
              <figure>
                <img
                  src={Banimg1}
                  alt="Banimg1"
                  className="xl:h-full lg:h-[450px] md:h-[350px] mx-auto"
                />
              </figure>

              <div
                className="rounded-[32px] border border-[#828282] bg-white/20 shadow-[0_2px_16px_rgba(0,0,0,0.08)] backdrop-blur-[25px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:top-auto xl:left-auto xl:translate-x-0 xl:translate-y-0 xl:bottom-18 xl:-right-20 py-5 px-7 lg:w-[385px] w-[250px]"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <h3 className="font-inter text-[28px] lg:text-[48px] font-semibold text-white text-left">
                  Top Item
                </h3>
                <p className="font-inter text-[16px] lg:text-[24px] font-normal text-[#FFFFFF] my-3">
                  This Week
                </p>
                <button className="rounded-[20px] bg-[#FFF] text-black outline-0 text-[14px] lg:text-[16px] font-inter cursor-pointer py-3 px-6 lg:py-4 lg:px-10">
                  See Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
