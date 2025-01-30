import type { NextPage } from 'next';
import { SEO } from '../components';
import BigProjects from '../components/big-projects/BigProjects';
import SmallProjects from '../components/small-projects/SmallProjects';
import {
  About,
  Contact,
  Experience,
  Hero,
  Layout,
  Skills,
} from '../containers';
import Education from '../containers/Education';
import { seoData } from '../utils/portfolio';

const Home: NextPage = () => {
  return (
    <>
      <SEO {...seoData} />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <BigProjects />
        <Education />
        <Skills />
        <SmallProjects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
