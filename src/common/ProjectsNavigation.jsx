'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsNavigation = () => {
  const projects = [
    { id: 1, name: 'Empire lakeviews', image: '/assets/lake.jpg', link: '/lakeviews' },
    { id: 2, name: 'Empire living', image: '/assets/live.png', link: '/live' },
    { id: 3, name: 'Empire Estate', image: '/assets/estate.jpg', link: '/EMPEstates' },
    { id: 4, name: 'Empire Residence', image: '/assets/plazoresidence.png', link: '/Empireresidence' },
    { id: 5, name: 'Plazo Residence', image: '/assets/plazores.png', link: '/plazoresidence' },
    { id: 6, name: 'Plazo Heights', image: '/assets/plazoheihtts.png', link: '/plazoheights' },
  ];

  const [activeImage, setActiveImage] = React.useState(projects[0].image);

  return (
    <div className="w-full bg-white border rounded-lg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
    
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Project List */}
          <div className="w-full lg:w-1/2 space-y-2">
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
          <div className="w-full lg:w-1/2">
            <div className="relative h-96 rounded-xl overflow-hidden">
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
