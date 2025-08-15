
import React from 'react';
import Section from './smallsection';

const IntroducingTwo = ({ima,className,className1}) => {
    return (
        <section className=' flex flex-col items-center justify-center w-full overflow-hidden lg:py-10 bg-[#0D1028]'>
            <h2 className='lg:text-[50px] text-center text-white md:text-[40px] text-[30px] font-bold'>
        From Vision to Completion
            </h2>
            <Section ima={ima} className={className} className1={className1}/>
        </section>
    );
};

export default IntroducingTwo;
