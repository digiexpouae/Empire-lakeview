import React from 'react'
import empire from '../../../public/assets/Replacement.png'
import Image from 'next/image'
const sectiontwo = () => {
    const textpara="Empire Living sets a new benchmark for modern luxury in JVC. Each apartment by Empire Development features beautiful designs and smart home tech. These innovations simplify life. Residents can enjoy rooftop recreation areas with city views, wellness centers, and gardens. It's an ideal place for modern families and investors who want to look ahead."
  return (
    <div className=' mb-10 h-[800px] md:h-[700px] w-full flex  justify-center'>
        <div className='flex md:flex-row flex-col w-[90%] md:w-[80%]   items-center justify-center md:justify-between gap-6  md:gap-[30px]' >
         <div className=" w-[90%] md:w-[50%]"> <div className="md:p-6 sm:p-8 lg:p-0 flex flex-col items-start  lg:h-[400px] gap-4" >
               <div 
            className="w-full  text-black p-x-8 flex  md:items-start items-center justify-start xl:h-[122px] animate-slide-left"
        >
            <h2 className="text-[30px] lg:text-[70px] white-space-nowrap sm:text-5xl my-heading font-bold tracking-tighter text-white">
              
             Project Overview
            </h2>
          </div>
            <p 
              className=" text-sm md:text-[14px] lg:text-[18px] animate-fade-up text-white leading-5 my-heading md:leading-5 font-light"
            >
            {textpara}
            </p>
            <a 
              href="/files/Brochure - Empire Livings.pdf"
              download
          
            className="
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300  transform text-sm lg:text-base whitespace-nowrap text-center">Download Brochure</a>
            
            {/* Amenities section */}
          
          </div>


       </div>
       <div className="w-[80%] md:w-[40%] h-[300px] md:h-[400px] xl:h-[400px]">
  <Image
    src={empire}
    alt="Empire Building"
    className="rounded-2xl w-full h-full object-cover"
  />
</div>
</div>
    </div>
  )
}
// 
export default sectiontwo
