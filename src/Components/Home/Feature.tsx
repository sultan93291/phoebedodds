import Container from "../Shared/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Productimg from "../../assets/Images/product.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  link: string;
}

const Feature = () => {
  const products: Product[] = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (4.65).toFixed(2),
    rating: 4.6,
    image: Productimg,
    link: "www.sitename.com",
  }));

  return (
    <section>
      <Container className="py-[100px] ">
        <h3 className="font-inter text-[32px] font-normal text-center text-[#000] w-full">
          Featured Products
        </h3>
        <h1 className="text-[86px] font-semibold leading-normal font-inter text-[#000] text-center">
          Standout Pieces Across All Brands
        </h1>
        <p className="font-inter font-normal text-[#000] text-[24px] pb-12 text-center">
          Compare quality finds without the extra tabs.
        </p>
        <div className="flex justify-center">
          <Tabs className="w-full">
            <TabList className="flex gap-x-12 justify-center">
              <Tab
                className="border border-[#000] px-12 py-5 rounded-[24px] cursor-pointer text-[16px] font-normal font-inter transition-all"
                selectedClassName="bg-black text-white"
              >
                New Products
              </Tab>
              <Tab
                className="border border-[#000] px-12 py-5 rounded-[24px] cursor-pointer text-[16px] font-normal font-inter transition-all"
                selectedClassName="bg-black text-white"
              >
                Special Prizes
              </Tab>
              <Tab
                className="border border-[#000] px-12 py-5 rounded-[24px] cursor-pointer text-[16px] font-normal font-inter transition-all"
                selectedClassName="bg-black text-white"
              >
                Top Sellers
              </Tab>
            </TabList>
            <div className="mt-[120px]">
              <TabPanel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-20 cursor-pointer">
                  {products.map(product => (
                    <div key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto rounded"
                      />

                      <div className="flex justify-between pt-6 pb-2 items-center">
                        <h3 className="font-inter text-[24px] font-medium text-[#000]">
                          {product.name}
                        </h3>
                        <h4 className="font-inter text-[32px] font-medium text-[#000]">
                          ${product.price}
                        </h4>
                      </div>

                      <div className="flex items-center gap-x-1 pb-4">
                        <h5 className="font-inter text-[16px] font-normal text-[#000]">
                          {product.rating}
                        </h5>
                        <div className="flex text-yellow-400 text-[16px] gap-x-1">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </div>
                      </div>

                      <p className="font-inter text-[16px] text-[#0E55B2] underline cursor-pointer">
                        {product.link}
                      </p>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>
        <div className="flex items-center justify-center mt-20 gap-4">
          <div className="flex-1 h-[1px] bg-[#828282]" />
          <button className="px-6 py-3 rounded-[24px] bg-[#000] text-white text-[16px] font-inter cursor-pointer hover:scale-105 duration-300">
            See All Products
          </button>
          <div className="flex-1 h-[1px] bg-[#828282]" />
        </div>
      </Container>
    </section>
  );
};

export default Feature;
