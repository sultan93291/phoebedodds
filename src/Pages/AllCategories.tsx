import type { AppDispatch, RootState } from "@/app/store";
import PageHeading from "@/Components/Reusable/PageHeading";
import Container from "@/Components/Shared/Container";
import Loader from "@/Components/Shared/Loader";
import { mainCategoriesFetching } from "@/features/categories/mainCategoriesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, status } = useSelector(
    (state: RootState) => state.allCategories
  );

  useEffect(() => {
    dispatch(mainCategoriesFetching());
  }, [dispatch]);

  return (
    <Container className="py-20 px-4 2xl:px-0">
      <div className="mb-12">
        <PageHeading
          title="Explore All Categories"
          subtitle="Browse furniture, lighting, decor, and more—organized by product type."
        />
      </div>

      {/* Loader */}
      {status === "loading" && (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader />
        </div>
      )}

      {/* Content */}
      {status === "succeeded" &&
        items?.data?.map((section) => (
          <div key={section?.id} className="mb-14">
            <h2 className="text-black font-inter text-[24px] sm:text-[28px] md:text-[32px] font-semibold not-italic leading-normal mb-4">
              {section?.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section?.categories?.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className="relative rounded-xl overflow-hidden group shadow hover:shadow-lg transition h-50 md:h-[300px] lg:h-[500px]"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.70)), url(${
                        import.meta.env.VITE_BASE_URL
                      }/${item.image})`,
                    }}
                  ></div>
                  <Link
                    to={`/product?category=${section?.id}&subcategory=${item?.id}`}
                    className="absolute inset-0 flex flex-col justify-center items-center text-white cursor-pointer"
                  >
                    <p className="text-white font-inter text-[24px] sm:text-[28px] md:text-[32px] font-semibold not-italic leading-normal text-center mb-5">
                      {item.name}
                    </p>
                    <span className="text-black text-sm sm:text-base font-normal not-italic leading-normal flex items-start gap-12 bg-white py-3 px-5 lg:px-12 lg:py-6 rounded-full opacity-0 translate-y-3 group-hover:opacity-100 hover:bg-black border border-white hover:border-white hover:text-white group-hover:translate-y-0 transition-all duration-500">
                      See Collections
                    </span>
                  </Link>
                </div>
              ))}
              {section?.categories?.length === 0 && (
                <p className="col-span-12 text-center text-gray-400">
                  No subcategory found
                </p>
              )}
            </div>
          </div>
        ))}

      {/* Error or empty state */}
      {status === "failed" && (
        <p className="text-center text-red-500">Failed to load categories.</p>
      )}
    </Container>
  );
};

export default AllCategories;
