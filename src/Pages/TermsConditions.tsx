import PageHeading from "@/Components/Reusable/PageHeading";
import Container from "@/Components/Shared/Container";

const TermsContitions = () => {
  return (
    <Container className="px-4 2xl:px-0 py-20">
      {/* Heading */}
      <PageHeading
        title="Terms Contitions"
        subtitle="Please read these terms carefully before using our website or services."
      />

      {/* Paragraph */}
      <div data-aos="fade-up" className="text-black text-[18px] border-t border-[#B1B1B1] pt-12 lg:text-[24px] font-normal not-italic leading-8 lg:leading-[59px] ">
        <p>
          At [Your Company Name], we value your privacy and are committed to
          protecting your personal information. When you use our website or
          services, we may collect certain data such as your name, email
          address, browsing behavior, and other relevant details to help improve
          your experience. This information is used solely for providing and
          enhancing our services, processing transactions, and communicating
          with you. We do not sell or share your data with third parties except
          as required for service delivery or by law. By using our site, you
          consent to our data practices as described. If you have any questions
          or concerns, please contact us at [support@yourcompany.com].
        </p>
      </div>
    </Container>
  );
};

export default TermsContitions;
