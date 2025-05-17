import Container from "./Container";
import Logo from "../../assets/Images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center py-8 ">
          <div className="w-1/5">
            <figure>
              <img src={Logo} alt="Logo" />
            </figure>
          </div>
          <ul className="w-1/3 flex gap-x-12 items-center">
            {["Home", "Contact Us", "Categories", "Featured"].map(item => (
              <li
                key={item}
                className="font-inter text-[16px] font-semibold text-[#000] cursor-pointer w-fit h-fit transition-all
                 duration-300 ease-in-out opacity-70 hover:opacity-100 hover:scale-[1.05] hover:text-[#1a1a1a]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="w-1/3 flex gap-x-6">
            <input
              type="search"
              name=""
              id=""
              placeholder="search"
              className="p-5 rounded-[24px] border border-[#000] outline-0 w-[350px] text-gray-400 text-[16px] font-inter"
            />
            <button className="p-5 rounded-[24px] bg-[#000] text-white  outline-0 text-[16px] font-inter cursor-pointer w-[150px] hover:scale-105 duration-300">
              Search
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
