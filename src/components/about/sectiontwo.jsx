import React from 'react'
import Image from 'next/image'
import chess from '../../../public/assets/chess.jpg'
const sectiontwo = () => {
  return (
    <div className='flex flex-col md:h-[700px] h-[300px] '>
        <div className='relative w-full h-[80%]'>
          <Image src={chess} height={300} width={300} className='!h-full !w-full object-cover'/>
        </div>
      <div className='w-full flex bg-[linear-gradient(90deg,_#CCAB64_0%,_#FAECC9_100%)] h-[20%] items-center justify-center'>
        <div className='flex flex-col'><h4 className='md:text-[30px] text-[20px] font-bold '> The Brand Pillars</h4> <span className='text-[15px]'>Built on 3 Key Pillars</span></div>
        <div className='flex'></div>
      </div>
    </div>
  )
}

export default sectiontwo
