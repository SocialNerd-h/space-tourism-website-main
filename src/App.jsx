import logo from "../starter-code/assets/shared/logo.svg";
import exit from "../starter-code/assets/shared/icon-close.svg";
import menu from "../starter-code/assets/shared/icon-hamburger.svg";
import { useState } from "react";

/* поменять цвет бордера при ховере на более светлый
добавить бордер при ховере в нав в tablet and desktop design
"explore" button hover state all designs
add line :before nav
 */

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="h-lvh minHeight:h-fit lg:bg-homeLg md:bg-homeMd sm:bg-homeSm bg-cover bg-center">
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
          className={` lg:w-[51%]  lg:h-24 md:w-5/6 md:h-24 bg-white/5 backdrop-blur font-barlowC ${isOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0 lg:translate-x-0 sm:fixed sm:z-50 sm:top-0 sm:pt-8 sm:right-0 sm:w-8/12 sm:bg-veryDarkNavy sm:bg-opacity-50 sm:backdrop-blur sm:h-dvh `}
        >
          <img
            src={exit}
            onClick={() => setOpen(!isOpen)}
            alt="close button"
            id="close-btn"
            className="h-5 md:hidden lg:hidden sm:visible fixed right-0 mr-8 cursor-pointer"
          />
          <ul className="md:flex lg:flex ml-[9.9375rem] mr-16 lg:h-24 sm:font-normal font-light md:h-24 lg:items-center lg:justify-between md:items-center md:justify-between md:pl-[5.4375rem] md:pr-10 text-white sm:pt-28 sm:ml-8 uppercase tracking-widest [word-spacing:0.5rem]">
            <li
              className={`sm:mb-8 sm:border-r-[3px] sm:h-5 sm:relative sm:before:border-r-[3px] sm:before:absolute sm:before:size-5  sm:before:opacity-0 sm:before:border-gray-500 sm:hover:before:opacity-100 sm:before:transition-opacity sm:before:ease-linear sm:before:duration-500 sm:before:right-0`}
            >
              <a href="#" className=" ">
                <span className="font-semibold ">00 </span> Home
              </a>
            </li>
            <li className="sm:mb-8  sm:h-5 sm:relative sm:before:border-r-[3px] sm:before:absolute sm:before:size-5  sm:before:opacity-0 sm:before:border-gray-500 sm:hover:before:opacity-100 sm:before:transition-opacity sm:before:ease-linear sm:before:duration-500 sm:before:right-0">
              <a href="#">
                <span className="font-semibold">01</span> Destination
              </a>
            </li>
            <li className="sm:mb-8 sm:h-5 sm:relative sm:before:border-r-[3px] sm:before:absolute sm:before:size-5  sm:before:opacity-0 sm:before:border-gray-500 sm:hover:before:opacity-100 sm:before:transition-opacity sm:before:ease-linear sm:before:duration-500 sm:before:right-0">
              <a href="#">
                <span className="font-semibold">02</span> Crew
              </a>
            </li>
            <li className="h-5 relative before:border-r-[3px] before:absolute before:size-5  before:opacity-0 before:border-gray-500 hover:before:opacity-100 before:transition-opacity before:ease-linear before:duration-500 before:right-0">
              <a href="#">
                <span className="font-semibold ">03 </span> Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="text-white flex sm:flex-col md:flex-col sm:mx-5 items-center sm:mt-7 md:mx-32 ">
        <div className="flex flex-col items-center md:mt-[7.5rem] lg:mt-[7.5rem]">
          <div className="font-barlowC uppercase md:text-[1.75rem] md:[word-spacing:0.4rem] md:tracking-widest text-lightBlue">
            So, you want to travel to
          </div>
          <div className="md:text-[9rem] sm:mt-10sm: sm:mb-14 font-bellefair  uppercase sm:text-[5rem]">
            Space
          </div>
          <p className="font-barlow text-lightBlue sm:text-[0.9375rem] text-center leading-relaxed sm:tracking-wide">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="sm:mt-[4.46875rem] md:mt-[4.125rem] font-bellefair text-lg uppercase bg-white text-veryDarkNavy rounded-full sm:size-36 md:size-[17rem] md:text-[2rem]">
          Explore
        </button>
      </div>
    </div>
  );
};

export default App;
