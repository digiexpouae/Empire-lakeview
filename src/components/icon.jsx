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
 <div className='flex items-center justify-center h-[400px] md:h-[650px]'>
 <div className="grid grid-cols-5 gap-y-2 md:gap-y-10 gap-x-4 w-[90%]  items-center justify-center max-w-7xl">
  {icons.map((elem, index) => {
    const isSecondRow = index >= 6;
    const customPlacement =
      index === 5 ? 'col-start-2' :
      index === 6 ? 'col-start-3' : '';

    return (
   
      <div
        key={index}
        className={`flex flex-col items-center justify-center text-white mt-0 md:mt-[212px] lg:mt-0 h-[150px] md:h-[200px] ${customPlacement}`}
      >
        <div className= 'w-[30px] md:!w-[80px] flex items-center justify-center h-[23%] md:!h-[60%]'>
          <Image
            src={elem.img}
            width={100}
            height={100}
            className={`!h-full ${elem.clas}`}
            alt={elem.name}
          />
        </div>
        <div className='flex flex-col items-center justify-start text-center h-[50%] w-[70px] md:w-[210px]'>
          <span className='text-center font-bold text-[7px] md:text-[19px] w-[70%] my-heading text-wrap h-[70%] leading-3 md:leading-6'>
            {elem.name}
          </span>
          <p className='text-[7px] md:text-[18px] h-[30%] '>{elem.distance}</p>
        </div>
      </div>
    );
  })}
</div>
</div>

  )
}

export default icon
