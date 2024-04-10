import { useContext } from 'react';
import themeContext from '../context/theme-context';
import { Skill, Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { skillsSection } from '../utils/portfolio';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDark } = useContext(themeContext);

  return (
    <Wrapper as="section" id="skills" {...getSectionAnimation}>
      <h2 className="heading-secondary pt-50 font-titleFont text-2xl font-semibold flex items-center">
        {title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-7"></span>
      </h2>

      <div className="space-y-32">
        {skills.map(({ id, lottie, softwareSkills, points, title }) => (
          <Skill
            key={id}
            className="odd:lg:flex-row-reverse"
            lottie={lottie[isDark ? 'dark' : 'light']}
            skills={softwareSkills}
            points={points}
            title={title}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
