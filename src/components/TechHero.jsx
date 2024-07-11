import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const TechHero = () => {
    const [tech, setTech] = useState([]);
    const [loading, setLoading] = useState(true);
    const maxIdAmnt = 2;
    const activeLink = "border-[1px] bg-white text-black rounded-[50%] flex justify-center items-center md:text-2xl lg:size-[5rem] lg:text-[2rem] md:size-[3.5rem] sm:size-10";
    const normalLink = "border-[1px] border-white/50 rounded-[50%] flex justify-center items-center transition duration-700 hover:border-white md:text-2xl lg:size-[5rem] lg:text-[2rem] md:size-[3.5rem] sm:size-10";
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
    // fetching data and assigning it to tech using tech useState, first time useEffect triggers after the component renders, after that - every time "id" changes. 
    useEffect(()=>{
        const fetchDest = async() => {
            setLoading(true);
            for (let i = 0; i < maxIdAmnt + 1; i++) {
                document.getElementById(i).className = normalLink;
            }
            try {
                const res = await fetch("/api/technology");
                const data = await res.json();
                document.getElementById(id).className = activeLink;
                setTech(data[id]);
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
    <div className="min-h-dvh pt-[100px] lg:pt-[136px] flex flex-col justify-center items-center lg:items-end lg:bg-techLg md:bg-techMd sm:bg-techSm bg-no-repeat bg-cover bg-fixed bg-center">
        <div id="container" className="text-white h-full md:max-w-[840px] lg:w-[88.5%] flex flex-col items-center">
            <div className="font-barlowC uppercase md:p-10 sm:mb-[5.5rem] lg:text-[1.75rem] md:text-xl sm:self-center self-start [letter-spacing:0.15em;]" >
                <h1><span className="text-white/50 mr-4 ">03</span> space launch 101</h1>
            </div>
            <div className="lg:flex lg:h-[734px] lg:items-center lg:flex-row-reverse ">
                <div className="sm:w-full md:hidden sm:h-[258px] lg:w-[50%] flex flex-col lg:items-end items-center relative sm:overflow-hidden" >
                    {loading ? <Spinner loading={loading} /> : (
                    <img className="sm:object-top sm:absolute sm:max-w-[420px] sm:mx-auto sm:bottom-[-50px] lg:w-[600px] lg:h-[600px] sm:object-cover" src={tech.images? tech.images.portrait: null} alt="" />
                    )}
                </div>
                <div className="w-full sm:hidden lg:hidden md:h-[357px] flex flex-col justify-center items-center relative overflow-hidden" >
                    {loading ? <Spinner loading={loading} /> : (
                    <img className="object-top absolute max-w-[768px] mx-auto object-cover" src={tech.images? tech.images.landscape: null} alt="" />
                    )}
                </div>
                <div className="flex flex-col lg:h-[41.4%] lg:w-[50%] md:py-10 items-center sm:p-6">
                    <div className="md:px-[5rem] h-full md:max-w-[780px] flex lg:flex-row items-center flex-col">
                        <div className="sm:max-w-[350px] h-full lg:mr-16 lg:w-fit w-full">
                            <ul className="flex lg:flex-col h-full justify-between md:px-[9.75rem] sm:min-w-[310px] sm:px-[5.4rem]">
                                <li><Link id='0' className="border-[1px] border-white/50 rounded-[50%] flex justify-center items-center transition duration-700 hover:border-white md:text-2xl lg:size-[5rem] lg:text-[2rem] md:size-[3.5rem] sm:size-10 " onClick={() => {setId(0)}}  to="">1</Link></li>
                                <li><Link id='1' className="border-[1px] border-white/50 rounded-[50%] flex justify-center items-center transition duration-700 hover:border-white md:text-2xl lg:size-[5rem] lg:text-[2rem] md:size-[3.5rem] sm:size-10 " onClick={() => {setId(1)}}  to="">2</Link></li>
                                <li><Link id='2' className="border-[1px] border-white/50 rounded-[50%] flex justify-center items-center transition duration-700 hover:border-white md:text-2xl lg:size-[5rem] lg:text-[2rem] md:size-[3.5rem] sm:size-10 " onClick={() => {setId(2)}}  to="">3</Link></li>
                            </ul>
                        </div>
                        <div className=" flex flex-col lg:items-start items-center">
                            <div className='font-bellefair sm:mt-[2.5rem] md:mt-10 md:text-2xl lg:text-[2rem] text-[1.125rem] uppercase text-white/50'>the terminology...</div>
                            <div className="font-bellefair sm:mt-4 sm:text-2xl md:my-4 lg:text-[3.5rem] md:text-[2.5rem] uppercase" >{tech.name}</div>
                            <div className="sm:text-[0.9375rem] sm:mt-4 lg:text-[1.125rem] lg:text-left leading-8 font-barlow text-center text-lightBlue">{tech.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechHero