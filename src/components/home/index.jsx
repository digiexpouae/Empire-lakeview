import React, { useState } from 'react'
import Heroslider from './heroslider'
import Header from '@/layout/header'
import Section_two from './section_two'
import Section_three from './section_three'
import Footer from '@/layout/footer'
import Introducing from './introducing'
const index = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleAllVisible = () => {
    setShowFooter(true); // ✅ When SectionThree is done, show footer
  };

  return (
    <div className={`bg-[url('/assets/b.png')] bg-cover bg-center relative h-[1100px]`} > 
        <Header/>
           <Heroslider />
           <div className='bg-[#002E3C]'>

           <Section_two />
           <Introducing />
           <Section_three onAllVisible={handleAllVisible}/>
           </div>
           {showFooter &&
           <Footer style={{zIndex:'50',position:'absolute'}} />}
    </div>
  )
}

export default index
