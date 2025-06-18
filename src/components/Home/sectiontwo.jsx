import React from 'react'
import Image from 'next/image'
import img from '../../../public/assets/f396e1a86a31329925ebe09220cf24698faf6a35.jpg'
const sectiontwo = () => {
  return (
   <div className='relative w-full h-[200px] md:h-[90%]'>
                  <Image src={img} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' width={1200} height={1000} />
         
         </div>
  )
}

export default sectiontwo