import profile01 from '@/images/clients/profile01.jpg';
import heroBg from '@/images/herobg.webp';
import jona from '@/images/jona.webp';
import overview from '@/images/overview.webp';
import archaeoZine from '@/images/projects/archaeo-zine.png';
import exploringArchaeologicalDisciplines from '@/images/projects/exploring-archaeological-disciplines.png';
import trowelJournalBlog from '@/images/projects/trowel-journal-blog.png';
import urbanChameleon from '@/images/projects/urban-chameleon.png';
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
  { name: 'Featured Projects', href: '/#project' },
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
    {
      id: '1',
      name: 'Urban Chameleon',
      slug: 'urban-chameleon',
      image: urbanChameleon,
      description:
        'An exploration of urban graffiti and its historical context.',
      services: ['web design', 'web development'],
      isFeatured: true,
    },
    {
      id: '2',
      name: 'Trowel Journal Blog',
      slug: 'trowel-journal-blog',
      image: trowelJournalBlog,
      description: 'A blog platform for archaeological publications.',
      services: ['web development', 'web design', 'science communication'],
      isFeatured: true,
    },
    {
      id: '3',
      name: 'archaeo Zine',
      slug: 'archaeo-zine',
      image: archaeoZine,
      description: 'A zine promoting archaeological discoveries to the public.',
      services: [
        'illustration',
        'archaeological illustration',
        'science-communication',
      ],
      isFeatured: true,
    },
    {
      id: '4',
      name: 'Exploring Archaeological Disciplines',
      slug: 'exploring-archaeological-disciplines',
      image: exploringArchaeologicalDisciplines,
      description:
        'A comic-style illustration series showcasing various branches of archaeology to engage and educate a broader audience.',
      services: [
        'illustration',
        'science communication',
        'archaeological education',
      ],
      isFeatured: true,
    },
  ],
};

export const serviceData = {
  heading: 'Services',
  servicesList: [
    {
      id: 'web-design',
      slug: 'web-design',
      name: 'Archaeological Web Design & Development',
      description:
        'Offering a holistic approach to web design and development tailored for archaeological projects. From UX/UI design to full-stack development, including interactive features like 3D visualizations and GIS data integration. Options include Basic Web Design, Advanced Development, and Storytelling Enhancement.',
      image: service1,
      alt: 'Description of service1 image',
      tools: 'Next.js, TypeScript, Tailwind CSS, Three.js, CesiumJS, Leaflet',
      options: [
        'Basic Web Design: UX/UI design focusing on archaeological content.',
        'Advanced Development: Interactive features and data visualization.',
        'Storytelling Enhancement: Engaging audiences with narrative elements.',
      ],
    },
    {
      id: 'illustration',
      slug: 'illustration',
      name: 'Scientific & Archaeological Illustration',
      description:
        'Creating visually compelling illustrations for archaeological and scientific communication. Services range from detailed artifact reconstructions to GIS-based map illustrations, designed to enhance public engagement and understanding.',
      image: service2,
      alt: 'Description of service2 image',
      tools: 'Digital illustration tools, GIS software',
      options: [
        'Reconstruction Illustrations: Depictions of historical scenes.',
        'Educational Material Design: Illustrations for educational materials.',
        'GIS Map Illustrations: Visualizing data with GIS software.',
      ],
    },
    {
      id: 'science-communication',
      slug: 'science-communication',
      name: 'Science Communication Solutions',
      description:
        'Bridging the gap between scientific research and public engagement through content creation, editorial services, and workshop facilitation. Tailored to make science accessible and engaging to a broader audience.',
      image: service3,
      alt: 'Description of service3 image',
      tools: 'Content management systems, social media platforms',
      options: [
        'Content Creation & Management: Engaging content for web and social media.',
        'Editorial Services: Writing and editing articles and papers.',
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
