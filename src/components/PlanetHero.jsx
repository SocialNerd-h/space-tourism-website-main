import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const PlanetHero = () => {

    const activeLink = "h-full inline-block border-b-[3px] border-white text-white";
    const normalLink = "h-full inline-block transition duration-700 border-b-[3px] border-white/0 hover:border-white/50";

    const [destination, setDestination] = useState([]);
    const [loading, setLoading] = useState(true);

    // hardcoded moment, but can't figure out a better solution
    const maxIdAmnt = 3;


    // checking is there a local stored id, if not, setting it to zero (first element Moon)
    const getInitialId = () => {
        const id = localStorage.getItem("id");
        return id ? JSON.parse(id) : 0;
    };
    // id useState is under getinitialId, otherwise we get an error
    const [id, setId] = useState(getInitialId);
    //add current id state to local storage
    useEffect(() => {
        localStorage.setItem("id", JSON.stringify(id));
    }, [id]);
    // fetching data and assigning it to destination using destination useState, first time useEffect triggers after the component renders, after that - every time "id" changes. 
    useEffect(()=>{
        document.getElementById(id).className = normalLink;
        const fetchDest = async() => {
            setLoading(true);
            for (let i = 0; i < maxIdAmnt + 1; i++) {
                document.getElementById(i).className = normalLink;
            }

            try {
                const res = await fetch("/api/destinations");
                const data = await res.json();
                setDestination(data[id]);

                document.getElementById(id).className = activeLink;
                console.log(id)
            } catch (error) {
                console.log("Error fetching data", error)
                document.getElementById("container").className = "md:min-h-[90lvh] sm:min-h-[90lvh] lg:min-h-[90lvh] text-white sm:w-[327px] lg:w-[1440px] md:p-[2.5rem] lg:mx-auto sm:mx-auto  md:max-w-[1220px] md:mx-auto lg:py-[2.5rem] lg:px-[10.3125rem] flex flex-col items-center "

            } finally {
                setLoading(false);
            }
        }     
        fetchDest();

    }, [id]);


  return (
    <div className="min-h-dvh pt-[100px] lg:pt-[136px] flex flex-col justify-center lg:bg-destinationLg md:bg-destinationMd sm:bg-destinationSm bg-no-repeat bg-cover bg-fixed bg-center">
        <div id="container" className="text-white sm:w-[327px] lg:w-[1440px] lg:h-[45.875rem] lg:mx-auto sm:mx-auto md:p-[2.5rem] md:max-w-[1220px] md:mx-auto lg:py-[2.5rem] lg:px-[10.3125rem] flex flex-col items-center">
            <div className="font-barlowC uppercase lg:text-[1.75rem] md:text-xl self-start sm:self-center [letter-spacing:0.15em;]" >
                <h1><span className="text-white/50 mr-4 ">01</span> pick your destination</h1>
            </div>
            <div className="sm:w-full lg:mt-[9.4375rem] lg:minHeight:mt-28 lg:flex">
                <div className="sm:mt-12 md:mt-[4.125rem] lg:w-[50%] flex justify-center">

                {loading ? <Spinner loading={loading} /> : (
                    <img className="sm:size-[9.375rem] md:size-[18.75rem] lg:size-[30rem]" src={destination.images? destination.images.png : null} alt="" />
                    )}
                            
                </div>
                <div className="flex flex-col lg:px-12 lg:ml-8 sm:mt-12 md:mt-[4.125rem] md:min-w-[32.125rem] lg:text-left md:px-32 lg:w-[50%] items-center lg:items-start max-w-3xl">
                    <div className="w-full md:max-w-[21rem] font-barlowC sm:text-sm lg:pr-[11.5rem] uppercase tracking-widest text-lightBlue">
                        <ul className="flex flex-row h-[2.25rem] sm:px-10 justify-between">
                            <li><Link id="0" className={normalLink} onClick={() => {setId(0)}}  to="">Moon</Link></li>
                            <li><Link id="1" className={normalLink} onClick={() => {setId(1)}}  to="">Mars</Link></li>
                            <li><Link id="2" className={normalLink} onClick={() => {setId(2)}}  to="">Europa</Link></li>
                            <li><Link id="3" className={normalLink} onClick={() => {setId(3)}}  to="">Titan</Link></li>
                        </ul>
                    </div>
                    <div className="font-bellefair text sm:text-[3.5rem] lg:text-8xl md:text-[5rem] uppercase" >{destination.name}</div>
                    <div className="sm:text-[0.9375rem] lg:pb-10 lg:text-[1.125rem] lg:leading-8 pb-6 border-b-[1px] border-white/50 sm:mt-4 font-barlow text-center lg:text-left text-lightBlue">{destination.description}</div>
                    <div className="flex w-full lg:mt-10 md:mt-6 justify-between sm:flex-col  md:item sm:pt-6 sm:text-[1.5rem] sm:text-center uppercase font-bellefair">
                        <div className="flex md:w-[50%] lg:w-[50%] flex-col md:items-center text-[1.75rem]"><span className="font-barlowC text-sm text-lightBlue">avg. distance</span> {destination.distance} </div>
                        <div className="flex md:w-[50%] lg:w-[50%] flex-col md:items-center text-[1.75rem] sm:pt-6"><span className="font-barlowC text-sm text-lightBlue">est. travel time</span>{destination.travel}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlanetHero