import React from 'react';

const ChannelPartners = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FAECC9] to-[#fff] py-16 px-4">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Channel Partners</h1>
    <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-xl">
      Join our network of trusted channel partners and unlock exclusive opportunities with Empire Developments. Register as a broker/agency to collaborate with us on premium real estate projects in Dubai.
    </p>
    <a
      href="https://empiredevelopments.ae/agency-register"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#CCAB64] hover:bg-[#E5C98C] text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 text-lg"
    >
      Broker Registration
    </a>
  </div>
);

export default ChannelPartners;
