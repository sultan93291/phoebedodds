import PageHeading from "@/Components/Reusable/PageHeading";
import Container from "@/Components/Shared/Container";

const PrivacyPolicies = () => {
  return (
    <Container className="px-4 py-20">
      {/* Heading */}
      <PageHeading
        title="Privacy Policies"
        subtitle="Your privacy matters — here's how we collect, use, and protect your personal information."
      />

      {/* Paragraph */}
      <div className="text-black text-[24px] font-normal not-italic leading-[59px]">
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

export default PrivacyPolicies;
