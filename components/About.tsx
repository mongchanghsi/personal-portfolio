import { useRef, useEffect, MutableRefObject } from 'react';
import styles from '../styles/About.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef() as MutableRefObject<HTMLDivElement>;
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          start: 'top 80%',
          end: 'bottom+=300 top',
          trigger: '#AboutMeTitle',
        },
      })
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
          duration: 2,
        },
        '-=1'
      );
  }, []);

  return (
    <div id='AboutMeContainer' className={styles.container} ref={el}>
      <div className={styles.main}>
        <h2 id='AboutMeTitle' className={styles.title}>
          About <span className={styles.highlight}>Me</span>
        </h2>
        <div id='AboutMeContent'>
          <p id='AboutMeContent1' className={styles.text}>
            I am ex-product designer who became a self-taught developer
            specialising in frontend development with experience in backend
            development, blockchain, machine learning and artificial
            intelligence.
          </p>
          <p id='AboutMeContent2' className={styles.text}>
            Since young, I was a hands-on individual which eventually led me
            into designing and building hardware product during the first three
            years of my university. In my last two years, I dabbled into
            developing and realized the potential for me to develop numerous
            amazing applications.
          </p>
          <p id='AboutMeContent3' className={styles.text}>
            While my education in my university mainly revolves around hardware
            development and very minimal courses on programming due to
            university restrictions, I took the initiative to have majority of
            my learning through online courses and subsequently took up multiple
            internships in Software Development to gain knowledge in the
            professional fields, understanding what are the practices adopted in
            the companies.
          </p>
          <p id='AboutMeContent4' className={styles.text}>
            I am now seeking full-time or freelance opportunies where I can
            contribute my skills in coding to help a company to achieve their
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
