import React from 'react'
import MortgageCal from '../components/mortgage-calculator/mortgage-cal'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Heroslider from "../common/heroslider";
import back from '../../public/assets/finance.jpg'
import Image from 'next/image';
import InvestmentCalculator from '../components/InvestmentCalculator/Investment'
const Invesmnetcalculator = () => {
    return (
        <>


            <div className='w-full relative h-screen  '>
                <Header className='nav-menu absolute z-50' />
                <Heroslider
                    className3={'top-2 lg:top-5 md:top-9 xl:top-12'}
                    className2={'!top-[50%] md:!top-[40%] right-0 left-0 xl:!top-[35%]'}
                    texttwoclass={'xl:!text-[100px] !text-md text-center lg:!text-[100px]'}
                    main={true}
                    bottom={'bottom-0 !h-[240px] md:!h-[400px] !w-[85%] md:!w-[70%] lg:!w-[50%] hidden'}
                    cloud={false}
                />
                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center   z-10 transition-opacity duration-500 opacity-80">


                    <h1 className={`md:text-[100px] tracking-tight text-[16vw]  text-center bg-[linear-gradient(180deg,#ffffff_37.98%,#7DB1D1_100%)] bg-clip-text text-transparent font-extrabold `}>
Investment Calculator

                    </h1>

                </div>



                <Image src={back} priority fill className=' object-cover' />


            </div>
            <InvestmentCalculator />

            <Footer />
        </>
    )
}

export default Invesmnetcalculator