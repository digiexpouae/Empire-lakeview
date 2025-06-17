import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";



const section_two = ({amenities,textpara,className,btn}) => {

const ref1=useRef()
const ref2=useRef()
const ref3=useRef()
const {ref, inView}=useInView({
  triggerOnce:true,
  threshold:0.4
})

useEffect(()=>{

  
  // if (typeof  !== "undefined") {
  //   const { ScrollTrigger } = require('gsap/ScrollTrigger');
  //   gsap.registerPlugin(ScrollTrigger);

  // }
  if(inView){
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
const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.fromTo(
  ".element",
  { opacity: 0, y: 200 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: {
      each: 1.4,
      ease: "power1.out"
    }
  }
);
}

},[inView])
return (<>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:h-[700px] flex flex-col items-center justify-center w-[80vw] scrollbar-hide " ref={ref}>
      <div className=" w-full md:flex md:flex-row flex flex-col gap-[40px] lg:gap-[80px]">
        <div className="flex flex-col md:w-[50%] lg:w-[40%] xl:gap-0 lg:gap-[45px] ">
          {/* Left side - Project title */}
          <div 
            className="w-full  text-black p-x-8 flex  md:items-start items-center justify-center xl:h-[280px] animate-slide-left opacity-0"
         ref={ref1} >
            <h2 className="text-[30px] lg:text-[100px] sm:text-5xl my-heading font-bold tracking-tighter text-white">
              Project Overview
            </h2>
          </div>
      
          {/* Right side - Project description and amenities */}
         
        </div>
        <div className=" md:w-[50%] lg:w-[60%]"> <div className="md:p-6 sm:p-8 lg:p-0 flex flex-col items-start lg:h-[280px] gap-4  opacity-0" ref={ref2}>
            
            <p 
              className= " text-[12px] md:text-[14px] lg:text-[22px] animate-fade-up text-white leading-5 my-heading md:leading-7 font-light"
            >
            {textpara}
            </p>
          { btn && <button className="
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300  transform text-sm lg:text-base whitespace-nowrap">Download Floor Plan</button>
          } 
            {/* Amenities section */}
          
          </div>

       </div>

      </div>
      <div className="w-full flex items-start justify-start  ">
       <div className={`grid ${btn? 'lg:grid-cols-4 grid-cols-2 ':'md:grid-cols-4 grid-cols-2'} lg:grid-cols-4 grid-cols-2 gap-8 lg:gap-10 mt-8 lg:mt-20 ${btn? 'w-[60%]':'md:w-[100%] w-[100%] xl:w-[80%] opacity-0'}`} ref={ref3}>
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className=" flex flex-col items-start  justify-center p-2 bg-white  rounded-[13px] animate-fade-up-delayed h-[130px] w-[130px] md:h-[150px] md:w-[140px] lg:h-[180px] lg:w-[180px] gap-[5px] md:gap-[10px] element"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                    <p className="text-[14px] md:text-[18px]">{amenity.text}</p>
{index === 0 || index === 1 ? (
  <p className=" text-[23px] md:text-[28px] my-heading  leading-9 text-black font-bold my-heading md:w-[120px]">
    {amenity.title}
  </p>
) : (
  <div
    className={`relative w-full aspect-[4/3] overflow-hidden ${className}`}
  >
  <Image fill src={amenity.im} alt="Amenity image" className={` object-contain !w-[75%]`}/></div>
)}
                  
                    <span className="text-[10px] text-black">{amenity.text2}</span>
               
                 
                </div>
              ))}
            </div>
</div>

    </div>
    <div className="flex items-center justify-center w-full">
          <hr className="border border-white mt-8 w-[80vw] " /></div></>

  );
};

export default section_two;