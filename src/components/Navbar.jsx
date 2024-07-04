import logo from "@assets/shared/logo.svg";
import exit from "@assets/shared/icon-close.svg";
import menu from "@assets/shared/icon-hamburger.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const activeLink = "h-full inline-block lg:leading-[6rem] lg:border-b-[3px] lg:w-full lg:border-white md:leading-[6rem] md:border-b-[3px] md:w-full md:border-white sm:mb-8 sm:h-5 sm:border-r-[3px] sm:w-full sm:border-white";
  const normalLink = "h-full inline-block lg:leading-[6rem] lg:border-b-[3px] lg:w-full lg:border-white/0 lg:hover:border-white/50 lg:transition lg:duration-700 md:leading-[6rem] md:border-b-[3px] md:w-full md:border-white/0 md:hover:border-white/50 md:transition md:duration-700 sm:mb-8 sm:h-5 sm:border-r-[3px] sm:w-full sm:border-white/0 sm:hover:border-white/50 sm:transition sm:duration-700";

  return (
    <div className="absolute w-full" >
      <header className="flex justify-between items-center lg:pt-9 sm:mx-5 sm:h-[5.6875rem]">
        <img
          src={logo}
          className="h-12 w-12 lg:ml-16 md:ml-[2.5rem] sm:h-10 sm:w-10"
        ></img>
        <img
          src={menu}
          alt="menu-button"
          id="menu-btn"
          className="w-5 h-5 md:hidden lg:hidden sm:visible my-5 block cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        />
        <nav
          className={` lg:before:w-[35rem] lg:before:border-[#979797]/25 lg:before:left-[-530px] lg:before:bottom-[50%] lg:relative lg:before:absolute lg:before:h-[3px]
          lg:before:border-b-[1px] lg:w-[51%] lg:h-24 md:w-5/6 md:h-24 md:max-w-[980px]  bg-white/5 backdrop-blur font-barlowC ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:translate-x-0 lg:translate-x-0 sm:fixed sm:z-50 sm:top-0 sm:pt-8 sm:right-0 sm:w-8/12 sm:bg-veryDarkNavy sm:bg-opacity-50 sm:backdrop-blur sm:h-dvh `}
        >
          <img
            src={exit}
            onClick={() => setOpen(!isOpen)}
            alt="close button"
            id="close-btn"
            className="h-5 md:hidden lg:hidden sm:visible fixed right-0 mr-8 cursor-pointer"
          />
          <ul
            className=" md:flex lg:flex lg:ml-[9.9375rem] lg:mr-16 lg:h-24 sm:font-normal font-light md:h-24 lg:items-center lg:justify-between md:items-center
        md:justify-between md:pl-[5.4375rem] md:pr-[5.3%] text-white sm:pt-28 sm:ml-8 uppercase tracking-widest [word-spacing:0.5rem]"
          >
            <li className="">
              <NavLink
                onClick={() => setOpen(!isOpen)}
                to="/"
                className={({isActive}) => ( isActive ? activeLink : normalLink )}
              >
                <span className="font-semibold ">00 </span> Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                onClick={() => setOpen(!isOpen)}
                to="/destination"
                className={({isActive}) => ( isActive ? activeLink : normalLink )}
              >
                <span className="font-semibold">01</span> Destination
              </NavLink>
            </li>
            <li className=" ">
              <NavLink
                onClick={() => setOpen(!isOpen)}
                to="/crew"
                className={({isActive}) => ( isActive ? activeLink : normalLink )}
              >
                <span className="font-semibold">02</span> Crew
              </NavLink>
            </li>
            <li className="">
              <NavLink
                onClick={() => setOpen(!isOpen)}
                to="/technology"
                className={({isActive}) => ( isActive ? activeLink : normalLink )}
              >
                <span className="font-semibold ">03 </span> Technology
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
