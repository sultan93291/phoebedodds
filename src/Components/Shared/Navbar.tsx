import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { siteFetching } from "@/features/site-setting/SiteSettingSlice";
import {
  clearSearchResults,
  fetchSearchResults,
} from "@/features/products/searchSlice";
import { CiSearch } from "react-icons/ci";

interface NavItem {
  label: string;
  path: string;
}

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: siteData } = useSelector(
    (state: RootState) => state.siteSetting
  );
  const { results, status } = useSelector((state: RootState) => state.search);

  const [searchInput, setSearchInput] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(siteFetching());
  }, [dispatch]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when search modal open
  useEffect(() => {
    document.body.style.overflow = searchModalOpen ? "hidden" : "auto";
  }, [searchModalOpen]);

  // Debounced search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchInput.trim().length > 0) {
        dispatch(fetchSearchResults(searchInput));
      } else {
        dispatch(clearSearchResults());
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchInput, dispatch]);

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Contact Us", path: "#contact" },
    { label: "Categories", path: "/category" },
    { label: "Products", path: "/product" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 px-5 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center xl:pt-8 pt-4 pb-4">
          {/* Logo */}
          <div className="xl:w-1/5 w-full">
            <Link to="/">
              <figure>
                {siteData?.data?.logo ? (
                  <img
                    src={`${import.meta.env.VITE_SITE_URL}/${
                      siteData?.data?.logo
                    }`}
                    alt="Logo"
                    className="md:h-8 h-8"
                  />
                ) : (
                  <img src={Logo} alt="Logo" className="md:h-8 h-8" />
                )}
              </figure>
            </Link>
          </div>

          {/* Navigation Links */}
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

          {/* Desktop Search */}
          <div className="w-1/4 xl:flex hidden relative gap-x-6">
            <div className="w-full relative">
              <input
                type="search"
                placeholder="Search"
                className="p-5 pl-[50px] rounded-[24px] border border-[#000] outline-0 text-gray-400 text-[16px] font-inter w-full"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2">
                <CiSearch className="text-2xl" />
              </span>
            </div>

            {searchInput.trim() && (
              <div className="bg-white border border-gray-200 shadow-sm rounded-[16px] p-4 max-h-[400px] overflow-y-auto w-full absolute top-[72px] z-50">
                <h3 className="text-lg font-semibold mb-4">Search Results</h3>

                {status === "loading" && (
                  <div className="flex justify-center py-6">
                    <svg
                      className="animate-spin h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  </div>
                )}

                {status === "succeeded" && results?.data?.length === 0 && (
                  <p className="text-center text-gray-500">No results found.</p>
                )}

                {status === "succeeded" && results?.data?.data?.length > 0 && (
                  <ul className="space-y-4">
                    {results.data.data.map((item: any, idx: number) => (
                      <a
                        href={item?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                        className="flex justify-between items-center border-b pb-3 cursor-pointer"
                      >
                        <div className="flex">
                          <div className="image-container w-20 h-20">
                            <img src={item?.image} alt={item?.title} />
                          </div>
                          <div>
                            <p className="font-medium text-black text-xs">
                              {item?.brand}
                            </p>
                            <p className="font-medium text-black">
                              {item?.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              Category: {item?.category || "N/A"}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-[#000]">
                          ${item.price}
                        </span>
                      </a>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu & Search */}
          <div className="xl:hidden flex items-center gap-5">
            <span
              className="cursor-pointer"
              onClick={() => setSearchModalOpen(true)}
            >
              <CiSearch size={28} />
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
            >
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {searchModalOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4"
            onClick={() => {
              setSearchInput("");
              setSearchModalOpen(false);
            }}
          >
            <div
              className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSearchModalOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <FiX size={24} />
              </button>

              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />

              {searchInput.trim() && (
                <div className="bg-white border border-gray-200 shadow-sm rounded-[16px] p-4 max-h-[400px] overflow-y-auto w-full mt-4">
                  {status === "loading" && (
                    <div className="flex justify-center py-6">
                      <svg
                        className="animate-spin h-6 w-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    </div>
                  )}

                  {status === "succeeded" && results?.data?.length === 0 && (
                    <p className="text-center text-gray-500">
                      No results found.
                    </p>
                  )}

                  {status === "succeeded" &&
                    results?.data?.data?.length > 0 && (
                      <ul className="space-y-4">
                        {results.data.data.map((item: any, idx: number) => (
                          <a
                            href={item?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={idx}
                            className="flex justify-between items-center border-b pb-3 cursor-pointer"
                          >
                            <div className="flex">
                              <div className="image-container w-16 h-16 mr-3">
                                <img
                                  src={item?.image}
                                  alt={item?.title}
                                  className="w-full h-full object-cover rounded"
                                />
                              </div>
                              <div>
                                <p className="font-medium text-black text-xs">
                                  {item?.brand}
                                </p>
                                <p className="font-medium text-black text-sm">
                                  {item?.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Category: {item?.category || "N/A"}
                                </p>
                              </div>
                            </div>
                            <span className="text-sm font-semibold text-[#000]">
                              ${item.price}
                            </span>
                          </a>
                        ))}
                      </ul>
                    )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 xl:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`xl:hidden fixed top-0 left-0 h-full w-[250px] bg-gray-400 z-50 transform transition-transform duration-700 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-5 pt-6">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>

          <ul className="flex flex-col gap-6 mt-10 px-6">
            {navItems.map(({ label, path }) => (
              <li
                key={label}
                className="text-[18px] font-inter text-white hover:text-black cursor-pointer"
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
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
