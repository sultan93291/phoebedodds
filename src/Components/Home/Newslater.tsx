import Container from "../Shared/Container";

const Newslater = () => {
  return (
    <section className="pb-[100px]">
      <Container>
        <h3 className="font-inter text-[32px] font-semi-bold text-[#000]">
          NewsLetter
        </h3>
        <h2 className="text-center text-[96px] font-inter text-[#000] font-semi-bold">
          Your Interior Intel
        </h2>
        <div className="w-full flex justify-center mt-10">
          <div className="flex gap-x-6 w-2/3 max-w-[800px]">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-5 rounded-[24px] border border-[#000] outline-0 w-full text-gray-400 text-[16px] font-inter"
            />
            <button className="p-5 rounded-[24px] bg-[#000] text-white text-[16px] font-inter cursor-pointer w-[250px] hover:scale-105 duration-300">
              Submit
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newslater;
