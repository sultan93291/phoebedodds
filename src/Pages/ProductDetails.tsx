import Container from "@/Components/Shared/Container";
import { Link, useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  link: string;
  brand?: string;
  category?: string;
  subCategory?: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Modern Dining Set",
    price: 6870,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
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
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
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
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
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
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
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
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
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
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
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
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
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
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
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
    description:
      "Transform your space with this elegantly crafted piece, designed to bring style and function together. With its clean lines, premium materials, and timeless appeal, it's the perfect addition to any modern interior.",
    features: [
      "Modern Aesthetic: Clean lines and timeless style that elevate any space.",
      "Customizable Options: Tailored materials, colors, and finishes to suit your taste.",
      "Space-Saving Design: Smart solutions for maximizing functionality in compact areas.",
      "Premium Materials: Built with high-quality, durable components for long-lasting use.",
      "Seamless Integrations: Designed to blend effortlessly with various interior styles.",
    ],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container>
        <div className="mt-40 px-4 py-12">
          <p data-aos="fade-up" className="text-center text-xl text-red-500 font-medium">
            Product not found.
          </p>
        </div>
      </Container>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Container>
      <div className="mx-auto px-4 py-12 mt-40">
        {/* Breadcrumb */}
        <nav data-aos="fade-up" className="text-sm text-gray-500 mb-6   pb-10">
          <span>Home</span> &nbsp; &lt; &nbsp;
          <span>All Products</span> &nbsp; &lt; &nbsp;
          <span className="text-black font-medium">{product.category}</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Image */}
          <div data-aos="fade-right" className="w-full lg:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-2xl w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div data-aos="fade-left" className="w-full lg:w-1/2 flex flex-col ">
            <div>
              <h1 className="text-black text-[28px] sm:text-[36px] md:text-[48px] font-semibold not-italic leading-normal mb-4">
                {product.name}
              </h1>
              <p className="text-black text-[18px] sm:text-[20px] md:text-[24px] font-medium not-italic leading-normalmb-4">
                Price
              </p>
              <p className="text-[#0E55B2] text-[28px] sm:text-[36px] md:text-[48px] font-normal not-italic leading-normal mb-6">
                ${product.price.toFixed(2)}
              </p>

              <h3 className="text-black text-[18px] sm:text-[20px] md:text-[24px] font-medium not-italic leading-normal mb-4">
                Key features
              </h3>
              <ul className="list-disc ml-6 text-black text-base font-normal not-italic leading-[36px] space-y-2 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <button className="flex w-[354px] h-[73px] px-12 py-[27px] justify-center items-center gap-4 rounded-[24px] bg-black text-white cursor-pointer  hover:scale-105 duration-300">
              Get It Now
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mb-16 border-t border-gray-200 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <h3 data-aos="fade-up" className="text-lg font-semibold text-black col-span-1 md:col-span-1">
              Description
            </h3>
            <p data-aos="fade-up" className="text-gray-700 leading-relaxed text-base md:col-span-4">
              {product.description + " " + product.description}
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div data-aos="fade-left">
            <h3 className="text-xl font-semibold text-black mb-6">
              Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
                <div key={prod.id} className="flex flex-col">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="rounded-2xl object-cover aspect-square w-full"
                  />
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-black font-medium text-xl md:text-2xl lg:text-[24px] leading-normal">
                      {prod.name}
                    </p>
                    <p className="text-black font-medium text-2xl md:text-3xl lg:text-[32px] leading-normal">
                      ${prod.price.toFixed(2)}
                    </p>
                  </div>
                  <Link
                    to={prod.link}
                    className="text-[#0E55B2] font-light text-base underline decoration-solid underline-offset-2 leading-normal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {prod.link}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductDetails;
