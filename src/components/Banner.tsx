import type { FC } from 'react';

import { bannerData } from '@/data/content';

import BannerText from './BannerText';

const Banner: FC = () => {
  return (
    <div className="mb-8 bg-primary-accent py-3 text-neutral-950">
      <div className="mx-auto lg:container">
        <div className="flex flex-wrap items-center justify-around gap-2 px-4 md:flex-nowrap md:justify-between">
          {bannerData.map((bannerText) => {
            return <BannerText key={bannerText}>{bannerText}</BannerText>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
