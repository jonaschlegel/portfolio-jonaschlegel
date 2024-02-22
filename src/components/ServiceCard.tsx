import Image from 'next/image';
import type { FC } from 'react';

import ButtonSecondary from '@/shared/Buttons/ButtonSecondary';
import type { ServiceType } from '@/types/global';

const ServiceCard: FC<ServiceType> = ({ image, name, price }) => {
  return (
    <div className="group relative flex cursor-pointer flex-col justify-between py-8 md:flex-row ">
      <div className="basis-1/2">
        <p className="font-merriweather text-base font-semibold tracking-tight md:text-3xl">
          {name}
        </p>
        {price ? (
          <p className="text-sm text-neutral-300 md:text-base">
            Starting at ${price}/ Hour
          </p>
        ) : (
          <p className="text-sm text-neutral-300 md:text-base">
            Contact for pricing
          </p>
        )}
      </div>
      <div>
        <ButtonSecondary>View Service</ButtonSecondary>
      </div>
      <div className="absolute -top-full right-[15%] z-30 aspect-[4/3]  w-1/2 origin-top-left overflow-hidden rounded-lg opacity-0 transition-all duration-500 group-hover:top-0 group-hover:rotate-3 group-hover:opacity-100 md:w-1/4">
        <Image
          src={image}
          alt="service description"
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
