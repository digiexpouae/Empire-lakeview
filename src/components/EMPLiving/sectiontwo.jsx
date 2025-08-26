import React from 'react'
import empire from '../../../public/assets/Replacement.png'
import Image from 'next/image'
const sectiontwo = () => {
    const textpara="Empire Development offers apartments for sale in Dubai in Jumeirah Village. This prime location makes life easier. It also offers great opportunities for real estate investment in Dubai. Empire Development apartments are ideal for anyone seeking a spacious and stylish home. These apartments also feature modern tech automation. It’s a great chance to buy luxury homes in Dubai. "
  return (
    <div className=' mb-10 h-[900px] md:h-[700px] w-full flex  justify-center'>
        <div className='flex md:flex-row flex-col w-[90%] md:w-[70%]   items-center justify-center  md:gap-[20px]' >
         <div className=" w-[90%] md:w-[60%] h-[450px]"> <div className="md:p-6 sm:p-8 lg:p-0 flex flex-col items-start h-[300px] lg:h-[400px] gap-4" >
               <div 
            className="w-full  text-black p-x-8 flex  md:items-start items-center justify-start xl:h-[122px] animate-slide-left"
        >
            <h2 className="text-[30px] lg:text-[70px] white-space-nowrap sm:text-5xl my-heading font-bold tracking-tighter text-white">
              
             Project Overview
            </h2>
          </div>
            <p 
              className=" text-[8px] md:text-[14px] lg:text-[20px] animate-fade-up text-white leading-5 my-heading md:leading-5 font-light"
            >
            {textpara}
            </p>
            <a 
              href="/files/04 - Typial Floor Plans Book - Empire Livings (1).pdf"
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

export default sectiontwo
