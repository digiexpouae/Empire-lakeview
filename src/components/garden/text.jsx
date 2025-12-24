import React from 'react'

const text = () => {
  return (

    <div className='mb-12'>
      <div className='max-w-4xl md:leading-10 mx-auto pt-16 pb-4 px-4 text-center text-xl md:text-3xl font-semibold text-[#FFFFFF]'>Empire Gardens stands tall in Dubai Land Residence Complex with 13 floors, featuring podium amenities, pools, gyms, duplex apartments, and dedicated parking levels, creating a vertical community shaped around
        comfort, leisure, and contemporary urban living</div>

      <div className='flex justify-center'>
        <a
          href="/files/Digital Brochure - Empire Gardens DLRC_compressed.pdf"
          className="bg-gradient-to-r from-[#CCAB64] text-center to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[200px] py-1 rounded-full transition-colors duration-300 text-sm lg:text-base mx-auto md:mx-0 block"

          download
        >
          Download Brochure
        </a>
      </div>
    </div>
  )
}

export default text