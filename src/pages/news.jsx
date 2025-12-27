import React from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Slidernews from '../components/Slidernews'
import Navigationslider from '../components/navigationslider'
import Mobileslider from '../components/mobileslider'
import Image from 'next/image'
import HeroSlider from '../common/heroslider'
import Press from '../components/news/pressrelease'
const news = () => {
    return (
        <>
            <Header />
            <div className='h-screen w-full '>
                <HeroSlider
                    className3={'top-2 lg:top-5 md:top-9 xl:top-12'}
                    className2={'!top-[70%] md:!top-[40%] xl:!top-[35%]'}
                    texttwo={'Latest News'}
                    texttwoclass={'xl:!text-[100px] !text-md text-center md:!text-[100px]'}

                    main={true}
                    bottom={'bottom-0 !h-[240px] md:!h-[400px] !w-[85%] md:!w-[70%] lg:!w-[50%] hidden'}
                    cloud={false}
                />

                <div className="absolute inset-0 -z-10">
                    <Image
                        src={'/assets/1e94c7c4bfc77819cbc77ef163f6e6ec3b61cf21.jpg'}
                        fill
                        priority
                        alt="Background"
                        className={`object-cover transition-opacity duration-700`}
                    />
                </div>

                <div className="absolute inset-0 bg-[#002E3C80] z-10 transition-opacity duration-500 opacity-100"></div>


            </div>
            {/* <div className='hidden md:block'>
                <Slidernews href="/news" heading="LATEST NEWS" buttonheading="View All News" />
            </div> */}
            <div className="bg-[#0D1028] pt-24  md:pb-0 md:pt-0">
                <Press />
                {/* <Navigationslider heading={'Feature In'} buttonheading={'View All'} href={'/blogs'} /> */}
                {/* <h2 className='md:hidden block text-center text-white text-3xl font-medium mb-4 '>LATEST NEWS</h2>
                <Mobileslider /> */}
            </div>
            <Footer />

        </>

    )
}

export default news