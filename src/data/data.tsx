import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/OCR-1.jpg';
import porfolioImage2 from '../images/portfolio/relai.jpg';
import porfolioImage3 from '../images/portfolio/ias.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Daniel García Hernández Resume',
  description: "Resume built in react",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Daniel García.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Barcelona based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Risk Systems Consulting</strong> deploying complex financial software.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Kali Linux</strong>,
        travelling around <strong className="text-stone-100">the world</strong>, or playing videogames.{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Software developer / Problem Solver with a horizontal profile, I have been working as CTO, sysadmin, 
  fullstack developer, integrator ....`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona, Spain', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Travelling, Videogames, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Multi-Platform Application Development', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Risk Systems Consulting, Wealty...', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'Catalan',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Angular',
        level: 6,
      },
      {
        name: 'CSS',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 10,
      },
      {
        name: 'Python',
        level: 8,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Android Studio',
        level: 6,
      },
      {
        name: 'Linux',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'OCR',
    description: 'This software allows the optical recognition of characters contained in an image (scanned documents or photos) in such a way that they become understandable or recognizable by a computer.',
    url: 'https://iasoftsolutions.es/soluciones-ocr/',
    image: porfolioImage1,
  },
  {
    title: 'RelAI',
    description: 'The emotion detection system that analyzes biometric data based on deep learning.',
    url: 'https://admin.werelai.com/',
    image: porfolioImage2,
  },
  {
    title: 'IASoft',
    description: 'IA Soft Solutions is an IT consultancy in Terrassa created to support entire computerization projects.',
    url: 'https://iasoftsolutions.es/',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2019 - 2021',
    location: 'Institut Sabadell',
    title: 'Higher Technician in Multi-platform Applications Development. Professional Profile in Videogames.',
    content: <p>Great software development skills adquired there, C# and OOP strong oriented formation.</p>,
  },
  {
    date: '2016- 2018',
    location: 'IES Matadepera',
    title: 'High School Expertise in technology',
    content: <p>Maths, Physics, Electrical engineering...</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2023 - Present',
    location: 'Risk Systems Consulting',
    title: 'Integration Engineer',
    content: (
      <p>
        Working for client BBVA as Integration Engineer being responsible for deploying complex financial software.
        Work skills focus primarly on Linux, Python and Perl.
      </p>
    ),
  },
  {
    date: 'February 2022 - February 2023',
    location: 'Wealty',
    title: 'Fullstack Developer',
    content: (
      <p>
          Developing in Next.js, React Native and Laravel. <br></br>
          RDBMS: mySQL.<br></br>
          Software architecture, sysadmin (Bash, Cron…), problem solver.<br></br>
          DevOps (Git, Jira, ClickUp,).<br></br>
        Person in charge of the development of the entire backend including API's for managing banking systems.
      </p>
    ),
  },
  {
    date: 'March 2021 - February 2022',
    location: 'MobilityMonitor',
    title: 'Fullstack Developer',
    content: (
      <p>
        Developing in Python (Machine Learning, Visual Computing), PHP. <br></br>
        RDBMS: mySQL <br></br>
        Software architecture, sysadmin (Bash, Cron…), problem solver. <br></br>
        In charge of the entire IT department: Software architecture, complex systems, networks and development. Being responsible for identifying when planes land and take off at more than 8 aerodromes in Catalonia through AI.
      </p>
    ),
  },
  {
    date: 'December 2020 - February 2022',
    location: 'IA SOFT SOLUTIONS',
    title: 'Freelancer IT Consultant',
    content: (
      <p>
        CEO managing software development in: Sails.JS, Laravel, PHP, React… <br></br>
        Software architecture, sysadmin (Bash, Cron…), problem solver. <br></br>
        I have managed, designed, developed and maintained software systems as a software
        consultant. For example, I have developed management software for the Alcobendas
        town hall with which more than 55,000 social aids have been assigned.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Guillermo Sánchez Moral - Wealty CTO',
      text: 'Encantado de haber tenido a Daniel en el equipo. Es una persona resolutiva, con mucha inquietud por aprender y gran sentido de la responsabilidad. Ha sido todo un placer poder trabajar juntos en este proyecto.',
      image: "https://media.licdn.com/dms/image/D4D03AQHZXWDIH6qbkw/profile-displayphoto-shrink_800_800/0/1673897885174?e=1687392000&v=beta&t=2mXDzg-wNVoWkacqI_dZS_yW_ynlCbeQsR56EFXFIWM",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'Email',
      href: 'mailto:dabrelad@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Terrassa, Barcelona',
    },
    {
      type: ContactType.Github,
      text: 'Git',
      href: 'https://gitlab.com/dabrelad',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://gitlab.com/dabrelad'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/daniel-garc%C3%ADa-hern%C3%A1ndez-21357a18b/'},
];
