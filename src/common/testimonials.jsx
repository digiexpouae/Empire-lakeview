'use client';

import React from 'react';
import Testimonial from '../components/swiperslider';

const testimonials = () => {
  const testimonial = [
    {
      text: "I had an excellent experience with Empire Developer Dubai! Their team is professional, knowledgeable, and truly understands the Dubai real estate market. The entire process was smooth, and they provided great support from start to finish. Highly recommended for anyone looking for reliable property investment opportunities in Dubai!",
      name: 'Umer Khan',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
    {
      text: "I had an excellent experience with Empire Developer Dubai! Their team is professional, knowledgeable, and truly understands the Dubai real estate market.",
      name: 'Omer Zai',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
    {
      text: "İt was a wonderful visit at Empire Development great project and awesome payment plans We met with mr. mohammad abdullah which was very helpful and knowledgeable wish them very success and I am sure will do great bussiness with them.",
      name: 'Jarir Altaha',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
  ];

  return (
    <div className="w-full py-16 px-4 flex items-center justify-center">
      <div
        className="rounded-2xl w-full  max-w-5xl px-6 md:py-10 flex items-center justify-center shadow-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/testbg.png')", // replace with your image
        }}
      >
        <div className="bg-transparent p-1 justify-center rounded-xl w-full">
          <Testimonial testimonial={testimonial} />
        </div>
      </div>
    </div>
  );
};

export default testimonials;
