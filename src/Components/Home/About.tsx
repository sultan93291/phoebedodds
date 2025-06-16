import { useDispatch, useSelector } from "react-redux";
import Container from "../Shared/Container";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { aboutFetching } from "@/features/cms/about/aboutSlice";

const About = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.about);

  useEffect(() => {
    dispatch(aboutFetching());
  }, [dispatch]);

  const isLoading = status === "loading";

  return (
    <section>
      <Container className="xl:py-[100px] py-12 border-b border-[#B1B1B1] 2xl:px-0 px-5">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {isLoading ? (
            <>
              <div className="w-full md:w-1/3 h-[40px] bg-gray-300 rounded animate-pulse"></div>
              <div className="md:w-2/3 space-y-4">
                <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
                <div className="h-6 bg-gray-300 rounded w-5/6 animate-pulse"></div>
                <div className="h-6 bg-gray-300 rounded w-4/6 animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              <h3
                className="font-inter xl:text-[32px] lg:text-[25px] text-[20px] font-semibold text-[#000]"
                data-aos="fade-right"
              >
                {items?.data?.title}
              </h3>
              <div className="md:w-2/3" data-aos="fade-left">
                <p className="font-inter xl:text-[24px] lg:text-[20px] text-[16px] font-normal text-[#000]">
                  {items?.data?.description}
                </p>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default About;
