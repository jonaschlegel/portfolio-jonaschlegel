import ButtonSecondary from '@/shared/Buttons/ButtonSecondary';
import type { ServiceType } from '@/types/global';
import Image from 'next/image';
import type { FC } from 'react';

const ServiceCard: FC<ServiceType> = ({
  image,
  alt,
  name,
  price,
  description,
  options,
  pdfUrl,
}) => {
  return (
    <div>
      <h2 className="mt-8 font-merriweather text-base font-semibold tracking-tight md:text-3xl">
        {name}
      </h2>
      <div className="group relative flex flex-col justify-between py-8 md:flex-row">
        <div className="basis-1/2">
          <p className="mt-2 text-sm text-neutral-400 md:text-base">
            {description}
          </p>
          {options && (
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400">
              {options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="my-10 ml-2 mt-2 w-full md:my-0 md:max-w-xs md:flex-1 lg:max-w-sm">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src={image}
              alt={alt}
              fill
              className="relative left-0 top-5 mt-2 size-full rounded-lg object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="mt-4 flex justify-center">
            <ButtonSecondary pdfUrl={pdfUrl}>
              {price ? (
                <p className="text-sm text-neutral-300 md:text-base">
                  Starting at ${price}/Hour
                </p>
              ) : (
                <p className="my-0 text-sm text-neutral-300 md:text-base">
                  Download Portfolio Section
                </p>
              )}
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
