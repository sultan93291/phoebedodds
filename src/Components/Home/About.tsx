import Container from "../Shared/Container";

const About = () => {
  return (
    <section>
      <Container className="py-[100px] border-b border-[#B1B1B1]">
        <div className="flex flex-col md:flex-row gap-10">
          <h3
            className="font-inter text-[32px] font-semibold text-[#000] w-full md:w-1/3"
            data-aos="fade-right"
          >
            About Us
          </h3>
          <div className="md:w-2/3" data-aos="fade-left">
            <p className="font-inter text-[24px] font-normal text-[#000] leading-[59px]">
              We’re building the easiest way to discover and shop interior
              design products from across the web. Think of us as the Skyscanner
              for home decor — a visual search engine that brings together
              curated furniture and decor from top brands and boutiques in one
              place. Whether you're searching by style, price, or space, we help
              you find the perfect piece without the endless browsing.
            </p>
            <h5 className="font-inter text-[24px] font-medium pt-12 text-[#000]">
              Our mission is to make design discovery effortless, beautiful, and
              inspiring.
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
