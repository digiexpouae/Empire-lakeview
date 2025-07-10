
import React from 'react';
import Section from './smallsection';

const IntroducingTwo = ({ima,className,className1}) => {
    return (
        <section className=' flex flex-col items-center justify-center w-full overflow-hidden'>
            <h2 className='my-heading lg:text-[60px] text-center text-white md:text-[40px] text-[30px] font-bold'>
            Successfully Delivered
            </h2>
            <Section ima={ima} className={className} className1={className1}/>
        </section>
    );
};

export default IntroducingTwo;
