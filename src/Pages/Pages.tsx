import type { AppDispatch, RootState } from "@/app/store";
import PageHeading from "@/Components/Reusable/PageHeading";
import Container from "@/Components/Shared/Container";
import { singleDynamicPageFatching } from "@/features/dynamicPage/singleDynamicPageSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Pages = () => {
  const { slug } = useParams<{ slug?: string }>();

  const dispatch = useDispatch<AppDispatch>();
  const { items: singleDynamicPage, status } = useSelector(
    (state: RootState) => state.singleDynamicPage
  );

  useEffect(() => {
    if (slug) {
      dispatch(singleDynamicPageFatching(slug));
    }
  }, [dispatch, slug]);

  if (status === "loading") {
    return (
      <div className="w-full min-h-screen ">
        <PageSkeleton />
      </div>
    );
  }
  return (
    <Container className="px-4 2xl:px-0 py-20">
      {/* Loader */}

      {/* Heading */}
      <PageHeading
        title={singleDynamicPage?.data?.page_title}
        subtitle={singleDynamicPage?.data?.page_subtitle}
      />

      {/* Paragraph */}
      <div
        data-aos="fade-up"
        className="text-black text-[18px] border-t border-[#B1B1B1] pt-12 lg:text-[24px] font-normal not-italic leading-8 lg:leading-[59px]"
      >
        <p>{singleDynamicPage?.data?.page_content}</p>
      </div>
    </Container>
  );
};

const PageSkeleton = () => {
  return (
    <Container>
      <div className="animate-pulse w-full min-h-screen py-20 px-4 2xl:px-0 mt-20">
        <div className=" space-y-6">
          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-300 rounded-md"></div>

          {/* Subtitle */}
          <div className="h-6 w-1/2 bg-gray-200 rounded-md"></div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-300 mt-12"></div>

          {/* Paragraph Lines */}
          <div className="space-y-4 pt-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-6 bg-gray-200 rounded-md w-full lg:w-[90%]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pages;
