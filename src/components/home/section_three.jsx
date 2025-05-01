import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from '../slider';

import Mask from '../../../public/assets/Mask group.png'
import Mask2 from '../../../public/assets/Mask2.png';
import Mask3 from '../../../public/assets/4c43da9db2ab4e1a685ad4e0fe8bf4d7420cb786 (3).jpg';
import gsap from 'gsap';
import map from '../../../public/assets/map.png';


const SectionThree = ({onAllVisible}) => {


  const [imageVisible, setImageVisible] = useState(false);
  const [thirdImageVisible, setThirdImageVisible] = useState(true); // State for third image
  const [fourthImageVisible, setFourthImageVisible] = useState(false);
  const [fiveImageVisible, setFiveImageVisible] = useState(false);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const fourthImageRef = useRef(null);
  const fiveImageRef = useRef(null);
  const imaes=[Mask,Mask2,Mask3]


  useEffect(() => {
    if (fiveImageVisible) {
      onAllVisible(); // 👈 Tell parent page when all are visible
    }
  }, [fiveImageVisible]);


  useEffect(() => {
  
    
    
    // Register the plugin

    // Set a timeout to trigger image visibility after a few seconds
    const timer = setTimeout(() => {
      setImageVisible(true); // Show the second image after 3 seconds
    }, 3000); // Delay for 3 seconds (3000ms)

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, []);

  useEffect(() => {

    if (imageVisible) {
      gsap.fromTo(
        secondImageRef.current,
        { scale: 0.9, delay:3 }, // Initial state: image starts small
        { scale: 1, duration: 5 ,scrollTrigger: {
          trigger:   secondImageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }} // Animate to zoom in
      );

      // Set a timeout to show the third image after 2 seconds (after second image animation)
      const timerForThirdImage = setTimeout(() => {
        setThirdImageVisible(false); // Show third image after 2 seconds
      }, 5000);

      return () => clearTimeout(timerForThirdImage); // Clean up timeout for third image
    }
  }, [imageVisible]);

  useEffect(() => {
    if (!thirdImageVisible) {
      // GSAP animation for the third image when it becomes visible
      gsap.fromTo(
        thirdImageRef.current,
        { scale: 1, x: 0 }, // Initial state: image starts small
        { scale: 1, opacity: 1, duration: 1 ,    scrollTrigger: {
          trigger:    thirdImageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }} // Animate to full scale
      )
      
      const timerForFourthImage = setTimeout(() => {
        setFourthImageVisible(true);
      }, 15000); // Show fourth image 
    }
  }, [thirdImageVisible]); // Run this when thirdImageVisible changes

  useEffect(() => {
    if (fourthImageVisible) {
      gsap.fromTo(
        fourthImageRef.current,
        { opacity: 0,delay:5, y: 50 },
        { opacity: 1, y: 0, duration: 15,    scrollTrigger: {
          trigger:  fourthImageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        } }
      );
    
    const timerForfiveImage = setTimeout(() => {
      setFiveImageVisible(true);
    }, 3000); // Show fourth image 
  }
  }, [fourthImageVisible]);

  useEffect(() => {
    if (fiveImageVisible) {
      gsap.fromTo(
        fiveImageRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: fiveImageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        } }
      );
    
    }
  }, [fiveImageVisible]);


  return (<>
<div className="flex flex-col items-center justify-center  ">

   


      {/* {imageVisible && thirdImageVisible && (
        <div ref={secondImageRef}>
          <Image src={Mask2} alt="Mask2" />
        </div>
      )} */}

    </div>

    </>
  );
};

export default SectionThree;
