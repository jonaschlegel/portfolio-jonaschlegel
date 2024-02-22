import Image from 'next/image';
import type { FC } from 'react';

import type { ProjectType } from '@/types/global';

const ProjectCard: FC<ProjectType> = ({ image, name }) => {
  return (
    <div className="relative col-span-12 aspect-[4/3] overflow-hidden rounded-lg md:col-span-6">
      <Image
        src={image}
        alt="poject title"
        fill
        className="object-cover"
        sizes="100%"
      />
      <div className="absolute bottom-0 opacity-0">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
