'use client';

import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image'; 
import { Mousewheel } from 'swiper/modules';

const Slider = ({ images, onSlideChange,slide,slideSize }) => {
  
  const handleSlideChange = (swiper) => {
    const current = swiper.realIndex; // realIndex avoids loop offset
    if (onSlideChange) onSlideChange(images[current]); // notify parent
  };
  return (
    <div className="relative ">
      <Swiper
        mousewheel={true}
        modules={[Mousewheel]}// Use Autoplay for automatic image transition
        autoplay={{
            delay: 2000,
            disableOnInteraction: false, // Keeps autoplay after swipe
          }}// Change image every 3 seconds
        loop // Infinite loop for the slider
        spaceBetween={10} // Space between slides
        slidesPerView={2}
        onSlideChange={handleSlideChange} // Show 2.5 slides at once
        className={`xl:w-[500px] md:w-[400px] w-[200px] md:h-[180px]  `}
      > 
          {images.map((img, index) => (
          <SwiperSlide key={index} className={`xl:!w-[250px] md:!w-[200px] !w-[130px] !h-[80px] md:!h-full `} style={{border:'2px solid white',borderRadius:'10px'}}>
            <Image
              src={img.im}
              alt={`Slide ${index}`}
              width={150}
              height={150}
              className="object-cover rounded-lg !h-full !w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
