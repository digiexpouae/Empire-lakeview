'use client';

import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Import Swiper and SwiperSlide
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import 'swiper/css'; // Swiper CSS for proper styling
import Image from 'next/image'; // Import Image for Next.js optimization

const Slider = ({ images, onSlideChange }) => {
  
  const handleSlideChange = (swiper) => {
    const current = swiper.realIndex; // realIndex avoids loop offset
    if (onSlideChange) onSlideChange(images[current]); // notify parent
  };
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
        slidesPerView={3}
        onSlideChange={handleSlideChange} // Show 2.5 slides at once
        className="w-[500px] h-[250px]"
      > 
          {images.map((img, index) => (
          <SwiperSlide key={index} className="!w-[250px] !h-full " style={{border:'2px solid white',borderRadius:'10px'}}>
            <Image
              src={img.im}
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
