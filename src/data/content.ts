import profile05 from '@/images/clients/profile05.jpg';
import heroBg from '@/images/herobg.webp';
import jona from '@/images/jona.webp';
import project1 from '@/images/projects/project1.png';
import project2 from '@/images/projects/project2.png';
import project3 from '@/images/projects/project3.png';
import service1 from '@/images/services/service1.png';
import service2 from '@/images/services/service2.png';
import service3 from '@/images/services/service3.png';
import {
  BsBehance,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#project' },
  { name: 'Services', href: '/#service' },
];

export const heroSectionData = {
  heading:
    'Are you an archaeologists who wants to elevate in scientific communication?',
  text: 'I specialize in transforming complex data into captivating narratives, designing engaging web presences, and creating illustrative content that speak for themselves. Let’s get together and craft a unique experience that aligns with your values and showcases your scientific insights.',
  statsData: [
    { name: '(Scientific) Articles Written', number: '15' },
    { name: 'Finished Illustrations', number: '253' },
    { name: 'Finished Programming Projects', number: '13' },
  ],
  bgImage: heroBg,
  heroImage: jona,
};

export const bannerData = [
  'My name is Jona Schlegel and I am a freelance archaeologist based in Vienna, Austria. I specialize in scientific communication, web design, and illustration. I am passionate about creating engaging content that makes science accessible and inclusive. I am here to help you elevate your scientific communication and create a unique experience that aligns with your values and showcases your scientific insights. Let’s get together and craft a unique experience that aligns with your values and showcases your scientific insights.',
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
    { Icon: BsLinkedin, href: 'https://www.linkedin.com/in/jona-schlegel-942879153/' },
    { Icon: BsGithub, href: 'https://github.com/jonaschlegel' },
  ],
};
