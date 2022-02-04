import styles from '../styles/TechnologyStack.module.scss';
import TechCarousel from './TechCarousel';

const TechnologyStack = () => {
  return (
    <div id='TechnologyStackContainer' className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.title}>Technology Stack</h2>
        <TechCarousel />
      </div>
    </div>
  );
};

export default TechnologyStack;
