
import React from "react"
import Header from "../../layout/header"
import Footer from "../../layout/footer"
import Heroslider from "../../common/heroslider"
import back from "../../../public/assets/career.jpg"
import Image from "next/image"
import Section from './section'
import OpportunitiesForm from "./oppurtunities"
import Open from './openposition'
const career=()=>{

    return(
        <div>
          <div className='w-full md:block  relative h-screen '>
          <Header />
            <Heroslider  
                className='top-[15%] !h-screen'     main={true} 
          cloud={false} 
          Home={false}   bottom={'hidden'}   overlay={true}   texttwo='Careers' 
          texttwoclass={'xl:!text-[130px] !font-bold !font-poppins '}  className2={'!top-50 md:!top-42'}
          />
      <Image src={back} priority className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] object-cover object-center' />
         <div className="absolute inset-0 bg-[#002E3C80] bg-opacity-[0.3]  z-10 transition-opacity duration-500 opacity-100"></div>
            </div>
            <Section />
            <Open />
            <OpportunitiesForm />
            <Footer />
        </div>
    )
}
export default career