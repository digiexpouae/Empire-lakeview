    
    'use client'
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
    
const LatestProjectAnimation=({containerRef})=>{
        
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const animationRef = useRef(null);
  const projects = [
  {
    logo: '/assets/cardlogo.jpg',
    location: 'LIWAN',
    description:
      'Gracefully rising in the heart of Liwan, Empire Lakeviews is a statement of architectural elegance and refined living. These luxurious residences offer expansive layouts, exquisite finishes, and breathtaking views, complemented by 16+ world-class amenities that redefine modern luxury in Dubai.',
    image: '/assets/slider/lakeview.png',
    href: '/EmpireLakeviews',
  },
  {
    logo: '/assets/cardlogo3.png',
    location: 'DUBAI',
    description:
      'In the heart of Dubai Science Park, Empire Livings stands as a 14-floor statement of prestige. Its graceful architecture, elegant interiors, and serene ambiance create an address where every moment feels elevated, and every detail reflects uncompromising luxury.',
    image: '/assets/Empire-Living.webp',
    href: '/EmpireLivings',
  },
  {
    logo: '/assets/cardlogo2.jpg',
    location: 'JVC',
    description:
      'In the heart of Arjan, Empire Estates offers a rare blend of refined living and resort-inspired elegance. Thoughtfully designed residences, graceful architecture, and serene outdoor spaces come together to create an address where city life meets the calm and beauty of a private retreat.',
    image: '/assets/Emppire-Estate.webp',
    href: '/EmpireEstates',
  },
  {
    logo: '/assets/gardens/garden-logo.png',
    location: 'JVC',
    description:
      'Located in the heart of Dubailand, Empire Gardens presents a sophisticated lifestyle surrounded by greenery and open spaces. Meticulously crafted residences, timeless architecture, and serene outdoor settings offer a harmonious escape where modern living feels effortlessly calm.',
    image: '/assets/Empire-Garrden.webp',
    href: '/EmpireEstates',
  },
];

        return(
  <> 
   <div  className="relative h-auto w-full z-10 container  overflow-hidden">
        <div className="  w-full overflow-hidden relative">
        {/* <div ref={sliderRef} className=" flex items-start px-3 md:px-4 gap-4 md:gap-5"> */}

          <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 3000, // time between slides
    disableOnInteraction: false, // keep autoplay after interaction
  }}
  breakpoints={{
    1280: { slidesPerView: 2.2 },
    768: { slidesPerView: 1.3 },
    0: { slidesPerView: 1.2 },
  }}
  className="flex items-start px-3 md:px-4 gap-4 md:gap-2"
>
  {projects.map((project, index) => (
    <SwiperSlide key={index}>

            <div 
              key={index}
              className="project-card bg-white rounded-2xl p-4 md:p-6 w-[85vw] md:w-[580px]  shrink-0 shadow-xl flex flex-col"
            >
              <div className="flex flex-col item h-full">
                {/* Header with Logo and Button */}
                <div className="flex-shrink-0 mb-2 md:mb-4">
                  <div className="flex justify-between items-center">
                    <div className="relative w-14 h-14 md:w-28 md:h-28">
                      <Image
                        src={project.logo}
                        alt="Logo"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <Link href={project.href} passHref legacyBehavior>
                      <a className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-black text-xs md:text-sm rounded-full font-semibold hover:scale-105 transition whitespace-nowrap flex items-center justify-center" target="_self">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 mb-3 md:mb-6">
                  <p className="text-xs md:text-sm text-gray-700 leading-[1.2] h-[110px] md:h-[75px] pr-2 ">
                    {project.description}
                  </p>
                </div>

                {/* Project Image */}
                <div className="w-full aspect-[16/8] relative rounded-xl overflow-hidden bg-gray-50 mt-auto">
                  <Image
                    src={project.image}
                    alt={project.location}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 580px"
                    priority={index < 2}
                  />
                </div>
              </div>
            </div>

    </SwiperSlide>
  ))}
</Swiper>

        </div>
  
      </div>
 

   </>
)}
   
export default LatestProjectAnimation