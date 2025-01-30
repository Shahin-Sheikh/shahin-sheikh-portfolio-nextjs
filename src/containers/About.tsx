import { useEffect, useState } from 'react';
import { getSectionAnimation } from '../animations';
import { HeroImage, Link, ListItem, Wrapper } from '../components';
import { getId } from '../utils/helper';
import { aboutSection, author } from '../utils/portfolio';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary pt-50 font-titleFont text-2xl font-semibold flex items-center">
        {title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-7"></span>
      </h2>

      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Md. Shahin Sheikh, I'm an accomplished full-stack
            software developer, proficient in a diverse array of front-end and
            back-end languages, responsive frameworks, and adeptly skilled in
            managing various database systems. Proficient in building responsive
            and dynamic websites using ReactJS, NextJs, NodeJs, Go, PostgreSQL,
            MongoDB with a focus on user-friendly interfaces and seamless
            navigation. A strong analytical thinker, I thrive on identifying
            challenges and implementing creative solutions to ensure optimal
            project outcomes.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            renowned -{' '}
            <Link
              href="https://technonext.com/"
              target="_blank"
              className="text-accent"
            >
              @TechnoNext Ltd
            </Link>
            .
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
