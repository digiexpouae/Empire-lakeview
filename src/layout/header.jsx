import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/assets/logo (2).png'
const header = () => {
    const nav=[{name:'Home',link:'/'},{name:'About',link:'/'},{name:'Project',link:'/'},{name:'Broker Registration',link:'/'}]
return(
<>
  <header className="relative z-10 flex justify-between items-center px-8 pt-4 lg:px-16">
  <div className="flex items-center space-x-5">
    {nav.map((elem,index)=>{
      return ( <Link href={elem.link} className="text-white hover:text-yellow-300 transition-colors duration-300">
        {elem.name}
    </Link>)
    })}

  </div>

  <div className="flex-grow flex justify-center">
      <a href="#" className="transform hover:scale-105 transition-transform duration-300">
       <Image src={Logo} height={70}/>
      </a>
  </div>

  <div className="flex items-center space-x-4">
      <Link
          href="#"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full transition-colors duration-300 transform hover:scale-105"
      >
          Contact Us
      </Link>
      <Link
          href="#"
          className="text-white border border-white hover:bg-white hover:text-cyan-800 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
      >
          Login / Register
      </Link>
  </div>
</header>
</>)
}

export default header;
