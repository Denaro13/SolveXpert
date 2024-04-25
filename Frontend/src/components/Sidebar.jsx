import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import navLinks from "../assets/utils/Navlinks";

const Sidebar = ({ sidebar, handleSidebar }) => {
  return (
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
          <RxHamburgerMenu size={30} onClick={() => handleSidebar()} />
        </div>
        <div className="mt-20 flex flex-col justify-center gap-8 text-xl font-[400] px-5 py-3 rounded-lg mx-2">
          {navLinks.map((navlink) => {
            const { id, name, path } = navlink;
            return (
              <Link
                key={id}
                to={path}
                className="capitalize text-md"
                onClick={() => handleSidebar()}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
