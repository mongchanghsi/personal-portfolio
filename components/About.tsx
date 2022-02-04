import { useRef, useEffect, MutableRefObject } from 'react';
import styles from '../styles/About.module.scss';
import gsap from 'gsap';

const About = () => {
  const el = useRef() as MutableRefObject<HTMLDivElement>;
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q('#AboutMeTitle'), {
        autoAlpha: 0,
        x: '-10',
        duration: 2,
      })
      .from(
        q('#AboutMeContent'),
        {
          autoAlpha: 0,
          x: '-10',
          duration: 1,
        },
        '-=1'
      );
  }, []);

  return (
    <div id='AboutMeContainer' className={styles.container} ref={el}>
      <div className={styles.main}>
        <h2 id='AboutMeTitle' className={styles.title}>
          About Me
        </h2>
        <p id='AboutMeContent' className={styles.text}>
          I am self-taught developer specialising in frontend development with
          experience in backend development. I am passionate about building
          front-facing products with the latest technologies such as dApps.
        </p>
      </div>
    </div>
  );
};

export default About;
