import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { siteFetching } from "@/features/site-setting/SiteSettingSlice";

interface NavItem {
  label: string;
  path: string;
}

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: siteData } = useSelector(
    (state: RootState) => state.siteSetting
  );

  useEffect(() => {
    dispatch(siteFetching());
  }, [dispatch]);

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Contact Us", path: "#contact" },
    { label: "Categories", path: "/category" },
    { label: "Products", path: "/product" },
  ];

  // const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    const handlescroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center xl:pt-8 pt-4 pb-4">
          <div className="xl:w-1/5 w-full">
            <Link to="/">
              <figure>
                {siteData?.data?.logo ? (
                  <img
                    src={`${import.meta.env.VITE_SITE_URL}/${
                      siteData?.data?.logo
                    }`}
                    alt="Logo"
                    className="md:h-8  h-8"
                  />
                ) : (
                  <img src={Logo} alt="Logo" className="md:h-8  h-8" />
                )}
              </figure>
            </Link>
          </div>

          <ul className="w-1/3 xl:flex hidden gap-x-12 items-center">
            {navItems.map(({ label, path }) => (
              <li
                key={label}
                className="font-inter text-[16px] font-semibold text-[#000] cursor-pointer w-fit h-fit transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-[1.05] hover:text-[#1a1a1a]"
              >
                {path.startsWith("#") ? (
                  <button
                    onClick={() => {
                      const el = document.querySelector(path);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      setMenuOpen(false);
                    }}
                    className="w-full text-left cursor-pointer"
                  >
                    {label}
                  </button>
                ) : (
                  <Link to={path} onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="w-1/3 xl:flex hidden relative gap-x-6">
            <input
              type="search"
              placeholder="search"
              className="p-5 rounded-[24px] border border-[#000] outline-0  text-gray-400 text-[16px] font-inter flex-2"
            />
            <button className="p-5 rounded-[24px] bg-[#000] text-white outline-0 text-[16px] font-inter cursor-pointer flex-1 hover:bg-[#fff] hover:text-black hover:border-black hover:border duration-300">
              Search
            </button>

            {/* Search Results UI */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-[16px] p-4 max-h-[400px] overflow-y-auto w-full absolute top-[72px]">
              <h3 className="text-lg font-semibold mb-4">Search Results</h3>

              <ul className="space-y-4">
                {/* Result item */}
                <li className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium text-black">Elegant Linen Sofa</p>
                    <p className="text-sm text-gray-500">
                      Category: Living Room
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-[#000]">
                    $699
                  </span>
                </li>

                <li className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium text-black">
                      Modern Wood Coffee Table
                    </p>
                    <p className="text-sm text-gray-500">Category: Furniture</p>
                  </div>
                  <span className="text-sm font-semibold text-[#000]">
                    $249
                  </span>
                </li>

                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-black">
                      Minimalist Bed Frame
                    </p>
                    <p className="text-sm text-gray-500">Category: Bedroom</p>
                  </div>
                  <span className="text-sm font-semibold text-[#000]">
                    $899
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="xl:hidden block">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
            >
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 xl:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          className={`xl:hidden fixed top-0 left-0 h-full w-[250px] bg-gray-400 z-50 transform transition-transform duration-700 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside sidebar from closing it
        >
          <div className="flex justify-between items-center px-5 pt-6 cursor-pointer">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>

          <ul className="flex flex-col gap-6 mt-10 px-6">
            {navItems.map(({ label, path }) => (
              <li className="text-[18px] font-inter text-white hover:text-black cursor-pointer">
                {path.startsWith("#") ? (
                  <button
                    onClick={() => {
                      const el = document.querySelector(path);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      setMenuOpen(false);
                    }}
                    className="w-full text-left cursor-pointer"
                  >
                    {label}
                  </button>
                ) : (
                  <Link to={path} onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
