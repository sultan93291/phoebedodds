interface PageHeadingProps {
  title?: string;
  subtitle?: string;
}

const PageHeading = ({ title, subtitle }: PageHeadingProps) => {
  return (
    <div className="py-[30px] sm:py-[50px] md:py-[100px] lg:py-[120px]">
      <h2
        data-aos="fade-up"
        className="text-black not-italic font-semibold leading-none mb-6 text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px]"
      >
        {title}
      </h2>
      <p
        data-aos="fade-up"
        className="text-[rgba(0,0,0,0.7)] not-italic font-normal leading-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px]"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeading;
