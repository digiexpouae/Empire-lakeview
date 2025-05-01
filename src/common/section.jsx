import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import Slider from '.././components/slider'; // Adjust path as needed
const Section = () => {

      const [currentImage, setCurrentImage] = useState(0);
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
    return (<div>
    <div>
      <div className="relative w-full ">
        <Image
          src={currentImage.im}
          alt="Mask3"
          objectFit="cover"
          width={1000}
          height={1000}
          className="!h-full !w-full"
        />

        <div className="overlay absolute top-0 left-0 right-0 bottom-0 flex w-full bg-[linear-gradient(270deg,rgba(0,46,60,0)52.53%,rgba(0,46,60,0.9)80.55%),linear-gradient(0deg,rgba(0,46,60,0.3),rgba(0,46,60,0.3))] z-10">
          <div className="absolute left-20 z-10 flex flex-col justify-center h-full gap-3 w-[600px]">
            <h2 className="lg:text-[50px] xl:text-[80px] text-white my-heading font-bold">
              {currentImage.tex1}
            </h2>
            <span className="text-white my-heading">{currentImage.tex2}</span>
            <div className="flex gap-3">
              <button className="text-white border border-white hover:bg-white hover:text-cyan-800 px-4 py-2 rounded-full transition-all duration-300 text-base">
                360 view
              </button>
              <button
                className="text-gray-800 px-4 py-2 rounded-full transition-colors duration-300 text-base"
                style={{ background: 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)' }}
              >
                Contact us
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 right-5">
            <Slider images={images} onSlideChange={setCurrentImage}/>
          </div>
        </div>
      </div>

   
    
        </div>
    </div>
  );
};

export default Section;
