'use client'

import React from "react"
 const form = ( {className,ref}) => {
    return (
        <div
        className=" xl:h-[450px] md:h-screen  bg-cover bg-top flex items-center justify-center px-4 py-12"
        style={{
          background : 'transparent', // 🔁 place your background image in public/bg.jpg
        }}
      >
        <div className="bg-[#0E1527CC]/50 backdrop-blur-sm rounded-xl p-8 md:p-12 w-full max-w-4xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
            Fill the Form
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded-full bg-white/20  text-white placeholder-white outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            />
            <input
              type="text"
              placeholder="Property Type"
              className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            />
            <input
              type="text"
              placeholder="Budget"
              className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            />
            <textarea
              placeholder="Write your message"
              rows="4"
              className="p-4 rounded-2xl bg-white/20 text-white placeholder-white md:col-span-2 outline-none resize-none"
            ></textarea>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#FFF3DC] text-gray-800 px-4 lg:px-6 py-2 rounded-full transition-colors duration-300 cursor-pointer transform text-sm lg:text-base whitespace-nowrap"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}
 export default form
