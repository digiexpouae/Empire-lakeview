'use client';
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Import Swiper and SwiperSlide
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import { Mousewheel ,EffectFade} from 'swiper/modules';

import 'swiper/css'; // Swiper CSS for proper styling
import Image from 'next/image'; // Import Image for Next.js optimization
const slider_three = ({images,slidesize,slide,num,delay,handleSlideChange}) => {
  // const filteredImages = images.filter((_, index) => index === activeIndex);

  return (
    <div className="relative  mb-20 flex items-center justify-center">
      <Swiper
      
         effect="fade"
        slidesPerView={1}   
        fadeEffect={{ crossFade: true }}

        loop={false}     
          mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
          thresholdDelta: 30,
          thresholdTime: 500,
        }}
      
          modules={[Mousewheel, EffectFade]}
        onTransitionEnd={(swiper) => {
          if (handleSlideChange) {
            console.log('Current index:', swiper.realIndex); // Debugging
            handleSlideChange(swiper.realIndex);
          }
        }}
      
        // onSlideChange={handleSlideChange} // Show 2.5 slides at once
        className={`${slidesize}`}
      > 
          {images.map((img, index) => (
          <SwiperSlide key={index} className={`${slide} `}>

                       <Image 
              src={img}
              alt={`Slide ${index}`}
                
              
              priority
              className='!w-full !h-full object-cover object-bottom-left rounded-3xl'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default slider_three;
