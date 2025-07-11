'use client'; // Only needed if you're using Next.js 13+ App Router with client components
import { useState } from 'react';

import Image from 'next/image';


const features = [
{     id: 'pools', title: 'POOLS', icon: '/assets/Group 71603.png', image: '/assets/LUXURY1.webp' },
  {   id: 'solar', title: 'Rooftop Solar Park', icon: '/assets/Layer_2.png', image: '/assets/LUXURY2.webp' },
  {   id: 'cinema',title: 'Outdoor Cinema', icon: '/assets/Vector2.png', image: '/assets/LUXURY3.webp' },
  {   id: 'tennis', title: 'Padel Tennis Court', icon: '/assets/Layer_3.png', image: '/assets/LUXURY4.webp' },
  {  id:'more', title: 'And Much More', icon: '/assets/Layer_4.png', image: '/assets/LUXURY5.webp' },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState('pools');

  return (
    <div className='h-[500px] md:h-[800px] w-full mt-10 relative'>
        <h1 className='text-[45px] text-center lg:text-[100px] my-heading  text-white font-bold'>Luxury Aminites</h1>
      <div className='flex items-center justify-center' style={{ overflowX: 'auto',borderTop:'1px solid white' }}>
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className='py-6 md:px-2 relative h-[70px] md:h-[120px] flex flex-col items-center justify-center'
            style={{
              cursor: 'pointer',
       
            
            borderRight:'1px solid white',
            borderLeft:'1px solid white',
              background: activeFeature === feature.id ? 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)' : 'transparent',
              color: activeFeature === feature.id ? 'black' : 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '50px',
            
            }}
          >
              <Image src={feature.icon} alt={feature.title} priority className='md:!w-[40px] md:!h-[40px] !w-[20px] !h-[20px] ' width={40} height={400} />
            <p style={{ marginTop: '5px'}} className='text-[10px] md:text-[14px] text-center w-[60px] md:w-[90px]'>{feature.title}</p>
          </div>
        ))}
      </div>

      <div className='h-[400px] md:h-[600px] w-full '>
        {features.map((feature) =>
          feature.id === activeFeature ? (
            <Image
              key={feature.id}
              src={feature.image}
              alt={feature.title}
              width={470} height={470}
              className='!w-full !h-full !object-cover'

            />
          ) : null
        )}

      </div>
      <div className='absolute left-0 right-0 bottom-0 w-full  z-[999] h-[350px] 
'style={{background: 'linear-gradient(180deg, rgba(0, 46, 60, 0) 50%, #0E1527 97%)'
}}></div>
    </div>
  );
}
