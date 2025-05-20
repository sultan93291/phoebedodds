import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Categories", path: "/category" },
    { label: "Featured", path: "/product" },
  ];

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center pt-8 pb-4">
          <div className="w-1/5">
            <Link to="/">
            <figure>
              <img src={Logo} alt="Logo" />
            </figure>
            </Link>
          </div>
          <ul className="w-1/3 flex gap-x-12 items-center">
            {navItems.map(({ label, path }) => (
              <li
                key={label}
                className="font-inter text-[16px] font-semibold text-[#000] cursor-pointer w-fit h-fit transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-[1.05] hover:text-[#1a1a1a]"
              >
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>

          <div className="w-1/3 flex gap-x-6">
            <input
              type="search"
              placeholder="search"
              className="p-5 rounded-[24px] border border-[#000] outline-0 w-[350px] text-gray-400 text-[16px] font-inter"
            />
            <button className="p-5 rounded-[24px] bg-[#000] text-white outline-0 text-[16px] font-inter cursor-pointer w-[150px] hover:bg-[#fff] hover:text-black hover:Lborder-black hover:border duration-300">
              Search
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
