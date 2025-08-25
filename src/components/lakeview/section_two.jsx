import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import LottieIcons from "../../common/lottie";
import { motion } from "framer-motion";
import back from '../../../public/assets/1984e08ad90983cfd81c68d9706dcc268b39c257.png';

const SectionTwo = ({ text, head, amenities, btn, back_image, className, home, icontext, classNamep }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0
  });

  useEffect(() => {
    if (!inView) return;
    try {
      if (typeof window !== "undefined") {
        const { ScrollTrigger } = require("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
      }

      if (ref1.current && ref2.current && ref3.current) {
        const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
        tl.fromTo(ref1.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1 })
          .fromTo(ref2.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.7")
          .fromTo(ref3.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8")
          .fromTo(".element", { opacity: 0, y: 200 }, 
            {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: { each: 0.1, ease: "power1.out" },
          });
      }
    } catch (err) {
      console.error("GSAP animation error:", err);
    }
  }, [inView]);

  return (
    <>
      {/* OUTER WRAPPER */}
      <div className="relative w-full overflow-hidden" ref={ref}>
        {/* Watermark Logo at Bottom Right */}
        <div style={{position: 'absolute', right: 0, bottom: -40, zIndex: 0, opacity: 1, pointerEvents: 'none'}}>
          <Image src={require('../../../public/assets/gridlogo.png')} alt="Grid Logo" width={400} height={400} />
        </div>
        {/* BACKGROUND IMAGE OUTSIDE PADDING */}
        {back_image && (
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0 pointer-events-none">
            <Image src={back} alt="Background" width={500} height={500} className="w-full h-full object-cover" />
          </div>
        )}

        {/* MAIN CONTENT WITH PADDING */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8 md:py-16 md:h-[600px] flex items-center justify-center md:justify-start  w-full md:w-[80vw] z-20 relative">
          <div className={`w-full flex ${home ? 'flex-col gap-8 justify-center md:justify-start' : 'flex-col lg:flex-row gap-8 md:gap-[20px] lg:gap-[80px]'}`}>
            {/* LEFT SECTION */}
            <div className={`flex flex-col lg:w-[40%] ${home ? 'gap-8' : 'xl:gap-0 lg:gap-[45px]'}`}>
              <div className={`w-full text-black flex md:items-start items-center justify-center md:justify-start ${home ? '' : 'xl:h-[280px]'}`} ref={ref1}>
                <h2 className="text-[40px] md:text-[30px] lg:text-[70px] sm:text-5xl font-bold tracking-tighter text-white">
                  {head}
                </h2>
              </div>

              {/* Lottie Icons Desktop (moved here) */}
              <div className=" mt-5 md:mt-0 ml-10 hidden md:block md:mt-8 w-full">
                <LottieIcons
                  className="element"
                  className2={`text-center text-white md:w-[150px] !text-[10px] ${icontext}`}
                  amenities={amenities}
                  iconsize="h-[50px] w-[50px] md:w-[50px] md:h-[50px]"
                  className1={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ${home ? 'gap-2 md:grid-cols-4' : 'gap-4 md:gap-8 lg:gap-36'} mt-4 w-full ${home ? 'opacity-100' : 'opacity-0'}`}
                  ref={ref3}
                />
              </div>

              {/* Mobile Amenities */}
              <div className="flex md:hidden gap-4 mt-4">
                {amenities.map((amenity, idx) => (
                  <motion.div
                    key={amenity.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex flex-col items-center md:justify-start"
                  >
                    <div className="h-[50px] w-[50px] mb-1">
                      <LottieIcons amenities={[amenity]} iconsize="h-[50px] w-[50px]" />
                    </div>
                    <span className="text-white text-[10px] mt-1 text-center">{amenity.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className={`${home ? 'lg:w-[80%] md:w-[100%]' : 'w-full lg:w-[60%] mt-6 md:mt-0'}`}>
              <div className={`p-0 md:p-6 sm:p-8 lg:p-0 flex flex-col items-center md:items-start text-center md:text-left ${home ? '' : 'lg:h-[280px]'} gap-4`} ref={ref2}>
                <p className={`text-[15px] md:text-[18px] lg:text-[20px] text-white leading-5 md:leading-7 font-light ${classNamep}`}>
                  {text}
                </p>
                {btn && (
                  <a 
                   href="/files/Empire Lakeviews - 2D Typical Floor Plans (2).pdf"
                   download
                  className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] cursor-pointer text-gray-800 w-[180px] px-2 py-1 rounded-full transition-colors duration-300 text-sm lg:text-base mx-auto md:mx-0 block">
                    Download Brochure
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional divider */}
      {!home && (
        <div className={`flex justify-center w-full ${className}`}>
          <hr className="border border-white mt-8 w-4/5 mx-auto" />
        </div>
      )}
    </>
  );
};

export default SectionTwo;
