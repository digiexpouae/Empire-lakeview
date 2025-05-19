import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";
import Image from "next/image";




const section_two = ({amenities,textpara,className}) => {

const ref1=useRef()
const ref2=useRef()
const ref3=useRef()
useEffect(()=>{
  
  // if (typeof  !== "undefined") {
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:h-[654px] flex items-center justify-center w-[80vw] scrollbar-hide ">
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
          <div className="grid  lg:grid-cols-4 grid-cols-2 gap-8 lg:gap-40 mt-8 lg:mt-20" ref={ref3}>
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className=" flex flex-col  justify-center p-2 bg-white  rounded animate-fade-up-delayed h-[120px] w-[120px] md:h-[150px] md:w-[150px] gap-[5px] md:gap-[10px] "
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                    <p className="text-[14px] md:text-[18px]">{amenity.text}</p>
{index === 0 || index === 1 ? (
  <p className=" text-[23px] md:text-[28px] my-heading text-center leading-9 text-black font-bold my-heading md:w-[120px]">
    {amenity.title}
  </p>
) : (
<div className='w-full'>
  <Image width={100} height={100} src={amenity.im} alt="Amenity image" className={`${className}} object-cover bg-no-repeat`}/></div>
)}
                  
                    <span className="text-[10px] text-black">{amenity.text2}</span>
               
                 
                </div>
              ))}
            </div>
          {/* Right side - Project description and amenities */}
         
        </div>
        <div className=" md:w-[50%] lg:w-[60%]"> <div className="md:p-6 sm:p-8 lg:p-0 flex flex-col items-start lg:h-[280px] gap-4" ref={ref2}>
            
            <p 
              className="text-[18px] lg:text-[22px] animate-fade-up text-white leading-5 my-heading md:leading-7 font-light"
            >
            {textpara}
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