import React from 'react'
import dynamic from "next/dynamic";
import Image from 'next/image'
const Lottie = dynamic(()=> import ('lottie-react'),{ssr:false} );

const lottie = ({amenities,className,className1,ref,className2,iconsize,Lottieicons}) => {
  return (
 <div className={`${className1}`} ref={ref}>
         {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className={ `text-center flex flex-col items-center justify-center md:h-[140px] gap-[8px] ${className} `}  >

{Lottieicons?
<Lottie animationData={amenity.icon} loop={true}  className= {`lg:h-[60px] lg:w-[60px] h-[60%] ${iconsize}`}/>         
      

   :    <Image width={50} height={50} src={amenity.icon} className= {`lg:h-[60px] lg:w-[60px] h-[60%] object-cover ${iconsize}`}/>
}
                  <p className={`  text-[5px] md:text-[15px] hidden md:block leading-tighter tracking-tight  font-light my-heading h-[40%] md:leading-[1.2]  ${className2} `}>
                    {amenity.title}
                  </p>
                 
                </div> 
              ))}
   
    </div>
  )
}

export default lottie
