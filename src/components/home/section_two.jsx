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
      icon:'/assets/video ame.png' ,
      title: "Outdoor Cinema",
    },
    {
      icon:'/assets/Layer_1 (8).png',
      title: "Steam & Sauna",
    },
    {
        icon:'/assets/joy.png',
      title: "Gaming Arcade",
    },
    {
      icon: '/assets/golf.png',
      title: "Mini Golf Course",
    },
    {
        icon: '/assets/puzzle.png',
      title: "And Other Features",
    },
  ];
const ref1=useRef()
const ref2=useRef()
const ref3=useRef()
useEffect(()=>{
   gsap.fromTo(
            ref1.current,
            { x:-200, opacity: 0 },   // start from translateX(-430px)
            { x: 0, opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to final position
        )   
,   gsap.fromTo(
  ref2.current,
  { y:200, opacity: 0 },   // start from translateX(-430px)
  { y: 0, opacity: 1, duration: 2, delay: 1, ease: "power2.out" } // animate to final position
) ,   gsap.fromTo(
  ref3.current,
  { y:200, opacity: 0, },   // start from translateX(-430px)
  { y: 0, opacity: 1, duration: 2, delay: 2, ease: "power2.out" } // animate to final position
)     
},[])
return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div >
        <div className="flex flex-col xl:flex-row">
          {/* Left side - Project title */}
          <div 
            className="w-full xl:w-2/5  text-black p-x-8 flex items-start justify-center xl:h-[280px] animate-slide-left"
         ref={ref1} >
            <h2 className="text-4xl lg:text-[70px] sm:text-5xl font-bold">
              Project Overview
            </h2>
          </div>
          
          {/* Right side - Project description and amenities */}
          <div className="w-full xl:w-3/5 p-6 sm:p-8 flex flex-col justify-between xl:h-[280px]" ref={ref2}>
            <p 
              className="text-sm sm:text-base animate-fade-up"
            >
              Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan, 
              Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom 
              apartments, & 3-bedroom duplexes, with many units featuring private pools.
            </p>
            
            {/* Amenities section */}
          
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 xl:mt-0" ref={ref3}>
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="text-center flex flex-col items-center justify-center animate-fade-up-delayed h-[100px] bg-[#FAFCFF]"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
          <Image src={amenity.icon}  width={50} height={50}/>
               
                  <p className="text-xs sm:text-sm font-medium text-center my-heading">
                    {amenity.title}
                  </p>
                </div>
              ))}
            </div>
      </div>
    </div>
  );
};

export default section_two;