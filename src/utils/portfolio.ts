import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  EducationSectionType,
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
  instagram: 'https://www.instagram.com/stmt_shahin/',
  twitter: 'https://twitter.com/smtp_shahin',
  github: 'https://github.com/Shahin-Sheikh',
  linkedin: 'https://www.linkedin.com/in/shahinsheikh/',
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
    { name: 'experience', url: '/#experience' },
    { name: 'work', url: '/#work' },
    { name: 'education', url: '/#education' },
    { name: 'skills', url: '/#skills' },
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

export const smallProjectSection: Section = {
  title: 'Other Noteworthy Projects',
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
      companyUrl: 'https://technonext.com/',
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
      company: 'Teletalk',
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

// * Experience Section

export const educationSection: EducationSectionType = {
  title: 'Education',
  educations: [
    {
      degreeType: 'Undergraduate',
      institute: 'American International University - Bangladesh (AIUB)',
      instituteurl: 'https://www.aiub.edu/',
      degree: 'BSc in Computer Science & Engineering',
      result: '',
      session: 'Jan 2018',
      upto: 'Apr 2022',
      tasks: [
        'I am a proud alumnus of American International University - Bangladesh (AIUB), holding a Bachelor of Science degree in Computer Science & Engineering—a transformative educational experience that has shaped my technical prowess and problem-solving capabilities.',
        'A highlight of my AIUB journey was engaging in capstone projects and research endeavors. These initiatives allowed me to explore specialized areas within computer science, developing solutions that showcased innovation and practicality—a testament to the holistic education AIUB offered.',
        'Throughout my tenure at AIUB, I engaged with a rigorous curriculum that combined theoretical knowledge with hands-on practical applications. From algorithms and data structures to software engineering principles, I gained a comprehensive understanding of computer science fundamentals that continue to underpin my professional journey.',
      ],
    },
    {
      degreeType: 'Higher Secondary',
      institute: 'Dhaka City College',
      result: '',
      instituteurl: 'https://www.dhakacitycollege.edu.bd/',
      degree: 'Science',
      session: 'June 2015',
      upto: 'June 2017',
      tasks: ['', ''],
    },
    {
      degreeType: 'Secondary',
      institute: 'Baitush Sharaf Jabbaria Academy School & College',
      instituteurl: '',
      degree: 'Science',
      result: '',
      session: 'January 2013',
      upto: 'June 2015',
      tasks: [' ', ''],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
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
  title: 'Inspired by @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
