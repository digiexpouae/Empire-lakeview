'use client';

import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image'; 
import { Mousewheel } from 'swiper/modules';
import { useEffect, useRef ,useState} from 'react';

const Slider = ({ images, onSlideChange,slide,slideSize,wrapper }) => {
  const swiperRef = useRef(null);
useEffect(() => {
  if (typeof window === 'undefined') return;

  (async () => {
    const gsap = (await import('gsap')).default;
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);


    const swiperInstance = swiperRef.current?.swiper;
    if (!swiperInstance || !wrapper?.current) return;

    const totalSlides = images.length;
    const scrollLength = window.innerHeight * totalSlides;
    const scroll =scrollLength

    // Force Swiper to show slide 0 on init
    swiperInstance.slideTo(0, 0);

    ScrollTrigger.create({
      trigger: wrapper.current,
      start: 'center center',
      end: `+=1500`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin:1,
      preventOverlaps:true,
  onUpdate: self => {
  let slideIndex;
 
    // Normal behavior
    slideIndex = Math.round(self.progress * (totalSlides - 1));
    {console.log('rounded'+ Math.round(self.progress * (totalSlides - 1)))}

  // Only trigger if index changed
  if (
    swiperInstance &&
    swiperInstance.initialized
  ) {
    swiperInstance.slideTo(slideIndex);
  }
},

    });
  })();

  return () => {
    if (typeof window !== 'undefined') {
      const ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  };
}, [images.length, wrapper]);



  const handleSlideChange = (swiper) => {
    const current = swiper.realIndex; // realIndex avoids loop offset
      
    if (onSlideChange) onSlideChange(images[current]); // notify parent
  };
  return (
    <div className="relative w-full "  >
      <Swiper
      ref={swiperRef}
      initialSlide={0}  // <--- ensures Swiper starts at 0

      
        spaceBetween={10} // Space between slides
        slidesPerView={2}
        onSlideChange={handleSlideChange} // Show 2.5 slides at once
        className={`xl:w-[500px] md:w-[400px] w-[200px] md:h-[180px]  `}
      > 
  
          {images.map((img, index) => (
            <SwiperSlide
  key={index}
  className={`${
    img.im
      ? 'xl:!w-[250px] md:!w-[200px] !w-[130px] !h-[80px] md:!h-full'
      : 'opacity-0 pointer-events-none'
  }`}
  style={{ border: '2px solid white', borderRadius: '10px' }}
>
  <div className="w-full h-full relative">
    <Image
      src={img.im}
      alt={`Slide ${index}`}
      fill
      className="object-cover rounded-lg !h-full !w-full"
      priority={index === 0}
    />
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default Slider;