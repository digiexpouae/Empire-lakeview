'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsNavigation = () => {
  const projects = [
    { id: 1, name: 'Empire Lakeviews', image: '/assets/lake.jpg', link: '/lakeviews' },
    { id: 2, name: 'Empire Livings', image: '/assets/live.png', link: '/EMPliving' },
    { id: 3, name: 'Empire Estates', image: '/assets/estate.jpg', link: '/EMPEstates' },
    { id: 4, name: 'Empire Residence', image: '/assets/plazoresidence.png', link: '/Empireresidence' },
    { id: 5, name: 'Plazo Residence', image: '/assets/plazores.png', link: '/plazoresidence' },
    { id: 6, name: 'Plazo Heights', image: '/assets/plazoheihtts.png', link: '/plazoheights' },
  ];

  const [activeImage, setActiveImage] = React.useState(projects[0].image);

  return (
    <div className="w-full rounded-2xl py-10 px-8 sm:px-6 lg:px-12" style={{ background: 'linear-gradient(115.56deg, #FFFFFF 63.61%, #DDF7FF 108.05%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Project List */}
          <div className="w-full lg:w-1/2  space-y-2">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={project.link}
                className="block group"
                onMouseEnter={() => setActiveImage(project.image)}
              >
                <div className="px-6 py-2 text-xl text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-200">
                  {project.name}
                </div>
              </Link>
            ))}
          </div>
          
          {/* Project Image */}
          <div className="w-full lg:w-[35%]">
            <div className="relative h-86 rounded-xl overflow-hidden">
              <Image
                src={activeImage}
                alt="Project Preview"
                fill
                className="object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsNavigation;
