import React from 'react'
import Image from 'next/image'
const stickyicon = () => {
    const im=['/assets/whatsapp.png','/assets/mail.png','/assets/phone.png']
  return (
    
    <div className=' fixed !top-[70%] z-[999] md:!top-[70%]  right-[-40px] flex flex-col gap-2'>
      {im.map((elem,index)=>{
        return(
            <div key={index} className='w-[100px] h-[35px]  bg-[#00000033] px-4 border flex justify-start items-center border-blue-200 rounded-3xl'><Image src={elem} width={27} height={19} className='!w-[17px] !h-[15px]'/></div>
        )
      })}
    </div>
  )
}

export default stickyicon
