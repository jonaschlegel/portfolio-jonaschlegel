import {
  BsBehance,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';

import profile01 from '@/images/clients/profile01.jpg';
import heroBg from '@/images/herobg.webp';
import jona from '@/images/jona.webp';
import overview from '@/images/overview.webp';
import project1 from '@/images/projects/project1.png';
import project2 from '@/images/projects/project2.png';
import project3 from '@/images/projects/project3.png';
import service1 from '@/images/services/service1.png';
import service2 from '@/images/services/service2.png';
import service3 from '@/images/services/service3.png';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#project' },
  { name: 'Services', href: '/#service' },
];

export const heroSectionData = {
  heading:
    'Are you looking for a way to elevate your visual science communication?',
  text: 'I transform data into narratives, web presences and create illustrative content.',
  statsData: [
    { name: '(Scientific) Articles Written', number: '15' },
    { name: 'Illustrations', number: '253' },
    { name: 'Programming Projects', number: '13' },
  ],
  bgImage: heroBg,
  heroImage: overview,
};

export const bannerData = [
  'Hi, my name is Jona Schlegel and I am specializing in scientific communication, web design, and illustration. I am passionate about creating engaging content that makes science accessible and inclusive. I am here to help you elevate your scientific communication and create a unique showcase of your scientific insights.',
];

export const jonaImage = jona;

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
      alt: "Portfolio showcasing Jona Schlegel's archaeology and scientific illustration services, including urban graffiti documentation and archaeological reconstructions. Featuring the Urban Chameleon project and blog layout design.",
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
      alt: "Scientific illustrations of prehistoric tools and artefacts, such as stone hand axes, paint brushes, and recreations of ancient cave paintings and pottery. Demonstrating Jona Schlegel's artistic interpretations in archaeological illustration.",
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
      alt: "Jona Schlegel's professional profile and portfolio on social media, highlighting services in digital art, archaeology illustrations, and public speaking. Display of illustrations and personal branding.",
      tools:
        'Content management systems, social media platforms, scientific writing and editing',
      options: [
        'Content Creation & Management: Engaging content for web and social media.',
        'Editorial Services: Writing and editing blog posts, articles, and scientific papers.',
      ],
    },
  ],
};

export const testimonialsData = [
  {
    name: 'Gabriella Campbell',
    role: 'That Anthro Podcast',
    image: profile01,
    comment:
      'I am so glad that I was able to work with Jona. Her art is incredible and I know this is only the beginning of big things for her. And thanks so for the extras! I know how much work and creativity Jona is put into this, so thanks.',
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
    {
      Icon: BsLinkedin,
      href: 'https://www.linkedin.com/in/jona-schlegel-942879153/',
    },
    { Icon: BsGithub, href: 'https://github.com/jonaschlegel' },
  ],
};
