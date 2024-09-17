import { heroSectionData } from '@/data/content';
// app/contact/page.tsx
import Image from 'next/image';
import ContactFormClient from '../../components/ContactFormClient';

export default function ContactPage() {
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
      <h1 className="mb-3 text-center font-merriweather text-3xl font-bold md:text-5xl">
        I would love to help.
      </h1>
      <p className="mb-10 text-center">
        Reach out and I will get in touch within 24 hours.
      </p>
      <ContactFormClient />
    </div>
  );
}
