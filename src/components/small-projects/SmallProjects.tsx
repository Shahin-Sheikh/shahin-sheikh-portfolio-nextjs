import React, { useState } from 'react';
import ProjectCard from './SmallProjectCard';
import { motion } from 'framer-motion';
import { smallProjectSection } from '../../utils/portfolio';
import Link from 'next/link';

const SmallProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const { title } = smallProjectSection;

  return (
    <div id="projects" className="max-w-6xl mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h4 className="heading-secondary pt-50 font-titleFont text-xl font-semibold flex items-center">
          {title}
        </h4>
        <a href="#" target="_blank" className="text-accent">
          view the archive
        </a>
      </div>
      <div className="grid grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 items-center justify-center gap-6 mt-10">
        <ProjectCard
          title="Logistics System"
          description="Logistics software automates manual processes and streamlines operations, improving efficiency."
          gitLink="#"
          liveLink="#"
          listItems={['Next.js', 'TypeScript', 'PrimeReact']}
        />

        <ProjectCard
          title="Product Review"
          description="A product review system for backend using go gin framework and database postgresql."
          gitLink="https://github.com/Shahin-Sheikh/go-postgre-product-review-system"
          liveLink="#"
          listItems={['Go', 'Gin', 'PostgreSQL', 'Backend']}
        />

        <ProjectCard
          title="Authentication System"
          description="A complete authentication system using go gonic and database postgresql."
          gitLink="https://github.com/Shahin-Sheikh/go-postgre-gorm-auth-system"
          liveLink="#"
          listItems={['Go', 'Gorm', 'Gin', 'PostgreSQL']}
        />

        <ProjectCard
          title="Admin System"
          description="Admin management is basically the process of setting up, managing, and troubleshooting networks."
          gitLink="#"
          liveLink="#"
          listItems={['React.js', 'JavaScript', 'Antd', 'Redux']}
        />

        <ProjectCard
          title="Inventory System"
          description="Inventory management system (IMS), is an automated system that helps businesses track and manage inventory, customer orders, and inbound deliveries."
          gitLink="#"
          liveLink="#"
          listItems={['Next.js', 'Formik', 'Tailwind']}
        />

        <ProjectCard
          title="Accounting System"
          description="Accounting software is a tools that helps accountants and bookkeepers record and report a company's financial transactions."
          gitLink="#"
          liveLink="#"
          listItems={['TypeScript', 'Next.js', 'Docker']}
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <ProjectCard
                title="Twitter Clone"
                description="Twitter clone using React.js and Node.js and database MonogoDB"
                gitLink="https://github.com/Shahin-Sheikh/Twitter_Clone"
                liveLink="#s"
                listItems={['React.js', 'Node.js', 'MongoDB']}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <ProjectCard
                title="HRM System"
                description="A human resource management system using javascript and nodejs and database mongodb"
                gitLink="#"
                liveLink="#"
                listItems={['React.js', 'Node.js', 'JavaScript']}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <ProjectCard
                title="Movie Review System"
                description="A learning repository covering a range of concepts including JWT's, MongoDB integration, APIs, web servers and user auth"
                gitLink="https://github.com/Shahin-Sheikh/mernreviewhub"
                liveLink="#"
                listItems={['Node.js', 'Express.js', 'MongoDB']}
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default SmallProjects;
