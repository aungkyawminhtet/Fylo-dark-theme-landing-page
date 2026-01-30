import { useEffect, useState } from "react";
import { images, NavbarLists } from "../constant/Data";

const Navbar = () => {
  const [isOver, setIsOver] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsOver(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOver]);

  return (
    <nav
      className={`flex items-center justify-between w-full px-5 py-4 md:px-15 md:py-4 transition-all duration-300 ease-in-out backdrop-blur-xl shadow-2xl
  ${
    isOver
      ? "fixed top-0 py-4 left-0 z-100 backdrop-blur-xl translate-y-0 opacity-100 transition-all duration-300 ease-in-out"
      : "relative opacity-100"
  }
`}
    >
      <img
        src={images.Logo}
        alt="Logo"
        className="w-25 md:w-37.5 object-cover cursor-pointer"
      />
      <div className="flex items-center space-x-3 md:space-x-8">
        {NavbarLists.map((item) => (
          <span
            key={item.id}
            className="md:font-bold font-sans text-white cursor-pointer hover:before:content-[''] hover:before:absolute hover:before:-bottom-1 hover:before:left-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-blue-500 relative hover:before:transition-all hover:before:duration-300"
          >
            {item.title}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
