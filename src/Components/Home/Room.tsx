import Container from "../Shared/Container";
import Bedromm1 from "../../assets/Images/bedroom1.png";
import Bedromm2 from "../../assets/Images/bedroom2.png";
import Bedromm3 from "../../assets/Images/bedroom3.png";

const Room = () => {
  return (
    <section>
      <Container className="xl:py-[100px] py-[50px] border-b border-[#B1B1B1] 2xl:px-0 px-5">
        <div className="flex gap-x-6 flex-wrap md:flex-nowrap">
          {/* Living Room */}
          <div
            className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl cursor-pointer xl:mb-0 mb-5"
            data-aos="fade-right"
          >
            <figure>
              <img
                src={Bedromm1}
                alt="Bedromm1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
              <h3 className="font-inter lg:text-[32px] text-[24px] font-semibold text-white drop-shadow-md mb-4">
                Living Room
              </h3>
              <button className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer text-[16px] font-medium hover:bg-gray-200 transition opacity-0 group-hover:opacity-100 duration-300">
                See Collections
              </button>
            </div>
          </div>

          {/* Dining + Bedroom */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div
              className="w-full relative group overflow-hidden rounded-2xl cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <figure>
                <img
                  src={Bedromm2}
                  alt="Bedromm2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
                <h3 className="font-inter lg:text-[32px] text-[24px] font-semibold text-white drop-shadow-md mb-4">
                  Dining Room
                </h3>
                <button className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer text-[16px] font-medium hover:bg-gray-200 transition opacity-0 group-hover:opacity-100 duration-300">
                  See Collections
                </button>
              </div>
            </div>

            <div
              className="w-full relative group overflow-hidden rounded-2xl cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <figure>
                <img
                  src={Bedromm3}
                  alt="Bedromm3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
                <h3 className="font-inter lg:text-[32px] text-[24px] font-semibold text-white drop-shadow-md mb-4">
                  Bed room
                </h3>
                <button className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer text-[16px] font-medium hover:bg-gray-200 transition opacity-0 group-hover:opacity-100 duration-300">
                  See Collections
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Room;
