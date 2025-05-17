import Container from "../Shared/Container";
import Shopify from "../../assets/Images/shopify.png";

const OurPartners = () => {
  return (
    <section>
      <Container className="py-[100px]  border-b border-[#B1B1B1]">
        <h3 className="font-inter text-[32px] font-semibold text-[#000] w-full">
          Our Partners
        </h3>
        <div className="flex justify-between pt-8">
          <img src={Shopify} alt="Shopify" />
          <img src={Shopify} alt="Shopify" />
          <img src={Shopify} alt="Shopify" />
          <img src={Shopify} alt="Shopify" />
        </div>
      </Container>
    </section>
  );
};

export default OurPartners;
