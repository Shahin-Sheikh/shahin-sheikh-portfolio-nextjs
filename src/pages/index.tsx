import type { NextPage } from 'next';
import { SEO } from '../components';
import BigProjects from '../components/big-projects/BigProjects';
import {
  About,
  Experience,
  Hero,
  Layout,
  Projects,
  Skills,
} from '../containers';
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
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </Layout>
    </>
  );
};

export default Home;
