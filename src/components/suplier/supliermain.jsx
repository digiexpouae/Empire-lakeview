
import Header from "@/layout/header"
import Footer from "@/layout/footer"
import back from '../../../public/assets/partner.jpg'
import Heroslider from "@/common/heroslider"
import Image from 'next/image'
import SuplierForm from './suplierform'
import Subsection from "./subsection"



const Supliermain=()=>{
    return (
    <div>
    

  <div className='w-full relative h-screen'>
                       <Header className='nav-menu absolute z-50'/>
                       <Heroslider 
                         className='top-[15%] h-screen' 
                         main={true} 
                         cloud={false} 
                         Home={false}  
                         className2='z-[999] !top-62 md:!top-90 lg:!top-55 text-center leading-24' 
                         bottom=' hidden'  
                         className1='left-0  md:top-10' 
                         texttwoclass={'md:!text-[75px] xl:!text-[100px] !font-bold !font-poppins'}
                         texttwo={<>Partner with <br/> Excellence</>}  
                       
                       />
                       <Image 
                         src={back} 
                         className='!left-0 !right-0 !top-0 !bottom-0 w-full h-full object-cover' 
                         width={1200} 
                         height={1000} 
                         alt="Background"
                         priority
                       />
                       <div className="absolute inset-0 bg-[#0E1527B2] z-10 transition-opacity duration-500 opacity-100"></div>
                     </div>
                     <SuplierForm />
                  <Subsection />
                    <Footer />
                

    </div>

)
}
export default Supliermain