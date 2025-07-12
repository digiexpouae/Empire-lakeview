'use client';
import { useState } from 'react';
import Image from 'next/image';

const features = [
  { id: 'pools', title: 'POOLS', icon: '/assets/Group 71603.png', image: '/assets/LUXURY1.webp' },
  { id: 'solar', title: 'Rooftop Solar Park', icon: '/assets/Layer_2.png', image: '/assets/LUXURY2.webp' },
  { id: 'cinema', title: 'Outdoor Cinema', icon: '/assets/Vector2.png', image: '/assets/LUXURY3.webp' },
  { id: 'tennis', title: 'Padel Tennis Court', icon: '/assets/Layer_3.png', image: '/assets/LUXURY4.webp' },
  { id: 'more', title: 'And Much More', icon: '/assets/Layer_4.png', image: '/assets/LUXURY5.webp' },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState('pools');

  return (
    <div className='h-[450px] md:h-[800px] w-full mt-10 relative'>
      <h1 className='text-[36px] md:text-[100px] text-center my-heading text-white font-bold'>
        Luxury Amenities
      </h1>

      {/* Icons / Tabs */}
      <div className="flex flex-wrap items-center justify-center border-t border-white w-full">
  {features.map((feature) => (
    <div
      key={feature.id}
      onClick={() => setActiveFeature(feature.id)}
      className={`py-3 px-2 h-[80px] md:h-[120px] flex flex-col items-center justify-center cursor-pointer transition-colors duration-200`}
      style={{
        background: activeFeature === feature.id
          ? 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)'
          : 'transparent',
        color: activeFeature === feature.id ? 'black' : 'white',
        borderRight: '1px solid white',
        borderLeft: '1px solid white',
        width: '20%'  // Ensures 5 items fit per row
      }}
    >
      <Image
        src={feature.icon}
        alt={feature.title}
        width={40}
        height={40}
        className='!w-[24px] !h-[24px] md:!w-[40px] md:!h-[40px]'
        loading="lazy"
      />
      <p className='text-[10px] md:text-[14px] text-center mt-1 w-full'>
        {feature.title}
      </p>
    </div>
  ))}
</div>


      {/* Active Feature Image */}
      <div className='h-[400px] md:h-[600px] w-full'>
        {features.map((feature) =>
          feature.id === activeFeature ? (
            <Image
              key={feature.id}
              src={feature.image}
              alt={feature.title}
              width={1000}
              height={600}
              className='!w-full !h-full object-cover'
              loading='lazy'
            />
          ) : null
        )}
      </div>

      {/* Bottom Gradient */}
      <div
        className='absolute left-0 right-0 bottom-0 w-full h-[150px] md:h-[350px] z-[999]'
        style={{
          background: 'linear-gradient(180deg, rgba(0, 46, 60, 0) 50%, #0E1527 97%)'
        }}
      ></div>
    </div>
  );
}
