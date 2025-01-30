import { useState } from 'react';
import Link from './Link';
import ListItem from './ListItem';
import useWindowWidth from '../hooks/use-window-width';
import { EducationType, ExperienceType } from '../types';
import { getBreakpointsWidth, getId } from '../utils/helper';

type Props = {
  educations: EducationType[];
};

const EduTablist = ({ educations }: Props) => {
  const [activeExperience, setActiveExperience] = useState(0);
  const windowWidth = useWindowWidth();

  const {
    degree,
    institute,
    instituteurl,
    session,
    upto,
    tasks,
    degreeType,
    result,
  } = educations[activeExperience];

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeExperience}*120px)`,
        }
      : {
          top: `calc(${activeExperience}*2.5rem)`,
        };

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
      {/* Sidebar */}
      <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[150px]">
        {educations.map(({ degreeType }, i) => (
          <button
            key={getId()}
            className={`h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
              i === activeExperience ? 'text-accent' : ''
            }`}
            onClick={() => setActiveExperience(i)}
          >
            {degreeType}
          </button>
        ))}
        {/* Slider */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
        <div
          style={sliderStyle}
          className={`absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll`}
        ></div>
      </div>

      <div key={getId()} className="space-y-5 p-1">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-dark-2 capitalize">
            {degree}{' '}
            <Link href={instituteurl} target="_blank" className="text-accent">
              @{institute}
            </Link>
          </h3>
          <p className="text-xs font-mono capitalize">
            <>
              {session} - {upto}
            </>
          </p>
          <p className="text-xs font-mono capitalize">
            <>{result}</>
          </p>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <ListItem key={getId()}>{task}</ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EduTablist;
