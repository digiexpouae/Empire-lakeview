import React from 'react'
import Image from 'next/image'
import desktopImg from '../../../public/assets/award-img.png'
import mobileImg from '../../../public/assets/award-img-mobile.png'

const SectionTwo = () => {
  return (
    <div className="relative w-full">
      {/* Desktop Image - hidden on mobile */}
      <div className="hidden md:block relative w-full  md:h-[500px] xl:h-[600px]">
        <Image
          src={desktopImg}
          alt="Desktop Award"
          fill
          className="object-cover" // changed from object-contain
          quality={100}
          priority
          sizes="100vw"
        />
      </div>

      {/* Mobile Image - hidden on desktop */}
      <div className="md:hidden relative w-full aspect-[14/16]">
        <Image
          src={mobileImg}
          alt="Mobile Award"
          fill
          className="object-contain" // fixed typo from object-conatin
          quality={100}
          priority
          sizes="100vw"
        />
      </div>
    </div>
  )
}

export default SectionTwo
