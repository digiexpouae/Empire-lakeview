import React from 'react'
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Heroslider from '../../common/heroslider'
import back from '../../../public/assets/contact.JPG' 
import Image from 'next/image';
import Phone from '../../../public/phone.svg'
import email from '../../../public/mail.svg'
import Form from '../../components/contact/formtwo'
import Mapcontact from '../../components/contact/mapcontact'

const index = () => {
  return (
    <>
      <div className='w-full relative h-[400px] md:h-screen'>
        <Header className='nav-menu absolute z-50'/>
        <Heroslider 
          className='top-[15%]' 
          main={true} 
          cloud={false} 
          Home={false}  
          className2='z-[999] md:!top-50' 
          bottom='bottom-[-60px] hidden'  
          className1='left-[40%] top-2 md:top-10' 
          texttwoclass={'xl:!text-[160px] !font-bold !font-poppins'}
          texttwo='Contact us'  
          overlay={true}
        />
        <Image 
          src={back} 
          className='!left-0 !right-0 !top-0 !bottom-0 w-full h-full object-cover' 
          width={1200} 
          height={1000} 
          alt="Background"
        />
        <div className="absolute inset-0 bg-[#002E3C80] z-10 transition-opacity duration-500 opacity-100"></div>
      </div>
      
      <div className='bg-[#0E1527]'>
        <div className='container mx-auto px-4 py-10 md:py-16 lg:py-20'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16'>
            {/* Contact Info Sectionmm */}
            <div className='w-full lg:w-1/2 flex flex-col gap-6 md:gap-8'>
              <h1 className='text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight'>
                Get in Touch
              </h1>
              
              <p className='text-white text-base md:text-lg lg:text-xl'>
                Are you ready to embark on a journey of unparalleled luxury and innovation? 
                Whether you're interested in exploring our exceptional portfolio, 
                discussing investment opportunities, or seeking expert advice, 
                the Empire Development team is here for you.
              </p>
              
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 md:w-8 md:h-8'>
                    <Image 
                      src={Phone}  
                      className='w-full h-full' 
                      alt="Phone icon"
                    />
                  </div>
                  <p className='text-white text-base md:text-lg'>+971 800 700007</p>
                </div>
                
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 md:w-8 md:h-8'>
                    <Image 
                      src={email}    
                      className='w-full h-full' 
                      alt="Email icon"
                    />
                  </div>
                  <p className='text-white text-base md:text-lg'>info@empiredevelopment.ae</p>
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className='w-full lg:w-1/2'>
              <div className='bg-black/45 rounded-2xl p-4 md:p-6 lg:p-8'>
                <Form className="w-full" />
              </div>
            </div>
          </div>
        </div>
        
        <Mapcontact />
      </div>

      <Footer />
    </>
  )
}

export default index;