import { BsBehance, BsInstagram, BsTwitter } from 'react-icons/bs';

import profile05 from '@/images/clients/profile05.jpg';
import heroBg from '@/images/herobg.webp';
import jona from '@/images/jona.webp';
import project1 from '@/images/projects/project1.png';
import project2 from '@/images/projects/project2.png';
import project3 from '@/images/projects/project3.png';
import service1 from '@/images/services/service1.png';
import service2 from '@/images/services/service2.png';
import service3 from '@/images/services/service3.png';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/#project' },
  { name: 'Service', href: '/#service' },
];

export const heroSectionData = {
  heading: 'Jona Schlegel.',
  text: 'Based in Austria, Vienna, I am an archaeologists with 6 years of experience in academia, with a research focus on contemporary graffiti, archaeological stratigraphy and temporality. Since a few years I am creating illustrations and started in web development. Now I am working as a freelancer in science communication, knowledge organisation and web development.',
  statsData: [
    { name: 'Happy Clients', number: '2+' },
    { name: 'Completed Projects', number: '25+' },
    { name: 'Satisfied Clients', number: '95%' },
  ],
  bgImage: heroBg,
  heroImage: jona,
};

export const bannerData = [
  '(archaeological) Illustrator',
  'Web Designer',
  'Science Communicator',
  'Research Data Manager',
];

export const projectsData = {
  heading: 'Featured Projects',
  projectsList: [
    { name: 'Urban Chameleon', image: project1 },
    { name: 'Trowel Journal Blog', image: project2 },
    { name: 'archaeo Zine', image: project3 },
  ],
};

export const serviceData = {
  heading: 'Services',
  servicesList: [
    {
      name: 'Archaeological Web Design & Development',
      description:
        'Offering a holistic approach to web design and development tailored for archaeological projects. From UX/UI design to full-stack development, including interactive features like 3D visualizations and GIS data integration. Options include Basic Web Design, Advanced Development, and Storytelling Enhancement.',
      image: service1,
      tools: 'Next.js, TypeScript, Tailwind CSS, Three.js, CesiumJS, Leaflet',
      options: [
        'Basic Web Design: UX/UI design focusing on archaeological content.',
        'Advanced Development: Incorporating interactive features and data visualization.',
        'Storytelling Enhancement: Engaging audiences with narrative elements.',
      ],
    },
    {
      name: 'Scientific & Archaeological Illustration',
      description:
        'Creating visually compelling illustrations for archaeological and scientific communication. Services range from detailed artifact reconstructions to GIS-based map illustrations, designed to enhance public engagement and understanding.',
      image: service2,
      tools: 'Digital illustration tools, GIS software',
      options: [
        'Reconstruction Illustrations: Detailed depictions of historical scenes and/or artifacts.',
        'Educational Material Design: Illustrations for books, comics, and educational materials usable for school lectures.',
        'GIS Map Illustrations: Visualizing data with advanced GIS software for papers, presentations and websites.',
      ],
    },
    {
      name: 'Science Communication Solutions',
      description:
        'Bridging the gap between scientific research and public engagement through content creation, editorial services, and workshop facilitation. Tailored to make science accessible and engaging to a broader audience.',
      image: service3,
      tools:
        'Content management systems, social media platforms, scientific writing and editing',
      options: [
        'Content Creation & Management: Engaging content for web and social media.',
        'Editorial Services: Writing and editing blog posts, articles, and scientific papers.',
        'Workshop Facilitation: Training on effective science communication strategies and the creation of scientific accessible and inclusive illustrations.',
      ],
    },
  ],
};

export const testimonialsData = [
  {
    name: 'Karl',
    role: 'CTO of UpLeveled',
    image: profile05,
    comment: 'She is the best.',
  },
];

export const footerdata = {
  heading: "Let's Collaborate",
  navLinks: [
    { name: 'About', href: '/#about' },
    { name: 'Project', href: '/#project' },
    { name: 'Service', href: '/#service' },
  ],
  socialLinks: [
    { Icon: BsBehance, href: 'https://www.behance.net/jonaschlegel1' },
    { Icon: BsInstagram, href: 'https://www.instagram.com/archaeoink/' },
    { Icon: BsTwitter, href: 'https://twitter.com/JonaSchlegel' },
  ],
};
