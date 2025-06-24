import React from 'react'
import burj from '../../public/assets/khalifa.png'
import Image from 'next/image'
import Testimonial from '../components/swiperslider'
const testimonials = () => {
  const testimonial=[{
    text:"I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!"
  ,name:'Emily P.',image:'/assets/testi2.png',role:'House Wife'},{ text:"I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!"
  ,name:'Emily P.',image:'/assets/testi2.png',role:'House Wife'},  {text:"I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!"
  ,name:'Emily P.',image:'/assets/testi2.png',role:'House Wife'}]
  return (
    <div className='w-full h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center'>
      <div className='flex items-center justify-center md:gap-24 w-[90%] h-[70%] md:w-[75%] lg:w-[70%] relative bg-white rounded-2xl'>
       
       <div className='absolute w-[30%] md:w-[35%] h-[150px] md:h-[500px] -top-5 md:-top-20 left-0'>
         <div className='h-[230px] md:h-[430px] lg:h-[500px]  relative overflow-hidden '><Image src={burj}  className='!h-[100%] !w-full object-cover   rounded-bl-2xl ' style={{objectPosition:'70% center'}}
         />
         </div>
         </div>
        <div className=' w-[70%] md:w-[65%] absolute right-0'>
        <Testimonial testimonial={testimonial}/></div>
        </div>
    </div>
  )
}
 
export default testimonials
