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
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A sophisticated sofa designed for both comfort and style. Perfect for living rooms, it features soft cushions and a sleek, modern design.",
    features: [
      "Luxurious Comfort: Plush cushions for ultimate relaxation.",
      "Durable Upholstery: High-quality fabric that stands the test of time.",
      "Modern Design: Sleek and stylish to fit any contemporary space.",
      "Space-Efficient: Perfect for smaller living rooms or apartments.",
      "Easy Maintenance: Removable and washable covers for hassle-free care.",
    ],
  },
  {
    id: 3,
    name: "Classic Armchair",
    price: 300,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A timeless armchair that adds elegance to any room. With a comfortable design and sturdy build, it's ideal for relaxing after a long day.",
    features: [
      "Elegant Design: Classic armchair with detailed craftsmanship.",
      "Comfortable Seat: Soft cushions for long-lasting comfort.",
      "Sturdy Frame: Built with durable wood and high-quality materials.",
      "Versatile Style: Fits both modern and traditional home decor.",
      "Easy Assembly: Quick to assemble with included instructions.",
    ],
  },
  {
    id: 4,
    name: "Pendant Lamp",
    price: 30.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A sleek pendant lamp perfect for dining areas or kitchens. Its minimalist design offers a modern touch to your home lighting.",
    features: [
      "Sleek Design: Minimalist style that complements any modern room.",
      "Adjustable Length: Can be customized to your space’s height.",
      "Durable Materials: Built with high-quality materials for longevity.",
      "Energy Efficient: Low energy consumption with LED options.",
      "Easy Installation: Quick and simple to install with the provided kit.",
    ],
  },
  {
    id: 5,
    name: "Wall Art Canvas",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "Add character to your walls with this beautiful wall art canvas. Featuring vibrant colors and intricate designs, it’s perfect for any living space.",
    features: [
      "High-Quality Print: Vibrant colors that pop on canvas.",
      "Premium Materials: Made with durable, high-quality canvas and framing.",
      "Easy to Hang: Includes all necessary hardware for quick setup.",
      "Versatile Decor: Fits perfectly in living rooms, bedrooms, or offices.",
      "Timeless Design: Classic artwork that never goes out of style.",
    ],
  },
  {
    id: 6,
    name: "Modern Bookshelf",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A stylish modern bookshelf that not only stores your books but also enhances the decor of your room with its elegant design.",
    features: [
      "Space-Saving Design: Maximize your space with a sleek, vertical shelf.",
      "Multipurpose: Ideal for books, decor, or other household items.",
      "Sturdy Construction: Built to hold heavy books with ease.",
      "Easy to Assemble: Comes with all tools and instructions for quick setup.",
      "Modern Aesthetic: A clean, minimalist look to complement any room.",
    ],
  },
  {
    id: 7,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This minimalist lamp is the perfect addition to any modern home, offering soft light and a stylish design that complements contemporary interiors.",
    features: [
      "Simple Design: Clean, minimalist style perfect for any room.",
      "Adjustable Brightness: Offers customizable lighting for different moods.",
      "Energy-Efficient: Uses LED technology to reduce energy consumption.",
      "Durable Construction: Built with high-quality, long-lasting materials.",
      "Compact Size: Fits perfectly in small spaces like nightstands or desks.",
    ],
  },
  {
    id: 8,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A sleek, minimalist design that’s perfect for modern living spaces. This lamp provides warm, cozy lighting without taking up too much space.",
    features: [
      "Sleek Aesthetic: Fits perfectly in minimalist, contemporary homes.",
      "Compact Size: Ideal for nightstands, desks, or small areas.",
      "Long-Lasting: Energy-efficient LED bulb for long-term use.",
      "Stable Base: Designed to remain stable even in high-traffic areas.",
      "Modern Design: Matches a wide variety of interior styles.",
    ],
  },
  {
    id: 9,
    name: "Modern Dining Set",
    price: 4.65,
    image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
    link: "https://sitename.com",
    description:
      "A modern dining set perfect for contemporary homes. This elegant set brings style and comfort to your dining room, making every meal a special occasion.",
    features: [
      "Timeless Design: Modern aesthetics with clean lines and rich finishes.",
      "Comfortable Seating: Plush cushions for comfortable dining experiences.",
      "Durable Materials: Made from high-quality wood and durable upholstery.",
      "Easy to Maintain: Simple to clean with high-quality materials.",
      "Space Efficient: Designed to maximize space while offering plenty of seating.",
    ],
  },
  {
    id: 10,
    name: "Elegant Sofa",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A luxurious sofa designed for ultimate comfort and style. This piece will be the centerpiece of your living room, combining plush seating and sleek modern design.",
    features: [
      "Plush Cushions: Soft and inviting for maximum comfort.",
      "Contemporary Design: A modern sofa that blends well with any decor.",
      "Durable Frame: Built with sturdy materials for long-lasting use.",
      "Spacious: Offers ample seating for family and guests.",
      "Removable Covers: Easy to clean with removable, washable covers.",
    ],
  },
  {
    id: 11,
    name: "Pendant Lamp",
    price: 30.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "Add sophistication to your space with this elegant pendant lamp. Its sleek design and adjustable length offer both style and function.",
    features: [
      "Sleek Design: Perfect for modern interiors.",
      "Adjustable Length: Customizable to suit your room height.",
      "Energy Efficient: Designed to save energy while providing ample lighting.",
      "Durable Construction: Made with high-quality materials for longevity.",
      "Easy Installation: Quick and hassle-free setup.",
    ],
  },
  {
    id: 12,
    name: "Wall Art Canvas",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This wall art canvas enhances your room’s aesthetic with vibrant colors and a high-quality print. Perfect for adding personality to any wall.",
    features: [
      "High-Quality Print: Vibrant colors that pop on canvas.",
      "Sturdy Frame: Ensures longevity and durability.",
      "Easy to Hang: Comes with all necessary mounting hardware.",
      "Timeless Artwork: A classic design that suits any home.",
      "Versatile Decor: Ideal for living rooms, bedrooms, or offices.",
    ],
  },
  {
    id: 13,
    name: "Modern Bookshelf",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This modern bookshelf is designed to store books and display decor in a stylish and organized manner. Its sleek design blends seamlessly with any room.",
    features: [
      "Space-Efficient: Perfect for compact spaces.",
      "Multi-Purpose: Ideal for books, decor, or other items.",
      "Sturdy Build: Can hold heavy items without compromising its form.",
      "Modern Aesthetic: A minimalist design that suits any home.",
      "Easy Assembly: Quick setup with clear instructions provided.",
    ],
  },
  {
    id: 14,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A clean, minimalist lamp that provides soft light for your living spaces. Its simple design complements any modern home decor.",
    features: [
      "Simple Design: Matches well with any minimalist decor.",
      "Energy-Efficient: Uses LED bulbs for low energy consumption.",
      "Compact Size: Ideal for small spaces like nightstands and desks.",
      "Adjustable Lighting: Allows you to change brightness according to needs.",
      "Durable Build: High-quality materials for long-term use.",
    ],
  },
   {
    id: 15,
    name: "Wall Art Canvas",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "Transform your room with this beautiful wall art canvas. Vibrant colors and bold designs bring a fresh vibe to any space.",
    features: [
      "High-Quality Print: Brilliant colors that last for years.",
      "Durable Canvas: Sturdy and long-lasting material.",
      "Easy to Hang: Comes with pre-installed hooks for quick setup.",
      "Affordable Artwork: Beautiful art at an accessible price.",
      "Stylish Decor: Elevates the aesthetic of your living space.",
    ],
  },
  {
    id: 16,
    name: "Modern Bookshelf",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This modern bookshelf helps organize your books and decor in a stylish way. Perfect for adding a contemporary touch to any room.",
    features: [
      "Elegant Design: Clean lines for a sleek modern look.",
      "Space-Saving: Ideal for small spaces without sacrificing storage.",
      "Sturdy Structure: Made from durable wood for long-lasting use.",
      "Multi-Use: Can also hold plants, decor items, or electronics.",
      "Easy Assembly: Quick and simple setup with provided instructions.",
    ],
  },
  {
    id: 17,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This minimalist lamp is a perfect blend of modern aesthetics and functionality. Its simple design adds sophistication to any space.",
    features: [
      "Sleek and Simple: Designed to fit with any minimalist decor.",
      "Energy Efficient: LED light that reduces energy costs.",
      "Adjustable Brightness: Customizable light levels to suit your needs.",
      "Durable: High-quality materials for long-term use.",
      "Compact: Ideal for small spaces like desks or nightstands.",
    ],
  },
  {
    id: 18,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A compact minimalist lamp that provides soft, ambient light. Its modern design is perfect for any contemporary space.",
    features: [
      "Minimalist Design: Clean lines that blend with modern interiors.",
      "Adjustable Lighting: Set the brightness for any occasion.",
      "Long-Lasting: Made from durable, high-quality materials.",
      "Portable: Lightweight and easy to move around the house.",
      "Space-Saving: Ideal for small tables or nightstands.",
    ],
  },
  {
    id: 19,
    name: "Modern Dining Set",
    price: 4.65,
    image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
    link: "https://sitename.com",
    description:
      "This modern dining set combines form and function with sleek lines and comfortable seating. Perfect for both casual and formal dining.",
    features: [
      "Contemporary Style: Clean lines and modern design.",
      "Comfortable Seating: Soft, durable cushions for maximum comfort.",
      "Durable Build: Made with high-quality materials for longevity.",
      "Space-Saving: Ideal for smaller spaces while offering ample seating.",
      "Easy Care: Removable covers for easy cleaning and maintenance.",
    ],
  },
  {
    id: 20,
    name: "Elegant Sofa",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This elegant sofa offers both comfort and style. Its sleek lines and plush cushions create a cozy yet modern vibe in any living space.",
    features: [
      "Plush Comfort: Soft cushions for ultimate relaxation.",
      "Modern Design: A sleek and minimalist look that fits any decor.",
      "Durable Upholstery: Made with high-quality fabric for long-lasting use.",
      "Spacious Seating: Perfect for family gatherings and socializing.",
      "Easy to Maintain: Removable, washable cushion covers.",
    ],
  },
  {
    id: 21,
    name: "Classic Armchair",
    price: 400,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A stylish classic armchair that fits perfectly into any living room. Its traditional design combines comfort with timeless appeal.",
    features: [
      "Classic Design: Perfect for both modern and traditional decor.",
      "Comfortable Seat: Soft cushions designed for long-lasting comfort.",
      "Durable Construction: Built with solid wood and high-quality fabrics.",
      "Compact Size: Ideal for small apartments or reading nooks.",
      "Easy to Assemble: Simple assembly instructions included.",
    ],
  },
  {
    id: 22,
    name: "Pendant Lamp",
    price: 30.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "Add elegance to your home with this beautiful pendant lamp. Its unique design and adjustable length make it a perfect addition to any modern room.",
    features: [
      "Adjustable Length: Customize the height to fit your space.",
      "Sleek Design: Perfect for contemporary dining rooms or kitchens.",
      "Durable Construction: Built to last with high-quality materials.",
      "Energy Efficient: Compatible with LED bulbs for reduced energy usage.",
      "Easy to Install: Simple setup with included mounting hardware.",
    ],
  },
  {
    id: 23,
    name: "Pendant Lamp",
    price: 30.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A stylish pendant lamp that adds a warm ambiance to any space. Its minimalist design is perfect for modern homes.",
    features: [
      "Minimalist Style: Simple and elegant for modern spaces.",
      "Long-Lasting: Durable construction that lasts for years.",
      "Energy Efficient: LED compatible for low energy consumption.",
      "Adjustable Height: Customize the drop length to suit your space.",
      "Versatile: Ideal for kitchens, dining areas, and living rooms.",
    ],
  },
  {
    id: 24,
    name: "Wall Art Canvas",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This beautiful wall art canvas adds a touch of class to your home. Vibrant colors and intricate patterns make it a standout piece.",
    features: [
      "Premium Canvas: High-quality canvas that lasts for years.",
      "Vibrant Colors: Rich, long-lasting colors that brighten any room.",
      "Easy to Hang: Mounting hardware is included for quick installation.",
      "Stylish Design: Complements modern, minimalist, and traditional decor.",
      "Durable Print: UV-resistant inks that maintain their vibrancy over time.",
    ],
  },
  {
    id: 25,
    name: "Modern Bookshelf",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This modern bookshelf is perfect for keeping your books organized while adding a sleek, contemporary design to your living room.",
    features: [
      "Sleek and Stylish: A modern design that fits with any home decor.",
      "Spacious: Offers plenty of room for books, decor, and more.",
      "Durable: Made from high-quality wood that can hold heavy books.",
      "Multi-Purpose: Can also be used as a display shelf for photos and decor.",
      "Easy Assembly: Comes with clear instructions for fast setup.",
    ],
  },
  {
    id: 26,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A sleek, minimalist lamp perfect for reading or creating a cozy atmosphere. Its simple design fits well in any modern home.",
    features: [
      "Compact Design: Small size perfect for desks or side tables.",
      "Adjustable Light: Control the brightness to match your needs.",
      "Energy Efficient: LED bulb for low power consumption.",
      "Durable: Built to last with premium materials.",
      "Simple Elegance: Blends with any modern decor style.",
    ],
  },
  {
    id: 27,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A modern minimalist lamp that adds a soft, ambient light to your space. Perfect for enhancing the ambiance in bedrooms and living rooms.",
    features: [
      "Modern Aesthetic: Sleek, clean lines for a contemporary look.",
      "Compact Size: Ideal for small spaces and narrow tables.",
      "Dimmable: Adjustable light intensity for different moods.",
      "High-Quality Build: Durable and built to last.",
      "Easy to Install: Quick setup with minimal effort required.",
    ],
  },
  {
    id: 28,
    name: "Modern Dining Set",
    price: 4.65,
    image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
    link: "https://sitename.com",
    description:
      "This modern dining set combines form and function with sleek lines and comfortable seating. Perfect for both casual and formal dining.",
    features: [
      "Contemporary Style: Clean lines and modern design.",
      "Comfortable Seating: Soft, durable cushions for maximum comfort.",
      "Durable Build: Made with high-quality materials for longevity.",
      "Space-Saving: Ideal for smaller spaces while offering ample seating.",
      "Easy Care: Removable covers for easy cleaning and maintenance.",
    ],
  },
  {
    id: 29,
    name: "Elegant Sofa",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This elegant sofa offers both comfort and style. Its sleek lines and plush cushions create a cozy yet modern vibe in any living space.",
    features: [
      "Plush Comfort: Soft cushions for ultimate relaxation.",
      "Modern Design: A sleek and minimalist look that fits any decor.",
      "Durable Upholstery: Made with high-quality fabric for long-lasting use.",
      "Spacious Seating: Perfect for family gatherings and socializing.",
      "Easy to Maintain: Removable, washable cushion covers.",
    ],
  },
  {
    id: 30,
    name: "Classic Armchair",
    price: 209,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A stylish classic armchair that fits perfectly into any living room. Its traditional design combines comfort with timeless appeal.",
    features: [
      "Classic Design: Perfect for both modern and traditional decor.",
      "Comfortable Seat: Soft cushions designed for long-lasting comfort.",
      "Durable Construction: Built with solid wood and high-quality fabrics.",
      "Compact Size: Ideal for small apartments or reading nooks.",
      "Easy to Assemble: Simple assembly instructions included.",
    ],
  },
  {
    id: 31,
    name: "Pendant Lamp",
    price: 30.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "Add elegance to your home with this beautiful pendant lamp. Its unique design and adjustable length make it a perfect addition to any modern room.",
    features: [
      "Adjustable Length: Customize the height to fit your space.",
      "Sleek Design: Perfect for contemporary dining rooms or kitchens.",
      "Durable Construction: Built to last with high-quality materials.",
      "Energy Efficient: Compatible with LED bulbs for reduced energy usage.",
      "Easy to Install: Simple setup with included mounting hardware.",
    ],
  },
  {
    id: 32,
    name: "Pendant Lamp",
    price: 30.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A stylish pendant lamp that adds a warm ambiance to any space. Its minimalist design is perfect for modern homes.",
    features: [
      "Minimalist Style: Simple and elegant for modern spaces.",
      "Long-Lasting: Durable construction that lasts for years.",
      "Energy Efficient: LED compatible for low energy consumption.",
      "Adjustable Height: Customize the drop length to suit your space.",
      "Versatile: Ideal for kitchens, dining areas, and living rooms.",
    ],
  },
  {
    id: 33,
    name: "Wall Art Canvas",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This beautiful wall art canvas adds a touch of class to your home. Vibrant colors and intricate patterns make it a standout piece.",
    features: [
      "Premium Canvas: High-quality canvas that lasts for years.",
      "Vibrant Colors: Rich, long-lasting colors that brighten any room.",
      "Easy to Hang: Mounting hardware is included for quick installation.",
      "Stylish Design: Complements modern, minimalist, and traditional decor.",
      "Durable Print: UV-resistant inks that maintain their vibrancy over time.",
    ],
  },
  {
    id: 34,
    name: "Modern Bookshelf",
    price: 459.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This modern bookshelf is perfect for keeping your books organized while adding a sleek, contemporary design to your living room.",
    features: [
      "Sleek and Stylish: A modern design that fits with any home decor.",
      "Spacious: Offers plenty of room for books, decor, and more.",
      "Durable: Made from high-quality wood that can hold heavy books.",
      "Multi-Purpose: Can also be used as a display shelf for photos and decor.",
      "Easy Assembly: Comes with clear instructions for fast setup.",
    ],
  },
  {
    id: 35,
    name: "Minimalist Lamp",
    price: 354.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A sleek, minimalist lamp perfect for reading or creating a cozy atmosphere. Its simple design fits well in any modern home.",
    features: [
      "Compact Design: Small size perfect for desks or side tables.",
      "Adjustable Light: Control the brightness to match your needs.",
      "Energy Efficient: LED bulb for low power consumption.",
      "Durable: Built to last with premium materials.",
      "Simple Elegance: Blends with any modern decor style.",
    ],
  },
  {
    id: 36,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A modern minimalist lamp that adds a soft, ambient light to your space. Perfect for enhancing the ambiance in bedrooms and living rooms.",
    features: [
      "Modern Aesthetic: Sleek, clean lines for a contemporary look.",
      "Compact Size: Ideal for small spaces and narrow tables.",
      "Dimmable: Adjustable light intensity for different moods.",
      "High-Quality Build: Durable and built to last.",
      "Easy to Install: Quick setup with minimal effort required.",
    ],
  },
  {
    id: 37,
    name: "Modern Dining Set",
    price: 4.65,
    image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
    link: "https://sitename.com",
    description:
      "This modern dining set combines form and function with sleek lines and comfortable seating. Perfect for both casual and formal dining.",
    features: [
      "Contemporary Style: Clean lines and modern design.",
      "Comfortable Seating: Soft, durable cushions for maximum comfort.",
      "Durable Build: Made with high-quality materials for longevity.",
      "Space-Saving: Ideal for smaller spaces while offering ample seating.",
      "Easy Care: Removable covers for easy cleaning and maintenance.",
    ],
  },
  {
    id: 38,
    name: "Elegant Sofa",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This elegant sofa offers both comfort and style. Its sleek lines and plush cushions create a cozy yet modern vibe in any living space.",
    features: [
      "Plush Comfort: Soft cushions for ultimate relaxation.",
      "Modern Design: A sleek and minimalist look that fits any decor.",
      "Durable Upholstery: Made with high-quality fabric for long-lasting use.",
      "Spacious Seating: Perfect for family gatherings and socializing.",
      "Easy to Maintain: Removable, washable cushion covers.",
    ],
  },
  {
    id: 39,
    name: "Classic Armchair",
    price: 344,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A stylish classic armchair that fits perfectly into any living room. Its traditional design combines comfort with timeless appeal.",
    features: [
      "Classic Design: Perfect for both modern and traditional decor.",
      "Comfortable Seat: Soft cushions designed for long-lasting comfort.",
      "Durable Construction: Built with solid wood and high-quality fabrics.",
      "Compact Size: Ideal for small apartments or reading nooks.",
      "Easy to Assemble: Simple assembly instructions included.",
    ],
  },
  {
    id: 40,
    name: "Pendant Lamp",
    price: 50,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This pendant lamp adds elegance and sophistication to any room. Its adjustable length and sleek design make it perfect for modern homes.",
    features: [
      "Adjustable Height: Customize the drop length for your space.",
      "Sleek Design: Ideal for contemporary rooms and kitchens.",
      "Durable Construction: Built with high-quality materials for longevity.",
      "Energy Efficient: LED bulb compatible for low energy consumption.",
      "Easy Installation: Comes with everything needed for quick setup.",
    ],
  },
  {
    id: 41,
    name: "Pendant Lamp",
    price: 60,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This elegant pendant lamp brings light and style to your space. Its sleek design complements any modern home decor.",
    features: [
      "Minimalist Design: Sleek and stylish to fit any modern decor.",
      "Durable Build: Made with quality materials for long-term use.",
      "Energy Efficient: LED bulb compatible to reduce energy use.",
      "Adjustable Drop Length: Customize the length to fit your room.",
      "Easy to Mount: Quick installation with included hardware.",
    ],
  },
  {
    id: 42,
    name: "Wall Art Canvas",
    price: 70,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This stunning wall art canvas brings vibrancy and elegance to any room. Perfect for adding color and life to your space.",
    features: [
      "Rich, Vibrant Colors: Long-lasting prints that remain vibrant over time.",
      "Durable Material: High-quality canvas and UV-resistant inks.",
      "Ready to Hang: Pre-installed hardware for easy mounting.",
      "Versatile Design: Complements modern, traditional, and eclectic decor.",
      "Easy Maintenance: Wipe clean with a soft cloth to keep vibrant.",
    ],
  },
  {
    id: 43,
    name: "Modern Bookshelf",
    price: 80,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A versatile modern bookshelf that fits any home. This bookshelf offers storage and style, providing ample space for books and decor.",
    features: [
      "Minimalist Design: Clean lines and a simple silhouette.",
      "Durable Material: Sturdy construction for lasting use.",
      "Multi-Use: Great for books, plants, and decorative items.",
      "Space-Efficient: Fits easily in small apartments or offices.",
      "Quick Assembly: Comes with easy-to-follow instructions.",
    ],
  },
  {
    id: 44,
    name: "Minimalist Lamp",
    price: 90,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This minimalist lamp provides soft, ambient lighting while fitting seamlessly into any modern decor style. Perfect for creating a calming atmosphere.",
    features: [
      "Sleek, Simple Design: Blends effortlessly with any room.",
      "Energy Efficient: LED lighting that saves power.",
      "Adjustable Light: Control the brightness for various settings.",
      "Durable: Built with high-quality materials to last.",
      "Compact Size: Ideal for small spaces like desks and side tables.",
    ],
  },
  {
    id: 45,
    name: "Minimalist Lamp",
    price: 4.65,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A stylish minimalist lamp that brings a touch of elegance and warmth to your home. The perfect accent piece for any room.",
    features: [
      "Modern Aesthetic: A clean, simple design to enhance any room.",
      "Dimmable: Adjustable brightness to suit your lighting needs.",
      "Energy Efficient: Designed for low energy consumption.",
      "Compact: Perfect for desks, nightstands, and small spaces.",
      "Easy to Install: Includes all necessary parts for quick setup.",
    ],
  },
  {
    id: 46,
    name: "Modern Dining Set",
    price: 100,
    image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
    link: "https://sitename.com",
    description:
      "This modern dining set provides sleek lines and a contemporary look while offering a comfortable dining experience. Perfect for any home.",
    features: [
      "Contemporary Style: Clean, modern lines for a chic look.",
      "Comfortable Seating: Soft, plush cushions designed for comfort.",
      "Durable Materials: High-quality wood and fabric construction.",
      "Easy to Assemble: Comes with simple instructions for setup.",
      "Space-Saving: Perfect for apartments or smaller dining rooms.",
    ],
  },
  {
    id: 47,
    name: "Elegant Sofa",
    price: 120,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This elegant sofa offers luxurious comfort with modern design. Its sleek lines and soft cushions make it the centerpiece of any living room.",
    features: [
      "Plush Cushions: Soft and inviting for maximum relaxation.",
      "Modern Elegance: A minimalist design that fits any decor.",
      "Durable Fabric: Upholstered with long-lasting materials.",
      "Spacious: Plenty of room for family and friends.",
      "Easy Maintenance: Removable cushion covers for cleaning.",
    ],
  },
  {
    id: 48,
    name: "Classic Armchair",
    price: 140,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "The classic armchair combines traditional styling with modern comfort. Its sturdy frame and plush cushions make it perfect for lounging or reading.",
    features: [
      "Traditional Style: Timeless design that fits any space.",
      "Comfortable Cushions: Soft, supportive seating for long-lasting comfort.",
      "Durable Construction: Solid wood frame for reliability and sturdiness.",
      "Compact Size: Ideal for smaller spaces like apartments or offices.",
      "Easy Assembly: Comes with detailed instructions for quick setup.",
    ],
  },
  {
    id: 49,
    name: "Pendant Lamp",
    price: 160,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "The pendant lamp provides an elegant glow to your room. With its unique design and adjustable length, it’s perfect for both small and large spaces.",
    features: [
      "Adjustable Length: Customize the height for your space.",
      "Elegant Design: Sleek and modern, fits most room styles.",
      "Energy Efficient: Compatible with LED bulbs for low power usage.",
      "Easy Installation: Comes with all necessary mounting hardware.",
      "Durable: Built with premium materials for longevity.",
    ],
  },
  {
    id: 50,
    name: "Pendant Lamp",
    price: 180,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This pendant lamp features an elegant design and soft light that creates a cozy atmosphere. Perfect for dining rooms, living rooms, and kitchens.",
    features: [
      "Sophisticated Design: Adds an elegant touch to any room.",
      "Energy Efficient: Compatible with LED bulbs for energy savings.",
      "Adjustable: Customizable height to suit your space.",
      "Durable: Made with high-quality materials for long-term use.",
      "Easy to Install: Simple installation with all necessary hardware.",
    ],
  },
  {
    id: 51,
    name: "Wall Art Canvas",
    price: 200,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "Enhance your home with this stunning wall art canvas. A combination of color, texture, and creativity, it’s the perfect focal point for any room.",
    features: [
      "Premium Canvas: Made with durable, high-quality canvas.",
      "Vibrant Colors: UV-resistant inks that remain vibrant over time.",
      "Easy to Hang: Comes with pre-installed mounting hardware.",
      "Stylish: Complements various decor styles, from modern to traditional.",
      "Durable: Resistant to fading and wear.",
    ],
  },
  {
    id: 52,
    name: "Modern Bookshelf",
    price: 220,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This modern bookshelf is designed to store your books and display decor in style. With its sturdy construction and sleek design, it fits into any room.",
    features: [
      "Elegant Design: Clean, modern lines with a minimalist style.",
      "Spacious Storage: Plenty of space for books, photos, and plants.",
      "Durable: Made with high-quality materials for long-lasting use.",
      "Multi-Purpose: Can be used for books, decor, or as a display shelf.",
      "Easy to Assemble: Comes with all necessary tools and instructions.",
    ],
  },
  {
    id: 53,
    name: "Minimalist Lamp",
    price: 240,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This stylish minimalist lamp adds a touch of elegance to your space. With its sleek design, it's perfect for creating a calming atmosphere.",
    features: [
      "Sleek Design: Clean lines and a minimalist aesthetic.",
      "Adjustable Brightness: Set the mood with customizable light intensity.",
      "Energy Efficient: Designed to consume less power.",
      "Compact: Ideal for small spaces like desks and side tables.",
      "Durable: Made from premium materials for long-lasting performance.",
    ],
  },
  {
    id: 54,
    name: "Minimalist Lamp",
    price: 260,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "The minimalist lamp offers ambient lighting and a contemporary design. It's perfect for any modern home looking for subtle elegance.",
    features: [
      "Minimalist Design: Simple and stylish for modern decor.",
      "Adjustable Lighting: Control the brightness to suit your needs.",
      "Long-Lasting: Made from durable materials for extended use.",
      "Compact Size: Perfect for small spaces like nightstands.",
      "Energy Efficient: Compatible with LED bulbs for low energy usage.",
    ],
  },
  {
    id: 55,
    name: "Modern Dining Set",
    price: 280,
    image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
    link: "https://sitename.com",
    description:
      "A sleek and contemporary dining set that fits perfectly in modern homes. Comfortable and stylish seating for dining with family and friends.",
    features: [
      "Modern Style: Clean, minimalist design that fits any space.",
      "Comfortable Seating: Soft cushions with durable fabric.",
      "Durable Construction: Built to last with high-quality materials.",
      "Easy Assembly: Simple setup with included instructions.",
      "Space-Efficient: Ideal for smaller dining rooms.",
    ],
  },
  {
    id: 56,
    name: "Elegant Sofa",
    price: 300,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A plush and stylish sofa that offers the perfect balance of comfort and design.",
    features: [
      "Luxurious Comfort: Plush cushions for ultimate relaxation.",
      "Modern Aesthetic: Fits into any modern home decor.",
      "Durable Upholstery: Made with high-quality materials.",
      "Spacious: Ample seating for family and guests.",
      "Easy to Clean: Removable covers for easy maintenance.",
    ],
  },
  {
    id: 57,
    name: "Classic Armchair",
    price: 320,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A classic armchair that combines traditional comfort with modern elegance.",
    features: [
      "Elegant Design: Perfect for both modern and traditional spaces.",
      "Comfortable Cushions: Ideal for long hours of sitting.",
      "Durable Build: Solid wood construction for long-lasting use.",
      "Compact: Perfect for small apartments.",
      "Easy to Assemble: Includes clear instructions for assembly.",
    ],
  },
  {
    id: 58,
    name: "Pendant Lamp",
    price: 340,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "An elegant pendant lamp that enhances any room with its stylish design.",
    features: [
      "Adjustable Length: Customize the drop length to fit your room.",
      "Sleek Look: Fits into modern decor seamlessly.",
      "Energy Efficient: Compatible with LED bulbs.",
      "Durable: Made from high-quality materials.",
      "Easy Installation: Comes with all necessary hardware.",
    ],
  },
  {
    id: 59,
    name: "Pendant Lamp",
    price: 360,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "Add a touch of class with this pendant lamp that provides soft lighting.",
    features: [
      "Sophisticated Design: Elegant, modern look for any space.",
      "Adjustable Drop: Customize the height for your needs.",
      "Energy Efficient: Low power consumption with LED compatibility.",
      "Durable Construction: High-quality materials for long-term use.",
      "Easy to Mount: All hardware included for quick setup.",
    ],
  },

  {
    id: 60,
    name: "Wall Art Canvas",
    price: 380,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A beautiful wall art canvas that brings a touch of sophistication to any room. The vibrant colors and modern design will complement any home decor.",
    features: [
      "High-Quality Canvas: Made from durable and long-lasting material.",
      "Vibrant Colors: UV-resistant inks that won’t fade over time.",
      "Ready to Hang: Pre-installed hardware for easy mounting.",
      "Versatile Design: Fits both modern and traditional interiors.",
      "Easy to Maintain: Wipe clean for easy upkeep.",
    ],
  },
  {
    id: 61,
    name: "Modern Bookshelf",
    price: 400,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A spacious modern bookshelf designed to display your books and decor in an elegant way. Its sleek design makes it the perfect addition to any living space.",
    features: [
      "Contemporary Style: Minimalist design that suits any room.",
      "Durable Construction: Made from high-quality wood for durability.",
      "Multi-Purpose: Use it for books, plants, and decorative pieces.",
      "Space-Efficient: Perfect for smaller apartments or offices.",
      "Quick Setup: Easy assembly with included instructions.",
    ],
  },
  {
    id: 62,
    name: "Minimalist Lamp",
    price: 420,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "A stylish minimalist lamp that provides soft, ambient light. Its sleek design fits perfectly in any modern home, adding a cozy atmosphere to any room.",
    features: [
      "Modern Aesthetic: Simple and clean lines to match any decor.",
      "Dimmable: Adjust the brightness for your ideal ambiance.",
      "Energy Efficient: LED technology reduces energy consumption.",
      "Compact Size: Ideal for desks, side tables, or nightstands.",
      "Long-Lasting: Built with durable, high-quality materials.",
    ],
  },
  {
    id: 63,
    name: "Minimalist Lamp",
    price: 440,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This modern minimalist lamp is perfect for creating a warm and inviting atmosphere. Its simple design makes it versatile for a variety of home styles.",
    features: [
      "Sleek Design: Fits seamlessly into modern or minimalist interiors.",
      "Energy Saving: Compatible with energy-efficient LED bulbs.",
      "Adjustable Lighting: Control the brightness with a dimmer feature.",
      "Compact: Ideal for smaller spaces like desks or nightstands.",
      "Durable: Made with sturdy materials for long-term use.",
    ],
  },
  {
    id: 64,
    name: "Modern Dining Set",
    price: 460,
    image: "https://i.ibb.co/jk5mb09p/Frame-215.png",
    link: "https://sitename.com",
    description:
      "This sleek modern dining set brings a contemporary feel to any dining space. Featuring stylish design and comfortable seating, it’s perfect for family meals or entertaining guests.",
    features: [
      "Contemporary Design: Clean lines and minimalist aesthetic.",
      "Comfortable Seating: Cushioned seats for long-lasting comfort.",
      "Sturdy Build: Made with high-quality wood and durable fabrics.",
      "Space-Efficient: Ideal for both small and large dining areas.",
      "Easy Care: Cushions with removable, washable covers.",
    ],
  },
  {
    id: 65,
    name: "Elegant Sofa",
    price: 480,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This elegant sofa offers a perfect blend of comfort and sophistication. Its plush cushions and modern design make it an excellent addition to any living room.",
    features: [
      "Luxurious Comfort: Soft cushions for ultimate relaxation.",
      "Modern Aesthetic: Sleek lines and minimalist design.",
      "Durable Upholstery: Made with high-quality fabric for long-lasting use.",
      "Spacious: Plenty of room for family and guests to relax.",
      "Easy Maintenance: Removable cushion covers for easy cleaning.",
    ],
  },
  {
    id: 66,
    name: "Classic Armchair",
    price: 500,
    image: "https://i.ibb.co/B5Wk1yvS/Rectangle-15.png",
    link: "https://sitename.com",
    description:
      "This classic armchair combines traditional charm with modern comfort. Its elegant design and sturdy build make it the perfect addition to any living room or study.",
    features: [
      "Traditional Design: A timeless piece that suits any decor.",
      "Comfortable Cushions: Soft and supportive for long hours of sitting.",
      "Durable Build: Solid wood frame ensures stability and longevity.",
      "Compact Size: Ideal for smaller spaces like apartments or reading nooks.",
      "Easy to Assemble: Quick setup with included instructions.",
    ],
  },

];


const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container>
        <div className=" mt-10 2xl:mt-40 px-4 py-12">
          <p
            data-aos="fade-up"
            className="text-center text-xl text-red-500 font-medium"
          >
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
      <div className="mx-auto px-4 py-12 pt-20 xl:mt-30">
        {/* Breadcrumb */}
        <nav data-aos="fade-up" className="text-sm text-gray-500 mb-6 pb-10">
          <span>Home</span> &nbsp; &lt; &nbsp;
          <span>All Products</span> &nbsp; &lt; &nbsp;
          <span className="text-black font-medium">{product.category}</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Image */}
          <div data-aos="fade-right" className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-2xl w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div data-aos="fade-left" className="w-full lg:w-1/2 flex flex-col ">
            <div>
              <h1 className="text-black text-[24px] sm:text-[36px] md:text-[48px] font-semibold not-italic leading-normal mb-4">
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

            <button className="w-full xl:w-[300px] py-2 2xl:py-[20px] border border-black bg-black text-white rounded-3xl font-inter text-[16px] font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Get It Now
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mb-16 border-t border-gray-200 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <h3
              data-aos="fade-up"
              className="text-lg font-semibold text-black col-span-1 md:col-span-1"
            >
              Description
            </h3>
            <p
              data-aos="fade-up"
              className="text-gray-700 leading-relaxed text-base md:col-span-4"
            >
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
