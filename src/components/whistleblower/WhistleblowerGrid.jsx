import React from 'react';
import Image from 'next/image';
import description from '../mortgage-calculator/calculatordescrip';

const WhistleblowerGrid = () => {
  // Sample data for the grid items
  const gridItems = [
    {
      id: 1,
      title: 'Report Concerns',
      description: "Report any unethical behavior, safety violations, or compliance issues you've witnessed or experienced.",

      icon: '/assets/im1.svg' // Replace with actual icon path
    },
    {
      id: 2,
      title: 'Anonymous Options',
      description: 'You can choose to submit your report anonymously or provide your contact information for follow-up.',
      icon: '/assets/im2.svg' // Replace with actual icon path
    },
    {
      id: 3,
      title: 'Protected Reporting',
      description:"We strictly prohibit retaliation and ensure all reports are handled with complete confidentiality.",
      icon: '/assets/im3.svg' // Replace with actual icon path
    },
 
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#0E1527]">
      <div className="max-w-7xl mx-auto">
     
        
        {/* Flex container with responsive behavior */}
        <div className="flex flex-wrap justify-center items-start gap-8">
          {gridItems.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col items-center rounded border-[white] p-6 bg-[#1E2435] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[calc(50%-2rem)] lg:w-[calc(32%-2rem)] min-w-[280px]"
            style={{border:'1px solid white'}}
          >
              <div className="w-16 h-16 mb-2 flex items-center justify-center">
                {item.icon ? (
                  <Image 
                    src={item.icon} 
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                ) : (
                  <span className="text-2xl">📋</span>
                    )}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 text-center text-white">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhistleblowerGrid;
