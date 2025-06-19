'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {AnimatePresence, motion } from 'framer-motion';
import ContactForm from '@/common/form';
import Form from '@/common/form';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';


const SectionFour = ({images,background,im,bottom,className}) => {

  const { ref, inView } = useInView({
    triggerOnce: true,  // Triggers only once
    threshold: 0.2,     // 50% of the element should be in view
  });



  const ref1=useRef()
 const ref2=useRef()
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [count, setCount] = useState(0);

  const [scaledBack, setScaledBack] = useState(false)
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
            setScaledBack(true);


        }, 500);
      setTimeout(() => {
            handleClick();
   
      },3500); 
    }, 1000); 
  }
}, [inView]);

useEffect(() => {
if(count ==2){
  
    gsap.fromTo(ref1.current, 
      { left: '-20%',delay:0.5 },
      { left: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
     gsap.fromTo(ref2.current, 
      {right:'-50%'},
      {right:0, opacity: 1,duration: 1, ease: 'power3.out' }
    );
    }
  }
, [count]);


  return (
    <div  className="relative w-full h-[100vh]  overflow-hidden "   ref={ref}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/contact.png"
          alt="Background"
          fill
          className="object-cover scale-[1.4] object-top-left"
          priority
        />
      </div>
      {/* Previous image */}
        <AnimatePresence  mode="wait">
      <motion.div
        key={images[index]?.src + '-prev'}
             initial={{scale: 1.6 , opacity: 1 }}
  animate={{opacity: 0.9 ,  scale: !scaledBack ? 1.3 : 1 }}
            transition={{duration: 0.5, ease: 'easeInOut' }}
        className="absolute inset-0 z-0 "
      >
        
        <Image
          src={images[index]?.src}
          alt="Previous"
          height={700}
          width={1200}
          className={`object-cover !h-[100%] object-center !w-[100%] ${className}`}
          priority
        />
      </motion.div>
</AnimatePresence>


      {/* Overlay content changes by count */}
      {count === 1 &&(
        <div className="overlay  bg-[#00000066]   md:h-auto absolute bottom-0 top-0 inset-0 z-10 flex flex-col justify-center items-center leading-15">
         <div className={` flex flex-col justify-center items-center leading-12 ${isTransitioning ? 'opacity-100':'hidden'}`}>
          <span className=" text-[25px] md:text-[60px] text-white mb-10">Where Luxury Meets</span>
          <span className=" text-[20px] md:text-[63px] font-extrabold text-white">Unparalleled Value</span>
          </div>
        </div>
      )}

{count == 2 && (
  <div
    className="absolute inset-0 z-10 flex items-center justify-center w-full h-full sm:bg-[#002E3C80] xl:bg-[#00000066] backdrop-blur-xs"
    ref={ref1}
  >
    <Form
      ref={ref2}
      className="w-full max-w-4xl h-auto xl:h-[90%] p-4 md:p-8 xl:p-10 opacity-0"
    />
  </div>
)}
    </div>
  );
};

export default SectionFour;
