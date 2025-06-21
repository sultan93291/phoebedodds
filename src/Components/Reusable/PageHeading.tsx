import type { ReactNode } from "react";

interface PageHeadingProps {
  title?: string | ReactNode;
  subtitle?: string;
}

const PageHeading = ({ title, subtitle }: PageHeadingProps) => {
  return (
    <div className="pb-[30px] sm:pb-[50px] md:pb-[100px] lg:pb-[100px]">
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
