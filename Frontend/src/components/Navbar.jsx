import { NavLink } from "react-router-dom";
import navLinks from "../assets/utils/Navlinks";
import { IoHomeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useGlobalContext } from "../contex/GlobalContex";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { setShow } = useGlobalContext();
  const handleClick = () => {
    setShow(false);
    setSidebar(false);
  };

  return (
    <nav className="bg-white shadow-md h-16 flex items-center">
      <div className="w-11/12 mx-auto flex  items-center justify-between">
        <div>
          <NavLink
            to="/"
            className="capitalize text-md"
            onClick={() => setShow(false)}
          >
            <IoHomeOutline className="text-2xl" />
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:gap-4 ">
          {navLinks.map((navlink) => {
            const { id, name, path } = navlink;
            return (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  [
                    isActive
                      ? "text-red-700 font-bold capitalize text-lg"
                      : "hover:text-red-400 capitalize text-lg",
                  ].join(" ")
                }
                onClick={() => setShow(false)}
              >
                {name}
              </NavLink>
            );
          })}
        </div>
        <div className="flex gap-4 items-center">
          <BsBell className="text-2xl" />
          <p className="hidden text:2xl lg:flex lg:items-center lg:gap-2 ">
            welcome{" "}
            <span>
              <BiUserCircle className="text-2xl" />
            </span>
          </p>
          <span className="block lg:hidden">
            <RxHamburgerMenu
              className="text-3xl cursor-pointer hover:text-red-700"
              onClick={() => setSidebar(!sidebar)}
            />
          </span>
        </div>
      </div>
      {/* <Sidebar sidebar={sidebar} handleSidebar={handleSidebar()} /> */}
      <div
        className={
          sidebar
            ? "fixed top-0 right-0 w-[100%]  h-screen bg-black/10 z-10 duration-700 overflow-y-scroll"
            : "fixed top-0 right-[-100%] w-[100%] h-screen bg-black/10 z-10 duration-500 overflow-y-scroll delay-200"
        }
      >
        <aside
          className={
            sidebar
              ? "fixed top-0 right-0 w-[30%] md:w-[30%] h-screen bg-white z-10 duration-700 overflow-y-scroll delay-200"
              : "fixed top-0 right-[-100%] w-[30%] md:w-[30%] h-screen bg-white z-10 duration-500 overflow-y-scroll"
          }
        >
          <div className="absolute top-3 right-5  ">
            <RxHamburgerMenu
              size={30}
              onClick={() => setSidebar(false)}
              className="text-3xl cursor-pointer hover:text-red-700"
            />
          </div>
          <div className="mt-20 flex flex-col justify-center gap-8 text-xl font-[400] px-5 py-3 rounded-lg mx-2">
            {navLinks.map((navlink) => {
              const { id, name, path } = navlink;
              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "text-red-700 font-bold capitalize text-lg"
                        : "hover:text-red-400 capitalize text-lg",
                    ].join(" ")
                  }
                  onClick={handleClick}
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
