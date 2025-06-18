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
    <div className='flex  md:h-[500px] h-[400px] w-full items-center justify-center'>
      <div className=' flex items-center justify-center gap-[10px] h-[600px] w-[90%] lg:w-[85%]'>
        <div className='w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[160px] lg:h-[160px]'><Image src={im1} alt="image 1" className='object-cover !h-full !w-full'/>
</div>
         <div className='flex flex-col items-end gap-[12px]'>
            <div className='w-[50px] h-[50px] md:w-[80px]  md:h-[80px] lg:w-[100px] lg:h-[100px] '><Image src={im2} alt="image 2" className='!h-full !w-full object-cover'/></div>
            <div className='w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[160px] lg:h-[160px]'><Image src={im3} alt="image 3" className='!h-full !w-full object-cover'/></div>
            </div>
      <div className='w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[160px] lg:h-[160px]'><Image  src={im4} alt="image 4" className='!h-full !w-full object-cover'/></div>
      <div className='flex flex-col gap-[12px]'>
            <div className='w-[80px] h-[80px] md:w-[200px] md:h-[200px]'><Image src={im5} alt="image 1" className='object-cover !h-full !w-full'/>
</div>
          <div className='flex gap-[12px]'>
               <div className='w-[60px] h-[60px] md:w-[90px] md:h-[90px]  lg:w-[160px] lg:h-[160px]'><Image src={im6} alt="image 1" className='object-cover !h-full !w-full'/>
</div>
             <div className='w-[50px] h-[50px] md:w-[80px]  md:h-[80px] lg:w-[100px] lg:h-[100px]'><Image src={im7} alt="image 1" className='object-cover !h-full !w-full'/>
</div>
          </div>

      </div>
     <div className='w-[50px] h-[50px] md:w-[80px]  md:h-[80px] lg:w-[160px] lg:h-[160px]'><Image src={im8} alt="image 1" className='object-cover !h-full !w-full'/>
</div>





      </div>
    </div>
  )
}

export default sectionthree

