import React from 'react'
import swan from '../../public/assets/swan.png'
import horse from '../../public/assets/horse.png'
import mall from '../../public/assets/mall (1).png'
import opera from '../../public/assets/opera.png'
import palm from '../../public/assets/palm jumariah.png'
import buildin from '../../public/assets/buildin.png'
import dubaiframe from '../../public/assets/dubai frame.png'
import plane from '../../public/assets/plane.png'
import burj from '../../public/assets/burj-khalifa (1) (1).png'
import bay from '../../public/assets/bay.png'
import Image from 'next/image'
const icon = ({icons}) => {


  return (
    <div className='w-full flex flex-col items-center justify-center lg:h-[650px]  pb-[30px] '>
    <div className='grid xl:grid-cols-5 place-content-center gap-[20px] lg:grid-cols-4 md:grid-cols-2 mt-[20px] grid-rows-2 place-items-center w-[80%] '>
{      icons.map((elem,index)=>{
    return <div className='flex flex-col items-center justify-center text-white gap-[20px] h-[200px] '>
        <div className=' !w-[80px] flex items-center justify-center !h-[60%]'><Image src={elem.img} width={100} height={100} className={` !h-full ${elem.clas} `} /></div>
     <div className='flex flex-col items-center justify-start text-center h-[40%] w-[210px] '> 
        <span className='text-center font-bold text-[19px] w-[70%] my-heading text-wrap h-[70%] leading-6'>{elem.name}</span>
        <p className='text-[15px] md:text-[18px] h-[30%] mt-3'>{elem.distance}</p>
        </div>   </div>
})
}    </div></div>
  )
}

export default icon
