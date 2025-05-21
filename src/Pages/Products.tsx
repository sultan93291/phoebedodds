import { FaAngleDown } from "react-icons/fa";
import Container from "../Components/Shared/Container";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import PageHeading from "@/Components/Reusable/PageHeading";
import ReactPaginate from "react-paginate";
import { IoFilter } from "react-icons/io5";

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
      image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
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
      id: 5,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 6,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 7,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 8,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Lightify",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 9,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Lightify",
      category: "Lightify",
      subCategory: "Floor Lamps",
      link: "https://sitename.com",
    },
    {
      id: 10,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
      price: 4.65,
      brand: "FurniLux",
      category: "Furniture",
      subCategory: "Dining Tables",
      link: "https://sitename.com",
    },
    {
      id: 11,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Sofas & Sectionals",
      link: "https://sitename.com",
    },
    {
      id: 12,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 20.65,
      brand: "WoodHouse",
      category: "Furniture",
      subCategory: "Accent Chairs",
      link: "https://sitename.com",
    },
    {
      id: 13,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Pendant Lights",
      link: "https://sitename.com",
    },
    {
      id: 14,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 15,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 16,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Modest range",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 17,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Balconiy",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 18,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Kitchen work",
      category: "Lightify",
      subCategory: "Floor Lamps",
      link: "https://sitename.com",
    },
    {
      id: 19,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
      price: 4.65,
      brand: "FurniLux",
      category: "Furniture",
      subCategory: "Dining Tables",
      link: "https://sitename.com",
    },
    {
      id: 20,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Sofas & Sectionals",
      link: "https://sitename.com",
    },
    {
      id: 21,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 20.65,
      brand: "WoodHouse",
      category: "Furniture",
      subCategory: "Accent Chairs",
      link: "https://sitename.com",
    },
    {
      id: 21,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Pendant Lights",
      link: "https://sitename.com",
    },
    {
      id: 23,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 24,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 25,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 26,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Lightify",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 27,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Lightify",
      category: "Lightify",
      subCategory: "Floor Lamps",
      link: "https://sitename.com",
    },
    {
      id: 28,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
      price: 4.65,
      brand: "FurniLux",
      category: "Furniture",
      subCategory: "Dining Tables",
      link: "https://sitename.com",
    },
    {
      id: 29,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Sofas & Sectionals",
      link: "https://sitename.com",
    },
    {
      id: 30,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 20.65,
      brand: "WoodHouse",
      category: "Furniture",
      subCategory: "Accent Chairs",
      link: "https://sitename.com",
    },
    {
      id: 31,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Pendant Lights",
      link: "https://sitename.com",
    },
    {
      id: 32,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 33,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 34,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 459.65,
      brand: "Modest range",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 35,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 354.65,
      brand: "Balconiy",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 36,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Kitchen work",
      category: "Lightify",
      subCategory: "Floor Lamps",
      link: "https://sitename.com",
    },
    {
      id: 37,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
      price: 4.65,
      brand: "FurniLux",
      category: "Furniture",
      subCategory: "Dining Tables",
      link: "https://sitename.com",
    },
    {
      id: 38,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Sofas & Sectionals",
      link: "https://sitename.com",
    },
    {
      id: 39,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 20.65,
      brand: "WoodHouse",
      category: "Furniture",
      subCategory: "Accent Chairs",
      link: "https://sitename.com",
    },
    {
      id: 40,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 50,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Pendant Lights",
      link: "https://sitename.com",
    },
    {
      id: 41,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 60,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 42,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 70,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 43,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 80,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 44,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 90,
      brand: "Lightify",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 45,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Lightify",
      category: "Lightify",
      subCategory: "Floor Lamps",
      link: "https://sitename.com",
    },
    {
      id: 46,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
      price: 100,
      brand: "FurniLux",
      category: "Furniture",
      subCategory: "Dining Tables",
      link: "https://sitename.com",
    },
    {
      id: 47,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 120,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Sofas & Sectionals",
      link: "https://sitename.com",
    },
    {
      id: 48,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 140,
      brand: "WoodHouse",
      category: "Furniture",
      subCategory: "Accent Chairs",
      link: "https://sitename.com",
    },
    {
      id: 49,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 160,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Pendant Lights",
      link: "https://sitename.com",
    },
    {
      id: 50,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 180,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 51,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 200,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 52,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 220,
      brand: "Modest range",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 53,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 240,
      brand: "Balconiy",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 54,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 260,
      brand: "Kitchen work",
      category: "Lightify",
      subCategory: "Floor Lamps",
      link: "https://sitename.com",
    },
    {
      id: 55,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
      price: 280,
      brand: "FurniLux",
      category: "Furniture",
      subCategory: "Dining Tables",
      link: "https://sitename.com",
    },
    {
      id: 56,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 300,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Sofas & Sectionals",
      link: "https://sitename.com",
    },
    {
      id: 57,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 320,
      brand: "WoodHouse",
      category: "Furniture",
      subCategory: "Accent Chairs",
      link: "https://sitename.com",
    },
    {
      id: 58,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 340,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Pendant Lights",
      link: "https://sitename.com",
    },
    {
      id: 59,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 360,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 60,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 380,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 61,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 400,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 62,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 420,
      brand: "Lightify",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 63,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 440,
      brand: "Lightify",
      category: "Lightify",
      subCategory: "Floor Lamps",
      link: "https://sitename.com",
    },
    {
      id: 64,
      name: "Modern Dining Set",
      image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
      price: 460,
      brand: "FurniLux",
      category: "Furniture",
      subCategory: "Dining Tables",
      link: "https://sitename.com",
    },
    {
      id: 65,
      name: "Elegant Sofa",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 480,
      brand: "CozyNest",
      category: "Furniture",
      subCategory: "Sofas & Sectionals",
      link: "https://sitename.com",
    },
    {
      id: 66,
      name: "Classic Armchair",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 500,
      brand: "WoodHouse",
      category: "Furniture",
      subCategory: "Accent Chairs",
      link: "https://sitename.com",
    },
    {
      id: 67,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Pendant Lights",
      link: "https://sitename.com",
    },
    {
      id: 68,
      name: "Pendant Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 30.65,
      brand: "Lightify",
      category: "Lighting",
      subCategory: "Table Lamps",
      link: "https://sitename.com",
    },
    {
      id: 69,
      name: "Wall Art Canvas",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "ArtDwell",
      category: "Decor",
      subCategory: "Wall Art & Prints",
      link: "https://sitename.com",
    },
    {
      id: 70,
      name: "Modern Bookshelf",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Modest range",
      category: "Furniture",
      subCategory: "Bookcases & Shelving",
      link: "https://sitename.com",
    },
    {
      id: 71,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Balconiy",
      category: "Style",
      subCategory: "Minimalist",
      link: "https://sitename.com",
    },
    {
      id: 72,
      name: "Minimalist Lamp",
      image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
      price: 4.65,
      brand: "Kitchen work",
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
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filtered and Sorted Products inside useEffect
  useEffect(() => {
    const filtered = products.filter((product) => {
      return (
        product.price >= values[0] &&
        product.price <= values[1] &&
        (!selectedBrand || product.brand === selectedBrand) &&
        (!selectedSubCategory || product.subCategory === selectedSubCategory)
      );
    });

    const sorted = filtered.sort((a, b) => {
      if (sortOption === "lowToHigh") return a.price - b.price;
      if (sortOption === "highToLow") return b.price - a.price;
      if (sortOption === "nameAZ") return a.name.localeCompare(b.name);
      return 0;
    });

    setCurrentPage(1); // Reset pagination when filters change
    setFilteredProducts(sorted); // Store filtered & sorted products
  }, [values, selectedBrand, selectedSubCategory, sortOption]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  const [isExiting, setIsExiting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowModal(false);
      setIsExiting(false);
    }, 400);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <Container className=" pb-15 2xl:pb-25  mt-20">
        <div className="px-5 2xl:px-0">
          <div className="flex justify-between items-baseline">
            <div className="">
              <PageHeading
                title="All Products"
                subtitle="Everything You Need, All in One Place"
              />
            </div>
            <div className="lg:hidden block">
              <button
                onClick={() => setShowModal(true)}
                className="flex gap-2 items-center cursor-pointer "
              >
                Filter
                <span>
                  <IoFilter />
                </span>
              </button>
            </div>
          </div>
          <main className="">
            <div className="lg:flex gap-14">
              {/* Sidebar Filters */}
              <div className="col-span-12 lg:col-span-3 space-y-6 hidden lg:block">
                {/* Price Range */}
                <div className="w-full mt-10">
                  <h3
                    data-aos="fade-up"
                    className=" not-italic text-black font-semibold leading-none text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] mb-4"
                  >
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
                          margin: "3.5rem 0",
                        }}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props, index }) => (
                      <div
                        {...props}
                        className="w-5 h-5 bg-black rounded-full cursor-pointer"
                        data-aos="fade-up"
                      >
                        <div
                          data-aos="fade-up"
                          className="absolute top-[-30px] text-xs bg-white px-2 py-1 rounded shadow"
                        >
                          ${values[index]}
                        </div>
                      </div>
                    )}
                  />

                  {/* Price labels below */}
                  <div className="flex justify-between gap-6 text-sm text-black font-semibold">
                    <span
                      data-aos="fade-up"
                      className="flex items-center gap-2 px-6 py-1 lg:px-12 lg:py-3 rounded-[24px] bg-[#F5F5F5]"
                    >
                      ${values[0]}
                    </span>
                    <span
                      data-aos="fade-up"
                      className="flex items-center gap-2 px-6 py-1 lg:px-12 lg:py-3 rounded-[24px] border border-black"
                    >
                      ${values[1]}
                    </span>
                  </div>
                </div>

                {/* Sort By */}
                <div className="w-full flex items-center justify-center relative">
                  <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="w-full flex justify-center items-center cursor-pointer px-2 py-2  2xl:px-3 2xl:py-[20px] rounded-[24px] bg-white text-black text-lg font-semibold border border-black shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-xs">
                      {sortOption === "lowToHigh"
                        ? "Price (Low to High)"
                        : sortOption === "highToLow"
                        ? "Price (High to Low)"
                        : sortOption === "nameAZ"
                        ? "Name (A-Z)"
                        : "Sort By"}
                    </span>
                    <FaAngleDown className="text-xs lg:text-xl" />
                  </button>

                  {isSortOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-black rounded-md shadow-lg text-sm">
                      <div
                        onClick={() => {
                          setSortOption("lowToHigh");
                          setIsSortOpen(false);
                        }}
                        className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                      >
                        Price (Low to High)
                      </div>
                      <div
                        onClick={() => {
                          setSortOption("highToLow");
                          setIsSortOpen(false);
                        }}
                        className="px-4 py-2  text-xs hover:bg-gray-100 cursor-pointer"
                      >
                        Price (High to Low)
                      </div>
                      <div
                        onClick={() => {
                          setSortOption("nameAZ");
                          setIsSortOpen(false);
                        }}
                        className="px-4 py-2  text-xs hover:bg-gray-100 cursor-pointer"
                      >
                        Name (A-Z)
                      </div>
                      <div
                        onClick={() => {
                          setSortOption(null);
                          setIsSortOpen(false);
                        }}
                        className="px-4 py-2  text-xs text-red-500 hover:bg-gray-100 cursor-pointer"
                      >
                        Clear Sort
                      </div>
                    </div>
                  )}
                </div>

                {/* Categories */}
                <div>
                  <h3
                    data-aos="fade-up"
                    className="text-black not-italic font-semibold text-[32px] mb-8"
                  >
                    Categories
                  </h3>

                  {categoryData.map((cat) => (
                    <div key={cat.name} className="mb-4">
                      <h4
                        data-aos="fade-up"
                        className="text-black font-medium cursor-pointer text-[24px] mb-6"
                      >
                        {cat.name}
                      </h4>

                      {cat.subCategories.map((sub) => (
                        <div
                          key={sub}
                          className="flex items-center cursor-pointer gap-2 mb-4"
                          data-aos="fade-up"
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
              <div className="col-span-12 lg:col-span-9">
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
                      className={`rounded-[24px] px-2 py-1 lg:px-12 lg:py-3 cursor-pointer border text-sm font-medium
            hover:bg-black hover:text-white transition-colors duration-500 ${
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
                <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleViewDetails(product.id)}
                      className="flex flex-col cursor-pointer"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-2xl w-full object-cover aspect-square"
                        data-aos="fade-up"
                      />
                      <div className="mt-2 text-sm flex justify-between items-center">
                        <p
                          data-aos="fade-up"
                          className="text-black font-medium text-xl md:text-2xl lg:text-[24px] leading-normal"
                        >
                          {product.name}
                        </p>
                        <div
                          data-aos="fade-up"
                          className="text-black font-medium text-2xl md:text-3xl lg:text-[32px] leading-normal"
                        >
                          ${product.price.toFixed(2)}
                        </div>
                      </div>
                      <Link
                        to="#"
                        data-aos="fade-up"
                        className="text-[#0E55B2] font-light text-base underline decoration-solid underline-offset-2 leading-normal"
                      >
                        www.sitename.com
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="flex justify-center mt-10">
              <ReactPaginate
                pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                onPageChange={({ selected }) => setCurrentPage(selected + 1)}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                containerClassName="flex flex-wrap gap-2 justify-center mt-4"
                pageClassName="border rounded-md text-sm"
                pageLinkClassName="cursor-pointer px-3 py-2 block w-full h-full text-xs sm:text-sm"
                previousClassName="border rounded-md text-sm"
                previousLinkClassName="cursor-pointer px-3 py-2 block w-full h-full text-xs sm:text-sm"
                nextClassName="border rounded-md text-sm"
                nextLinkClassName="cursor-pointer px-3 py-2 block w-full h-full text-xs sm:text-sm"
                breakClassName="text-sm"
                breakLinkClassName="cursor-pointer block px-3 py-2 text-xs sm:text-sm"
                activeClassName="bg-black text-white"
              />
            </div>
          </main>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/10 bg-opacity-50">
            <div
              ref={modalRef}
              className={`bg-white p-6 max-w-[300px] w-full relative h-[100vh] overflow-y-auto scroll-smooth ${
                isExiting ? "animate-slide-out-left" : "animate-slide-in-left"
              }`}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-black hover:text-red-500 text-xl font-bold"
              >
                &times;
              </button>
              <div className="space-y-6">
                {/* Price Range */}
                <div className="w-full mt-10">
                  <h3 className="not-italic text-black font-semibold leading-none text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] mb-4">
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
                          margin: "3.5rem 0",
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
                  <div className="flex justify-between gap-6 text-sm text-black font-semibold">
                    <span className="flex items-center gap-2 px-6 py-1 lg:px-12 lg:py-3 rounded-[24px] bg-[#F5F5F5]">
                      ${values[0]}
                    </span>
                    <span className="flex items-center gap-2 px-6 py-1 lg:px-12 lg:py-3 rounded-[24px] border border-black">
                      ${values[1]}
                    </span>
                  </div>
                </div>

                {/* Sort By */}
                <div className="w-full flex items-center justify-center relative">
                  <button
                    onClick={() =>
                      setSortOption((prev) =>
                        prev === "lowToHigh" ? null : "lowToHigh"
                      )
                    }
                    className="w-full flex justify-center items-center cursor-pointer px-2 py-2 rounded-[24px] bg-white text-black text-lg font-semibold border border-black shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-xs">
                      {sortOption === "lowToHigh"
                        ? "Price (Low to High)"
                        : "Sort By"}
                    </span>
                    <FaAngleDown className="text-xs lg:text-xl" />
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-black not-italic font-semibold text-[24px] mb-8">
                    Categories
                  </h3>
                  {categoryData.map((cat) => (
                    <div key={cat.name} className="mb-4">
                      <h4 className="text-black font-medium cursor-pointer text-[18px] mb-6">
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
                            className="w-4 h-4 cursor-pointer accent-black"
                            checked={selectedSubCategory === sub}
                            onChange={() => {
                              setSelectedCategory(cat.name);
                              setSelectedSubCategory(sub);
                            }}
                          />
                          <label className="text-black font-light text-[14px] leading-normal">
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
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Products;
