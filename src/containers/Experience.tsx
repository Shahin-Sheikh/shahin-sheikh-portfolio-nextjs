import { motion } from 'framer-motion';
import { Tablist } from '../components';
import { getSectionAnimation } from '../animations';
import { experienceSection } from '../utils/portfolio';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-32 max-w-2xl mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary pt-50 font-titleFont text-2xl font-semibold flex items-center">
        {experienceSection.title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-7"></span>
      </h2>

      <Tablist experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
