import React from 'react'
import Slidertwo from '../slider_Two'
import Image from 'next/image'
import im from '../../../public/assets/im2.jpg'
import im2 from '../../../public/assets/im3.jpg'
const introducing = () => {
    const ima=[im,im2,im]
  return (
    <div className='flex items-center justify-center w-full  gap-[40px] mt-20'>
<div className='flex flex-col items-center justify-center gap-[40px]'>
    <span>Introducing</span>
    <div><Image src='/assets/a7c7c7715ce8f5e3ea0b1cea5a135d0970ec0d6a.png' width={244} height={100}/></div>
<button className='button'>Download Brochure</button>
        </div>
      <Slidertwo images={ima}/>
    </div>
  )
}

export default introducing
