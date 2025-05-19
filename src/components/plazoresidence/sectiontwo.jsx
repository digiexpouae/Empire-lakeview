import React from 'react'
import im3 from '../../../public/assets/plazosecond2.png'
import im1 from '../../../public/assets/plazosecond.png'
import im2 from '../../../public/assets/0c7a66f7a201853094b79eca9f3a4795b5fb8549.png'
import im5 from '../../../public/assets/07b31f8601686727bca9e8caa4870bcff81e2965.png'
import im4 from '../../../public/assets/f47a8ddd509fc9aff56aa809abd0d0631aaadfa5.png'
import Image from 'next/image'
const sectiontwo = () => {


  return (
    <div className='flex flex-col w-full h-[500px] md:h-[800px]  items-center gap-[20px] justify-center'>
        <div className='flex w-full justify-between  '>
            <div className='h-[150px] md:h-[300px] w-[49%]'><Image src={im1} className='!w-full !h-full' /> </div>
            <div className='h-[150px] md:h-[300px] w-[49%]'><Image src={im2} className='!w-full !h-full' /> </div>
        </div>
        <div className='flex  items-center w-full justify-center overflow-hidden relative '>
            <div className=' md:h-[300px] w-[30%] h-[150px] absolute  left-[-10px] md:left-[-80px]'><Image src={im3} className='!w-full !h-full  !object-cover object-left' /> </div>
            <div className='md:h-[300px] w-[48%] h-[150px] '><Image src={im4} className='!w-full !h-full  !object-cover' /> </div>
            <div className='  md:h-[300px] w-[30%] h-[150px] absolute right-[-10px] md:right-[-80px]'><Image src={im5} className='!w-full !h-full  !object-cover object-left' /> </div>
        </div>
      
    </div>
  )
}

export default sectiontwo
