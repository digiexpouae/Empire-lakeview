// import React from 'react';

// const EmailPop = () => {
//   return (
//     <div className="min-h-[30vh] w-[90vw] md:w-[60vw] bg-white rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center">
//       <h1 className="text-xl font-semibold text-center mb-4 md:text-2xl">
//         Get In Touch Now
//       </h1>

//       {/* Email Field */}
//       <div className="w-full max-w-md flex flex-col">
//         <label
//           htmlFor="email"
//           className="mb-2 text-sm font-medium text-black"
//         >
//           Email Address
//         </label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           className="p-3 rounded-full bg-[#00000033] text-black w-full outline-none border border-gray-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default EmailPop;

// import React from 'react';
// import  SVGBOX from '../common/svgbox';
// import Image from 'next/image';
// const EmailPop = () => {
//   return (
//     <div className="relative h-[25vh] lg:h-[40vh] w-[90vw] md:w-[70vw] lg:w-[50vw] bg-white rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center overflow-hidden">
//       <h1 className="text-xl font-semibold text-center mb-4 md:text-2xl">
//         Get In Touch Now
//       </h1>

//       {/* Email Field */}
//       <div className="w-full max-w-md flex flex-col">
//         <label
//           htmlFor="email"
//           className="mb-2 text-sm font-medium text-black"
//         >
//           Email Address
//         </label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           className="p-3 rounded-full bg-[#00000033] text-black md:w-[85%] w-full outline-none border border-gray-300"
//         />
//       </div>
//   <div className="md:col-span-2 flex justify-end w-[65%] lg:w-[80%] py-2">
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#FFF3DC] text-gray-800 px-4 lg:px-6 py-2 rounded-full transition-colors duration-300 cursor-pointer transform text-sm lg:text-base whitespace-nowrap"
//               >
//                 Submit
//               </button>
//             </div>
//       {/* SVG on Right */}
//     <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-[150px] h-[150px] pointer-events-none overflow-hidden">
//   <Image
//     src="/assets/Frame 255.png"
//     alt="Decorative icon"
//     width={80}
//     height={80}
//     className="w-full h-full object-contain"
//   />
// </div>
//     </div>
//   );
// };

// export default EmailPop;
import React from 'react';
import Image from 'next/image';

const EmailPop = () => {
  return (
    <div className="relative min-h-[25vh]  w-[90vw] md:w-[70vw] lg:w-[50vw] bg-white rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-xl md:text-2xl font-semibold text-center mb-4">
        Get In Touch Now
      </h1>

      {/* Email Field */}
      <div className="w-full max-w-md flex flex-col items-start leading-1">
        <label
          htmlFor="email"
          className="mb-2 text-sm font-medium text-black text-[10px] md:text-[12px]"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-1 md:p-2 rounded-full text-[10px] md:text-[12px] bg-[#00000033] text-black w-[90%] lg:w-[85%] xl:w-[95%]  outline-none border border-gray-300"
        />
      </div>

      {/* Submit Button */}
      <div className=" md:w-[70%] w-[80%]  max-w-md flex justify-end pt-4">
        <button
          type="submit"
          className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#FFF3DC] text-gray-800 px-4 md:px-6 py-2 rounded-full transition-colors duration-300 text-xs md:text-sm"
        >
          Submit
        </button>
      </div>

      {/* Decorative SVG Icon (right side) */}
      <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[60px] md:w-[80px] lg:w-[100px] h-auto pointer-events-none">
        <Image
          src="/assets/Frame 255.png"
          alt="Decorative icon"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default EmailPop;


