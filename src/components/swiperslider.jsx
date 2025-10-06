import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import 'swiper/css/pagination';
import Image from 'next/image';
const SwiperSlider = ({ testimonial }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className='h-full md:h-auto '
    >
      {testimonial.map((elem, index) => (
        <SwiperSlide key={index}>
          <div className="p-2 md:p-6 h-full flex flex-col  justify-c80enter ">
            <h3 className="font-bold  text-[20px] md:text-[45px] md:mb-4 my-heading">Testimonials</h3>
            <div className="flex flex-col gap-2 justify-between items-center">
              <div className="  md:h-[90px] text-sm lg:text-lg italic mb-4 ">"{elem.text}"</div>
              <div className="flex items-center gap-4 mt-4 w-full">
                <div className="flex gap-[20px] w-full ">
                    {/* <div className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]'> */}
                  {/* <Image width={60} height={60} className='rounded-4xl !h-full w-full !object-cover' src={elem.image}/> */}
                {/* </div>  */}
                 <div className='flex flex-col w-full'>

                  <div className='flex '>
                 <FontAwesomeIcon icon={faStar} className="!text-[#FFD700]"  />
                 <FontAwesomeIcon icon={faStar} className="!text-[#FFD700]"  />
                 <FontAwesomeIcon icon={faStar} className="!text-[#FFD700]"  />
                 <FontAwesomeIcon icon={faStar} className="!text-[#FFD700]"  />

                 <FontAwesomeIcon icon={faStar} className="!text-[#FFD700]" />
                 
                 </div>
                 <div className="font-bold text-sm lg:text-[20px] w-full">{elem.name}</div>

                  {/* <p className="text-[8px] lg:text-sm text-gray-500 w-full">{elem.role}</p> */}
                         
</div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
