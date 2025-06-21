import React, { useRef, useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import Slider from '../components/slider'; // Adjust path as needed
import Link from 'next/link';


const Section = ({images}) => {

      const [currentImage, setCurrentImage] = useState(0);

const wrapper=useRef()
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
    return ( 
  <div  className='!h-[100vh]  flex items-center justify-center w-full relative' ref={wrapper}  >
    <div className='h-[550px] flex items-center justify-center w-full' >
      <div className="relative h-full  w-full  "    >
        <Image
          src={currentImage.im}
          alt="Mask3"
        fill
         priority
          className="object-cover " 
        />

<div className="overlay absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full bg-[linear-gradient(270deg,rgba(14,21,39,0)_52.53%,rgba(14,21,39,0.9)_80.55%),linear-gradient(0deg,rgba(14,21,39,0.3),rgba(14,21,39,0.3))] z-10" >
     <div className="absolute md:left-20 left-5 z-10 flex flex-col justify-center gap-3 md:w-[600px]">
            <h2 className="lg:text-[50px] xl:text-[80px] text-[40px] text-white my-heading font-bold">
              {currentImage.tex1}
            </h2> 
             <span className="text-white my-heading md:text-[25px] text-[10px]">{currentImage.tex2}</span>
            <div className="flex md:gap-3 gap-2">
              <Link href={currentImage.link1 || '#'} className="text-white border cursor-pointer border-white hover:bg-white hover:text-cyan-800 md:text-[15px] text-[10px]  md:px-4 md:py-2 px-2 py-1 rounded-full transition-all duration-300 text-base">
                360 view
              </Link> 
               <Link
                  href={currentImage.link2 || '#'}
                className="text-gray-800 md:px-4 cursor-pointer px-2 py-1 md:text-[15px] text-[10px] md:py-2 rounded-full transition-colors duration-300 text-base"
                style={{ background: 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)'

                 }}
              >
                Contact us
              </Link>
             </div>
          </div>

          <div className="absolute lg:bottom-10 md:bottom-2  bottom-[10%] right-5">
            <Slider images={images} onSlideChange={setCurrentImage} wrapper={wrapper}/>
          </div>
        </div>
      </div>

   
    
        </div>
    </div>
  );
};

export default Section;