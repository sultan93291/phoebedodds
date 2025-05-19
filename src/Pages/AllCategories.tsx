import PageHeading from "@/Components/Reusable/PageHeading";
import Container from "@/Components/Shared/Container";
import { Link } from "react-router-dom";

interface CategoryItem {
  name: string;
  image: string;
}

interface CategorySection {
  title: string;
  items: CategoryItem[];
}

const categorySections: CategorySection[] = [
  {
    title: "By Rooms",
    items: [
      {
        name: "Living Room",
        image: "https://i.ibb.co/pjL87y02/Rectangle-17.png",
      },
      {
        name: "Dining Room",
        image: "https://i.ibb.co/pjL87y02/Rectangle-17.png",
      },
      { name: "Bed Room", image: "https://i.ibb.co/pjL87y02/Rectangle-17.png" },
      { name: "Kitchen", image: "https://i.ibb.co/pjL87y02/Rectangle-17.png" },
      {
        name: "Wash Room",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Corporate",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
    ],
  },
  {
    title: "By Furniture",
    items: [
      {
        name: "Sofa & Sectionals",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Accent Chairs",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Dining Table",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Coffee Tables",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Bed & Headboards",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Desk Office Chairs",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
    ],
  },
  {
    title: "By Lighting",
    items: [
      {
        name: "Pendant Lights",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Table Lamps",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Floor Lamps",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
    ],
  },
  {
    title: "By Decor",
    items: [
      {
        name: "Rugs & Carpets",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Wall art & Paintts",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
      {
        name: "Mirrors",
        image: "https://i.ibb.co/QjhKw4gp/Rectangle-17-1.png",
      },
    ],
  },
];

const AllCategories = () => {
  return (
    <Container className="py-20 px-4">
      <div className="mb-12">
        <PageHeading
          title="Explore All Categories"
          subtitle="Browse furniture, lighting, decor, and more—organized by product type."
        />
      </div>
      {categorySections.map((section) => (
        <div key={section.title} className="mb-14">
          <h2 className="text-black font-inter text-[24px] sm:text-[28px] md:text-[32px] font-semibold not-italic leading-normal mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item) => (
              <Link
                key={item.name}
                to="#"
                className="relative rounded-xl overflow-hidden group shadow hover:shadow-lg transition h-50 md:h-[300px] lg:h-[500px]"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.70)), url(${item.image})`,
                  }}
                ></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <p className="text-white font-inter text-[24px] sm:text-[28px] md:text-[32px] font-semibold not-italic leading-normal mb-5">
                    {item.name}
                  </p>
                  <span className="text-black text-sm sm:text-base font-normal not-italic leading-normal flex items-start gap-12  bg-white py-3 px-5 lg:px-12 lg:py-6 rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    See Collections
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default AllCategories;
