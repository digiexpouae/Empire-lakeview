import React from 'react'

const section_text = ({text}) => {
  return (
    <div className='w-full flex items-center justify-center md:h-[700px] h-[400px]'>
        <div className='w-[80%] text-center'>
        <span className='text-white my-heading md:text-[45px] text-[15px] md:leading-15'>{text}</span>
        </div>
    </div>
  )
}

export default section_text;
