'use client';

import React from 'react';
import Testimonial from '../components/swiperslider';

const testimonials = () => {
  const testimonial = [
    {
      text: "I had an excellent experience with Empire Developer Dubai! Their team is professional, knowledgeable, and truly understands the Dubai real estate market. The entire process was smooth, and they provided great support from start to finish. Highly recommended for anyone looking for reliable property investment opportunities in Dubai!",
      name: 'Umer K',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
    {
      text: "I recently had the pleasure of working with a fantastic developer in Dubai, and I cannot recommend them highly enough. Their attention to detail and commitment to quality truly set them apart in a competitive market.",
      name: 'Hassan A',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
    {
      text: "A very respectable company, honest with their deadlines and excellent prices. I was honored to deal with them.",
      name: ' Al Abbasi',
      image: '/assets/testi2.png',
      role: 'House Wife',
    },
  ];

  return (
    <div className="w-full py-16 px-4 flex items-center justify-center">
      <div
        className="rounded-2xl w-full h-full  max-w-5xl px-6 py-10 flex items-center justify-center shadow-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/testbg.png')", // replace with your image
        }}
      >
        <div className="bg-transparent p-1 justify-center h-[75%]  rounded-xl w-full">
          <Testimonial testimonial={testimonial} />
        </div>
      </div>
    </div>
  );
};

export default testimonials;
