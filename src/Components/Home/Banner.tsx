import Container from "../Shared/Container";
import Banimg from "../../assets/Images/Banimg.png";
import { FiArrowUpRight } from "react-icons/fi";
import CountUp from "react-countup";
import Banimg1 from "../../assets/Images/banimg1.png";

const Banner = () => {
  return (
    <section className="pb-8 pt-[120px]">
      <Container className="relative overflow-hidden rounded-[36px]">
        <img
          src={Banimg}
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 p-[120px]">
          <div className="flex gap-x-[22px]">
            <div className="w-3/5" data-aos="fade-right">
              <h1 className="text-[96px] font-semibold leading-normal font-inter text-[#FFF]">
                Design Smarter. Shop Faster.
              </h1>
              <p
                className="font-inter font-normal text-[#FFFFFF] text-[24px] pt-6 pb-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Compare furniture across top brands with one visual search.
              </p>
              <div className="flex" data-aos="fade-up" data-aos-delay="400">
                <button className="p-5 rounded-[24px] bg-[#FFF] text-black outline-0 text-[16px] font-inter cursor-pointer py-5 px-12 hover:scale-105 duration-300">
                  Start Exploring
                </button>
                <div className="h-[67px] w-[67px] rounded-full flex justify-center items-center bg-[#FACE54] hover:border-amber-300 cursor-pointer group ml-4">
                  <FiArrowUpRight className="text-[24px] group-hover:translate-y-1 duration-300 ease-in-out" />
                </div>
              </div>
              <div
                className="mt-[120px]"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <h2 className="text-[96px] font-semibold leading-normal font-inter text-[#FFF]">
                  <CountUp end={1200} duration={2} suffix="+" />
                </h2>
                <p className="font-inter font-normal text-[#FFFFFF] text-[24px]">
                  Wide range of Collection
                </p>
              </div>
            </div>

            <div className="w-2/5 mt-10 relative" data-aos="fade-left">
              <figure>
                <img src={Banimg1} alt="Banimg1" />
              </figure>
              <div
                className="rounded-[32px] border border-[#828282] bg-white/20 shadow-[0_2px_16px_rgba(0,0,0,0.08)] backdrop-blur-[25px] absolute bottom-[80px] right-0 py-7 px-7 w-[300px] h-[230px]"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <h3 className="font-inter text-[48px] font-semibold text-white">
                  Top Item
                </h3>
                <p className="font-inter font-normal text-[#FFFFFF] text-[24px]">
                  This Week
                </p>
                <button className="p-5 rounded-[20px] bg-[#FFF] text-black outline-0 text-[16px] font-inter cursor-pointer py-4 px-10">
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
