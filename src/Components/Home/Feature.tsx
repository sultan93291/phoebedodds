import Container from "../Shared/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Feature = () => {
  return (
    <section>
      <Container className="py-[100px]  border-b border-[#B1B1B1]">
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
          <Tabs>
            <TabList className="flex gap-x-12">
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
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default Feature;
