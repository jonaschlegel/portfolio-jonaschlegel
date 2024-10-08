import { projectsData, serviceData } from '@/data/content';
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className="container mx-auto py-16" id="service">
      <div className="mb-6">
        <h2 className="text-center font-merriweather text-2xl font-semibold md:text-5xl">
          {serviceData.heading}
        </h2>
      </div>
      <div className="divide-y divide-neutral-500">
        {serviceData.servicesList.map((service) => {
          const relatedProjects = projectsData.projectsList.filter((project) =>
            project.services.includes(service.name.toLowerCase())
          );

          return <ServiceCard key={service.name} {...service} projects={relatedProjects} />;
        })}
      </div>
    </div>
  );
};

export default Services;
