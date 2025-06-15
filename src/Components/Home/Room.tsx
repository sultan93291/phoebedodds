import Container from "../Shared/Container";
import Bedromm1 from "../../assets/Images/bedroom1.png";
import Bedromm2 from "../../assets/Images/bedroom2.png";
import Bedromm3 from "../../assets/Images/bedroom3.png";
import type { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { mainCategoriesFetching } from "@/features/categories/mainCategoriesSlice";
import { Link } from "react-router-dom";

const Room = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items } = useSelector((state: RootState) => state.allCategories);

  useEffect(() => {
    dispatch(mainCategoriesFetching());
  }, [dispatch]);
  return (
    <section>
      <Container className="xl:py-[100px] py-[50px] border-b border-[#B1B1B1] 2xl:px-0 px-5">
        <div className="flex gap-x-6 flex-wrap md:flex-nowrap">
          {/* Living Room */}

          <div
            className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl cursor-pointer xl:mb-0 mb-5"
            data-aos="fade-right"
          >
            <figure>
              <img
                src={
                  items?.data?.[0]?.categories?.[0]?.image
                    ? `${import.meta.env.VITE_BASE_URL}/${
                        items?.data?.[0]?.categories?.[0]?.image
                      }`
                    : Bedromm1
                }
                alt="Bedromm1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
              <h3 className="font-inter lg:text-[32px] text-[24px] font-semibold text-white drop-shadow-md mb-4">
                {items?.data?.[0]?.categories?.[0]?.name ?? "Living Room"}
              </h3>
              <Link
                to={`/product?category=${items?.data?.[0]?.id}&subcategory=${items?.data?.[0]?.categories?.[0]?.id}`}
                className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer text-[16px] font-medium hover:bg-gray-200 transition opacity-0 group-hover:opacity-100 duration-300"
              >
                See Collections
              </Link>
            </div>
          </div>

          {/* Dining + Bedroom */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div
              className="w-full relative group overflow-hidden rounded-2xl cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <figure>
                <img
                  src={
                    items?.data?.[0]?.categories?.[1]?.image
                      ? `${import.meta.env.VITE_BASE_URL}/${
                          items?.data?.[0]?.categories?.[1]?.image
                        }`
                      : Bedromm3
                  }
                  alt="Bedromm2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
                <h3 className="font-inter lg:text-[32px] text-[24px] font-semibold text-white drop-shadow-md mb-4">
                  {items?.data?.[0]?.categories?.[1]?.name ?? "Dining Room"}
                </h3>
                <Link
                  to={`/product?category=${items?.data?.[0]?.id}&subcategory=${items?.data?.[0]?.categories?.[1]?.id}`}
                  className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer text-[16px] font-medium hover:bg-gray-200 transition opacity-0 group-hover:opacity-100 duration-300"
                >
                  See Collections
                </Link>
              </div>
            </div>

            <div
              className="w-full relative group overflow-hidden rounded-2xl cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <figure>
                <img
                  src={
                    items?.data?.[0]?.categories?.[2]?.image
                      ? `${import.meta.env.VITE_BASE_URL}/${
                          items?.data?.[0]?.categories?.[2]?.image
                        }`
                      : Bedromm2
                  }
                  alt="Bedromm3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
                <h3 className="font-inter lg:text-[32px] text-[24px] font-semibold text-white drop-shadow-md mb-4">
                  {items?.data?.[0]?.categories?.[2]?.name ?? "Bed room"}
                </h3>
                <Link
                  to={`/product?category=${items?.data?.[0]?.id}&subcategory=${items?.data?.[0]?.categories?.[2]?.id}`}
                  className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer text-[16px] font-medium hover:bg-gray-200 transition opacity-0 group-hover:opacity-100 duration-300"
                >
                  See Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Room;
