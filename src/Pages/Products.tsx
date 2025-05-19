import { FaAngleDown } from "react-icons/fa";
import Container from "../Components/Shared/Container";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    link: string;
  }

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      link: "https://sitename.com",
    },
    {
      id: 2,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      link: "https://sitename.com",
    },
    {
      id: 3,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 20.65,
      link: "https://sitename.com",
    },
    {
      id: 4,
      name: "Wooden Coffee Table",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 26.65,
      link: "https://sitename.com",
    },
    {
      id: 5,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      link: "https://sitename.com",
    },
    {
      id: 6,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      link: "https://sitename.com",
    },
    {
      id: 7,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      link: "https://sitename.com",
    },
    {
      id: 8,
      name: "Rug & Carpet",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 40.65,
      link: "https://sitename.com",
    },
    {
      id: 9,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      link: "https://sitename.com",
    },
  ];

  // NEW: Price Filter State
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [minPrice, setMinPrice] = useState<number>(0);

  // NEW: Filtered Products List
  const filteredProducts = products.filter(
    (product) => product.price <= maxPrice
  );

  return (
    <>
      <Container className="">
        <div className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] border-b-[1px] broder-[#B1B1B1] mb-12">
          <h2
            className="text-black not-italic font-semibold leading-none mb-6
                 text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px]"
          >
            All Products
          </h2>
          <p
            className="text-[rgba(0,0,0,0.7)] not-italic font-normal leading-none
                text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px]"
          >
            Everything You Need, All in One Place
          </p>
        </div>

        <main className="">
          <div className="grid grid-cols-12 gap-14">
            {/* Sidebar Filters */}
            <div className="col-span-12 md:col-span-3 space-y-6">
              {/* Price Range */}
              <div>
                <h3 className="text-black not-italic font-semibold leading-none text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] mb-4">
                  Price Range
                </h3>

                {/* Min Price Slider */}
                <label className="block text-black text-sm mb-1 font-medium">
                  Min Price
                </label>
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  step="5"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#B2B2B2] rounded-lg accent-black mb-4"
                />

                {/* Max Price Slider */}
                <label className="block text-black text-sm mb-1 font-medium">
                  Max Price
                </label>
                <input
                  type="range"
                  min={minPrice}
                  max="500"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#B2B2B2] rounded-lg accent-black"
                />

                {/* Selected Range Display */}
                <div className="flex justify-between text-sm mt-3 text-black font-semibold">
                  <span>${minPrice}</span>
                  <span>${maxPrice}</span>
                </div>
              </div>

              {/* Sort By */}
              <div className="w-full flex items-center justify-center">
                <button className="w-full flex justify-center items-center px-12 py-[27px] rounded-[24px] bg-white text-black text-lg font-semibold border border-black shadow-md hover:shadow-lg transition-all duration-300">
                  <span>Sort By</span>
                  <FaAngleDown className="text-xl" />
                </button>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-black not-italic font-semibold leading-none text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-8">
                  Categories
                </h3>

                <div className="mb-4">
                  <h4 className="text-black font-inter font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-normal mb-6">
                    Furniture
                  </h4>
                  {[
                    "Sofas & Sectionals",
                    "Accent Chairs",
                    "Dining Tables",
                    "Coffee Tables",
                    "Beds & Headboards",
                    "Desk & Office Chairs",
                    "Bookcases & Shelving",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 mb-4">
                      <input
                        type="radio"
                        name="furniture"
                        className="w-6 h-6"
                      />
                      <label className="text-black font-light text-base md:text-lg leading-normal">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-black font-inter font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-normal mb-6">
                    Lighting
                  </h4>
                  {["Pendant Lights", "Table Lamps", "Floor Lamps"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2 mb-4">
                        <input
                          type="radio"
                          name="lighting"
                          className="w-6 h-6"
                        />
                        <label className="text-black font-light text-base md:text-lg leading-normal">
                          {item}
                        </label>
                      </div>
                    )
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-black font-inter font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-normal mb-6">
                    Decor
                  </h4>
                  {["Rugs & Carpets", "Wall Art & Prints", "Mirrors"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2 mb-4">
                        <input type="radio" name="decor" className="w-6 h-6" />
                        <label className="text-black font-light text-base md:text-lg leading-normal">
                          {item}
                        </label>
                      </div>
                    )
                  )}
                </div>

                <div>
                  <h4 className="text-black font-inter font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-normal mb-6">
                    Style
                  </h4>
                  {["Modern", "Mid Century", "Minimalist", "Industrial"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2 mb-4">
                        <input type="radio" name="style" className="w-6 h-6" />
                        <label className="text-black font-light text-base md:text-lg leading-normal">
                          {item}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Main Product Grid */}
            <div className="col-span-12 md:col-span-9">
              {/* Brand Filter Buttons */}
              <div className="flex flex-wrap gap-6 mb-6">
                {[...Array(6)].map((_, i) => (
                  <button
                    key={i}
                    className={`rounded-[24px] px-12 py-3 border ${
                      i === 1 ? "bg-black text-white" : "bg-white border-black"
                    }`}
                  >
                    Brand Name
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="flex flex-col">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-2xl w-full object-cover aspect-square"
                    />
                    <div className="mt-2 text-sm flex justify-between items-center">
                      <p className="text-black font-medium text-xl md:text-2xl lg:text-[24px] leading-normal">
                        {product.name}
                      </p>
                      <div className="text-black font-medium text-2xl md:text-3xl lg:text-[32px] leading-normal">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="text-[#0E55B2] font-light text-base underline decoration-solid underline-offset-2 leading-normal"
                    >
                      www.sitename.com
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Products;
