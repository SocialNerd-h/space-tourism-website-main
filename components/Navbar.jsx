import logo from "../starter-code/assets/shared/logo.svg";
import exit from "../starter-code/assets/shared/icon-close.svg";
import menu from "../starter-code/assets/shared/icon-hamburger.svg";
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
              className="h-full inline-block lg:leading-[6rem] lg:before:opacity-0 lg:before:border-white lg:hover:before:opacity-50 lg:before:transition-opacity lg:before:ease-out 
            lg:before:duration-700 lg:before:border-b-[3px]  lg:before:h-4 lg:before:w-full lg:before:bottom-0 lg:before:absolute 

            md:leading-[6rem] md:before:opacity-0 md:before:border-white md:hover:before:opacity-50 md:before:transition-opacity md:before:ease-linear 
            md:before:duration-700 md:before:border-b-[3px]  md:before:h-4 md:before:w-full md:before:bottom-0 md:before:absolute
            
            sm:mb-8 sm:h-5 relative sm:before:border-r-[3px] sm:before:absolute sm:w-full sm:before:size-5 sm:before:opacity-0 
            sm:before:border-white sm:hover:before:opacity-50 sm:before:transition-opacity sm:before:ease-linear sm:before:duration-700 sm:before:right-0"
            >
              <span className="font-semibold ">00 </span> Home
            </a>
          </li>
          <li className="">
            <a
              href="https://tailwindcss.com/docs/box-shadow"
              className="h-full inline-block lg:leading-[6rem] lg:before:opacity-0 lg:before:border-white lg:hover:before:opacity-50 lg:before:transition-opacity lg:before:ease-out 
            lg:before:duration-700 lg:before:border-b-[3px]  lg:before:h-[2px] lg:before:w-[7.1025rem] lg:before:bottom-0 lg:before:absolute 
            
            md:leading-[6rem] md:before:opacity-0 md:before:border-white md:hover:before:opacity-50 md:before:transition-opacity md:before:ease-linear 
            md:before:duration-700 md:before:border-b-[3px]  md:before:h-[2px] md:before:w-[7.1025rem] md:before:bottom-0 md:before:absolute 
            
            sm:mb-8 sm:h-5 sm:relative sm:before:border-r-[3px] sm:before:absolute sm:before:size-5  sm:before:opacity-0 sm:before:border-white
            sm:hover:before:opacity-50 sm:before:transition-opacity sm:w-full sm:before:ease-linear sm:before:duration-700 sm:before:right-0"
            >
              <span className="font-semibold">01</span> Destination
            </a>
          </li>
          <li className=" ">
            <a
              href="#"
              className="h-full inline-block lg:leading-[6rem] lg:before:opacity-0 lg:before:border-white lg:hover:before:opacity-50 lg:before:transition-opacity lg:before:ease-out 
            lg:before:duration-700 lg:before:border-b-[3px]  lg:before:h-4 lg:before:w-[4.18625rem] lg:before:bottom-0 lg:before:absolute 

            md:leading-[6rem] md:before:opacity-0 md:before:border-white md:hover:before:opacity-50 md:before:transition-opacity md:before:ease-linear 
            md:before:duration-700 md:before:border-b-[3px]  md:before:h-4 md:before:w-[4.18625rem] md:before:bottom-0 md:before:absolute 

            sm:mb-8 sm:h-5 sm:relative sm:before:border-r-[3px] sm:before:absolute sm:before:size-5  sm:before:opacity-0 sm:before:border-white
            sm:hover:before:opacity-50 sm:before:transition-opacity sm:w-full sm:before:ease-linear sm:before:duration-700 sm:before:right-0"
            >
              <span className="font-semibold">02</span> Crew
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="h-full inline-block lg:leading-[6rem] lg:before:opacity-0 lg:before:border-white lg:hover:before:opacity-50 lg:before:transition-opacity lg:before:ease-linear 
            lg:before:duration-700 lg:before:border-b-[3px] lg:before:h-4 lg:before:w-full lg:before:bottom-0 lg:before:absolute 

            md:leading-[6rem] md:before:opacity-0 md:before:border-white md:hover:before:opacity-50 md:before:transition-opacity md:before:ease-linear 
            md:before:duration-700 md:before:border-b-[3px] md:before:h-4 md:before:w-full md:before:bottom-0 md:before:absolute 

            sm:h-5 relative sm:before:border-r-[3px] sm:before:absolute sm:before:size-5  sm:before:opacity-0 sm:before:border-white
            sm:hover:before:opacity-50 sm:before:transition-opacity sm:w-full sm:before:ease-linear sm:before:duration-700 sm:before:right-0"
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
