import type { StaticImageData } from 'next/image';

type ProjectType = {
  id: string;
  name: string;
  slug: string;
  image: StaticImageData;
  description: string;
  services: string[];
  isFeatured: boolean;
};

type ServiceType = {
  id: string;
  slug: string;
  name: string;
  description: string;
  alt: string;
  price?: number;
  image: StaticImageData | string;
  tools: string;
  options: string[];
  pdfUrl?: string;
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

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
