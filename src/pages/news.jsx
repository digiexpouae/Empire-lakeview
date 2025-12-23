import React from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Slidernews from '../components/Slidernews'
import Navigationslider from '../components/navigationslider'
import Mobileslider from '../components/mobileslider'
const news = () => {
    return (
        <>
            <Header />
            <div className='h-screen w-full'>
                <Slidernews href="/blogs" btn={false} />
            </div>
            <Navigationslider heading={'Feature In'} buttonheading={'View All'} href={'/blogs'} />
            <Mobileslider />
            <Footer />

        </>

    )
}

export default news