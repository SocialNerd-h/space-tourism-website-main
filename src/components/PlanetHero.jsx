import { useEffect, useState } from "react"

const PlanetHero = () => {
  return (
    <div className="text-white sm:w-[327px] sm:mx-auto flex sm:flex-col sm:items-center">
        <div className="font-barlowC uppercase [letter-spacing:0.15em;]" >
            <h1><span className="text-white/50 mr-4">01</span> pick your destination</h1>
        </div>
        <div className="sm:w-full">
            <div className="sm:mt-12 sm:flex sm:justify-center">
                <img className="sm:size-[9.375rem] " src="./starter-code/assets/destination/image-moon.png" alt="moon" />
            </div>
            <div className="flex flex-col sm:mt-12 items-center">
                <div className="sm:w-full font-barlowC sm:text-sm uppercase tracking-widest">
                    <ul className="flex sm:flex-row sm:h-8 sm:px-10 sm:justify-between">
                        <li><a className="sm:h-full sm:inline-block sm:transition sm:duration-700 sm:border-b-[3px] sm:border-white/0 sm:hover:border-white/50" href="#">Moon</a></li>
                        <li><a className="sm:h-full sm:inline-block sm:transition sm:duration-700 sm:border-b-[3px] sm:border-white/0 sm:hover:border-white/50" href="#">Mars</a></li>
                        <li><a className="sm:h-full sm:inline-block sm:transition sm:duration-700 sm:border-b-[3px] sm:border-white/0 sm:hover:border-white/50" href="#">Europa</a></li>
                        <li><a className="sm:h-full sm:inline-block sm:transition sm:duration-700 sm:border-b-[3px] sm:border-white/0 sm:hover:border-white/50" href="#">Titan</a></li>
                    </ul>
                </div>
                <div className="font-bellefair sm:text-[3.5rem] uppercase" >Moon</div>
                <div className="sm:text-[0.9375rem] sm:pb-6 sm:border-b-[1px] sm:border-white/50 sm:mt-4 font-barlow sm:text-center text-lightBlue">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus provident recusandae nam saepe distinctio laboriosam repellendus possimus aliquam vel autem ratione iusto eveniet quod inventore dolorum consequatur, officiis enim.</div>
                <div className="flex flex-col sm:pt-6 sm:text-[1.5rem] sm:text-center uppercase font-bellefair">
                    <div className="flex flex-col"><span className="font-barlowC text-sm text-lightBlue">avg. distance</span> 384,000 km </div>
                    <div className="flex flex-col sm:pt-6"><span className="font-barlowC text-sm text-lightBlue">est. travel time</span>3 days</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlanetHero