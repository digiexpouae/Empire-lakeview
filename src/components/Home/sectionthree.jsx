import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    logo: '/assets/cardlogo.jpg',
    text: 'Empire Lakeviews by Empire Developments is a luxury residential project located in Liwan, Dubailand, Dubai. This 29-storey development offers 604 units, including studios, 1- and 2-bedroom apartments, & 3-bedroom duplexes, with many units featuring private pools.',
    btn: 'View Project',
    im: '/assets/lakeview.jpg',
    href: '/lakeviews',
  },
  {
    logo: '/assets/cardlogo3.png',
    text: 'Empire Living offers contemporary apartments in a vibrant community, featuring modern amenities, lush landscapes, and easy access to city hotspots.',
    btn: 'View Project',
    im: '/assets/empliving.jpg',
    href: '/EMPliving',
  },
  {
    logo: '/assets/cardlogo2.png',
    text: 'Empire Estates presents premium residences with elegant designs, spacious layouts, and a focus on family living in a prime Dubai location.',
    btn: 'View Project',
    im: '/assets/empestates.jpg',
    href: '/EMPEstates',
  },
];

const SectionThree = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#00546E] my-heading">Our Latest Projects</h2>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg max-w-xs w-full flex flex-col items-center p-6 relative z-10">
            <div className="w-16 h-16 mb-4">
              <Image src={project.logo} alt="Project Logo" width={64} height={64} className="object-contain rounded-full" />
            </div>
            <div className="w-full h-48 relative mb-4">
              <Image src={project.im} alt="Project Image" fill className="object-cover rounded-lg" />
            </div>
            <p className="text-gray-700 text-sm mb-4 text-center">{project.text}</p>
            {project.href.startsWith('http') ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] px-4 py-2 rounded-full transition-colors duration-300 transform text-sm font-semibold block text-center shadow-md"
              >
                {project.btn}
              </a>
            ) : (
              <Link href={project.href} legacyBehavior>
                <a className="mt-3 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#E5C98C] text-gray-800 w-[120px] px-4 py-2 rounded-full transition-colors duration-300 transform text-sm font-semibold block text-center shadow-md">
                  {project.btn}
                </a>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
