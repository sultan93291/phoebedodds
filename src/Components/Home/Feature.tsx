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
      <Container className="xl:py-[100px] py-[50px] 2xl:px-0 px-5">
        <h3
          className="font-inter xl:text-[32px] lg:text-[28px] text-[24px] font-normal text-center text-[#000] w-full"
          data-aos="fade-up"
        >
          Featured Products
        </h3>
        <h1
          className="xl:text-[86px] lg:text-[56px] text-[30px] font-semibold leading-normal font-inter text-[#000] text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Standout Pieces Across All Brands
        </h1>
        <p
          className="font-inter font-normal text-[#000] xl:text-[24px] lg:text-[20px] text-[20px] pb-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Compare quality finds without the extra tabs.
        </p>

        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Tabs className="w-full">
            <TabList className="flex flex-wrap gap-2 md:gap-y-0 justify-center items-center">
              <Tab
                className="border border-[#000] xl:px-12 px-7 xl:py-5 py-3 text-center hover:bg-[#000] hover:text-white duration-300 rounded-[24px] cursor-pointer text-[16px] font-normal font-inter transition-all"
                selectedClassName="bg-black text-white"
              >
                New Products
              </Tab>
              <Tab
                className="border border-[#000] sm:my-3 text-center xl:px-12 px-7 xl:py-5 py-3 hover:bg-[#000] hover:text-white duration-300 rounded-[24px] cursor-pointer text-[16px] font-normal font-inter transition-all"
                selectedClassName="bg-black text-white"
              >
                Special Prizes
              </Tab>
              <Tab
                className="border border-[#000] xl:px-12 px-7 xl:py-5 py-3 text-center rounded-[24px] hover:bg-[#000] hover:text-white duration-300 cursor-pointer text-[16px] font-normal font-inter transition-all"
                selectedClassName="bg-black text-white"
              >
                Top Sellers
              </Tab>
            </TabList>

            <div className="xl:mt-[120px] mt-[50px]">
              {/* TabPanel 1 */}
              <TabPanel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-20 cursor-pointer">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto rounded"
                      />

                      <div className="flex justify-between pt-6 pb-2 items-center">
                        <h3 className="font-inter text-[24px] font-medium text-[#000]">
                          {product.name}
                        </h3>
                        <h4 className="font-inter xl:text-[32px] text-[25px] font-medium text-[#000]">
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

              {/* TabPanel 2 */}
              <TabPanel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-20 cursor-pointer">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto rounded"
                      />

                      <div className="flex justify-between pt-6 pb-2 items-center">
                        <h3 className="font-inter lg:text-[24px] font-medium text-[#000]">
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
            </div>
          </Tabs>
        </div>

        <div
          className="flex items-center justify-center mt-20 gap-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex-1 h-[1px] bg-[#828282]" />
          <button className="px-6 py-3 rounded-[24px] bg-[#000] text-white hover:bg-[#FFF] hover:text-black hover:border hover:border-[#000] text-[16px] font-inter cursor-pointer duration-300">
            See All Products
          </button>
          <div className="flex-1 h-[1px] bg-[#828282]" />
        </div>
      </Container>
    </section>
  );
};

export default Feature;
