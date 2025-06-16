import Container from "../Shared/Container";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { partnerFetching } from "@/features/cms/partners/partnerSlice";

const OurPartners = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.partner);

  useEffect(() => {
    dispatch(partnerFetching());
  }, [dispatch]);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const isLoading = status === "loading";

  return (
    <section>
      <Container className="xl:py-[100px] py-[50px] border-b border-[#B1B1B1] 2xl:px-0 px-5">
        <h3
          className="font-inter xl:text-[32px] lg:text-[28px] text-[25px] font-semibold text-[#000] w-full"
          data-aos="fade-up"
        >
          Our Partners
        </h3>

        <div className="flex justify-between pt-8 flex-wrap lg:gap-y-6 gap-y-10">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[150px] h-[80px] bg-gray-300 rounded animate-pulse"
                ></div>
              ))
            : items?.data?.map((item, index) => (
                <img
                  key={index}
                  src={`${baseUrl}/${item?.logo}`}
                  alt={item?.name}
                  className="w-[150px] h-auto"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                />
              ))}
        </div>
      </Container>
    </section>
  );
};

export default OurPartners;
