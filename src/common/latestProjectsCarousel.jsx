'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lastestprojectanimation from './latestprojectanimation';


const LatestProjects = () => {
 const containerRef=useRef(null)

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     Promise.all([
//       import('gsap'),
//       import('gsap/ScrollTrigger')
//     ]).then(([gsapModule, ScrollTriggerModule]) => {
//       const gsap = gsapModule.default || gsapModule;
//       const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;

//       gsap.registerPlugin(ScrollTrigger);
//       ScrollTrigger.normalizeScroll(true);

//       const checkMobile = () => window.innerWidth < 768;
//       const mobile = checkMobile();
//       setIsMobile(mobile);


//       const setupScrollTrigger = () => {
//         const sections = gsap.utils.toArray('.project-card');
//         const container = containerRef.current;
//         const slider = sliderRef.current;

//         if (!container || !slider) return;

//         const getTotalWidth = () => {
//           const gap = 20;
//           return sections.reduce((total, section) => {
//             return total + section.offsetWidth + gap;
//           }, 0) - gap;
//         };

//         gsap.set(slider, {
//           width: getTotalWidth(),
//           x: 0
//         });

//         const totalScrollWidth = getTotalWidth();
//         const containerWidth = container.offsetWidth;
//         const scrollDistance = Math.max(0, totalScrollWidth - containerWidth);
// const disance = scrollDistance + 50;
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//         animationRef.current = gsap.to(slider, {
//           x: -disance,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: container,
//             pin: true,
//             scrub: 1,
//             pinSpacing: true,
//             start: 'center center',
//             end: () => `+=${scrollDistance + (window.innerWidth * 0.4)}`,
//             invalidateOnRefresh: true,
//             anticipatePin: 1,
       
//           }
//         });

//         const onResize = () => {
//           const newMobile = checkMobile();
//           if (newMobile !== mobile) {
//             window.location.reload();
//             return;
//           }

//           gsap.set(slider, { width: getTotalWidth() });
//           if (animationRef.current?.scrollTrigger) {
//             animationRef.current.scrollTrigger.refresh();
//           }
//         };

//         window.addEventListener('resize', onResize);
//         return () => {
//           window.removeEventListener('resize', onResize);
//           if (animationRef.current) {
//             animationRef.current.kill();
//             animationRef.current.scrollTrigger?.kill();
//           }
//         };
//       };

//       const images = containerRef.current?.querySelectorAll('img');
//       if (images?.length > 0) {
//         Promise.all(
//           Array.from(images).map(
//             img =>
//               new Promise(resolve => {
//                 if (img.complete) resolve();
//                 else img.onload = resolve;
//               })
//           )
//         ).then(setupScrollTrigger);
//       } else {
//         setupScrollTrigger();
//       }
//     });
//   }, []);


  return (
    <>
    <section className="bg-[#0D1028] relative py-10 md:py-0  h-screen   flex flex-col items-center  !justify-center gap-12 md:gap-0 overflow-hidden " style={{justifyContent:'center'}} ref={containerRef}>
      <h2 className="text-white text-[30px] md:text-[50px] font-bold text-center mb-8 md:mb-6 px-4">
        Our Latest Projects
      </h2>
  <Lastestprojectanimation containerRef={containerRef}/>

  </section> 

 </>
  );
};

export default LatestProjects;
