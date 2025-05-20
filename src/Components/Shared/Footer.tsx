import Container from "./Container";
import Footerlogo from "../../assets/Images/footerlogo.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-[60px] md:py-[100px] bg-[#000] px-5">
      <Container>
        <figure className="mb-12 md:mb-16 flex justify-center md:justify-start">
          <img src={Footerlogo} alt="Footerlogo" />
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
              <li className="text-white text-[16px] hover:underline cursor-pointer">
                Affiliate Partnerships
              </li>
              <li className="text-white text-[16px] hover:underline cursor-pointer">
                All Products
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="w-full sm:w-1/2 lg:w-1/4 pr-4">
            <h3 className="font-inter font-semibold text-white text-[24px] md:text-[28px] mb-6">
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="text-white text-[16px] hover:underline cursor-pointer">
                Browse By Category
              </li>
              <li className="text-white text-[16px] hover:underline cursor-pointer">
                Browse By Rooms
              </li>
              <li className="text-white text-[16px] hover:underline cursor-pointer">
                Featured Products
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 lg:w-1/4 pr-4">
            <h3 className="font-inter font-semibold text-white text-[24px] md:text-[28px] mb-6">
              Support
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/privacy-policies"
                  className="text-white text-[16px] hover:underline"
                >
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-contitions"
                  className="text-white text-[16px] hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
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
                <span className="text-blue-500">support@yourbrandname.com</span>
              </li>
              <li className="text-white text-[16px]">
                Phone: <span className="text-blue-500">(123) 456-7890</span>
              </li>
              <li className="text-white text-[16px]">
                Business Hours: Mon – Fri, 9am – 5pm (EST)
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white text-[14px] md:text-[16px] text-center md:text-left">
            © 2025 Phoebe Dodds. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, IoLogoInstagram, FaXTwitter, FaTiktok].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border border-white flex items-center justify-center hover:border-amber-300 cursor-pointer"
                >
                  <Icon className="text-white text-[18px]" />
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
