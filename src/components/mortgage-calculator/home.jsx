import MortgageCalculator from "./MortgageCalculator.jsx";
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Heroslider from "@/common/heroslider";
import back from '../../../public/assets/finance.jpg'
import Image from "next/image";
import Descrip from './calculatordescrip'
const calculator = () => {
    return (
        <div>
            <div className='w-full relative  h-screen  '>
                <Header className='nav-menu absolute z-50' />
                <Heroslider texttwo={"Investment"} />
                <Image src={back} priority className='!left-0 !right-0 !top-0 !bottom-0 w-full h-[100%] ' />
                <div className="absolute inset-0 bg-[#0e1527de] bg-opacity-[0.3]  z-10 transition-opacity duration-500 opacity-100"></div>
                <MortgageCalculator className={'absolute inset-0 z-20'} />

            </div>
            <Descrip />
            <Footer />



        </div>
    )
}
export default calculator