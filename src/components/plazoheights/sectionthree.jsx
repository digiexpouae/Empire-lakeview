import React from 'react'
import im1 from '../../../public/assets/im1heihts.png'  
import im2 from '../../../public/assets/im2heihts.png' 
import im3 from '../../../public/assets/im3heihts.png' 
import im4 from '../../../public/assets/im4heihts.png' 
import im5 from '../../../public/assets/im5heihts.png' 
import im6 from '../../../public/assets/im6heihts.png' 
import im7 from '../../../public/assets/im7heihts.png'
import im8 from '../../../public/assets/im8heihts.png'
import Image from 'next/image'

const sectionthree = () => {
  return (
    <div className='flex  md:h-[700px] h-[400px] w-full items-center justify-center'>
      <div className=' flex items-center justify-center gap-[10px] h-[600px] w-[80%] lg:w-[65%]'>
        <div className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[130px] lg:h-[130px]'><Image src={im1} alt="image 1" className='object-cover !h-full !w-full'/>
</div>
         <div className='flex flex-col items-end gap-[12px]'>
            <div className='w-[30px] h-[30px] md:w-[60px]  md:h-[60px] lg:w-[80px] lg:h-[80px] '><Image src={im2} alt="image 2" className='!h-full !w-full object-cover'/></div>
            <div className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[130px] lg:h-[130px]'><Image src={im3} alt="image 3" className='!h-full !w-full object-cover'/></div>
            </div>
      <div className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[130px] lg:h-[130px]'><Image  src={im4} alt="image 4" className='!h-full !w-full object-cover'/></div>
      <div className='flex flex-col gap-[12px]'>
            <div className='w-[80px] h-[80px] md:w-[180px] md:h-[180px]'><Image src={im5} alt="image 1" className='object-cover !h-full !w-full'/>
</div>
          <div className='flex gap-[12px]'>
               <div className='w-[50px] h-[50px] md:w-[90px] md:h-[90px]  lg:w-[130px] lg:h-[130px]'><Image src={im6} alt="image 1" className='object-cover !h-full !w-full'/>
</div>
             <div className='w-[30px] h-[30px] md:w-[60px]  md:h-[60px] lg:w-[80px] lg:h-[80px]'><Image src={im7} alt="image 1" className='object-cover !h-full !w-full'/>
</div>
          </div>

      </div>
     <div className='w-[30px] h-[30px] md:w-[60px]  md:h-[60px] lg:w-[130px] lg:h-[130px]'><Image src={im8} alt="image 1" className='object-cover !h-full !w-full'/>
</div>





      </div>
    </div>
  )
}

export default sectionthree

