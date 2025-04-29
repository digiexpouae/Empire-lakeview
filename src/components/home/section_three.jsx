import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from '../slider';

import Mask from '../../../public/assets/Mask group.png'
import Mask2 from '../../../public/assets/Mask2.png';
import Mask3 from '../../../public/assets/4c43da9db2ab4e1a685ad4e0fe8bf4d7420cb786 (3).jpg';
import gsap from 'gsap';
import map from '../../../public/assets/map.png';


const SectionThree = ({onAllVisible}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const [imageVisible, setImageVisible] = useState(false);
  const [thirdImageVisible, setThirdImageVisible] = useState(true); // State for third image
  const [fourthImageVisible, setFourthImageVisible] = useState(false);
  const [fiveImageVisible, setFiveImageVisible] = useState(false);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const fourthImageRef = useRef(null);
  const fiveImageRef = useRef(null);
  const imaes=[Mask,Mask2,Mask3]
  const arrayOfElements = [
    {
      image: "/assets/4c43da9db2ab4e1a685ad4e0fe8bf4d7420cb786 (3).jpg",
      text1: "Downtown Dubai",
      text2: " 10 minutes"
    },
    {
      image: "/assets/62ed3ad6680af5894bff06b33990297d186301d8.png",
      text1: "The Dubai Mall",
      text2: "15 minutes"
    },  {
      image: "/assets/96e883e482e8e9de9bbf293e5f1e6d8ed31b5abf.png",
      text1: "Burj Khalifa",
      text2: "15 minutes"
    },  {
      image: "/assets/103d95c04096f4d2ce96ba5fa784c950279e4f7d.png",
      text1: "Dubai Airport",
      text2: "12 minutes"},
    ,  {
      image: "/assets/96e883e482e8e9de9bbf293e5f1e6d8ed31b5abf.png",
      text1: "Dubai Frame",
      text2: "15 minutes"
    },  {
      image: "/assets/103d95c04096f4d2ce96ba5fa784c950279e4f7d.png",
      text1: "Palm Jumeirah",
      text2: "25 minutes"
    },  {
      image: "/assets/77456e958901a67bc1b47ff24dbfeb0889ca26ab.png",
      text1: "Dubai Opera",
      text2: "15 minutes"
    },  {
      image: "/assets/62ed3ad6680af5894bff06b33990297d186301d8.png",
      text1: "Business Bay",
      text2: "12 minutes"
    }
  ]
const images=[{im:'/assets/ima1.jpg',tex1:'1 Bed',tex2:'Size: 2633.68 SQ.FT. To 2682.94 SQ.FT.'},{im:'/assets/ima2.jpg',tex1:'1 Bed With Pool',tex2:'Size: 1319 SQ.FT.To 1328 SQ.FT.'},{im:'/assets/ima3.jpg',tex1:"2 Bed",tex2:'Size: 753 SQ.FT.To 867 SQ.FT'},{im:'/assets/ima4.jpg',tex1:'Duplex',tex2:'Size: 830 SQ.FT'},{im:'/assets/ima6.jpg',tex1:'Studio',tex2:'Size: 425.55 SQ.FT.'},{im:'/assets/pool studio.jpg',tex1:'Studio with Pool',tex2:'Size: 432.42 SQ.FT'}]


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
        { scale: 0.9, delay: 1 }, // Initial state: image starts small
        { scale: 1, duration: 2 ,scrollTrigger: {
          trigger:   secondImageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }} // Animate to zoom in
      );

      // Set a timeout to show the third image after 2 seconds (after second image animation)
      const timerForThirdImage = setTimeout(() => {
        setThirdImageVisible(false); // Show third image after 2 seconds
      }, 2000);

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
      }, 3000); // Show fourth image 
    }
  }, [thirdImageVisible]); // Run this when thirdImageVisible changes

  useEffect(() => {
    if (fourthImageVisible) {
      gsap.fromTo(
        fourthImageRef.current,
        { opacity: 0,delay:5, y: 50 },
        { opacity: 1, y: 0, duration: 5,    scrollTrigger: {
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


  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="my-heading text-[80px] w-[500px] justify-center font-bold">
        Discover our Apartments
      </div>
      <div className="w-[500px] mb-[20px]">
        <span>
          Modern apartments with resort-style amenities, private pools, and
          seamless city access — all in one iconic address.
        </span>
      </div>

      <div>
        {/* First Image - Initially visible */}
        {!imageVisible && (
          <Image src={Mask} alt="Mask" />
        )}
      </div>

      {/* Second Image - Appears after a few seconds */}
      {imageVisible && thirdImageVisible && (
        <div ref={secondImageRef}>
          <Image src={Mask2} alt="Mask2" />
        </div>
      )}

      {/* Third Image - Appears after the second image finishes zooming */}
      {!thirdImageVisible && !fourthImageVisible && (
        <div ref={thirdImageRef} className="relative w-full">
          <Image src={currentImage.im} alt="Mask3" objectFit="cover" width={1000} height={1000} className='!h-full !w-full'/>
        {console.log(currentImage)}
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 flex w-full  bg-[linear-gradient(270deg,rgba(0,46,60,0)52.53%,rgba(0,46,60,0.9)80.55%),linear-gradient(0deg,rgba(0,46,60,0.3),rgba(0,46,60,0.3))] z-10">
            <div className="absolute left-20 z-10 flex flex-col justify-center h-full gap-3 w-[600px]">
            
              <h2 className=" lg:text-[50px] xl:text-[80px]  text-white my-heading font-bold">{currentImage.tex1}</h2>
              <span className="text-white my-heading">
                {currentImage.tex2}
              </span>
              <div className='flex gap-3'>
                <button className="text-white border border-white hover:bg-white hover:text-cyan-800 px-4 py-2 rounded-full transition-all duration-300 text-center text-base">
                  360 view
                </button>
                <button className=" text-gray-800 px-4 py-2 rounded-full transition-colors duration-300 text-center text-base"   style={{background: 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)'}}
>
                  Contact us
                </button>
              </div>
            </div >
     {/* <div className='overflow-x-auto flex justify-between absolute gap-8 right-0 bottom-20 w-[50%]'><div className='w-52 flex-shrink-0"'><Image src={Mask2} width={200} height={200} objectFit='cover'/></div>
   
          </div> } 




          {/* swiper slider */}
          <div className='absolute bottom-10 right-5 '>
       <Slider images={images}  onSlideChange={setCurrentImage} /> 
       </div>
 
          </div>
        </div>

      )}
      <div className={`w-full  ${ fourthImageVisible? 'h-[700px] bg-[#002E3C] ':'none'}`} >
         {fiveImageVisible && (
        <div ref={fiveImageRef}  >
  <div className=" flex flex-col items-center py-20 text-white justify-center">
  <h2 className='my-heading text-[80px]  font-bold'>Key Destinations</h2>
      
  <span className='text-white'>Empire LakeViews-All Within Minutes</span></div>
  <div className='flex w-full items-center justify-center'>
    <div className='grid grid-cols-4 w-[80%] gap-[50px]'>
     
        {arrayOfElements.map((elem,index)=>{
         return <div id={index} className='w-full flex flex-col items-center justify-center'>

   <Image src={elem.image} width={100} height={100}/>
   <span className='text-[20px] bold text-white'>{elem.text1}</span>
   <p className='text-[15px]  text-white'>{elem.text2}</p></div>
        })}
     
   

    </div></div>
        </div>

      )}</div>
{fiveImageVisible && 
  <>
    <div className=' bg-[#002E3C] w-full text-white' >
      <div className='flex flex-col items-center justify-center'>
        <h2 className='my-heading text-[80px]  font-bold'>In The Heart Of It All</h2>
        <p>Perfectly Positioned in Liwan, Dubailand</p>
        <div className='w-[80vw] h-[500px]'>
          <Image objectFit='cover' className='w-full h-full rounded-2xl'  src={map} />
        </div>
      </div>
    </div>

    <div className='flex flex-col items-center justify-center  bg-[#002E3C] w-full text-black py-28  relative z-10'>
     <div className='bg-white w-[70vw] flex flex-col items-center justify-center rounded-2xl h-[300px] -mt-[-200px] absolute z-30'    style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)' }}> <div><h2 className='my-heading xl:text-[80px] lg:text-[60px] text-[#002E3C]  font-bold'>Want Quotation</h2></div>
      <div className='w-[550px] text-center '><span className='my-heading xl:text-[20px] lg:text-[17px]'>Get personalized pricing and exclusive offers — request your quote today and step into elevated living.</span></div>
      
        <div><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 rounded-full transition-colors duration-300 text-center text-base mt-[20px]">Get Quotation</button></div>
      </div>
 </div>
  </>
}
    </div>
  );
};

export default SectionThree;
