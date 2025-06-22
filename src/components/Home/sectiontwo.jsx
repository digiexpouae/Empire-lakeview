import React from 'react'
import Image from 'next/image'
import img from '../../../public/assets/award.png'
const sectiontwo = () => {
  return (
   <div className='relative w-full h-[220px] md:h-[100%]'>
                  <Image src={img} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' width={1200} height={1000} />
         </div>
  )
}

export default sectiontwo