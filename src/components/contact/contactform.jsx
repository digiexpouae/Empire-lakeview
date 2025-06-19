import React from 'react'
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Heroslider from '../../common/heroslider'
import back from '../../../public/assets/45d913f12993a0bc7cad58f1beecea86157f951b.jpg' 
import Image from 'next/image';
import Phone from '../../../public/phone.svg'
import email from '../../../public/mail.svg'
import Form from '../../components/contact/formtwo'
import Mapcontact from '../../components/contact/mapcontact'

const index = () => {
  return (
    <>
  <div className='w-full relative md:h-[600px] h-[400px]'>
        <Header className='nav-menu absolute z-50'/>
            <Heroslider className={'top-[15%]'} main={true} cloud={false} Home={false}   className2={'z-[999]'} bottom={'bottom-[-60px] hidden'}  className1={' left-[40%] top-2 md:top-10'}            className2={'!top-[23%] '}
 texttwo={'Contact'}  overlay={true}/>
         <Image src={back} className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' width={1200} height={1000} />
         <div className="absolute inset-0 bg-[#002E3C80] z-10 transition-opacity duration-500 opacity-100"></div>
          </div>
        <div className='bg-[#0E1527]'>
        <div className='flex  items-center justify-center w-full py-[40px] md:py-[60px] lg:h-[800px] '>
          <div className='flex justify-center w-[90%] items-center lg:flex-row flex-col  lg:gap-[60px]'>
            <div className='flex flex-col gap-[20px] md:w-[80%] lg:w-[45%]'>
              <div><h1 className='text-[45px] md:text-[75px] text-white font-bold leading-19  my-heading '>
                Get in 
                Touch</h1></div>

            <div><p className='text-white my-heading text-[15px] md:text-[20px] text-start'>Are you ready to embark on a journey of unparalleled luxury and innovation? Whether you're interested in exploring our exceptional portfolio, 
              discussing investment opportunities, or seeking expert advice, the Empire Development team is here for you.</p></div>
              <div className=' flex w-full mitems-center  gap-[10px]'> 
              <div className='w-[30px] h-[30px]'><Image src={Phone}  className=' !h-full !w-full'/>              </div>
              <p className='text-white text-[15px] my-heading'>+971 800 700007</p>


            </div>
            <div className='flex w-full items-center  gap-[10px]'>
                 <div  className='w-[30px] h-[30px]'><Image src={email}    className=' !h-full !w-full'/>   </div>
                 <p className='text-white text-[15px] my-heading'>info@empiredevelopment.ae</p>
              

            </div>
              </div>

    <div className='flex w-[90%] lg:w-[55%] xl:w-[45%] h-[550px] md:h-[800px] lg:h-[500px] items-end justify-end'><Form className={'lg:w-full bg-black/45 rounded-3xl flex  flex-col items-center justify-center    w-[100%] xl:h-[100%] h-[90%] md:h-[75%]  ' } /></div>


          </div>
  
          </div>    
              <Mapcontact />

</div>

          <Footer />
          </>
  )
}

export default index;
