import Image from 'next/image';
import type { FC } from 'react';

import { bannerData, jonaImage } from '@/data/content';

import BannerText from './BannerText';

const Banner: FC = () => {
  return (
    <div className="mb-8 bg-yellow-100 py-3 text-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
          <div className="flex-1">
            {bannerData.map((bannerText) => (
              <BannerText key={bannerText}>{bannerText}</BannerText>
            ))}
          </div>
          <div className="shrink-0">
            <div className="relative aspect-square size-32 overflow-hidden rounded-full lg:size-48">
              <Image src={jonaImage} alt="jona" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
