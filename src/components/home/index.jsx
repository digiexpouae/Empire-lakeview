import React, { useState } from 'react'
import Heroslider from './heroslider'
import Header from '@/layout/header'
import Section_two from './section_two'
import Section_three from './section_three'
import Footer from '@/layout/footer'
const index = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleAllVisible = () => {
    setShowFooter(true); // ✅ When SectionThree is done, show footer
  };

  return (
    <div className={`bg-[url('/assets/bg.png')] bg-cover bg-center relative h-[500px]`} > 
        <Header/>
           <Heroslider />
           <div className='absolute left-0 right-0 bottom-0 top-0  bg-[linear-gradient(180deg,rgba(255,255,255,0)_72.8%,white_100%),linear-gradient(180deg,#006583_0%,rgba(0,101,131,0)_100%)] bg-cover bg-no-repeat z-0'></div>
           <Section_two />
           <Section_three onAllVisible={handleAllVisible}/>
           {showFooter &&
           <Footer style={{zIndex:'50',position:'absolute'}} />}
    </div>
  )
}

export default index
