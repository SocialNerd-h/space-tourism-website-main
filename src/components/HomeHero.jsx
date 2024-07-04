import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="h-dvh pt-[100px] lg:pt-[136px] overflow-auto flex flex-col lg:bg-homeLg md:bg-homeMd sm:bg-homeSm bg-no-repeat bg-cover bg-fixed bg-center">
      <div className="text-white lg:mx-auto lg:my-auto lg:h-[39.5rem] lg:w-[69.375rem] lg:justify-between flex sm:flex-col md:flex-col sm:mx-5 items-center sm:mt-7 md:mx-32 ">
          <div className="flex flex-col lg:items-start lg:w-[50%] items-center md:mt-[7.5rem] ">
            <div className="font-barlowC lg:text-[2rem] uppercase md:text-[1.75rem] md:[word-spacing:0.4rem] md:tracking-widest text-lightBlue">
              So, you want to travel to
            </div>
            <div className="text-[9rem] sm:mt-10sm: sm:mb-14 font-bellefair  uppercase sm:text-[5rem]">
              Space
            </div>
            <p className="font-barlow lg:text-[1.125rem] text-lightBlue sm:text-[0.9375rem] lg:text-left lg:leading-relaxed text-center leading-relaxed sm:tracking-wide">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this
              world experience!
            </p>
          </div>
            <Link className=" flex justify-center items-center sm:mt-[4.46875rem] outline outline-white/0 duration-700 hover:outline-white/10 outline-[87px]
            md:mt-[4.125rem] font-bellefair sm:text-lg text-[2rem] uppercase bg-white text-veryDarkNavy rounded-full sm:size-36 size-[17rem]
          md:text-[2rem] md:minHeightTablet:mb-[87px] sm:minHeightMobile:mb-[87px]" to="/destination">Explore</Link>
        </div>
    </div>
  )
}

export default HomeHero;