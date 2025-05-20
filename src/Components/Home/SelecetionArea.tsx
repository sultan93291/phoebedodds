import Container from "../Shared/Container";
import CustomSelect from "../Reusable/CustomSelect";

const SelectionArea = () => {
  const options = [
    { label: "Furniture", value: "furniture" },
    { label: "Accessories", value: "accessories" },
    { label: "Grocery", value: "grocery" },
  ];

  return (
    <section className="mb-8">
      <Container>
        <div
          className="flex flex-wrap gap-4 justify-between items-center"
          data-aos="fade-up"
        >
          <CustomSelect options={options} placeholder="Furniture" />
          <CustomSelect options={options} placeholder="Decor" />
          <CustomSelect options={options} placeholder="Lighting" />
          <CustomSelect options={options} placeholder="Style" />
          <button className="rounded-[24px] bg-[#000] text-white outline-0 text-[16px] font-inter cursor-pointer py-4 px-10 w-[300px] hover:bg-[#1a1a1a] transition-all duration-300">
            Apply
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SelectionArea;
