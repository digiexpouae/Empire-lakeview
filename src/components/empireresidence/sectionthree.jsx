import React from 'react'
import empire1 from '../../../public/assets/empire1.png';
import empire2 from '../../../public/assets/empirepro2 (1).png';
import empire3 from '../../../public/assets/empirepro2 (2).png';
import empire4 from '../../../public/assets/empirepro2 (3).png';
import empire5 from '../../../public/assets/empirepro2 (4).png';
import Image from 'next/image';
const sectionthree = () => {
  return (
    <div className='flex relative items-center justify-center gap-[15px] md:gap-[25px] h-[300px] md:h-[500px] overflow-hidden'>
      <div className='h-[40px] md:h-[100px] w-[10%] absolute left-[-10px]'><Image src={empire5}  className='!h-full !w-full !object-cover rounded-[10px]'/></div>
      <div className='h-[70px] md:h-[150px] w-[20%] '><Image src={empire2}  className='!h-full !w-full !object-cover rounded-[10px]'/></div>
      <div className='h-[100px] md:h-[250px] w-[30%]'><Image src={empire1}  className='!h-full !w-full !object-cover rounded-[10px]'/></div>
      <div className='h-[70px] md:h-[150px] w-[20%] '><Image src={empire4}  className='!h-full !w-full !object-cover rounded-[10px]'/></div>
      <div className='h-[40px] md:h-[100px] w-[10%] absolute  right-[-10px]'><Image src={empire3}  className='!h-full !w-full !object-cover rounded-[10px]'/></div>
    </div>
  )
}

export default sectionthree
