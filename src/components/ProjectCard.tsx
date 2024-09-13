'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { useState } from 'react';

import type { ProjectType } from '@/types/global';

import ProjectOverlay from './ProjectOverlay';

const ProjectCard: FC<ProjectType> = ({ image, name }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <div className="group relative col-span-12 aspect-[4/3] cursor-pointer overflow-hidden rounded-lg md:col-span-6">
      <Image
        src={image}
        alt="project title"
        fill
        className="object-cover"
        sizes="100%"
      />
      <div className="absolute bottom-0 w-full bg-black/50 p-4 text-center text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <p>{name}</p>
      </div>

      {isOverlayVisible && <ProjectOverlay name={name} />}

      <button
        type="button"
        onClick={() => setIsOverlayVisible(true)}
        className="rounded bg-green-500 p-2 text-white"
      >
        Open Overlay
      </button>
    </div>
  );
};

export default ProjectCard;
