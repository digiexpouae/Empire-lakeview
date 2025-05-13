import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";
import golf from '../../../public/assets/animation/Golf Club.json'
import joy from '../../../public/assets/animation/Joystick (1).json'
import other from '../../../public/assets/animation/Other (1).json'
import spa from '../../../public/assets/animation/Spa Relaxation.json'
import video from '../../../public/assets/animation/Video Camera.json'


const Lottie = dynamic(()=> import ('lottie-react'),{ssr:false} );




const section_two = () => {
  const amenities = [
    {
      icon:spa,
      title: "Steam & Sauna",
      h:50,
      w:50
    },
    {
      icon:video,
      title: "Outdoor Cinema ",
      h:50,
w:50
    },
    {
        icon:joy,
      title: "Gaming Arcade",
      h:50,
w:50
    },
    {
      icon: golf,
      title: "Mini Golf Course",
      h:50,
w:50
    },
    {
        icon:other,
      title: "And Other Features",
      h:20,
w:20
    },
  ];
const ref1=useRef()
const ref2=useRef()
const ref3=useRef()
useEffect(()=>{
  
  // if (typeof window !== "undefined") {
  //   const { ScrollTrigger } = require('gsap/ScrollTrigger');
  //   gsap.registerPlugin(ScrollTrigger);

  // }
  
   gsap.fromTo(
            ref1.current,
            { x:-200, opacity: 0 },   // start from translateX(-430px)
            { x: 0, opacity: 1, duration: 2, delay: 1, ease: "power2.out" }
        )   
,   gsap.fromTo(
  ref2.current,
  { y:200, opacity: 0 },   // start from translateX(-430px)
  { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" } // animate to final position
) ,   gsap.fromTo(
  ref3.current,
  { y:200, opacity: 0, },   // start from translateX(-430px)
  { y: 0, opacity: 1, duration: 2, delay: 2 } // animate to final position
)     
},[])
return (<>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:h-[554px] flex items-center justify-center w-[80vw] ">
      <div className=" w-full md:flex md:flex-row flex flex-col gap-[40px] lg:gap-[80px]">
        <div className="flex flex-col md:w-[50%] lg:w-[40%] xl:gap-0 lg:gap-[45px] ">
          {/* Left side - Project title */}
          <div 
            className="w-full  text-black p-x-8 flex  md:items-start items-center justify-center xl:h-[280px] animate-slide-left"
         ref={ref1} >
            <h2 className="text-[30px] lg:text-[100px] sm:text-5xl my-heading font-bold tracking-tighter text-white">
              Project Overview
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 lg:gap-36  mt-8 lg:mt-20" ref={ref3}>
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="text-center flex flex-col items-center justify-center animate-fade-up-delayed h-[100px] gap-[10px] "
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
<Lottie animationData={amenity.icon} loop={true}  className= 'lg:h-[60px] lg:w-[60px] w-[50px] h-[50px]'/>               
                  <p className=" text-[20px] font-light text-center text-white my-heading md:w-[120px]">
                    {amenity.title}
                  </p>
                 
                </div>
              ))}
            </div>
          {/* Right side - Project description and amenities */}
         
        </div>
        <div className=" md:w-[50%] lg:w-[60%]"> <div className="md:p-6 sm:p-8 lg:p-0 flex flex-col items-start lg:h-[280px] gap-4" ref={ref2}>
            
            <p 
              className="text-[18px] lg:text-[22px] animate-fade-up text-white leading-5 my-heading md:leading-7 font-light"
            >
              Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan, 
              Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom 
              apartments, & 3-bedroom duplexes, with many units featuring private pools.
            </p>
            <button className="
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300  transform text-sm lg:text-base whitespace-nowrap">Download Floor Plan</button>
            
            {/* Amenities section */}
          
          </div>

       </div>

      </div>


    </div>
    <div className="flex items-center justify-center w-full">
          <hr className="border border-white mt-8 w-[80vw] " /></div></>

  );
};

export default section_two;