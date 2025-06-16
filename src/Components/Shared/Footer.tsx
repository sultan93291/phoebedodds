import Container from "./Container";
import Footerlogo from "../../assets/Images/footerlogo.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { socialFetching } from "@/features/social/socialSlice";
import { siteFetching } from "@/features/site-setting/SiteSettingSlice";
import { dynamicPageFatching } from "@/features/dynamicPage/dynamicPageSlice";

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items } = useSelector((state: RootState) => state.social);
  const { items: siteData } = useSelector(
    (state: RootState) => state.siteSetting
  );

  const { items: dynamicPages } = useSelector(
    (state: RootState) => state.dynamicPages
  );

  useEffect(() => {
    dispatch(socialFetching());
    dispatch(siteFetching());
    dispatch(dynamicPageFatching());
  }, [dispatch]);

  const iconMap: Record<string, React.ElementType> = {
    facebook: FaFacebook,
    instagram: IoLogoInstagram,
    twitter: FaXTwitter,
    tiktok: FaTiktok,
  };

  return (
    <footer id="contact" className="py-[60px] md:py-[100px] bg-[#000] px-5">
      <Container>
        <figure className="mb-12 md:mb-16 flex justify-start">
          {siteData?.data?.logo ? (
            <img
              src={`${import.meta.env.VITE_SITE_URL}/${siteData?.data?.logo}`}
              alt="Footerlogo"
            />
          ) : (
            <img src={Footerlogo} alt="Footerlogo" />
          )}
        </figure>

        <div className="pb-[60px] md:pb-[100px] flex flex-wrap gap-y-12 md:gap-y-16 border-b border-[#828282]">
          {/* About */}
          <div className="w-full sm:w-1/2 lg:w-1/4 pr-4">
            <h3 className="font-inter font-semibold text-white text-[24px] md:text-[28px] mb-6">
              About
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="text-white text-[16px] hover:underline cursor-pointer">
                About Us
              </li>
              <Link
                to={"/product"}
                className="text-white text-[16px] hover:underline cursor-pointer"
              >
                All Products
              </Link>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 lg:w-1/4 pr-4">
            <h3 className="font-inter font-semibold text-white text-[24px] md:text-[28px] mb-6">
              Support
            </h3>
            <ul className="flex flex-col gap-4">
              {dynamicPages?.data?.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/pages/${item?.page_slug}`}
                    className="text-white text-[16px] hover:underline"
                  >
                    {item?.page_title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-1/2 lg:w-1/4 pr-4">
            <h3 className="font-inter font-semibold text-white text-[24px] md:text-[28px] mb-6">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="text-white text-[16px]">
                Email:{" "}
                <span className="text-blue-500">{siteData?.data?.email}</span>
              </li>
              <li className="text-white text-[16px]">
                Phone:{" "}
                <span className="text-blue-500">{siteData?.data?.phone}</span>
              </li>
              <li className="text-white text-[16px]">
                Business Hours: {siteData?.data?.business_hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white text-[14px] md:text-[16px] text-center md:text-left">
            {siteData?.data?.copyright_text}
          </p>
          <div className="flex gap-4">
            <div className="flex gap-4">
              {items?.data?.map((item, i) => {
                const Icon = iconMap[item?.social_media?.toLowerCase()];
                if (!Icon) return null;
                return (
                  <a
                    key={i}
                    href={item?.profile_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-white flex items-center justify-center hover:border-amber-300 cursor-pointer"
                  >
                    <Icon className="text-white text-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
