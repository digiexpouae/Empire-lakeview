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
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 2 } });

      tl.fromTo(ref1.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(ref2.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.5")
        .fromTo(ref3.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "-=2");

      tl.fromTo(".element", { opacity: 0, y: 200 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: { each: 1, ease: "power1.out" },
      });
    }
  } catch (err) {
    console.error("GSAP animation error:", err);
  }
}, [inView]);

return (<>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:h-screen relative flex items-center justify-center w-[80vw] scrollbar-hide" ref={ref}>
      <div className="w-full md:flex md:flex-row flex-col">
        {/* Left grid: Heading, Description, Lottie */}
        <div className="flex flex-col md:w-[3/4] w-full xl:gap-0 gap-4 lg:gap-6 justify-center h-full">
          <div className={`w-full text-black flex md:items-start items-start justify-start xl:h-[auto] animate-slide-left ${home ? 'opacity-100' : 'opacity-0'}`} ref={ref1}>
            <h2 className="text-[30px] lg:text-[60px] sm:text-5xl my-heading font-bold tracking-tighter text-white text-left mb-3">
              {head}
            </h2>
          </div>
          <div className={`w-full flex md:items-start items-start justify-start xl:h-auto animate-slide-left ${home ? 'opacity-100' : 'opacity-0'}`}> 
            <p className={`text-[18px] lg:text-[22px] animate-fade-up text-white leading-5 my-heading md:leading-7 font-light text-left ${classNamep}`}>{text}</p>
          </div>
          <div className="mt-4 md:mt-8 flex md:items-start items-start justify-start">
            <LottieIcons className={`element ${home ? 'opacity-100' : 'opacity-0'}`} className2={`text-center md:w-[120px] !text-[10px]   ${icontext}`} ref={ref3} amenities={amenities} iconsize={'h-[70px] w-[70px] md:w-[50px] md:h-[50px]'} className1={`grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 lg:gap-36 mt-4 lg:mt-8 ${home ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>
        {/* Right grid: Single Image */}
        <div className="md:w-[1/4] w-full flex items-center justify-center h-full relative min-h-[400px]">
          <div className="relative w-full h-full min-h-[400px]">
            <Image src={back} layout="fill" objectFit="contain" className="rounded-2xl" alt="Section image" />
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