import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const CrewHero = () => {
    const [crew, setCrew] = useState([]);
    const [loading, setLoading] = useState(true);
    const maxIdAmnt = 3;
    const activeLink = "size-[10px] rounded-[50%] lg:size-[15px] inline-block bg-white";
    const normalLink = "size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50";

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
    // fetching data and assigning it to crew using crew useState, first time useEffect triggers after the component renders, after that - every time "id" changes. 
    useEffect(()=>{
        const fetchDest = async() => {
            setLoading(true);
            for (let i = 0; i < maxIdAmnt + 1; i++) {
                document.getElementById(i).className = normalLink;
            }
            try {
                const res = await fetch("/api/crew");
                const data = await res.json();
                setCrew(data[id]);
                document.getElementById(id).className = activeLink;
            } catch (error) {
                console.log("Error fetching data", error)
             document.getElementById("container").className = "md:min-h-[90lvh] sm:min-h-[90lvh] lg:min-h-[90lvh] text-white sm:w-[327px] lg:w-[1440px] lg:h-[45.875rem] lg:mx-auto sm:mx-auto sm:py-6 md:p-[2.5rem] md:max-w-[1220px] md:mx-auto lg:py-[2.5rem] lg:px-[10.3125rem] flex flex-col items-center"

            } finally {
                setLoading(false);
            }
        }     
        fetchDest();

    }, [id]);

  return (
    <div className="min-h-dvh pt-[100px] lg:pt-[136px] flex flex-col justify-center items-center lg:bg-crewLg md:bg-crewMd sm:bg-crewSm bg-no-repeat bg-cover bg-fixed bg-center">
        <div id="container" className="text-white sm:w-[327px] lg:w-[1440px] md:max-w-[840px]  sm:mx-auto sm:py-6 md:px-[2.5rem] lg:py-[2.5rem] lg:px-[10.3125rem] flex flex-col items-center">
            <div className="font-barlowC uppercase md:p-10 lg:text-[1.75rem] md:text-xl sm:self-center self-start [letter-spacing:0.15em;]" >
                <h1><span className="text-white/50 mr-4 ">02</span> meet your crew</h1>
            </div>
            <div className="sm:w-full md:flex md:flex-col lg:flex ">
                <div className="flex flex-col sm:mt-16 md:mt-[4.125rem] md:max-w-[32.125rem] lg:w-[50%] lg:mt-32 lg:items-start items-center justify-center">
                    <div className='font-bellefair sm:text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] uppercase text-white/50' >{crew.role}</div>
                    <div className="font-bellefair text sm:text-2xl lg:text-[3.5rem] md:text-[2.5rem] uppercase" >{crew.name}</div>
                    <div className="sm:text-[0.9375rem] lg:pb-10 lg:text-[1.125rem] md:pb-10 sm:pb-[5.3rem] leading-8 mt-6 font-barlow text-center lg:text-left text-lightBlue">{crew.bio}</div>
                    <div className="w-full font-barlowC sm:text-sm lg:pr-[23.4rem] md:pb-6 lg:mt-[10rem]  uppercase tracking-widest text-lightBlue">
                        <ul className="flex flex-row lg:w-[11.25rem] md:px-[13.25rem] h-[2.25rem] sm:px-[7.5rem]  justify-between">
                            <li><Link id="0" className="size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50" onClick={() => {setId(0)}}  to=""></Link></li>
                            <li><Link id="1" className="size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50" onClick={() => {setId(1)}}  to=""></Link></li>
                            <li><Link id="2" className="size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50" onClick={() => {setId(2)}}  to=""></Link></li>
                            <li><Link id="3" className="size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50" onClick={() => {setId(3)}}  to=""></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="sm:mt-[2rem] lg:w-[50%] md:h-[500px] overflow-hidden flex justify-center items-center relative sm:before:absolute sm:before:w-full sm:before:h-[70px] sm:before:bottom-0 
                sm:before:bg-gradient-to-t from-[#0B0D17] to-[rgb(217,217,217)]/0 lg:before:absolute lg:before:w-full lg:before:h-[70px] lg:before:bottom-0 lg:before:bg-gradient-to-t">
                    {loading ? <Spinner loading={loading} /> : (
                    <img className="self-center md:self-start sm:h-[340px] md:h-[35rem] " src={crew.images? crew.images.png : null} alt="" />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CrewHero