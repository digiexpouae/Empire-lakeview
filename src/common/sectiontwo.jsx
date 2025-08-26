import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";



const section_two = ({amenities,textpara,className,btn,className1,classNamemain,classNameproject}) => {

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
    <div className={`max-w-6xl mx-auto  sm:px-6 py-16 flex flex-col items-center justify-between w-[80vw] md:w-[90vw] lg:w-[80vw] scrollbar-hide ${classNamemain}`} ref={ref}>
      <div className={` w-full md:flex lg:flex-row flex flex-col  gap-[20px] ${classNameproject}`}>
        <div className="flex flex-col lg:w-[40%] xl:gap-0 lg:gap-[45px] ">
          {/* Left side - Project title */}
          <div 
            className="w-full  text-black md:px-4 lg:px-0 flex  md:items-start items-center lg:justify-center xl:h-[100px] animate-slide-left opacity-0"
         ref={ref1} >
            <h2 className="text-[30px] lg:text-[70px] sm:text-5xl my-heading font-bold tracking-tighter text-white">
              Project Overview
            </h2>
          </div>
      
          {/* Right side - Project description and amenities */}
         
        </div>
        <div className=" lg:w-[60%]">
          <div className={`md:p-6 sm:p-8 lg:p-0 flex flex-col items-center lg:h-[100px] gap-4 opacity-0 ${className1}`} ref={ref2}>
            <p 
              className="text-xs md:text-[18px] leading-[1.2] lg:text-[20px] animate-fade-up text-white leading-5 my-heading md:leading-7 font-light text-start w-full"
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
       <div className={`grid ${btn? 'lg:grid-cols-4 grid-cols-2 ':'md:grid-cols-4 grid-cols-2'} lg:grid-cols-4 grid-cols-2 gap-4 md:gap-8 lg:gap-20 mt-8 lg:mt-20 ${btn? 'w-[60%]':'md:w-[100%] w-[90%] xl:w-[80%] opacity-0'}`} ref={ref3}>
              {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-between px-3 py-2 bg-white rounded-[13px] animate-fade-up-delayed h-[110px] w-[110px] sm:h-[130px] sm:w-[130px] md:h-[170px] md:w-[160px] lg:h-[200px] lg:w-[200px] element text-center gap-1 sm:gap-2"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {/* Heading */}
                  <p className="text-[12px] sm:text-[14px] md:text-[18px] my-heading text-left mb-1 sm:mb-2 font-medium w-full flex justify-start items-center">{amenity.text}</p>
                  {/* Logo or Title */}
                  <div className="flex-1 flex items-center justify-start w-full">
                    {index === 0 || index === 1 ? (
                      <p className="text-[15px] sm:text-[23px] lg:text-[32px] my-heading leading-5 sm:leading-9 text-black font-bold my-heading text-start w-[80%] flex justify-start items-center">
                        {amenity.title}
                      </p>
                    ) : (
                      <div className="relative w-[80%] aspect-[4/2] overflow-hidden flex items-center justify-start">
                        <Image fill src={amenity.im} alt="Amenity image" className="object-contain !w-[100%] " />
                      </div>
                    )}
                  </div>
                  {/* Optional text below */}
                  <span className="text-[12px] sm:text-[14px] md:text-[18px] my-heading text-black text-center mt-1 sm:mt-2 w-full flex justify-start items-center">{amenity.text2}</span>
                </div>
              ))}
            </div>
</div>

    </div>
    <div className="flex items-center justify-center w-full">
          </div></>

  );
};

export default section_two;