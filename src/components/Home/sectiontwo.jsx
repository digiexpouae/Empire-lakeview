import React from 'react'
import Image from 'next/image'
import img from '../../../public/assets/f396e1a86a31329925ebe09220cf24698faf6a35.jpg'
const sectiontwo = () => {
  return (
   <div className='relative w-full h-[90%]'>
           <Image src={img} height={700} width={600} className='!h-full !w-full object-cover'/>
         </div>
  )
}

export default sectiontwo
