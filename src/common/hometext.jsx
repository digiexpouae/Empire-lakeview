import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import back from '../../public/assets/transparent.png';

const Hometext = ({ text, head, amenities, btn, back_image, className, home, icontext, classNamep }) => {


  return (
    <>
      {/* OUTER WRAPPER */}
      <div className="relative w-full overflow-hidden bg-[#1E2435] h-[400px] flex flex-col items-center justify-center md:h-auto" >
        {/* BACKGROUND IMAGE OUTSIDE PADDING */}
     
          <div className="absolute right-0 top-1/2 translate-x-1/4 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] z-0 pointer-events-none">
            <Image src={back} alt="Background" width={500} height={500} className="w-full h-full object-cover" />
          </div>
       

        {/* MAIN CONTENT WITH PADDING */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4 md:h-[600px] flex flex-col  justify-center  w-full md:w-[80vw] z-20 relative">
          <div className="w-full flex flex-col items-center justify-center md:items-start gap-4 px-4 sm:px-0">
            {/* LEFT SECTION */}
            <div className='flex flex-col w-full md:w-[60%] pl-4 lg:pl-0'>
              <div className='w-full text-black flex justify-center  '>
                <h2 className="text-3xl sm:text-5xl md:text-[40px] lg:text-[60px]  font-bold tracking-tighter text-white text-center md:text-left">
                  {head}
                </h2>
              </div>

           
            </div>

            {/* RIGHT SECTION */}
            <div className="w-full lg:w-[60%]">
              <div className="p-0 md:p-6 lg:p-0 flex flex-col items-center md:items-start text-center md:text-left">
                <p className={`text-xs sm:text-lg  md:text-[17px] text-white leading-4 md:leading-7 font-light ${classNamep}`}>
                  {text}
                </p>
              
              </div>

            
            </div>
          </div>
        </div>
      </div>

      {/* Optional divider */}
   
    </>
  );
};

export default Hometext;  