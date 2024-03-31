import { Link } from "react-router-dom";
import navLinks from "../assets/utils/Navlinks";
import { IoHomeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
// import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  // const handleSidebar = () => {
  //   setSidebar(false);
  // };

  return (
    <nav className="bg-white shadow-md h-16 flex items-center">
      <div className="w-11/12 mx-auto flex  items-center justify-between">
        <div>
          <Link to="/" className="capitalize text-md">
            <IoHomeOutline className="text-2xl" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-4 ">
          {navLinks.map((navlink) => {
            const { id, name, path } = navlink;
            return (
              <Link key={id} to={path} className="capitalize text-md">
                {name}
              </Link>
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
              className="text-2xl"
              onClick={() => setSidebar(!sidebar)}
            />
          </span>
        </div>
      </div>
      {/* <Sidebar sidebar={sidebar} handleSidebar={handleSidebar()} /> */}
      <div
        className={
          sidebar
            ? "fixed top-0 right-0 w-[100%]  h-screen bg-gray-200/90 z-10 duration-700 overflow-y-scroll"
            : "fixed top-0 right-[-100%] w-[100%] h-screen bg-gray-200/90 z-10 duration-500 overflow-y-scroll delay-200"
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
            <RxHamburgerMenu size={30} onClick={() => setSidebar(false)} />
          </div>
          <div className="mt-20 flex flex-col justify-center gap-8 text-xl font-[400] px-5 py-3 rounded-lg mx-2">
            {navLinks.map((navlink) => {
              const { id, name, path } = navlink;
              return (
                <Link
                  key={id}
                  to={path}
                  className="capitalize text-md"
                  onClick={() => setSidebar(false)}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
