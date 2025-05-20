import Container from "../Shared/Container";
import Shopify from "../../assets/Images/shopify.png";

const OurPartners = () => {
  return (
    <section>
      <Container className="py-[100px] border-b border-[#B1B1B1]">
        <h3
          className="font-inter text-[32px] font-semibold text-[#000] w-full"
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
