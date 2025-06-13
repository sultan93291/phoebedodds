import { FaAngleDown } from "react-icons/fa";
import Container from "../Components/Shared/Container";
import { useEffect, useState } from "react";
import PageHeading from "@/Components/Reusable/PageHeading";
import { IoFilter } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { mainCategoriesFetching } from "@/features/categories/mainCategoriesSlice";
import { filterProductsFetching } from "@/features/products/productsSlice";
import ProductCard from "@/Components/ProductCard";
import { useSearchParams } from "react-router-dom";

// Import react-range
import { Range, getTrackBackground } from "react-range";
import Loader from "@/Components/Shared/Loader";

const MIN = 0;
const MAX = 10000;

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.allCategories);
  const { products, status } = useSelector(
    (state: RootState) => state?.products
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
    null
  );
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Use array state for react-range
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  useEffect(() => {
    dispatch(mainCategoriesFetching());
  }, [dispatch]);

  useEffect(() => {
    const category = searchParams.get("category");
    const subcategory = searchParams.get("subcategory");
    const sort = searchParams.get("sort");

    const min = searchParams.get("minPrice");
    const max = searchParams.get("maxPrice");

    const filters: any = {};
    if (category) {
      filters.main_category_id = Number(category);
      setSelectedCategory(Number(category));
    } else {
      setSelectedCategory(null);
    }

    if (subcategory) {
      filters.category_id = Number(subcategory);
      setSelectedSubCategory(Number(subcategory));
    } else {
      setSelectedSubCategory(null);
    }

    if (min && max) {
      filters.min_price = Number(min);
      filters.max_price = Number(max);
      setPriceRange([Number(min), Number(max)]);
    }
    if (sort) {
      filters.sort = sort;
      setSortOption(sort);
    } else {
      setSortOption(null);
    }

    dispatch(filterProductsFetching(filters));
  }, [searchParams, dispatch]);

  const onPriceRangeChange = (values: number[]) => {
    setPriceRange(values as [number, number]);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("minPrice", String(values[0]));
      params.set("maxPrice", String(values[1]));
      return params;
    });
  };
  return (
    <Container className="pb-15 2xl:pb-25 mt-20">
      <div className="px-5 2xl:px-0">
        <div className="w-full flex justify-between items-baseline">
          <PageHeading
            title="All Products"
            subtitle="Everything You Need, All in One Place"
          />
          <div className="lg:hidden block">
            <button className="flex gap-2 items-center cursor-pointer">
              Filter
              <span>
                <IoFilter />
              </span>
            </button>
          </div>
        </div>

        <main className="border-t border-[#B1B1B1] pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            {/* Sidebar Filters */}
            <div className=" lg:col-span-3 space-y-6 hidden lg:block">
              {/* Price Range with react-range */}
              <div>
                <h3 className="text-black not-italic font-semibold text-[24px] mb-4">
                  Price Range
                </h3>
                <Range
                  values={priceRange}
                  step={10}
                  min={MIN}
                  max={MAX}
                  onChange={onPriceRangeChange}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        background: getTrackBackground({
                          values: priceRange,
                          colors: ["#ddd", "#000", "#ddd"],
                          min: MIN,
                          max: MAX,
                        }),
                        borderRadius: "3px",
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, index }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "20px",
                        width: "20px",
                        backgroundColor: "#000",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 2px 6px #AAA",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-28px",
                          color: "#000",
                          fontWeight: "bold",
                          fontSize: "12px",
                          fontFamily: "Arial,Helvetica,sans-serif",
                          padding: "2px 5px",
                          borderRadius: "4px",
                          backgroundColor: "#fff",
                          boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                        }}
                      >
                        ${priceRange[index]}
                      </div>
                    </div>
                  )}
                />

                <div className="flex justify-between mt-2">
                  <div className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    ${priceRange[0]}
                  </div>
                  <div className="border border-black text-black px-4 py-2 rounded-full text-sm font-semibold">
                    ${priceRange[1]}
                  </div>
                </div>

                {(searchParams.get("minPrice") ||
                  searchParams.get("maxPrice")) && (
                  <button
                    onClick={() => {
                      setSearchParams((prev) => {
                        const params = new URLSearchParams(prev);
                        params.delete("minPrice");
                        params.delete("maxPrice");
                        return params;
                      });
                      setPriceRange([MIN, MAX]); // Reset local state too
                    }}
                    className="mt-4 text-sm underline cursor-pointer text-blue-600"
                  >
                    Clear Price Filter
                  </button>
                )}
              </div>

              {/* Sort By */}
              <div className="w-full flex items-center justify-center relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="w-full flex justify-center items-center cursor-pointer px-2 py-2 2xl:px-3 2xl:py-[20px] rounded-[24px] bg-white text-black text-lg font-semibold border border-black shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xs">
                    {sortOption === "price_low_to_high"
                      ? "Price (Low to High)"
                      : sortOption === "price_high_to_low"
                      ? "Price (High to Low)"
                      : "Sort By"}
                  </span>
                  <FaAngleDown className="text-xs lg:text-xl ml-2" />
                </button>

                {isSortOpen && (
                  <div className="absolute z-10 mt-2 w-full bg-white border border-black rounded-md shadow-lg text-sm">
                    <div
                      onClick={() =>
                        setSearchParams((prev) => {
                          const params = new URLSearchParams(prev);
                          params.set("sort", "price_low_to_high");
                          return params;
                        })
                      }
                      className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                    >
                      Price (Low to High)
                    </div>
                    <div
                      onClick={() =>
                        setSearchParams((prev) => {
                          const params = new URLSearchParams(prev);
                          params.set("sort", "price_high_to_low");
                          return params;
                        })
                      }
                      className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                    >
                      Price (High to Low)
                    </div>
                    <div
                      onClick={() =>
                        setSearchParams((prev) => {
                          const params = new URLSearchParams(prev);
                          params.delete("sort");
                          return params;
                        })
                      }
                      className="px-4 py-2 text-xs text-red-500 hover:bg-gray-100 cursor-pointer"
                    >
                      Clear Sort
                    </div>
                  </div>
                )}
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-black not-italic font-semibold text-[32px] mb-8">
                  Categories
                </h3>

                {items?.data
                  ?.filter((item) => item?.categories?.length !== 0)
                  .map((cat) => (
                    <div key={cat.id} className="mb-4">
                      <h4 className="text-black font-medium cursor-pointer text-[24px] mb-6">
                        {cat.name}
                      </h4>

                      {cat?.categories?.map((sub) => (
                        <div
                          key={sub.id}
                          className="flex items-center cursor-pointer gap-2 mb-4"
                        >
                          <input
                            type="radio"
                            name="subcategory"
                            className="w-6 h-6 cursor-pointer accent-black"
                            checked={selectedSubCategory === sub.id}
                            onChange={() =>
                              setSearchParams((prev) => {
                                const params = new URLSearchParams(prev);
                                params.set("category", String(cat.id));
                                params.set("subcategory", String(sub.id));
                                return params;
                              })
                            }
                          />
                          <label className="text-black font-light text-base md:text-lg leading-normal">
                            {sub.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  ))}

                {(selectedCategory || selectedSubCategory) && (
                  <button
                    onClick={() => {
                      setSearchParams((prev) => {
                        const params = new URLSearchParams(prev);
                        params.delete("category");
                        params.delete("subcategory");
                        return params;
                      });
                    }}
                    className="mt-4 text-sm underline cursor-pointer text-blue-600"
                  >
                    Clear Category Filter
                  </button>
                )}
              </div>
            </div>

            {/* Main Product Grid */}
            <div className="col-span-full lg:col-span-9">
              {status === "loading" ? (
                <div className="flex justify-center items-center min-h-[500px]">
                  <Loader />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {products?.data?.products?.data?.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Products;
