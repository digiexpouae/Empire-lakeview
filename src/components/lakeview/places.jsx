
import React, { use, useEffect, useRef, useState } from 'react'
import map from '../../../public/assets/map.png';
import Image from 'next/image';
import Slider from  '../../components/slider_three'     
import car from '../../../public/assets/car.png'
import map1 from '../../../public/assets/map1 (3).png'
import map2 from '../../../public/assets/map2 (3).png'
import gsap from 'gsap';
import map3 from '../../../public/assets/image (3).png'

import map4 from '../../../public/assets/image (4).png'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/common/map'), {
  ssr: false,
});
const places = () => {
  const swipperRef=useRef(null)
const [activeIndex, setactiveIndex] = useState(0)
const styles=['w-[15px] h-[15px] absolute left-[20%] z-20 bg-white rounded-2xl','w-[15px] h-[15px] absolute left-[40%] z-20 bg-white rounded-2xl',
  'w-[15px] h-[15px] absolute left-[60%]  z-20 bg-white rounded-2xl',
  'w-[15px] h-[15px] absolute left-[80%] z-20 bg-white rounded-2xl'
]
  const movingRef=useRef(null)

  const sectionref=useRef()

      const viewportWidth = '80vw';



    const im=[map1,map2,map3,map4]




 return(
      <div className=' bg-[#002E3C] w-full  text-white'  >
      <div className='flex flex-col items-center justify-center gap-[100px]  w-full lg:mt-[20px] mt-[50px]' ref={sectionref}>
        <div className='flex flex-col items-center justify-center w-full' >
        <h2 className='my-heading lg:text-[80px] md:text-[50px] text-[34px]  font-bold' >In The Heart Of It All</h2>
        <p className='mb-[50px]'>Perfectly Positioned in Liwan, Dubailand</p>  <div className="flex items-center justify-center w-full">
        <hr className="border border-white w-[100%] relative  " />
        {styles.map((elem,index)=>{
          return(
          <span key={index} onClick={()=>setactiveIndex(index)} className={`${elem} dot cursor-pointer`}></span>
        
        )
  
      })
        }
    {console.log(activeIndex)}




    <div ref={movingRef} className='md:!w-[127px] !w-[62px] !h-[50px] md:!h-[72px] absolute left-[20%] rotate-90 z-30'><Image src={car} objectFit='cover'  className='transition-transform duration-700 ease-in-out'/>
    </div>
          </div> 
          </div>
        <div className='w-[100%]  h-[300px] mb-10 relative'>
           <Map  className={'z-50'} sectionref={movingRef} containerRef={sectionref}/>
           
            {/* <Slider images={im} delay={4000} slidesize={'xl:!h-[550px] lg:!h-[450px] md:!h-[300px] !w-[75vw] !h-[200px]  '}  activeIndex={activeIndex} slide={'md:!w-full md:!h-full !w-full !h-full'} num={1} /> */}
        </div>
      </div>
    </div>

  )
}

export default places
