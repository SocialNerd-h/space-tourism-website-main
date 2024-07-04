import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const CrewHero = () => {
    const [crew, setCrew] = useState([]);
    const [loading, setLoading] = useState(true);
    const activeLink = "size-[10px] rounded-[50%] lg:size-[15px] inline-block bg-white";

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
            try {
                const res = await fetch("http://localhost:8000/crew");
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
    <div className="h-dvh pt-[100px] lg:pt-[136px] overflow-auto flex flex-col lg:bg-crewLg md:bg-crewMd sm:bg-crewSm bg-no-repeat bg-cover bg-fixed bg-center">
        <div id="container" className="text-white relative sm:w-[327px] lg:w-[1440px]  lg:mx-auto sm:mx-auto sm:py-6 md:p-[2.5rem] md:max-w-[1220px] md:mx-auto lg:py-[2.5rem] lg:px-[10.3125rem] flex flex-col items-center">
            <div className="font-barlowC uppercase lg:text-[1.75rem] md:text-xl sm:self-center self-start [letter-spacing:0.15em;]" >
                <h1><span className="text-white/50 mr-4 ">02</span> meet your crew</h1>
            </div>
            <div className="sm:w-full  lg:mt-8 lg:flex ">
                <div className="flex flex-col sm:mt-16 md:mt-[4.125rem] md:max-w-[32.125rem] lg:w-[50%] lg:mt-32 items-start justify-center">
                    <div className='font-bellefair sm:text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] uppercase text-white/50' >{crew.role}</div>
                    <div className="font-bellefair text sm:text-2xl lg:text-[2.5rem] md:text-[2.5rem] uppercase" >{crew.name}</div>
                    <div className="sm:text-[0.9375rem] lg:pb-10 lg:text-[1.125rem] pb-[5.3rem] leading-8 mt-6 font-barlow text-center lg:text-left text-lightBlue">{crew.bio}</div>
                    <div className="w-full font-barlowC sm:text-sm lg:pr-[23.4rem] lg:mt-[14.8rem]  uppercase tracking-widest text-lightBlue">
                        <ul className="flex flex-row lg:w-[11.25rem] md:px-[13.25rem] h-[2.25rem] sm:px-[7.5rem]  justify-between">
                            <li><a id="0" className="size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50" onClick={() => {setId(0)}}  href=""></a></li>
                            <li><a id="1" className="size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50" onClick={() => {setId(1)}}  href=""></a></li>
                            <li><a id="2" className="size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50" onClick={() => {setId(2)}}  href=""></a></li>
                            <li><a id="3" className="size-[10px] rounded-[50%] lg:size-[15px] inline-block transition duration-700 bg-white/20 hover:bg-white/50" onClick={() => {setId(3)}}  href=""></a></li>
                        </ul>
                    </div>
                </div>
                <div className="md:mt-4 sm:mt-[2rem] md:overflow-hidden flex justify-center relative before:absolute before:w-full before:h-[70px] before:bottom-0 before:bg-gradient-to-t
                    from-[#0B0D17] to-[rgb(217,217,217)]/0">
                    {loading ? <Spinner loading={loading} /> : (
                    <img className=" sm:h-[340px]  md:h-[35rem] " src={crew.images? crew.images.png : null} alt="" />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CrewHero