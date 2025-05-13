// import React from 'react'

// const form = () => {
//   return (
//      <div className="w-full h-[700px] bg-[#002e3c69]" style={{ backdropFilter: 'blur(120)' }}>
//         <form  className='box w-full backdrop-blur-md  h-full'>
//       <div className='row'>
//         <div className='flex'>
//           <div className='tp-contact-input mb-20 border'>
//             <input
//               type='text'
//               className=''
//               name='name'
//               placeholder='Full name'
            
         
//               required
//             />
//           </div>
//             <div className='col-xl-6'>
//           <div className='tp-contact-input border mb-20' >
//             <input
//               type='email'
//               className=''
//               name='email'
//               placeholder='Email address'
       
             
//               required
//             />
//           </div>
//         </div>
//         </div>
      
//             <div className='flex'>
//           <div className='tp-contact-input border mb-20'>
//             <input
//               type='text'
//               className=''
//               name='email'
//               placeholder='email'
            
         
//               required
//             />
//           </div>
//             <div className='col-xl-6'>
//           <div className='tp-contact-input border mb-20' >
//             <input
//               type='phone'
//               className=''
//               name='phone'
//               placeholder='phone'
       
             
//               required
//             />
//           </div>
//         </div>
//         </div>
//      <div className='flex'>
//           <div className='tp-contact-input border mb-20'>
//             <input
//               type='text'
//               className=''
//               name='Property Type'
//               placeholder='Property Type'
            
         
//               required
//             />
//           </div>
//             <div className='col-xl-6'>
//           <div className='tp-contact-input border  mb-20' >
//             <input
//               type='phone'
//               className=''
//               name='Budget'
//               placeholder='Budget'
       
             
//               required
//             />
//           </div>
//         </div>
//         </div>
      
//         <div className='col-xl-12'>
//           <div className='tp-contact-input mb-20'>
//             <textarea
//               className=''
//               name='message'
//               placeholder='Enter your message'
           
   
//               required
//             ></textarea>
//           </div>
//         </div>
    
//         <div className='col-xl-12'>
//           <div className='tp-contact-btn'>
            
    
//             <button

// className={`tp-btn-yellow-lg w-100 flex items-center justify-center `}
//   type="submit"


//    // Disable the button when submitting
// >
//  Submit
// </button>
//           </div>
//         </div>
//       </div>
//     </form>
//     </div>
//   )
// }

// export default form
import React from "react"
 const form = ( {className,ref}) => {
    return (
        <div id="webcrumbs" className={`${className}`} ref={ref}>
            <div className="relative h-[100%]   w-full xl:min-w-[50vw] overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-full h-[100%] xl:bg-[#002E3C80] md:z-10 backdrop-blur-xs" ></div>
             

                <div className="absolute inset-0 md:z-20  flex flex-col h-[100%]  items-center justify-center ">
                    <h2 className="text-[25px] lg:text-[65px]  xl:flex flex-col lg:flex lg:items-center lg:justify-center  lg:h-[30%] h-auto  md:text-5xl my-heading font-bold text-white mb-8">Fill the Form</h2>

                    <div className="xl:grid flex flex-col lg:h-[70%]   xl:grid-cols-2  gap-2  md:gap-4 relative">
       

                        <div className="relative w-[70vw] xl:w-auto ">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full py-1 px-2 md:py-2 md:px-4 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full md:py-2 md:px-4 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full md:py-2 md:px-4 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full md:py-2 md:px-4 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <select className="w-full md:py-2 md:px-4 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all appearance-none">
                                <option value="" disabled selected className="text-slate-700">
                                    Property Type
                                </option>
                                <option value="apartment" className="text-slate-700">
                                    Apartment
                                </option>
                                <option value="house" className="text-slate-700">
                                    House
                                </option>
                                <option value="condo" className="text-slate-700">
                                    Condo
                                </option>
                                <option value="villa" className="text-slate-700">
                                    Villa
                                </option>
                            </select>
                        </div>

                        <div className="relative">
                            <select className="w-full md:py-2 md:px-4 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all appearance-none">
                                <option value="" disabled selected className="text-slate-700">
                                    Budget
                                </option>
                                <option value="100k-300k" className="text-slate-700">
                                    $100K - $300K
                                </option>
                                <option value="300k-500k" className="text-slate-700">
                                    $300K - $500K
                                </option>
                                <option value="500k-1m" className="text-slate-700">
                                    $500K - $1M
                                </option>
                                <option value="1m+" className="text-slate-700">
                                    $1M+
                                </option>
                            </select>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <textarea
                                placeholder="Write your message"
                                rows="4"
                                className="w-full md:py-2 md:px-4 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all resize-none"
                            ></textarea>
                        </div>
 
                        <div className="col-span-1 md:col-span-2 flex justify-center md:mt-2">
                            <button
                                type="submit"
  className="py-2 px-6  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] rounded-4xl"

                            >
                                Submit
                            </button>
                            {/* Next: "Add success notification toast" */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default form
