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
const icons=[{img:swan,name:'Ras al Khor Wild Life Sanctuary',distance:' 5 minutes'},{img:horse,name:'Meydan Racecourse',distance:'10 minutes'},
    {img:burj,name:'Burj Khalifa & Downton Dubai',distance:'15 minutes'},{img:bay,name:'Business Bay',distance:' 12 minutes'},
    {img:plane,name:'Dubai International Airport',distance:' 12 minutes'},{img:mall,name:'The Dubai Mall',distance:' 15 minutes'},{img:opera,name:'Dubai Opera',distance:' 15 minutes'},{img:dubaiframe,name:'Dubai Frame',distance:' 15 minutes'},{img:palm,name:'Palm Jumeirah',distance:'25 minutes'}]

  return (
    <div className='w-full flex flex-col items-center justify-center h-[400px]'>
    <div className='grid xl:grid-cols-5 place-content-center lg:grid-cols-4 grid-rows-2 place-items-center w-[80%] '>
{      icons.map((elem,index)=>{
    return <div className='flex flex-col items-center justify-center text-white gap-[20px] h-[170px] '>
        <div ><Image src={elem.img} className='object-cover w-full h-full' width={70} height={70}  /></div>
     <div className='flex flex-col items-center justify-center w-[170px] '>
        <span className='text-center font-bold'>{elem.name}</span>
        <p>{elem.distance}</p>
        </div>   </div>
})
}    </div></div>
  )
}

export default icon
