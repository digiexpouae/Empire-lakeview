
import React, {  useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import car from '../../public/assets/car.png'




import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/common/map'), {
  ssr: false,
});
const places = ({center_position,Name,markers,Main_marker}) => {
useEffect(() => {
  let ctx;

  const loadGsap = async () => {
    const gsapModule = await import('gsap');
    const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
    gsapModule.gsap.registerPlugin(ScrollTrigger);
          ScrollTrigger.normalizeScroll(true);


    if (!movingRef.current || !carWrapperRef.current) return;

    ctx = gsapModule.gsap.context(() => {
      gsapModule.gsap.fromTo(
        movingRef.current,
        { left: '20%' },
        {
          left: '80%',
          ease: 'none',
         scrollTrigger: {
  trigger: carWrapperRef.current,
  start: 'top top',
  end: '+=1500',
  scrub: true,
  onUpdate: (self) => {
          if (!movingRef.current) return;

          if (self.progress <= 0) {
            // Stay at 20% until ScrollTrigger starts
            movingRef.current.style.left = '20%';
          } 

  
}

}
,
        }
      );
    }, sectionref);

   
  };

  loadGsap();

  return () => {
    ctx?.revert();
  };
}, []);


  const swipperRef=useRef(null)
const [activeIndex, setactiveIndex] = useState(0)
const styles=['w-[15px] h-[15px] absolute left-[20%] z-20 bg-white rounded-2xl','w-[15px] h-[15px] absolute left-[40%] z-20 bg-white rounded-2xl',
  'w-[15px] h-[15px] absolute left-[60%]  z-20 bg-white rounded-2xl',
  'w-[15px] h-[15px] absolute left-[80%] z-20 bg-white rounded-2xl'
]
  const movingRef=useRef(null)
const carWrapperRef=useRef(null)

  const sectionref=useRef()

      const viewportWidth = '80vw';








 return(
 <div className=' bg-[#0E1527] w-full md:pt-24 pt-20  text-white !h-[95vh]'  ref={sectionref}>
      <div className='flex flex-col items-center justify-center gap-[100px]  w-full lg:mt-[20px] mt-[50px] ' >
        <div className='flex flex-col items-center justify-center w-full ' >
        <h2 className='my-heading lg:text-[60px] md:text-[40px] text-[34px]  font-bold' >In The Heart Of It All</h2>
        <p className='mb-[50px]'>Perfectly Positioned in Liwan, Dubailand</p>  
         <div ref={carWrapperRef} className=" relative w-full">

        <div className="flex items-center justify-center w-full">
        <hr className="border border-white w-[100%] relative  " />
       
        {styles.map((elem,index)=>{
          return( 
          <span key={index} onClick={()=>setactiveIndex(index)} className={`${elem} dot cursor-pointer`}>
             {index == 0 &&
          <div className='py-8 my-heading text-[10px] md:text-[17px] flex items-center text-center'>{Main_marker}</div>}
          </span>
    
        
        )
  
      })
        }
    {console.log(activeIndex)}



    <div ref={movingRef} className='md:!w-[127px] !w-[62px] !h-[50px] md:!h-[72px] absolute left-[20%] rotate-90 z-30'><Image src={car} objectFit='cover'  className='transition-transform duration-700 ease-in-out'/>
    </div></div>
          </div> 
          </div>
        <div className='w-[100%]   mb-10 relative'>
           <Map  className={'z-50'} carcontainer={carWrapperRef} sectionref={movingRef} containerRef={sectionref} center_position={center_position} Name={Name} markers={markers} Main_marker={Main_marker}/>
           
            {/* <Slider images={im} delay={4000} slidesize={'xl:!h-[550px] lg:!h-[450px] md:!h-[300px] !w-[75vw] !h-[200px]  '}  activeIndex={activeIndex} slide={'md:!w-full md:!h-full !w-full !h-full'} num={1} /> */}
        </div></div>
      </div>

  )
}

export default places
