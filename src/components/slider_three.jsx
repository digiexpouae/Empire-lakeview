'use client';
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Import Swiper and SwiperSlide
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import { Mousewheel } from 'swiper/modules';

import 'swiper/css'; // Swiper CSS for proper styling
import Image from 'next/image'; // Import Image for Next.js optimization
const slider_three = ({images,slidesize,slide,num,delay,handleSlideChange,activeIndex}) => {
  const filteredImages = images.filter((_, index) => index === activeIndex);

  return (
    <div className="relative  mb-20">
      <Swiper
// Use Autoplay for automatic image transition
        autoplay={{
            delay: delay,
            disableOnInteraction: false, // Keeps autoplay after swipe
          }}// Change image every 3 seconds
        loop // Infinite loop for the slider
        spaceBetween={10} // Space between slides
        slidesPerView={num}
        mousewheel={true}
        modules={[Mousewheel]}
        onSlideChangeTransitionEnd={(swiper) => {
          if (handleSlideChange) {
            handleSlideChange(swiper);
          }
        }}
      
        // onSlideChange={handleSlideChange} // Show 2.5 slides at once
        className={`${slidesize}`}
      > 
          {filteredImages.map((img, index) => (
          <SwiperSlide key={index} className={`${slide}`} >
        
                       <Image 
              src={img}
              alt={`Slide ${index}`}
              width={539}
              height={604}      
              priority
              className="object-cover !w-full !h-full rounded-2xl "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default slider_three;
