import Container from "../Shared/Container";

import ProductCard from "../ProductCard";
import type { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsFetching } from "@/features/products/productsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products } = useSelector((state: RootState) => state.products);

  console.log(products);

  useEffect(() => {
    dispatch(filterProductsFetching({}));
  }, [dispatch]);
  return (
    <section>
      <Container className="xl:py-[100px] py-[50px] 2xl:px-0 px-5">
        <h3
          className="font-inter xl:text-[32px] lg:text-[28px] text-[24px] font-normal text-center text-[#000] w-full"
          data-aos="fade-up"
        >
          Products
        </h3>
        <h1
          className="xl:text-[86px] lg:text-[56px] text-[30px] font-semibold leading-normal font-inter text-[#000] text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Standout Pieces Across All Brands
        </h1>
        <p
          className="font-inter font-normal text-[#000] xl:text-[24px] lg:text-[20px] text-[20px] pb-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Compare quality finds without the extra tabs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-6 gap-y-20 cursor-pointer">
          {products?.data?.products?.data?.slice(0, 6).map((product, index) => (
            <ProductCard index={index} product={product} key={product.id} />
          ))}
        </div>
        <div
          className="flex items-center justify-center mt-20 gap-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex-1 h-[1px] bg-[#828282]" />
          <Link
            to={"/product"}
            className="px-6 py-3 rounded-[24px] bg-[#000] text-white hover:bg-[#FFF] hover:text-black hover:outline hover:outline-[#000] text-[16px] font-inter cursor-pointer duration-300"
          >
            See All Products
          </Link>
          <div className="flex-1 h-[1px] bg-[#828282]" />
        </div>
      </Container>
    </section>
  );
};

export default Feature;
