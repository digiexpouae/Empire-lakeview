import React from 'react'
import dynamic from "next/dynamic";

const Lottie = dynamic(()=> import ('lottie-react'),{ssr:false} );

const lottie = ({amenities,className,className1,ref,className2,iconsize}) => {
  return (
 <div className={`${className1}`} ref={ref}>
         {amenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className={ `text-center flex flex-col items-center justify-center animate-fade-up-delayed  md:h-[100px] gap-[10px] ${className} `}
                //   style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
<Lottie animationData={amenity.icon} loop={true}  className= {`lg:h-[60px] lg:w-[60px] h-[60%] ${iconsize}`}/>               
                  <p className={`  text-[5px] md:text-[20px] font-light  text-white my-heading h-[40%] ${className2}`}>
                    {amenity.title}
                  </p>
                 
                </div> 
              ))}
   
    </div>
  )
}

export default lottie
