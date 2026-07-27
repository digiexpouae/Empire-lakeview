import React from 'react'
import { useState } from 'react';
const mapcontact = () => {
    const features = [
      {     id: '1', title: 'Sales & Experience Center -', text2: '(Business Bay)', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19786.293312914153!2d55.23338479706228!3d25.180935624720192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xabb93feac0e679bf%3A0xda03db40a078c7b9!2sEmpire%20Developments%20(Sales%20%26%20Experience%20Center)!5e0!3m2!1sen!2s!4v1785147160694!5m2!1sen!2s' },
        {   id: '2', title: 'Corporate Office',text2:'(Sheikh Zayed Road)', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231243.27272402786!2d54.933691359125035!3d25.095898317003144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa159458e32e2331%3A0x2e059d8abcaf280a!2sEmpire%20Developments%20Corporate%20Office!5e0!3m2!1sen!2s!4v1785147257670!5m2!1sen!2s' },
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
                  
                  // borderRight:'1px solid white',
                  // borderLeft:'1px solid white',
background: activeFeature === feature.id ?  'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)':'white' ,
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
            <div className='h-[200px] md:h-[350px] lg:h-[500px] w-[90%] md:w-[70%] relative overflow-hidden' style={{borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
              {features.map((feature) => (
                <iframe
                  key={feature.id}
                  src={feature.mapSrc}
                  title={feature.title}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={`absolute inset-0 w-full h-full transition-opacity duration-200 ${
                    feature.id === activeFeature ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  style={{ border: 0 }}
                />
              ))}
            </div>
            </div>
          </div>
        );
      }
      


export default mapcontact
