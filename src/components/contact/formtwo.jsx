// 'use client'
// import dynamic from "next/dynamic";
// import React, { useEffect, useState } from "react";
// import NiceSelect from '../../components/contact/select';
// import { useRouter } from 'next/navigation';
// // import { sendDataToZoho } from "../pages/api/auth";
// // import { Value } from "sass";
// const ContactUsFormMuz = () => {
// //   useEffect(() => {
// //     // const handleScroll = () => {
// //     //   setLoadReCAPTCHA(true);
// //     //   window.removeEventListener("scroll", handleScroll); // Remove listener inside function
// //     // };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
// //   }, []);

//   const [recaptchaValue, setRecaptchaValue] = useState(null);
//   const [formSubmitted, setformSubmitted] = useState(false);
//   const [isSubmitted, setisSubmitted] = useState(false)
//   const [submissionError, setSubmissionError] = useState(null);
//   const [isSubmitDisabled, setisSubmitDisabled] = useState(true);
//   const [recaptchaError, setRecaptchaError] = useState(null); 
//   const router = useRouter();
//   const [formData, setFormData] = useState({

//     firstname: "",
//     lastname:'',
//     email: "",
//     phone: "",
//     Proertytype: "",
//     dob:"",
//     message: "",
//   });

  
// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setisSubmitted(true); // Set loading state

//     // Send form data to the PHP backend
//     if(isSubmitDisabled){
//       setSubmissionError('Please complete the reCAPTCHA first')
//       setisSubmitted(false); // Set loading state
      
//       return;
//     }
//     try {
//       const res = await fetch("/api/auth", {
//         method:"POST", 
//       body: JSON.stringify(formData)
//     })
//     // const res= await sendDataToZoho(formData)
//     console.log(res)
//      // Check if the response indicates success
//      if (res &&  res.ok){
//       // Redirect to thank you page if successful
//       console.log('sucess')
//       router.push('/thank-you');
//       setformSubmitted(true);
//       setisSubmitDisabled(true); 
//     } else {
//       // Show error message if something went wrong
//       alert("Failed to send message."); 
//     }
//   }
// catch(error){
//   setSubmissionError(error.message || "Form submission failed.")
//   alert("Failed to send message.");
//   console.log('Error')
// }
// finally {
//   setisSubmitted(false); // Reset loading state after request completion
// }
//   };

//   const capchahandlechange = async (value)=>{
//   setRecaptchaValue(value)
// setRecaptchaError(null)
// if(!value){
//   setisSubmitDisabled(true)
//   return;
// }
// try{
//   const response= await fetch('/api/verifyRecapcha',{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json',
//     },
//     body: JSON.stringify({recapchatoken:value})
// })
// const data =await response.json()
// if(data.success){
// setisSubmitDisabled(false) 
// console.log(data)
// }

// }catch (error){
//   setisSubmitDisabled(true)
//   setRecaptchaValue(null)
//   setRecaptchaError('Recapcha verification failed.Try again')
// }

//   }  
//   const selectHandler = (selectedOption) => {
//     setFormData({
//       ...formData,
//       Proertytype: selectedOption.value,
//     });
//   };
//   return (
//     <form className='box h-[400px]'>
//  <div className='row'>
        
//         <div className='col-xl-6 flex'>
//           <div className='tp-contact-input mb-10'>
//             <input
//               type='text'
//               className=''
//               name='first name'
//               placeholder='First name'
//               value={formData.firstname}
//             //   onChange={handleChange}
//               required
//             />
//           </div>
//      <div className='tp-contact-input mb-20'>
//             <input
//               type='text'
//               className=''
//               name='last'
//               placeholder='last name'
//               value={formData.lastname}
//             //   onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <div className='col-xl-6 flex'>
//           <div className='tp-contact-input mb-20' >
//             <input
//               type='email'
//               className=''
//               name='email'
//               placeholder='Email address'
//               value={formData.email}
//             //   onChange={handleChange}
//               required
//             />
//           </div>
       
//           <div className='tp-contact-input mb-20'>
//             <input
//               type='text'
//               className=''
//               name='phone'
//               placeholder='Phone Number'
//               value={formData.phone}
//             //   onChange={handleChange}
//               required
//             />
//           </div>
//           </div>
//  <div className='col-xl-6 flex'>
//           <div className='tp-contact-select'>
//             <div className='tp-select-icon'>
//               <NiceSelect
//                 options={[
//                   { value: "Enter name", text: "Enter name" },
//                   { value: "Digital Marketing", text: "Digital Marketing" },
//                   { value: "Website Development", text: "Website Development" },
//                   { value: "UI / UX Design", text: "UI / UX Design" },
//                   { value: "Mobile Apps", text: "Mobile Apps" },
//                   { value: "E-Commerce", text: "E-Commerce" },
//                   { value: "Emerging Technology", text: "Emerging Technology" },
//                 ]}
//                 defaultCurrent={0}
//                 onChange={selectHandler}
//               />
//             </div>
//           </div>
// <div className="tp-contact-input mb-20">
//     <input
//       type="date"
//       name="dob"
//       value={formData.dob}
//     //   onChange={handleChange}
//       className=""
//       required
//     />
//   </div>
// </div>

//         <div className='col-xl-12'>
//           <div className='tp-contact-input mb-20'>
//             <textarea
//               className=''
//               name='message'
//               placeholder='Enter your message'
//               value={formData.message}
//             //   onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//         </div>
//         <div>
     
//         </div>
//         <div className='col-xl-12'>
//           <div className='tp-contact-btn'>
            
    
//             <button

// className={`tp-btn-yellow-lg w-100 flex items-center justify-center ${isSubmitted ? 'disable' : ''}`}
//   type="submit"


//    // Disable the button when submitting
// >
//   {/* Button text */}
//   {!isSubmitted ? (
//     'Get a free consultation'
//   ) : (
//     <>
//     <span className="animate-spin border-2 border-white border-t-transparent rouneded w-5 h-5"></span>
//     <span>Loading...</span>
//   </>
//   )}
// </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default ContactUsFormMuz;


import React from "react"
 const form = ( {className,ref}) => {
    return (
        <div id="webcrumbs" className={`${className}`} ref={ref}>
            <div className="relative h-[100%]   w-full xl:min-w-[50vw] overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-full h-[100%]  md:z-10 backdrop-blur-xs" ></div>
             

                <div className="absolute inset-0 md:z-20  flex flex-col h-[100%]  items-center justify-center ">

                    <div className="lg:grid flex flex-col lg:h-[70%] xl:h-auto  xl:grid-cols-2  gap-2  md:gap-3 relative">
       

                        <div className="relative w-[60vw]  lg:w-auto ">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full py-1 px-2 lg:py-1 md:py-2 md:px-4 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full md:py-2 lg:py-1 md:px-4 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full md:py-2 md:px-4 lg:py-1  py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full md:py-2 md:px-4 py-1 lg:py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <select className="w-full md:py-2 md:px-4 py-1 lg:py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all appearance-none">
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
                            {/* <select className="w-full md:py-2 md:px-4 lg:py-1 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all appearance-none">
                                <option value="" disabled selected className="text-slate-700">
                                
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
                            </select> */}
<input type="date" 

 className="w-full md:py-2 md:px-4 py-1 lg:py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
/>                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <textarea
                                placeholder="Write your message"
                                rows="4"
                                className="w-full md:py-2 lg:py-1 md:px-1 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all resize-none"
                            ></textarea>
                        </div>
 
                        <div className="col-span-1 md:col-span-2 flex justify-center ">
                            <button
                                type="submit"
  className="py-2 px-6  bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] lg:py-1 rounded-4xl"

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
