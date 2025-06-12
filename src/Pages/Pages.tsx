import type { AppDispatch, RootState } from "@/app/store";
import PageHeading from "@/Components/Reusable/PageHeading";
import Container from "@/Components/Shared/Container";
import Loader from "@/Components/Shared/Loader";
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
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loader />
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

export default Pages;
