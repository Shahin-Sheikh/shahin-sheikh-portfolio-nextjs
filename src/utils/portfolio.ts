import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  Section,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/gauravv1902',
  twitter: 'https://twitter.com/0xgauravv',
  github: 'https://github.com/Shahin-Sheikh',
  linkedin: 'https://www.linkedin.com/in/gaurav-sarage/',
};

export const author = {
  name: 'Shahin Sheikh',
  email: 'shahinsheikh885@gmail.com',
};

export const seoData = {
  title: 'Md. Shahin Sheikh | Software Engineer',
  description:
    'Md. Shahin Sheikh is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image: 'https://avatars.githubusercontent.com/u/59409715?v=4',
  url: '',
  keywords: [
    'Shahin',
    'Shahin Sheikh',
    '@Shahin Sheikh',
    'Shahin Sheikh',
    'Portfolio',
    'Shahin Portfolio ',
    'Shahin Sheikh Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is ',
  title: 'Md. Shahin Sheikh.',
  tagline:
    'I build digital products that are delightful to use, and deliver exceptional results.',
  description:
    "I'm a passionate Software Engineer with experience building web applications using modern technologies like ReactJS (including NextJS), Go/Gin, and Node.js. I'm proficient in both relational (PostgreSQL) and NoSQL (MongoDB) databases.",
  specialText: 'Software Engineer @TechnoNext Ltd. - Us Bangla Group',

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'React.js',
      'Typescript',
      'Javascript',
      'Go',
      'Gin',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'TailwindCSS',
      'Primereact',
      'Antd',
      'MUI',
      'Docker',
    ],
  },
  img: '/shahin-sheikh.jpg',
};

export const bigProjectSection: Section = {
  title: 'A Compilation of My Work',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Develop a dynamic and responsive web application: Utilize Next.js, a React framework, to build an interactive and user-friendly website that adapts seamlessly across various devices.',
        'Implement RESTful APIs: Construct robust APIs that adhere to the REST architectural style. Choose between Go/Gin or Node.js for backend development, allowing communication between the frontend and data sources.',
        'Administer PostgreSQL and MongoDB databases: Manage data storage and retrieval using either PostgreSQL, a relational database, or MongoDB, a NoSQL database, depending on your projects specific needs.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'golang', icon: 'logos:go' },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'postgresql', icon: 'vscode-icons:file-type-pgsql' },
        { name: 'mongodb', icon: 'vscode-icons:file-type-mongo' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: 'Where I’ve Worked',
  experiences: [
    {
      company: 'TechnoNext Ltd.',
      companyUrl: 'https://bd.linkedin.com/company/technonext',
      role: 'Software Engineer',
      started: 'Jan 2023',
      upto: 'Present',
      tasks: [
        'At TechnoNext Ltd., I played a key role in crafting innovative digital solutions across various sectors like Ecommerce, Food Delivery, and Online Travel Agencies (OTA). My expertise lies in front-end development, utilizing ReactJS, NextJS, Typescript, and a comprehensive design library toolkit encompassing Material UI, Ant Design, Prime React, and Formik. Additionally, my backend development experience includes Go/Gin, NodeJS, PostgreSQL, and MongoDB.        ',
        'Translate creative concepts into tangible solutions through collaboration with designers, project managers, and engineers, meeting client and stakeholder needs.',
        'Drive effective engineering leadership by collaborating closely, facilitating knowledge sharing sessions, and actively mentoring team members.',
      ],
    },
    {
      company: 'Teletalk Bangladesh Limited',
      companyUrl: 'https://www.teletalk.com.bd/bn/',
      role: 'Software Engineer Intern',
      started: 'January 2022',
      upto: 'May 2022',
      tasks: [
        'Implemented Approval system, Improved data rendering time. Developed an efficient and fast searching algorithm for the approval system. ',
        'Managed up to 2 projects or tasks at a given time while under pressure.',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Instant AI',
      url: 'https://github.com/gaurav-sarage/InstantAI',
      repo: 'https://github.com/gaurav-sarage/InstantAI',
      img: '',
      year: 2023,
      tags: ['NextJS', 'Typescript', 'Shadcn', 'Prisma'],
    },
    {
      id: getId(),
      name: 'ShopTronics - eCommerce',
      url: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      repo: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231495891-ec7c33c6-7f36-41fe-8efd-3e992d5b800d.png',
      year: 2023,
      tags: ['React', 'Scss', 'HTML', 'Strapi', 'Stripe Payment Gateway'],
    },
    {
      id: getId(),
      name: 'ProShop MERN eCommerce',
      url: 'https://github.com/gaurav-sarage/ecommerce',
      repo: 'https://github.com/gaurav-sarage/ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231498672-64b2e2ff-d987-45a3-bca6-5d8d89759360.png',
      year: 2022,
      tags: ['React', 'Redux', 'Express', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Photo Gallery App (React)',
      url: 'https://gsierra19-photo-gallery-app.web.app/',
      repo: 'https://github.com/gaurav-sarage/photo-gallery-app',
      img: 'https://user-images.githubusercontent.com/85820227/250177861-cd5a5cd8-590e-49a1-92b5-4273aeee2f57.png',
      year: 2023,
      tags: ['ReactJS', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Modern Art Gallery',
      url: 'https://gaurav-sarage.github.io/Client-02/',
      repo: 'https://github.com/gaurav-sarage/Client-02/',
      img: 'https://user-images.githubusercontent.com/85820227/231500007-aa155693-1871-4e44-8152-9c230861e7bd.png',
      year: 2022,
      tags: ['HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'countries app using REST API',
      url: 'https://country-api-react-app.netlify.app/',
      repo: 'https://github.com/gaurav-sarage/country-api',
      img: 'https://user-images.githubusercontent.com/85820227/231487782-eb60fb21-32ae-4012-9190-7c42be3d18e8.png',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'GitHub User Search',
      url: 'https://gaurav-sarage.github.io/github-user-search/',
      repo: 'https://github.com/gaurav-sarage/github-user-search',
      img: 'https://user-images.githubusercontent.com/85820227/231501132-067311ef-2222-46d0-a20a-f0bf48827e01.png',
      year: 2021,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Hackathon Portfolio',
      url: 'https://gaurav-sarage.github.io/webathon-portfolio/',
      repo: 'https://github.com/gaurav-sarage/webathon-portfolio',
      img: 'https://user-images.githubusercontent.com/85820227/233788920-7c76e976-2f42-4750-a6ce-ad0fb2eb405d.png',
      year: 2022,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
