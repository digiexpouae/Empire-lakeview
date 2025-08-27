import React, {  useEffect, useRef, useState } from 'react'
import Places from './places'
const mainplace=({center_position,Name,markers,Main_marker})=>{
    return(
        <div >
            <div className='flex flex-col items-center justify-center gap-[10px] w-full mt-[60px]'>
            <h2 className='my-heading lg:text-[60px] text-white md:text-[40px] text-[30px] text-center  font-bold' >At the Apex of Luxury </h2>
            <p className=' text-white'>Perfectly Positioned in Liwan, Dubailand</p>  </div>
            <Places center_position={center_position} Name={Name} markers={markers} Main_marker={Main_marker}/>
        </div>
    )
}
export default mainplace;