import Image from 'next/image';
import type { FC } from 'react';

import type { ProjectType } from '@/types/global';

const ProjectCard: FC<ProjectType> = ({ image, name }) => {
  return (
    <div className="group relative col-span-12 aspect-[4/3] overflow-hidden rounded-lg md:col-span-6">
      <Image
        src={image}
        alt="project title"
        fill
        className="object-cover transition duration-300 ease-in-out group-hover:opacity-75"
        sizes="100%"
      />
      {/* Modified classes to change opacity and make visible on hover */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 text-center text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
