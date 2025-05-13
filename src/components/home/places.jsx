import React, { use, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Slider from  '../../components/slider_three'     
import car from '../../../public/assets/car.png'
import map1 from '../../../public/assets/map1 (3).png'
import map2 from '../../../public/assets/map2 (3).png'
import gsap from 'gsap';
import map3 from '../../../public/assets/image (3).png'

import map4 from '../../../public/assets/image (4).png'
const places = () => {
  const swipperRef=useRef(null)
const [ActiveIndex, setActiveIndex] = useState(0)
const styles=['w-[15px] h-[15px] absolute left-[20%] z-20 bg-white rounded-2xl','w-[15px] h-[15px] absolute left-[40%] z-20 bg-white rounded-2xl',
  'w-[15px] h-[15px] absolute left-[60%]  z-20 bg-white rounded-2xl',
  'w-[15px] h-[15px] absolute left-[80%] z-20 bg-white rounded-2xl'
]
  const movingRef=useRef()




gsap.to(movingRef.current, {
  y: `-${ActiveIndex * 20}vw`, 
  
});
    const im=[map1,map2,map3,map4]
 return(
    <div>
      <div className=' bg-[#002E3C] w-full text-white' >
      <div className='flex flex-col items-center w-full justify-center gap-[100px] lg:mt-[20px] mt-[50px]'>
        <div className='flex flex-col items-center justify-center w-full'>
        <h2 className='my-heading lg:text-[80px] md:text-[50px] text-[34px]  font-bold'>In The Heart Of It All</h2>
        <p className='mb-[50px]'>Perfectly Positioned in Liwan, Dubailand</p>  <div className="flex items-center justify-center w-full">
        <hr className="border border-white w-[100vw] relative " />
        {styles.map((elem,index)=>{
          return(
          <span key={index}  className={`${elem} cursor-pointer`}></span>
        
        )
  
      })
        }
    {console.log(ActiveIndex)}




          <div className='md:!w-[127px] !w-[62px] !h-[50px] md:!h-[72px] absolute left-[20%] rotate-90 z-30'><Image src={car} objectFit='cover' ref={movingRef} className='transition-transform duration-700 ease-in-out'/></div>
          </div> </div>
       
        <div className='w-[80vw] md:h-[600px] '>
            <Slider  images={im}     slidesize={'lg:!h-[530px] md:!h-[300px] lg:!w-[950px] md:!w-[80%] !w-[380px]  !h-[200px]  '}  slide={'md:!w-full md:!h-full !w-full !h-full ' }  handleSlideChange={(index) => setActiveIndex(index)} // <-- This gets called with realIndex
/>





        </div>   
      </div>
    </div>

    </div>
  )
}

export default places
