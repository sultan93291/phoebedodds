import Container from "../Shared/Container";

const About = () => {
  return (
    <section>
      <Container className="xl:py-[100px] py-12 border-b border-[#B1B1B1] 2xl:px-0 px-5">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <h3
            className="font-inter xl:text-[32px] lg:text-[25px] text-[20px] font-semibold text-[#000] "
            data-aos="fade-right"
          >
            About Us
          </h3>
          <div className="md:w-2/3" data-aos="fade-left">
            <p className="font-inter xl:text-[24px] lg:text-[20px] text-[16px] font-normal text-[#000] ">
              We’re building the easiest way to discover and shop interior
              design products from across the web. Think of us as the Skyscanner
              for home decor — a visual search engine that brings together
              curated furniture and decor from top brands and boutiques in one
              place. Whether you're searching by style, price, or space, we help
              you find the perfect piece without the endless browsing.
            </p>
            <h5 className="font-inter xl:text-[24px] lg:text-[20px] text-[18px] font-medium pt-12 text-[#000]">
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
