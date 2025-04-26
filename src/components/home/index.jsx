import React from 'react'
import Heroslider from './heroslider'
import Header from '@/layout/header'
const index = () => {
  return (
    <div className={`bg-[url('/assets/bg.png')] bg-cover bg-center relative h-screen`} > 
        <Header/>
           <Heroslider />
           <div className='absolute left-0 right-0 bottom-0 top-0  bg-[linear-gradient(180deg,rgba(255,255,255,0)_72.8%,white_100%),linear-gradient(180deg,#006583_0%,rgba(0,101,131,0)_100%)] bg-cover bg-no-repeat z-0'></div>
    </div>
  )
}

export default index
