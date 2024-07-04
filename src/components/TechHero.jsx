import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const TechHero = () => {
    const [crew, setCrew] = useState([]);
    const [loading, setLoading] = useState(true);
    const activeLink = "border-[1px] bg-white text-black rounded-[50%] flex justify-center items-center size-10";

    // checking is there a local stored id, if not, setting it to zero (first element Moon)
    const getInitialId = () => {
        const id = localStorage.getItem("id");
        return id < 3 ? JSON.parse(id) : 0;
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
                const res = await fetch("http://localhost:8000/technology");
            const data = await res.json();
            document.getElementById(id).className = activeLink;
            setCrew(data[id]);
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
    <div id="container" className="text-white flex flex-col items-center">
        <div className="font-barlowC uppercase lg:text-[1.75rem] md:text-xl sm:self-center self-start [letter-spacing:0.15em;]" >
            <h1><span className="text-white/50 mr-4 ">03</span> space launch 101</h1>
        </div>
        <div className=" ">
            <div className="w-full sm:h-[258px] flex flex-col items-center relative overflow-hidden" >
                {loading ? <Spinner loading={loading} /> : (
                <img className="object-top absolute max-w-[420px] mx-auto bottom-[-50px] object-cover" src={crew.images? crew.images.portrait: null} alt="" />
                )}
            </div>
            <div className="flex flex-col items-center p-6">
                <div className="max-w-[350px] w-full">
                    <ul className="flex justify-between px-[5.4rem]">
                        <li><a id='0' className="border-[1px] border-white/50 rounded-[50%] flex justify-center items-center transition duration-700 hover:border-white size-10 " onClick={() => {setId(0)}}  href="">1</a></li>
                        <li><a id='1' className="border-[1px] border-white/50 rounded-[50%] flex justify-center items-center transition duration-700 hover:border-white size-10 " onClick={() => {setId(1)}}  href="">2</a></li>
                        <li><a id='2' className="border-[1px] border-white/50 rounded-[50%] flex justify-center items-center transition duration-700 hover:border-white size-10 " onClick={() => {setId(2)}}  href="">3</a></li>
                    </ul>
                </div>
                <div className='font-bellefair text-[1.125rem] uppercase text-white/50'>the terminology...</div>
                <div className="font-bellefair text sm:text-2xl lg:text-[2.5rem] md:text-[2.5rem] uppercase" >{crew.name}</div>
                <div className="sm:text-[0.9375rem] lg:text-[1.125rem] leading-8 font-barlow text-center text-lightBlue">{crew.description}</div>
            </div>
        </div>
    </div>
  )
}

export default TechHero