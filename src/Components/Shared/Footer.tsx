import Container from "./Container";
import Footerlogo from "../../assets/Images/footerlogo.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-[120px] bg-[#000]">
      <Container>
        <figure>
          <img src={Footerlogo} alt="Footerlogo" />
        </figure>
        <div className="py-[120px] flex justify-between items-center border-b-2 border-[#828282]">
          <div className="">
            <h3 className="font-inter font-semibold text-white text-[32px] pb-18">
              About
            </h3>
            <ul className="flex flex-col gap-8">
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                About Us
              </li>
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                Affiliate Partnerships
              </li>
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                All Products
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-inter font-semibold text-white text-[32px] pb-18">
              Explore
            </h3>
            <ul className="flex flex-col gap-8">
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                Browse By Category
              </li>
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                Browse By Rooms
              </li>
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                Featured Products
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-inter font-semibold text-white text-[32px] pb-18">
              Support
            </h3>
            <ul className="flex flex-col gap-8">
              <li>
                <Link
                  to="/privacy-policies"
                  className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline"
                >
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-contitions"
                  className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-inter font-semibold text-white text-[32px] pb-18">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-8">
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                Email:{" "}
                <span className="text-blue-500">support@yourbrandname.com</span>
              </li>
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                Phone: <span className="text-blue-500">(123) 456-7890</span>
              </li>
              <li className="font-inter font-normal text-[16px] text-white cursor-pointer hover:underline">
                Business Hours: Monday – Friday, 9am – 5pm (EST)
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 flex justify-between items-center">
          <p className="font-inter font-normal text-[16px] text-white">
            © 2025 Phoebe Dodds. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <div className="h-[46px] w-[46px] rounded-full border border-white flex justify-center items-center hover:border-amber-300 cursor-pointer">
              <FaFacebook className="text-white" />
            </div>
            <div className="h-[46px] w-[46px] rounded-full border border-white flex justify-center items-center hover:border-amber-300 cursor-pointer">
              <IoLogoInstagram className="text-white" />
            </div>
            <div className="h-[46px] w-[46px] rounded-full border border-white flex justify-center items-center hover:border-amber-300 cursor-pointer">
              <FaXTwitter className="text-white" />
            </div>
            <div className="h-[46px] w-[46px] rounded-full border border-white flex justify-center items-center hover:border-amber-300 cursor-pointer">
              <FaTiktok className="text-white" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
