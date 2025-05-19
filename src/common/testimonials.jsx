import React from 'react'
import burj from '../../public/assets/burj.png'
import Image from 'next/image'
import Testimonial from '../components/swiperslider'
const testimonials = () => {
  const testimonial=[{
    text:"I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!"
  ,name:'Emily P.',image:'/assets/testi2.png',role:'House Wife'},{ text:"I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!"
  ,name:'Emily P.',image:'/assets/testi2.png',role:'House Wife'},  {text:"I've never been so excited about spices until I discovered . Their spices have transformed my home cooking. The flavors are bold, authentic, and just what I need to create restaurant-quality meals. It's like having a spice bazaar right in my kitchen!"
  ,name:'Emily P.',image:'/assets/testi2.png',role:'House Wife'}]
  return (
    <div className='w-full h-[400px]  md:h-[800px] flex items-center justify-center'>
      <div className='flex items-center justify-center md:gap-24 w-[90%] h-[50%] md:w-[70%]  bg-white rounded-2xl'>
        <div className='h-[150px] md:h-[400px] w-[20%] md:w-[30%] relative '><Image src={burj}  className='!h-[100%] !w-full object-cover '/></div>
        <div className=' w-[80%] md:w-[60%]'>
        <Testimonial testimonial={testimonial}/></div>
        </div>
    </div>
  )
}
 
export default testimonials
