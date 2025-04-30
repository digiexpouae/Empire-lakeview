import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SectionTwo = () => {
  const amenities = [
    { icon: '/assets/video ame.png', title: "Outdoor Cinema" },
    { icon: '/assets/Layer_1 (8).png', title: "Steam & Sauna" },
    { icon: '/assets/joy.png', title: "Gaming Arcade" },
    { icon: '/assets/golf.png', title: "Mini Golf Course" },
    { icon: '/assets/puzzle.png', title: "And Other Features" },
  ];

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ref1.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref1.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ref2.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref2.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ref3.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref3.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col xl:flex-row">
        <div
          ref={ref1}
          className="w-full xl:w-2/5 text-black px-8 flex items-start justify-center xl:h-[280px]"
        >
          <h2 className="text-4xl lg:text-[70px] sm:text-5xl font-bold">
            Project Overview
          </h2>
        </div>

        <div
          ref={ref2}
          className="w-full xl:w-3/5 p-6 sm:p-8 flex flex-col justify-between xl:h-[280px]"
        >
          <p className="text-sm sm:text-base">
            Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan,
            Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom
            apartments, & 3-bedroom duplexes, with many units featuring private pools.
          </p>
        </div>
      </div>

      <div
        ref={ref3}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 xl:mt-0"
      >
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center justify-center h-[100px] bg-[#FAFCFF]"
          >
            <Image src={amenity.icon} width={50} height={50} />
            <p className="text-xs sm:text-sm font-medium text-center my-heading">
              {amenity.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
