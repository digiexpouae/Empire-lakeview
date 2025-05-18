'use client'; // Only needed if you're using Next.js 13+ App Router with client components
import { useState } from 'react';

import Image from 'next/image';


const features = [
{     id: 'pools', title: 'POOLS', icon: '/assets/Group 71603.png', image: '/assets/476ac42e55311fb8b6ea8d69746a2845def39c6e.jpg' },
  {   id: 'solar', title: 'Rooftop Solar Park', icon: '/assets/Layer_2.png', image: '/assets/f728f3fb6ca226457675b16456cb8c91b3f91f28.jpg' },
  {   id: 'cinema',title: 'Outdoor Cinema', icon: '/assets/Vector2.png', image: '/assets/74647f5fdab1444c45a43b79c6cfe361326e20bc.jpg' },
  {   id: 'tennis', title: 'Padel Tennis Court', icon: '/assets/Layer_3.png', image: '/assets/dc177a16c5fd1c465980e60d1564ccd017052027.jpg' },
  {  id:'more', title: 'And Much More', icon: '/assets/Layer_4.png', image: '/assets/112c8134bf3e48ddf70731a70f55e975ae22e502.jpg' },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState('pools');

  return (
    <div>
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
              <Image src={feature.icon} alt={feature.title} className='md:!w-[40px] md:!h-[40px] !w-[20px] !h-[20px] ' width={40} height={400} />
            <p style={{ marginTop: '5px'}} className='text-[10px] md:text-[14px] text-center w-[60px] md:w-[90px]'>{feature.title}</p>
          </div>
        ))}
      </div>

      <div className='h-[400px] md:h-[500px] w-full relative'>
        {features.map((feature) =>
          feature.id === activeFeature ? (
            <Image
              key={feature.id}
              src={feature.image}
              alt={feature.title}
              width={470} height={470}
              className='!w-full !h-full !object-cover'

              style={{ width: '100%', height: '400px', objectFit: 'cover'}}
            />
          ) : null
        )}
        <div className='absolute left-0 right-0 bottom-0 w-full  z-[999] h-[350px] 
'style={{background: 'linear-gradient(180deg, rgba(0, 46, 60, 0) 50%, #002E3C 97%)'
}}></div>
      </div>
    </div>
  );
}
