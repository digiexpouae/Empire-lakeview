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
const icon = () => {
const icons=[{img:swan,name:'Ras al Khor Wild Life Sanctuary',clas:'!w-[65px]',distance:' 5 minutes'},{img:horse,name:'Meydan Racecourse',clas:'!w-[122px]',distance:'10 minutes'},
    {img:burj,clas:'!w-[38px]',name:'Burj Khalifa & Downton Dubai',distance:'15 minutes'},{img:bay,name:'Business Bay',clas:'!w-[70px]',distance:' 12 minutes'},
    {img:plane,name:'Dubai International Airport',clas:'!w-[80px]',distance:' 12 minutes'},{img:mall,name:'The Dubai Mall',clas:'!w-[100px]',distance:' 15 minutes'},{img:opera,name:'Dubai Opera',clas:'!w-[70px]',distance:' 15 minutes'},{img:dubaiframe,name:'Dubai Frame',clas:'!w-[45px]',distance:' 15 minutes'},{img:palm,name:'Palm Jumeirah',clas:'!w-[70px]',distance:'25 minutes'}]

  return (
    <div className='w-full flex flex-col items-center justify-center lg:h-[600px] pb-[30px] '>
    <div className='grid xl:grid-cols-5 place-content-center gap-[20px] lg:grid-cols-4 md:grid-cols-2 mt-[20px] grid-rows-2 place-items-center w-[80%] '>
{      icons.map((elem,index)=>{
    return <div className='flex flex-col items-center justify-center text-white gap-[20px] h-[170px] '>
        <div className='!h-[70px] !w-[80px] flex items-center justify-center'><Image src={elem.img} className={` !h-full ${elem.clas} `} /></div>
     <div className='flex flex-col items-center justify-center w-[210px] '> 
        <span className='text-center font-bold text-[22px] my-heading'>{elem.name}</span>
        <p className='text-[15px] md:text-[20px]'>{elem.distance}</p>
        </div>   </div>
})
}    </div></div>
  )
}

export default icon
