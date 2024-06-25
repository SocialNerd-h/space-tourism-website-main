import logo from "@assets/shared/logo.svg";
import exit from "@assets/shared/icon-close.svg";
import menu from "@assets/shared/icon-hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="flex justify-between items-center lg:pt-9 sm:mx-5  sm:h-[5.6875rem]">
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
        lg:before:border-b-[1px] lg:w-[51%] lg:h-24 md:w-5/6 md:h-24 bg-white/5 backdrop-blur font-barlowC ${isOpen ? "translate-x-0" : "translate-x-full"} 
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
            <a
              href="#"
              className="h-full inline-block lg:leading-[6rem] lg:border-b-[3px] lg:w-full lg:border-white/0 lg:hover:border-white/50 lg:transition lg:duration-700

            md:leading-[6rem] md:border-b-[3px] md:w-full md:border-white/0 md:hover:border-white/50 md:transition md:duration-700
            
            sm:mb-8 sm:h-5 sm:border-r-[3px] sm:w-full sm:border-white/0 sm:hover:border-white/50 sm:transition sm:duration-700"
            >
              <span className="font-semibold ">00 </span> Home
            </a>
          </li>
          <li className="">
            <a
              href="https://tailwindcss.com/docs/box-shadow"
              className="h-full inline-block lg:leading-[6rem] lg:border-b-[3px] lg:w-full lg:border-white/0 lg:hover:border-white/50 lg:transition lg:duration-700
            
            md:leading-[6rem] md:border-b-[3px] md:w-full md:border-white/0 md:hover:border-white/50 md:transition md:duration-700
            
            sm:mb-8 sm:h-5 sm:border-r-[3px] sm:w-full sm:border-white/0 sm:hover:border-white/50 sm:transition sm:duration-700"
            >
              <span className="font-semibold">01</span> Destination
            </a>
          </li>
          <li className=" ">
            <a
              href="#"
              className="h-full inline-block lg:leading-[6rem] lg:border-b-[3px] lg:w-full lg:border-white/0 lg:hover:border-white/50 lg:transition lg:duration-700

            md:leading-[6rem] md:border-b-[3px] md:w-full md:border-white/0 md:hover:border-white/50 md:transition md:duration-700 

            sm:mb-8 sm:h-5 sm:border-r-[3px] sm:w-full sm:border-white/0 sm:hover:border-white/50 sm:transition sm:duration-700"
            >
              <span className="font-semibold">02</span> Crew
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="h-full inline-block lg:leading-[6rem] lg:border-b-[3px] lg:w-full lg:border-white/0 lg:hover:border-white/50 lg:transition lg:duration-700

            md:leading-[6rem] md:border-b-[3px] md:w-full md:border-white/0 md:hover:border-white/50 md:transition md:duration-700

            sm:h-5 sm:border-r-[3px] sm:w-full sm:border-white/0 sm:hover:border-white/50 sm:transition sm:duration-700"
            >
              <span className="font-semibold ">03 </span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
