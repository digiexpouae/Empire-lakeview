import React from 'react'
import Image from 'next/image'
const maptwo = ({title,map}) => {
  return (
    <div className='flex flex-col items-center justify-center h-[400px] md:h-[700px] my-heading'>
        <div className='w-full text-center '>
          <h2 className='xs:leading-17 mb-5 md:mb-10 text-[30px] md:text-[40px] lg:text-[60px] my-heading  font-bold text-white'>{title}</h2>
          </div>
    <div className='  xl:!h-[500px] lg:!h-[450px] md:!h-[300px] w-[90vw] md:w-[75vw] !h-[200px] relative'>
     
      <Image src={map}   fill className=" rounded-3xl object-cover object-bottom"   />
    </div>
    </div>
  )
}

export default maptwo
