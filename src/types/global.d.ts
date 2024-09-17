import type { StaticImageData } from 'next/image';

type ProjectType = {
  name: string;
  image: StaticImageData | string;
};

type ServiceType = {
  name: string;
  price?: number;
  image: StaticImageData | string;
  alt: string;
  description: string;
  options?: string[];
};

type ClientType = {
  name: string;
  role: string;
  image: StaticImageData | string;
  comment: string;
};

type StatType = {
  name: string;
  number: string;
};

type SocialType = {
  Icon: IconType;
  href: string;
};
