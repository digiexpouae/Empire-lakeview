import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Heading } from "lucide-react";
import back from '../../public/assets/1984e08ad90983cfd81c68d9706dcc268b39c257.png'
import { useInView } from "react-intersection-observer";
import LottieIcons from "./lottie";

const section_two = ({text,head,amenities,btn,back_image,className,home,icontext,classNamep}) => {

const ref1=useRef()
const ref2=useRef()
const ref3=useRef()
const {ref,inView}=useInView({
  triggerOnce:true,
  threshold:0.2
})
useEffect(() => {
  if (home) return;
  try {
    if (typeof window !== "undefined") {
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
    }

    if (inView && ref1.current && ref2.current && ref3.current) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

      tl.fromTo(ref1.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(ref2.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.7")
        .fromTo(ref3.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");

      tl.fromTo(".element", { opacity: 0, y: 200 }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: { each: 0.5, ease: "power1.out" },
      });
    }
  } catch (err) {
    console.error("GSAP animation error:", err);
  }
}, [inView]);

return (<>
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8 md:py-16 md:h-[600px] relative flex items-center justify-center w-full md:w-[80vw] scrollbar-hide" ref={ref}>
 {back_image &&
  <div className='h-[500px] w-[500px] absolute right-[-9%] md:right-0 bottom-[-15%] overflow-hidden '>
  <Image  src={back}  width={500} height={500} className='!h-full !w-full'/>
</div>}
<div className="w-full flex flex-col md:flex-row gap-8 md:gap-[40px] lg:gap-[80px]">
        <div className="flex flex-col md:w-[50%] lg:w-[40%] xl:gap-0 lg:gap-[45px] ">
          {/* Left side - Project title */}
          <div 
            className={`w-full  text-black p-x-8 flex  md:items-start items-center justify-center xl:h-[280px] animate-slide-left ${home ?'opacity-100':'opacity-0'}`}
         ref={ref1} >
            <h2 className="text-[24px] md:text-[30px] lg:text-[70px] sm:text-5xl my-heading font-bold tracking-tighter text-[#fff]">
            {head}
            </h2>
          </div>
          
       
              <LottieIcons className={`element ${home ?'opacity-100':'opacity-0'}`} className2={`text-center md:w-[120px] !text-[10px]   ${icontext}`} ref={ref3} amenities={amenities} iconsize={'h-[50px] w-[50px] md:w-[50px] md:h-[50px]'}  className1={`grid grid-cols-2 lg:flex  md:grid-cols-3 gap-4 md:gap-8 lg:gap-2  mt-4 md:mt-8 lg:mt-40 xl:mt-30 ${home ?'opacity-100':'opacity-0'}`}/></div>
          {/* Right side - Project description and amenities */}
         
        <div className="w-full md:w-[50%] lg:w-[60%] mt-6 md:mt-0"> <div className={`p-0 md:p-6 sm:p-8 lg:p-0 flex flex-col items-start lg:h-[280px] gap-4 ${home ?'opacity-100':'opacity-0'}`} ref={ref2}>
            
            <p 
              className={`text-[15px] md:text-[18px] lg:text-[20px] animate-fade-up text-[#fff] leading-5 my-heading md:leading-7 font-light ${classNamep}`}
            >
             {text}
            </p>
            {btn &&
            <button className="
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300  transform text-sm lg:text-base whitespace-nowrap">Download Floor Plan</button>
            }
            {/* Amenities section */}
          
          </div>
          <div className="mt-4 md:mt-8 flex items-start justify-start w-full">
            <LottieIcons className={`element ${home ? 'opacity-100' : 'opacity-0'}`} className2={`text-center md:w-[120px] !text-[10px]   ${icontext}`} ref={ref3} amenities={amenities} iconsize={'h-[50px] w-[50px] md:w-[50px] md:h-[50px]'} className1={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-36 mt-4 lg:mt-8 w-full ${home ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>
      </div>
     </div>
    <div className={`flex items-center justify-center w-full ${className}`}>
      <hr className="border border-white mt-8 w-[80vw] " />
    </div>
  </>);
};

export default section_two;