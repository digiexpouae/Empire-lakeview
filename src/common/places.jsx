
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
  let animation;

  const loadGsap = async () => {
    const gsapModule = await import('gsap');
    const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
    gsapModule.gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);

    if (!movingRef.current || !sectionref.current) return;

    // Clear any existing animations and ScrollTriggers
    if (animation) {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }

    // Reset position
    gsapModule.gsap.set(movingRef.current, { left: '17%' });
    
    // Create new animation with updated props
    ctx = gsapModule.gsap.context(() => {
      animation = gsapModule.gsap.to(movingRef.current, {
        left: '80%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionref.current,
          start: 'top top',
          end: '+=1500',
          scrub: 1,
          onEnter: () => {
            gsapModule.gsap.set(movingRef.current, { left: '17%' });
          },
          onLeaveBack: () => {
            gsapModule.gsap.set(movingRef.current, { left: '20%' });
          },
          // Add markers for debugging (can be removed in production)
          markers: false
        }
      });
    }, sectionref);
  };

  loadGsap();

  // Cleanup function
  return () => {
    if (animation) {
      animation.kill();
    }
    if (ctx) {
      ctx.revert();
    }
    // Kill all ScrollTriggers to prevent memory leaks
    if (typeof window !== 'undefined' && window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  };
}, [center_position, Name, markers, Main_marker]); // Add all props that should trigger re-initialization


  const swipperRef=useRef(null)
const [activeIndex, setactiveIndex] = useState(0)
// const styles=['w-[15px] h-[15px] absolute left-[20%] z-20 bg-white rounded-2xl','w-[15px] h-[15px] absolute left-[40%] z-20 bg-white rounded-2xl',
//   'w-[15px] h-[15px] absolute left-[60%]  z-20 bg-white rounded-2xl',
//   'w-[15px] h-[15px] absolute left-[80%] z-20 bg-white rounded-2xl'
// ]
const styles=[{name:<>Empire <br />Lakeviews</> ,style:'w-[15px] h-[15px] absolute left-[20%] z-20 bg-white rounded-2xl'},
  {name:<>5-10 <br /> minutes</> ,style:'w-[15px] h-[15px] absolute left-[40%] z-20 bg-white rounded-2xl'},
  {name:<>20 <br /> minutes</> ,style:'w-[15px] h-[15px] absolute left-[60%]  z-20 bg-white rounded-2xl'},
  {name:<>25 <br /> minutes</> ,style:'w-[15px] h-[15px] absolute left-[80%] z-20 bg-white rounded-2xl'}
]
  const movingRef=useRef(null)
const carWrapperRef=useRef(null)

  const sectionref=useRef()

      const viewportWidth = '80vw';








      return(
        <div className='  w-full md:pt-24 pt-20  text-white h-[100vh] '  ref={sectionref}>
        <div className='flex flex-col items-center justify-center gap-[100px]  w-full lg:mt-[20px] mt-[50px] ' >
          <div className='flex flex-col items-center justify-center w-full ' >
  
          <div className="relative w-full h-10 flex items-center">
            <hr className="border-t border-white w-full absolute" />
            {styles.map((elem, index) => (
              <div 
                key={index} 
                className="absolute flex flex-col items-center " 
                style={{ left: `${20 + index * 20}%`, transform: 'translate(-50%, 35%)' }}
              >
                <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
                {index ==0 ?    <div className="text-white text-center text-xs md:text-sm whitespace-nowrap mt-2">
                  {Name}
                </div>
                :<div className="text-white text-center text-xs md:text-sm whitespace-nowrap mt-2">
                  {elem.name}
                </div>}
              </div>
            ))}
      {console.log(activeIndex)}
  
  
  
    <div ref={movingRef} className='md:!w-[137px] !w-[62px] !h-[50px] md:!h-[92px] absolute left-[20%] rotate-180 z-30'><Image src={car} objectFit='cover' fill  className='transition-transform duration-700 ease-in-out'/>
    </div>
            </div> 
            </div>
          <div className='w-[100%]   mb-10 relative'>
             <Map  className={'z-50'} carcontainer={sectionref} sectionref={movingRef} containerRef={sectionref} center_position={center_position} Name={Name} markers={markers} Main_marker={Main_marker}/>
             
          </div></div>
        </div>
       
         )
       }
       
       export default places