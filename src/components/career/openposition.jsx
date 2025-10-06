'use client';
import { useState } from 'react';
import Image from 'next/image';
import arrow1 from '../../../public/assets/arrow1.png';
import arrow2 from '../../../public/assets/arow2.png';
const jobList = [
  { title: 'HR Executive', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis ut urna maximus fermentum ac vel tortor. Phasellus tristique varius elit, et viverra nulla tristique sed.', button: true },
  { title: 'Sales Executive' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis ut urna maximus fermentum ac vel tortor. Phasellus tristique varius elit, et viverra nulla tristique sed.', button: true },
  { title: 'Admin Support' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis ut urna maximus fermentum ac vel tortor. Phasellus tristique varius elit, et viverra nulla tristique sed.', button: true },
  { title: 'Project Manager' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis ut urna maximus fermentum ac vel tortor. Phasellus tristique varius elit, et viverra nulla tristique sed.', button: true },
];

export default function OpenPositions() {
  const [activeJob, setActiveJob] = useState(null);

  const toggleJob = (index) => {
    setActiveJob(activeJob === index ? null : index);
  };

  return (
    <section className="bg-[#0E1527] text-white px-4 py-12 w-full flex flex-col items-center justify-center relative overflow-hidden">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Open Positions</h2>

        {/* Job Listings */}
        <div className="w-full max-w-2xl rounded-2xl bg-[#1E2435] p-6 md:p-12 shadow-lg relative z-20">
        <div className="flex flex-col gap-3">
          {jobList.map((job, index) => (
            <div
              key={index}
              className={`flex flex-col border-b border-white/20 pb-6 ${
                index === 0 ? 'mb-4' : 'pt-2'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{job.title}</h3>
                </div>
                <div 
                  className="shrink-0 cursor-pointer"
                  onClick={() => toggleJob(index)}
                >
                   <div 
                    className={`w-10 h-10 rounded-full text-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 ${
                      activeJob === index ? 'transform rotate-[-90deg]' : 'transform rotate-0'
                    }`}
                    // style={{
                    //   background: 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)',
                    //   transformOrigin: 'center center',
                    // }}
                  > +
                    {/* <Image
                      src={arrow1}
                      alt="Arrow"
                      className="w-3 h-3 transition-transform duration-300"
                      width={14}
                      height={14}
                    /> */}
                  </div> 
                </div>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeJob === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-sm md:text-base text-white/70 mb-4">{job.description}</p>
                <button 
               
                  className="text-black text-sm px-5 py-2 cursor-pointer rounded-full hover:bg-[#f0dba9] transition-all"
                  style={{ background: 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)' }}
                >
                  Apply Now
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className='career-logo'>
           <Image src="/assets/logo morr.png" alt="Logo" width={500} height={500} />
      </div>
    </section>
  );
}
