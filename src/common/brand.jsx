import React from 'react'
import Image from 'next/image'
import chess from '../../public/assets/chess.jpg'
const brand = ({img,text1,text2}) => {
  return (
    <div className='flex flex-col md:h-[700px] h-[300px] '>
        <div className='relative w-full h-[80%]'>
          <Image src={img} height={700} width={600} className='!h-full !w-full object-cover'/>
        </div>
      <div className='w-full flex bg-[linear-gradient(90deg,_#CCAB64_0%,_#FAECC9_100%)] h-[20%] items-center justify-center'>
        <div className='flex flex-col'><h4 className='md:text-[30px] text-[20px] font-bold '>{text1}</h4> <span className='text-[15px]'>{text2}</span></div>
        <div className='flex'></div>
      </div>
    </div>
  )
}

export default brand
