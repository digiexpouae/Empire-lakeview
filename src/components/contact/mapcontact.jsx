import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
const mapcontact = () => {
    const features = [
      {     id: '1', title: 'Sales & Experience Center -', text2: '(Business Bay)', image: '/assets/mapcontact1.png' },
        {   id: '2', title: 'Corporate Office',text2:'(Sheikh Zayed Road)', image: '/assets/mapcontact2.png' },
      ];
      
   
        const [activeFeature, setActiveFeature] = useState('1');
      

      
      
    
        return (
          <div className='h-[500px] lg:h-[800px] w-full  flex items-center justiy-center flex-col'>
              <h1 className='text-[45px] text-center lg:text-[100px] my-heading  text-white font-bold'>Address</h1>
            <div className='flex items-center justify-center w-[90%] md:w-[70%]'>
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}  
                  className='md:py-8 relative h-[30px] md:h-[50px] flex flex-col  items-center  justify-center rounded-button w-full'
                  style={{
                    cursor: 'pointer',
             
                  
                  borderRight:'1px solid white',
                  borderLeft:'1px solid white',
background: activeFeature === feature.id ? 'white' : 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)',
                    color: activeFeature === feature.id ? 'black' : 'black',
                    display: 'flex',
                    flexDirection: 'column',
                  
                  }}
                >
                    <span className='text-[7px] lg:text-[15px] '>
                        {feature.title}
                    </span>
                  <p style={{ marginTop: '5px'}} className=' text-[5px] lg:text-[14px] text-center flex-wrap w-[80%] lg:w-[170px]'>{feature.text2}</p>
                </div>
              ))}
            </div>
      <div className='flex items-center justify-center w-full relative'>
            <div className='h-[200px] md:h-[350px] lg:h-[500px] w-[90%] md:w-[70%] relative'>
              {features.map((feature) =>
                feature.id === activeFeature ? (
                  <Image
                    key={feature.id}
                    src={feature.image}
                    alt={feature.title}
                    width={470} height={470}
                    className='!w-full !h-full !object-cover '
      
                    style={{ width: '100%', height: '400px', objectFit: 'cover',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}
                  />
                ) : null
              )}
        
            </div>
            </div>
          </div>
        );
      }
      


export default mapcontact
