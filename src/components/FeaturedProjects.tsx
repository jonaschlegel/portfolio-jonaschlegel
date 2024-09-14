import React from 'react';

import { projectsData } from '@/data/content';

import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto py-16" id="project">
      <div className="mb-6">
        <h2 className="text-center font-merriweather text-2xl font-semibold md:text-5xl">
          {projectsData.heading}
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {projectsData.projectsList.map((project) => {
          return <ProjectCard key={project.name} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
