import { BsBehance, BsInstagram, BsTwitter } from 'react-icons/bs';

import profile05 from '@/images/clients/profile05.jpg';
import heroBg from '@/images/herobg.webp';
import jona from '@/images/jona.webp';
import project1 from '@/images/projects/project1.png';
import project2 from '@/images/projects/project2.png';
import project3 from '@/images/projects/project3.png';
import service1 from '@/images/services/service1.png';
import service2 from '@/images/services/service2.png';
import service3 from '@/images/services/service3.jpg';

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
    { name: 'Custom Website Design', image: service1, price: 40 },
    { name: 'Custom Illustration', image: service2, price: 60 },
    { name: 'Science Communication', image: service3, price: 60 },
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
