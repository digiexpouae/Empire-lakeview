import React, { useState } from 'react'
import Heroslider from './heroslider'
import Header from '@/layout/header'
import Section_two from './section_two'
import Section_three from './section_three'
import Section from '../../common/section'
import Footer from '@/layout/footer'
import Place from '../../common/places'
import Introducing from './introducing'
import Icon from '../icon'
const index = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleAllVisible = () => {
    setShowFooter(true); // ✅ When SectionThree is done, show footer
  };

  return (
    <div className={`bg-[url('/assets/b.png')] bg-cover bg-center relative h-[1100px] `} > 
        <Header/>
           <Heroslider />
           <div className='bg-[#002E3C]'>

           <Section_two /> 
           <Introducing />
           <Section />
           <Section_three onAllVisible={handleAllVisible}/>
           <Place />
           <Icon />
           </div>
          
           <Footer />
    </div>
  )
}

export default index
