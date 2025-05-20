import Container from "../Shared/Container";
import Shopify from "../../assets/Images/shopify.png";

const OurPartners = () => {
  return (
    <section>
      <Container className="xl:py-[100px] py-[50px] border-b border-[#B1B1B1] 2xl:px-0 px-5">
        <h3
          className="font-inter xl:text-[32px] lg:text-[28px] text-[25px] font-semibold text-[#000] w-full"
          data-aos="fade-up"
        >
          Our Partners
        </h3>
        <div className="flex justify-between pt-8 flex-wrap gap-y-6">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={Shopify}
              alt="Shopify"
              className="w-[150px] h-auto"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurPartners;
