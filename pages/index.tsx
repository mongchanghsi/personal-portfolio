import type { NextPage } from 'next';
import Meta from '../components/Meta';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';
import About from '../components/About';
import Socials from '../components/Socials';
import WorkExperience from '../components/WorkExperience';
import FeaturedWorks from '../components/FeaturedWorks';

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} ${styles.unselectable}`}>
      <Meta />
      <main className={styles.main}>
        <Header />
        <About />
        <WorkExperience />
        <FeaturedWorks />
        <Socials />
      </main>
    </div>
  );
};

export default Home;
