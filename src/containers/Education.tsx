import { motion } from 'framer-motion';
import { Tablist } from '../components';
import { getSectionAnimation } from '../animations';
import { educationSection } from '../utils/portfolio';
import EduTablist from '../components/EduTablist';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-32 max-w-2xl mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary pt-50 font-titleFont text-2xl font-semibold flex items-center">
        {educationSection.title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-7"></span>
      </h2>

      <EduTablist educations={educationSection.educations} />
    </motion.section>
  );
};

export default Education;
