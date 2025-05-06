import React, { useEffect, useRef } from "react";
// import { OutdoorCinemaIcon } from "./icons/OutdoorCinemaIcon";
// import { SteamSaunaIcon } from "./icons/SteamSaunaIcon";
// import { GamingArcadeIcon } from "./icons/GamingArcadeIcon";
// import { MiniGolfIcon } from "./icons/MiniGolfIcon";
// import { OtherFeaturesIcon } from "./icons/OtherFeaturesIcon";
import {gsap} from "gsap";


import Image from "next/image";

const section_two = () => {
  const amenities = [
    {
      icon:'/assets/Mask group (4).png' ,
      title: "Steam & Sauna",
    },
    {
      icon:'/assets/Mask group (5).png',
      title: "Outdoor Cinema ",
    },
    {
        icon:'/assets/Mask group (3).png',
      title: "Gaming Arcade",
    },
    {
      icon: '/assets/Mask group (2).png',
      title: "Mini Golf Course",
    },
    {
        icon: '/assets/Mask group (6).png',
      title: "And Other Features",
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:h-[554px] flex items-center justify-center w-[80vw] ">
      <div className=" w-full md:flex">
        <div className="flex flex-col md:w-[50%] ">
          {/* Left side - Project title */}
          <div 
            className="w-full  text-black p-x-8 flex items-start justify-center xl:h-[280px] animate-slide-left"
         ref={ref1} >
            <h2 className="text-4xl lg:text-[70px] sm:text-5xl font-bold text-white">
              Project Overview
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 xl:mt-0" ref={ref3}>
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="text-center flex flex-col items-center justify-center animate-fade-up-delayed h-[100px] gap-[10px] "
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
          <Image src={amenity.icon}  width={50} height={50}/>
               
                  <p className="text-xs sm:text-sm font-medium text-center text-white my-heading">
                    {amenity.title}
                  </p>
                 
                </div>
              ))}
            </div>
          {/* Right side - Project description and amenities */}
         
        </div>
        <div className="md:w-[50%]"> <div className="p-6 sm:p-8 flex flex-col justify-between xl:h-[280px]  gap-10" ref={ref2}>
            
            <p 
              className="text-sm sm:text-base animate-fade-up text-white"
            >
              Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan, 
              Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom 
              apartments, & 3-bedroom duplexes, with many units featuring private pools.
            </p>
            <button className="
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#FFF3DC] text-gray-800 w-[220px] lg:px-6 py-2 rounded-full transition-colors duration-300 transform text-sm lg:text-base whitespace-nowrap">Download Floor Plan</button>
            
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