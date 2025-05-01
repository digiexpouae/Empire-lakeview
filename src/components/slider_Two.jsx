'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Import Swiper and SwiperSlide
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import 'swiper/css'; // Swiper CSS for proper styling
import Image from 'next/image'; // Import Image for Next.js optimization
const slider_Two = ({images,slidesize,slide,num,delay,handleSlideChange}) => {
 


  return (
    <div className="relative  mb-20">
      <Swiper
        modules={[Autoplay]} // Use Autoplay for automatic image transition
        autoplay={{
            delay: delay,
            disableOnInteraction: false, // Keeps autoplay after swipe
          }}// Change image every 3 seconds
        loop // Infinite loop for the slider
        spaceBetween={10} // Space between slides
        slidesPerView={num}
        onSlideChangeTransitionEnd={(swiper) => {
          if (handleSlideChange) {
            handleSlideChange(swiper);
          }
        }}
      
        // onSlideChange={handleSlideChange} // Show 2.5 slides at once
        className={`${slidesize}`}
      > 
          {images.map((img, index) => (
          <SwiperSlide key={index} className={`${slide}`} style={{border:'2px solid white',borderRadius:'10px'}}>
            <Image 
              src={img}
              alt={`Slide ${index}`}
              width={539}
              height={604}              className="object-cover !w-full !h-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default slider_Two
