import Image from 'next/image';
import React from 'react';

import { heroSectionData } from '@/data/content';
import ButtonPrimary from '@/shared/Buttons/ButtonPrimary';

import Stats from './Stats';

const Hero = () => {
  return (
    <div className="container relative mx-auto mb-0 pb-0 pt-4 lg:pb-36">
      <div className="relative mb-4 aspect-[4/1] w-full overflow-hidden rounded-[2.5rem]">
        <Image
          src={heroSectionData.bgImage}
          alt="hero header"
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="space-y-6 md:basis-[40%] 2xl:basis-[35%]">
          <p className="font-merriweather text-5xl font-bold leading-snug tracking-tight xl:text-[4.5rem]">
            {heroSectionData.heading}
          </p>
          <p className="tracking-tight text-neutral-300">
            {heroSectionData.text}
          </p>
          <div>
            <ButtonPrimary className="mb-5">Let&apos;s Talk</ButtonPrimary>
          </div>
        </div>
        <div>
          <Stats stats={heroSectionData.statsData} />
        </div>
      </div>
      <div className="relative bottom-0 mb-0 aspect-square w-full overflow-hidden pt-8 md:absolute md:left-[40%] md:aspect-[4/6] md:h-[75%] md:w-auto md:pt-0 xl:h-full">
        <Image
          src={heroSectionData.heroImage}
          alt="hero header"
          fill
          className="object-contain hover:opacity-60"
        />{' '}
      </div>
    </div>
  );
};

export default Hero;
