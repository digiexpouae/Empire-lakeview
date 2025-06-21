import React from 'react'
import empire from '../../../public/assets/buildin.jpg'
import Image from 'next/image'
const sectiontwo = () => {
    const textpara="Empire Livings by Empire Developments is a 15-storey residential tower in Dubai Science Park, featuring 202 units comprising studios, 1-bedroom apartments, and duplexes, with select units offering private pools. Residents enjoy amenities such as a swimming pool, gym, sauna, steam room, yoga space, outdoor cinema, co-working areas, and a children's play area. The development also includes a rooftop solar park, Zen garden, walking track, and BBQ area. Empire Livings is scheduled for completion in Q2 2027."
  return (
    <div className=' mb-10 h-[900px] md:h-[700px] w-full flex   justify-center'>
        <div className='flex md:flex-row flex-col w-[90%] md:w-[70%]   items-center justify-center  md:gap-[20px]' >
         <div className=" w-[90%] md:w-[60%] h-[450px]"> <div className="md:p-6 sm:p-8 lg:p-0 flex flex-col items-start h-[300px] lg:h-[400px] gap-4" >
               <div 
            className="w-full  text-black p-x-8 flex  md:items-start items-center justify-start xl:h-[280px] animate-slide-left"
        >
            <h2 className="text-[30px] lg:text-[100px] sm:text-5xl my-heading font-bold tracking-tighter text-white">
              Overview
            </h2>
          </div>
            <p 
              className=" texy-[8px] md:text-[14px] lg:text-[20px] animate-fade-up text-white leading-5 my-heading md:leading-5 font-light"
            >
            {textpara}
            </p>
            <a 
              href="/files/04 - Typial Floor Plans Book - Empire Livings (1).pdf"
              download
          
            className="
  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9]
    hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[180px] lg:px-2 py-1 rounded-full transition-colors duration-300  transform text-sm lg:text-base whitespace-nowrap">Download Floor Plan</a>
            
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
