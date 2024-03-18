'use client';

import '@glidejs/glide/dist/css/glide.core.css';

import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';
import { useEffect, useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { testimonialsData } from '@/data/content';

import ClientCard from './ClientCard';

const Testimonials = () => {
  const glideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!glideRef.current) return;
    new Glide(glideRef.current, {
      type: 'carousel',
      startAt: 0,
      perView: 1,
    }).mount({ Controls });
  }, []);

  return (
    <div className="container mx-auto py-16">
      <div className="mx-auto md:w-3/4">
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div ref={glideRef} className="glide relative">
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <div className="glide__track mx-auto w-[75%]" data-glide-el="track">
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <ul className="glide__slides">
              {testimonialsData.map((client) => (
                // eslint-disable-next-line tailwindcss/no-custom-classname
                <li className="glide__slide" key={client.name}>
                  <ClientCard {...client} />
                </li>
              ))}
            </ul>
          </div>
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <div
            className="glide__arrows absolute top-1/2 z-40 mb-6 flex w-full -translate-y-1/2 justify-between"
            data-glide-el="controls"
          >
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <button
              type="button"
              aria-label="Previous testimonial"
              data-glide-dir="<"
              className="glide__arrow glide__arrow--left rounded-full border border-primary-accent p-2 text-xl text-primary-accent hover:text-white md:text-4xl"
            >
              <BsArrowLeftShort />
            </button>
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <button
              type="button"
              aria-label="Next testimonial"
              className="glide__arrow glide__arrow--right rounded-full border border-primary-accent p-2 text-xl text-primary-accent hover:text-white md:text-4xl"
              data-glide-dir=">"
            >
              <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
