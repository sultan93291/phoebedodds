import Container from "../Shared/Container";
import { FiArrowUpRight } from "react-icons/fi";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { bannerFetching } from "@/features/cms/banner/bannerSlice";
import { Link } from "react-router-dom";

const Banner = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, status } = useSelector((state: RootState) => state.banner);

  console.log(items);

  useEffect(() => {
    dispatch(bannerFetching());
  }, [dispatch]);

  const count = items?.data?.total_collection?.split("+") || [0];

  const baseUrl = import.meta.env.VITE_BASE_URL;

  if (status === "loading") {
    return (
      <Container>
        <BannerSkeleton />
      </Container>
    );
  }

  if (status === "failed") {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <span className="text-red-500 text-lg font-semibold">
          Failed to load banner.
        </span>
      </div>
    );
  }

  return (
    <section className="pb-8 pt-[120px] 2xl:px-0 px-4">
      <Container className="relative overflow-hidden rounded-[36px]">
        <img
          src={`${baseUrl}/${items?.data?.background_image}`}
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 xl:p-[120px] p-5">
          <div className="xl:flex gap-x-[22px]">
            <div className="w-full xl:w-3/5" data-aos="fade-right">
              <h1 className="2xl:text-[96px] lg:text-[56px] text-[35px] font-semibold leading-normal font-inter text-[#FFF]">
                {items?.data?.title}
              </h1>
              <p
                className="font-inter font-normal text-[#FFFFFF] lg:text-[24px] text-[20px] pt-6 pb-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {items?.data?.sub_title}
              </p>
              <div className="flex" data-aos="fade-up" data-aos-delay="400">
                <Link
                  to={`${items?.data?.button_link}`}
                  className="rounded-[24px] bg-[#FFF] text-black outline-0 lg:text-[16px] text-[14px] font-inter cursor-pointer lg:py-5 py-3 lg:px-12 px-8 hover:scale-105 duration-300"
                >
                  {items?.data?.button_text}
                </Link>
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
                  <CountUp end={+count[0]} duration={2} suffix="+" />
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
                  src={`${baseUrl}/${items?.data?.icon}`}
                  alt="Banimg1"
                  className="xl:h-full lg:h-[450px] md:h-[350px] mx-auto"
                />
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const BannerSkeleton = () => {
  return (
    <section className="pb-8 pt-[120px] 2xl:px-0 px-4">
      <div className="w-full min-h-screen bg-gray-200 animate-pulse rounded-[36px] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse" />

        <div className="relative z-10 p-5 xl:p-[120px] flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-3/5 space-y-6">
            <div className="h-12 xl:h-20 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-6 xl:h-8 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-10 w-1/3 bg-gray-300 rounded"></div>
            <div className="h-24 w-1/2 bg-gray-300 rounded mt-6"></div>
          </div>
          <div className="xl:w-2/5 w-full mt-10 relative">
            <figure className="flex justify-center">
              <div className="bg-gray-300 animate-pulse rounded-3xl xl:h-[550px] lg:h-[450px] md:h-[350px] h-[250px] w-[250px] xl:w-[400px] mx-auto"></div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
