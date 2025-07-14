import MortgageCalculator from "./mortgageCalculator";
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Heroslider from "@/common/heroslider";
import back from '../../../public/assets/finance.jpg'
import Image from "next/image";
const calculator=()=>{
    return(
        <div>
               <div className='w-full relative md:block hidden md:h-screen h-[500px] '>
                    <Header className='nav-menu absolute z-50'/>
                        <Heroslider  />
                     <Image src={back} priority className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
                     <div className="absolute inset-0 bg-[#0e1527de] bg-opacity-[0.3]  z-10 transition-opacity duration-500 opacity-100"></div>
                     <MortgageCalculator className={'absolute inset-0 z-20'}/>
                      </div>
            <Footer/>

            
      
        </div>
    )   
}
export default calculator