'use client';
import React, { useRef, useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Import Swiper and SwiperSlide
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import { Mousewheel ,EffectFade} from 'swiper/modules';

import 'swiper/css'; // Swiper CSS for proper styling
import Image from 'next/image'; // Import Image for Next.js optimization
const slider_three = ({images,slidesize,slide,num,delay,handleSlideChange}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  // const filteredImages = images.filter((_, index) => index === activeIndex);

const containerRef=useRef()
const changeSlide=((delta) => {
    setCurrentIndex((prev) => {
      const next = Math.min(Math.max(prev + delta, 0), images.length - 1);
      if (next !== prev && handleSlideChange) {
      return  handleSlideChange(next);
      }
      return next;
    });
  })
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 100) changeSlide(1);
 
      else if (e.deltaY < -30) changeSlide(-1);
         {console.log(e.deltaY)}
    };

    const container = containerRef.current;
    container?.addEventListener('wheel', handleWheel, { passive: true });

    return () => container?.removeEventListener('wheel', handleWheel);
  }, []);
  return (
    <div className="relative  mb-20 flex items-center justify-center">
      <Swiper
      
        slidesPerView={1}   
      

        loop={true}     
          mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
          thresholdDelta: 30, 
          thresholdTime: 500,
        }}
      
          modules={[Mousewheel]}
   
        
        // onSlideChange={handleSlideChange} // Show 2.5 slides at once
        className={`${slidesize}`}
      > 
          {images.map((img, index) => (
          <SwiperSlide key={index} className={`${slide} `} ref={containerRef}>

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
