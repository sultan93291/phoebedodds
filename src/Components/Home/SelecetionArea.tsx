import Container from "../Shared/Container";
import CustomSelect from "../Reusable/CustomSelect";


const SelcetionArea = () => {
  const options = [
    { label: "Furniture", value: "furniture" },
    { label: "Accessories", value: "accessories" },
    { label: "Grocery", value: "grocery" },
  ];
  return (
    <section className="mb-8">
      <Container>
        <div className="flex justify-between">
          <CustomSelect options={options} placeholder="Furniture" />
          <CustomSelect options={options} placeholder="Decor" />
          <CustomSelect options={options} placeholder="Lighting" />
          <CustomSelect options={options} placeholder="Style" />
          <button className="p-5 rounded-[24px] bg-[#000] text-white  outline-0 text-[16px] font-inter cursor-pointer py-4 px-10 w-[300px]">
            Apply
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SelcetionArea;
