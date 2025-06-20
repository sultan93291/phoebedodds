import { FaAngleDown } from "react-icons/fa";
import Container from "../Components/Shared/Container";
import { useEffect, useRef, useState } from "react";
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

import { brandFetching } from "@/features/products/brandSlice";

const MIN = 0;
const MAX = 10000;

const Products = () => {
  const productGridRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { items, status: categoryStatus } = useSelector(
    (state: RootState) => state.allCategories
  );
  const { brands, status: brandStatus } = useSelector(
    (state: RootState) => state.brands
  );
  const { products, status } = useSelector(
    (state: RootState) => state?.products
  );

  console.log(products);

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
    null
  );
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Use array state for react-range
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  useEffect(() => {
    dispatch(mainCategoriesFetching());
    dispatch(brandFetching());
  }, [dispatch]);

  useEffect(() => {
    const category = searchParams.get("category");
    const subcategory = searchParams.get("subcategory");
    const sort = searchParams.get("sort");

    const min = searchParams.get("minPrice");
    const max = searchParams.get("maxPrice");
    const page = searchParams.get("page") || "1"; // default page 1
    const brand = searchParams.get("brand");
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

    if (brand) {
      filters.brand = brand;
      setSelectedBrand(brand);
    } else {
      setSelectedBrand(null);
    }

    filters.page = Number(page);

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

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand === selectedBrand ? null : brand);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (brand === selectedBrand) {
        params.delete("brand");
        params.delete("page");
      } else {
        params.set("brand", brand);
        params.delete("page");
      }
      return params;
    });
  };
  return (
    <Container className="pb-15 2xl:pb-25 mt-20 min-h-screen">
      <div ref={productGridRef} className="px-5 2xl:px-0 ">
        <div className="w-full flex justify-between items-baseline">
          <PageHeading
            title={
              status === "loading" ? (
                <div className="h-32 w-96 bg-gray-300 animate-pulse rounded" />
              ) : products?.data?.length === 0 &&
                products?.data?.length === 0 ? (
                "No Products Found"
              ) : products?.data?.total_products &&
                products?.data?.total_products > 0 ? (
                `${products.data.total_products} Products Found`
              ) : (
                "All Products"
              )
            }
            subtitle="Everything You Need, All in One Place"
          />
          <div className="lg:hidden block">
            <button
              onClick={toggleFilter}
              className="flex gap-2 items-center cursor-pointer"
            >
              Filter
              <span>
                <IoFilter />
              </span>
            </button>
          </div>
        </div>

        <main className="border-t border-[#B1B1B1] pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 ">
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
                      setPriceRange([MIN, MAX]);
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
                          setIsSortOpen(false);
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
                          setIsSortOpen(false);
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
                          setIsSortOpen(false);
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
              {categoryStatus === "loading" ? (
                <div>
                  <h3 className="text-black not-italic font-semibold text-[32px] mb-8">
                    Categories
                  </h3>

                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="mb-8 animate-pulse">
                      {/* Category name */}
                      <div className="h-6 w-1/3 bg-gray-200 rounded mb-6"></div>

                      {/* Subcategories */}
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <>
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
                                  params.delete("page");
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
                </>
              )}
            </div>

            {/* Main Product Grid */}
            <div className="col-span-full lg:col-span-9">
              {/* Brands */}
              <div>
                <h3 className="text-black not-italic font-semibold text-[24px] mb-4">
                  Brands
                </h3>

                {brandStatus === "loading" ? (
                  <div className="flex flex-wrap gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-20 rounded-[24px] bg-gray-200 animate-pulse"
                      ></div>
                    ))}
                  </div>
                ) : brands?.data?.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {brands?.data?.map((brand: string) => (
                      <button
                        key={brand}
                        onClick={() => handleBrandClick(brand)}
                        className={`rounded-[24px]  px-2 py-1 lg:px-12 lg:py-3 cursor-pointer border text-sm font-medium ${
                          selectedBrand === brand
                            ? "bg-black text-white"
                            : "border-black hover:bg-gray-100"
                        }`}
                        aria-label={`Filter by ${brand}`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No brands available</p>
                )}

                {selectedBrand && (
                  <button
                    onClick={() => {
                      setSearchParams((prev) => {
                        const params = new URLSearchParams(prev);
                        params.delete("brand");

                        return params;
                      });
                      setSelectedBrand(null);
                    }}
                    className="mt-4 text-sm underline cursor-pointer text-blue-600"
                    aria-label="Clear brand filter"
                  >
                    Clear Brand Filter
                  </button>
                )}
              </div>
              {status === "loading" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 min-h-screen mt-2">
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-full animate-pulse"
                    >
                      {/* Image skeleton */}
                      <div className="w-full h-[300px] rounded overflow-hidden bg-gray-200"></div>

                      {/* Title & Price */}
                      <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between pt-6 pb-2 items-center">
                        <div className="h-6 w-[250px] bg-gray-200 rounded"></div>
                        <div className="h-6 w-[80px] bg-gray-200 rounded"></div>
                      </div>

                      {/* URL text */}
                      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {products?.success && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 min-h-screen mt-2">
                      {products?.data?.products?.data?.map((product, index) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          index={index}
                        />
                      ))}
                    </div>
                  )}

                  {!products?.status && products?.data?.length === 0 && (
                    <p className="text-center mt-20">{products?.message}</p>
                  )}
                </>
              )}

              <div className="flex flex-wrap justify-center gap-2 mt-10">
                {products?.data?.products?.links?.map((link, index) => {
                  const label = link.label
                    .replace("&laquo;", "«")
                    .replace("&raquo;", "»")
                    .replace("Previous", "Prev")
                    .replace("Next", "Next");

                  return (
                    <button
                      key={index}
                      disabled={!link.url}
                      onClick={() => {
                        if (link.url) {
                          const url = new URL(link.url);
                          const page = url.searchParams.get("page");
                          setSearchParams((prev) => {
                            const params = new URLSearchParams(prev);
                            if (page) params.set("page", page);
                            return params;
                          });

                          if (productGridRef.current) {
                            productGridRef.current.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }
                      }}
                      className={`px-4 py-2 rounded border text-sm cursor-pointer ${
                        link.active
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-gray-100"
                      } disabled:opacity-50`}
                      dangerouslySetInnerHTML={{ __html: label }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        {/* Backdrop */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={toggleFilter}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            isFilterOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4  flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button className="cursor-pointer" onClick={toggleFilter}>
              ✕
            </button>
          </div>
          <div className="py-4 px-6 space-y-6">
            {/* Price Range */}
            <div>
              <h3 className="text-black font-semibold text-lg mb-2">
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
            </div>

            {/* Sort By */}
            <div>
              <h3 className="text-black font-semibold text-lg mb-2">Sort By</h3>
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="w-full flex justify-between items-center cursor-pointer px-3 py-2 rounded-[24px] bg-white text-black text-sm font-semibold border border-black shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span>
                    {sortOption === "price_low_to_high"
                      ? "Price (Low to High)"
                      : sortOption === "price_high_to_low"
                      ? "Price (High to Low)"
                      : "Sort By"}
                  </span>
                  <FaAngleDown className="text-sm" />
                </button>
                {isSortOpen && (
                  <div className="absolute z-10 mt-2 w-full bg-white border border-black rounded-md shadow-lg text-sm">
                    <div
                      onClick={() => {
                        setSearchParams((prev) => {
                          setIsSortOpen(false);
                          const params = new URLSearchParams(prev);
                          params.set("sort", "price_low_to_high");
                          return params;
                        });
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Price (Low to High)
                    </div>
                    <div
                      onClick={() => {
                        setSearchParams((prev) => {
                          setIsSortOpen(false);
                          const params = new URLSearchParams(prev);
                          params.set("sort", "price_high_to_low");
                          return params;
                        });
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Price (High to Low)
                    </div>
                    <div
                      onClick={() => {
                        setSearchParams((prev) => {
                          setIsSortOpen(false);
                          const params = new URLSearchParams(prev);
                          params.delete("sort");
                          return params;
                        });
                      }}
                      className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                    >
                      Clear Sort
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-black font-semibold text-lg mb-2">
                Categories
              </h3>
              {items?.data
                ?.filter((item) => item?.categories?.length !== 0)
                .map((cat) => (
                  <div key={cat.id} className="mb-4">
                    <h4 className="text-black font-medium text-base mb-2">
                      {cat.name}
                    </h4>
                    {cat?.categories?.map((sub) => (
                      <div
                        key={sub.id}
                        className="flex items-center gap-2 mb-2"
                      >
                        <input
                          type="radio"
                          id={`mobile-subcategory-${sub.id}`}
                          name="mobile-subcategory"
                          className="w-4 h-4 cursor-pointer accent-black"
                          checked={selectedSubCategory === sub.id}
                          onChange={() => {
                            setSearchParams((prev) => {
                              const params = new URLSearchParams(prev);
                              params.set("category", String(cat.id));
                              params.set("subcategory", String(sub.id));
                              params.delete("page");
                              return params;
                            });
                          }}
                          aria-label={`Select ${sub.name}`}
                        />
                        <label
                          htmlFor={`mobile-subcategory-${sub.id}`}
                          className="text-black font-light text-sm"
                        >
                          {sub.name}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
            </div>

            {/* Clear All Filters */}
            {(searchParams.get("minPrice") ||
              searchParams.get("maxPrice") ||
              searchParams.get("category") ||
              searchParams.get("subcategory") ||
              searchParams.get("sort")) && (
              <button
                onClick={() => {
                  setSearchParams({});
                  setPriceRange([MIN, MAX]);
                  setSortOption(null);
                  setSelectedCategory(null);
                  setSelectedSubCategory(null);
                  setIsFilterOpen(false);
                }}
                className="w-full text-center text-sm underline cursor-pointer text-blue-600"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
