interface PageHeadingProps {
  title: string;
  subtitle: string;
}

const PageHeading = ({ title, subtitle }: PageHeadingProps) => {
  return (
    <div className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] border-b border-[#B1B1B1] mb-12">
      <h2 className="text-black not-italic font-semibold leading-none mb-6 text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px]">
        {title}
      </h2>
      <p className="text-[rgba(0,0,0,0.7)] not-italic font-normal leading-none text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px]">
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeading;
