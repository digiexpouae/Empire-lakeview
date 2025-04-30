'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Import Swiper and SwiperSlide
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import 'swiper/css'; // Swiper CSS for proper styling
import Image from 'next/image'; // Import Image for Next.js optimization
const slider_Two = ({images}) => {
 

  return (
    <div className="relative ">
      <Swiper
        modules={[Autoplay]} // Use Autoplay for automatic image transition
        autoplay={{
            delay: 2000,
            disableOnInteraction: false, // Keeps autoplay after swipe
          }}// Change image every 3 seconds
        loop // Infinite loop for the slider
        spaceBetween={10} // Space between slides
        slidesPerView={2.3}
        // onSlideChange={handleSlideChange} // Show 2.5 slides at once
        className="xl:w-[700px] lg:w-[500px] h-[604px] lg:h-[450px]"
      > 
          {images.map((img, index) => (
          <SwiperSlide key={index} className="!xl:w-[480px] lg:w-[400px] !h-full " style={{border:'2px solid white',borderRadius:'10px'}}>
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
