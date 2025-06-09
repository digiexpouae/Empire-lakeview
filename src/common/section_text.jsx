import React from 'react'

const section_text = ({text,className,heading,text1,classNameH,classNamemain,footer}) => {
  return (
    <div className={`w-full flex items-center justify-center md:h-[560px] h-[400px] ${classNamemain}`}>
        <div className={`w-[80%] text-center ${footer}`}>
          {heading && 
          
          <h2 className={`my-heading heading py-5 ${classNameH}`}>{text1}</h2>
          }
        <span className={`text-white my-heading lg:text-[45px] md:text-[40px] text-[15px] md:leading-15 ${className}`}>{text}</span>
        </div>
    </div>
  )
}

export default section_text;
