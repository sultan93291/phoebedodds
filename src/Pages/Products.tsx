import { FaAngleDown } from "react-icons/fa";
import Container from "../Components/Shared/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import PageHeading from "@/Components/Reusable/PageHeading";

const Products = () => {
  const navigate = useNavigate();
  interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    brand: string;
    category: string;
    subCategory: string;
    link: string;
  }

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "FurniLux",
      category: "Furniture",
      subCategory: "Dining Tables",
      link: "https://sitename.com",
    },
    {
      id: 2,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Sofas & Sectionals",
      link: "https://sitename.com",
    },
    {
      id: 3,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 20.65,
      brand: "WoodHouse",
      category: "Furniture",
      subCategory: "Accent Chairs",
      link: "https://sitename.com",
    },
    {
      id: 4,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Pendant Lights",
      link: "https://sitename.com",
    },
    {
      id: 11,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 5,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 6,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 7,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Lightify",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 12,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Lightify",
      category: "Lightify",
      subCategory: "Floor Lamps",
      link: "https://sitename.com",
    },
  ];

  const categoryData = [
    {
      name: "Furniture",
      subCategories: [
        "Sofas & Sectionals",
        "Accent Chairs",
        "Dining Tables",
        "Coffee Tables",
        "Beds & Headboards",
        "Desk & Office Chairs",
        "Bookcases & Shelving",
      ],
    },
    {
      name: "Lighting",
      subCategories: ["Pendant Lights", "Table Lamps", "Floor Lamps"],
    },
    {
      name: "Decor",
      subCategories: ["Rugs & Carpets", "Wall Art & Prints", "Mirrors"],
    },
    {
      name: "Style",
      subCategories: ["Modern", "Mid Century", "Minimalist", "Industrial"],
    },
  ];

  const MIN = 0;
  const MAX = 500;
  const [values, setValues] = useState([0, 300]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const uniqueBrands = Array.from(new Set(products.map((p) => p.brand)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );

  // Filtered Products List
  const filteredProducts = products.filter((product) => {
    return (
      product.price >= values[0] &&
      product.price <= values[1] &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedSubCategory || product.subCategory === selectedSubCategory)
    );
  });

  const handleViewDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Container className="pb-25 px-5">
        <PageHeading
          title="All Products"
          subtitle="Everything You Need, All in One Place"
        />
        <main className="">
          <div className="grid grid-cols-12 gap-14">
            {/* Sidebar Filters */}
            <div className="col-span-12 md:col-span-3 space-y-6">
              {/* Price Range */}
              <div className="w-full max-w-md mx-auto mt-10">
                <h3 className="text-black not-italic font-semibold leading-none text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] mb-4">
                  Price Range
                </h3>

                <Range
                  values={values}
                  step={5}
                  min={MIN}
                  max={MAX}
                  onChange={(values) => setValues(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        background: getTrackBackground({
                          values,
                          colors: ["#B2B2B2", "#000000", "#B2B2B2"],
                          min: MIN,
                          max: MAX,
                        }),
                        borderRadius: "8px",
                        margin: "1.5rem 0",
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, index }) => (
                    <div
                      {...props}
                      className="w-5 h-5 bg-black rounded-full cursor-pointer"
                    >
                      <div className="absolute top-[-30px] text-xs bg-white px-2 py-1 rounded shadow">
                        ${values[index]}
                      </div>
                    </div>
                  )}
                />

                {/* Price labels below */}
                <div className="flex justify-between text-sm text-black font-semibold">
                  <span className="flex items-center gap-2 px-12 py-3 rounded-[24px] bg-[#F5F5F5]">
                    ${values[0]}
                  </span>
                  <span className="flex items-center gap-2 px-12 py-3 rounded-[24px] border border-black">
                    ${values[1]}
                  </span>
                </div>
              </div>

              {/* Sort By */}
              <div className="w-full flex items-center justify-center">
                <button className="w-full flex justify-center items-center cursor-pointer px-12 py-[27px] rounded-[24px] bg-white text-black text-lg font-semibold border border-black shadow-md hover:shadow-lg transition-all duration-300">
                  <span>Sort By</span>
                  <FaAngleDown className="text-xl" />
                </button>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-black not-italic font-semibold text-[32px] mb-8">
                  Categories
                </h3>

                {categoryData.map((cat) => (
                  <div key={cat.name} className="mb-4">
                    <h4 className="text-black font-medium cursor-pointer text-[24px] mb-6">
                      {cat.name}
                    </h4>

                    {cat.subCategories.map((sub) => (
                      <div
                        key={sub}
                        className="flex items-center cursor-pointer gap-2 mb-4"
                      >
                        <input
                          type="radio"
                          name="subcategory"
                          className="w-6 h-6 cursor-pointer accent-black"
                          checked={selectedSubCategory === sub}
                          onChange={() => {
                            setSelectedCategory(cat.name);
                            setSelectedSubCategory(sub);
                          }}
                        />
                        <label className="text-black font-light text-base md:text-lg leading-normal">
                          {sub}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}

                {(selectedCategory || selectedSubCategory) && (
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedSubCategory(null);
                    }}
                    className="mt-4 text-sm underline cursor-pointer text-blue-600"
                  >
                    Clear Category Filter
                  </button>
                )}
              </div>
            </div>

            {/* Main Product Grid */}
            <div className="col-span-12 md:col-span-9">
              {/* Brand Filter Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                {uniqueBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() =>
                      setSelectedBrand((prev) =>
                        prev === brand ? null : brand
                      )
                    }
                    className={`rounded-[24px] px-6 py-2 lg:px-12 lg:py-3 cursor-pointer border text-sm font-medium transition-all duration-300 ${
                      selectedBrand === brand
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleViewDetails(product.id)}
                    className="flex flex-col cursor-pointer"
                  >
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
