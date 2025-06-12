import Container from "../Shared/Container";
import CustomSelect from "../Reusable/CustomSelect";

const SelectionArea = () => {
  const options = [
    { label: "Furniture", value: "furniture" },
    { label: "Accessories", value: "accessories" },
    { label: "Grocery", value: "grocery" },
  ];

  return (
    <section className="xl:mb-8 2xl:px-0 px-5">
      <Container>
        <div
          className="flex flex-wrap gap-4 xl:justify-between justify-center items-center"
          data-aos="fade-up"
        >
          <div className="flex-grow min-w-[200px]">
            <CustomSelect options={options} placeholder="Furniture" />
          </div>
          <div className="flex-grow min-w-[200px]">
            <CustomSelect options={options} placeholder="Decor" />
          </div>
          <div className="flex-grow min-w-[200px]">
            <CustomSelect options={options} placeholder="Lighting" />
          </div>
          <div className="flex-grow min-w-[200px]">
            <CustomSelect options={options} placeholder="Style" />
          </div>
          <button
            className="rounded-[24px] bg-[#000] text-white outline-0 text-[16px] font-inter cursor-pointer py-[16px] md:py-[25px] px-10 flex-grow min-w-[200px]
    hover:bg-[#1a1a1a] transition-all duration-300"
          >
            Apply
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SelectionArea;
