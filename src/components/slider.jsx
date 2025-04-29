'use client';

import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Import Swiper and SwiperSlide
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import 'swiper/css'; // Swiper CSS for proper styling
import Image from 'next/image'; // Import Image for Next.js optimization

const Slider = ({ images }) => {
  return (
    <div className="relative ">
      <Swiper
        modules={[Autoplay]} // Use Autoplay for automatic image transition
        autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Keeps autoplay after swipe
          }}// Change image every 3 seconds
        loop // Infinite loop for the slider
        spaceBetween={10} // Space between slides
        slidesPerView={2.5} // Show 2.5 slides at once
        className="w-[150px] h-[150px]"
      > 
          {images.map((img, index) => (
          <SwiperSlide key={index} className="w-[150px] h-[150px]">
            <Image
              src={img}
              alt={`Slide ${index}`}
              width={150}
              height={150}
              className="object-cover w-full h-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
