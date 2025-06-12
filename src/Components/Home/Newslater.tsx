import Container from "../Shared/Container";

const Newslater = () => {
  return (
    <section className="pb-[100px] 2xl:px-0 px-5">
      <Container className="flex flex-col md:flex-row  justify-between">
        <h3
          className="font-inter xl:text-[32px] text-[24px] xl:text-start text-center font-semibold text-[#000]"
          data-aos="fade-up"
        >
          NewsLetter
        </h3>
        <div className="flex flex-col items-start justify-start mt-2 md:mt-0">
          <h2
            className="text-center md:text-[40px] xl:text-[96px] lg:text-[56px] text-[35px] font-inter text-[#000] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Your Interior Intel
          </h2>

          <div
            className="w-full flex items-center mt-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col xl:flex-row gap-y-2 xl:gap-y-0 md:gap-x-4 w-full ">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="p-3 md:p-5 rounded-[24px] border border-[#000] outline-0 flex grow-2 w-full text-gray-400 text-[16px] font-inter"
              />
              <button
                className="p-3 md:p-5 rounded-[24px] bg-[#000] text-white text-[16px] font-inter cursor-pointer hover:bg-[#FFF] hover:text-black hover:outline 
    hover:outline-[#000] lg:w-[250px] w-full duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newslater;
