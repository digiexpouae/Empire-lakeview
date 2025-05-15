'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {AnimatePresence, motion } from 'framer-motion';
import Form from '@/common/form';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
const images = [
  {
    src: '/assets/CTA.png',
       title: '',
    subtitle: '',
  },
  {
    src: '/assets/section4.jpg',
    title: 'Where Luxury Meets',
    subtitle: 'Unparalleled Value',
  },
];

const SectionFour = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,  // Triggers only once
    threshold: 0.4,     // 50% of the element should be in view
  });



  const ref1=useRef()
 const ref2=useRef()
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (isTransitioning || count >= 2) return;
    
    setCount(prev => {
 
      const next = prev + 1;
        // Only change the image on first 
      if (next === 1) {
        
        const nextIndex = (index + 1) % images.length;
        setPrevIndex(index);
        setIndex(nextIndex);
   
    

   
      }
      return next;

    });
   
    

  };





useEffect(() => {
  if (inView && count === 0) {
    setTimeout(() => {
      handleClick();
           setTimeout(() => {
          setIsTransitioning(true)
        }, 1000);
      setTimeout(() => {
            handleClick();
   
      }, 5000); 
    }, 2000); 
  }
}, [inView]);

useEffect(() => {
if(count ==2){
  
    gsap.fromTo(ref1.current, 
      { left: '-20%',delay:3 },
      { left: 0, opacity: 1, duration: 2, ease: 'power3.out' }
    );
     gsap.fromTo(ref2.current, 
      { right: '-50%', delay:3},
      { right: 0, opacity: 1,duration: 2, ease: 'power3.out' }
    );
    }
  }
, [count]);


  return (
    <div  className="relative w-full h-[100vh]  overflow-hidden"   ref={ref}>
{console.log(inView,count)}
      {/* Previous image */}
        <AnimatePresence  mode="wait">
      <motion.div
        key={images[prevIndex].src + '-prev'}
       initial={{ opacity: 1}}
            animate={{ opacity: 0.9}}
            exit={{ opacity: 0.3}}
            transition={{duration: 2, ease: 'easeInOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={images[prevIndex].src}
          alt="Previous"
          height={700}
          width={1200}
          className="object-cover !h-[100%]  !w-[100%] "
          priority
        />
      </motion.div>
</AnimatePresence>
      {/* Current image */}
      <motion.div     
        key={images[index].src + '-current'}
    initial={{ opacity: 0.4}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut'}}
        className="absolute inset-0"
      >
        <Image
          src={images[index].src}
          alt="Current"
             height={700}
          width={1200}
          className="object-cover !h-[100%]  !w-[100%] "
          priority
        />
      </motion.div>

      {/* Overlay content changes by count */}
      {count === 1 &&(
        <div className="overlay  bg-[#00000066]  md:h-auto absolute bottom-0 top-0 inset-0 z-10 flex flex-col justify-center items-center leading-15">
         <div className={` flex flex-col justify-center items-center leading-12 ${isTransitioning ? 'opacity-100':'hidden'}`}>
          <span className=" text-[25px] md:text-[60px] text-white">Where Luxury Meets</span>
          <span className=" text-[20px] md:text-[63px] font-extrabold text-white">Unparalleled Value</span>
          </div>
        </div>
      )}

      {count == 2 &&  (
        <div className="absolute inset-0  z-10 xl:flex h-[100%]  sm:bg-[#002E3C80] xl:flex-row flex flex-col  gap-[15px]  justify-center  items-center xl:bg-[#00000066] w-full opacity-0"   ref={ref1}>
          <div className='xl:bg-[#002E3C]    z-20  h-[25%] xl:h-auto absolute top-0 xl:bottom-0 left-0   flex  items-center justify-center w-[100%] xl:w-[50%] ' >
            <div className={`flex items-center  justify-center flex-col text-white px-6 md:p-0 xl:mb-0`}>
              <span className='font-semibold  my-heading flex xl:flex-col flex-row items-center justify-center xl:items-start text-[45px] md:text-[80px]'>
               <span className=' md:leading-15'>Keep in</span> 
               <span>Touch</span>
              </span>
                <p className='text-[15px]  md:text-[20px] tracking-tight  md:leading-6 w-[80%] md:w-[50%] xl:w-[45%]'>
                  Are you ready to embark on a journey of unparalleled luxury and innovation?
                </p>
            </div>

          </div>
          <Form     ref={ref2} className=' xl:w-[50%] w-[100%] xl:h-[100%] h-[90%] md:h-[75%]  absolute xl:top-0 bottom-0 lg:bottom-3 right-0 opacity-0'/>
        </div>
      )}
    </div>
  );
};

export default SectionFour;
