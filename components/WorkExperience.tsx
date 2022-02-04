import { useRef, useEffect, MutableRefObject, useCallback } from 'react';
import styles from '../styles/WorkExperience.module.scss';
import experiences from '../utils/constants/experience';
import useWindowDimensions from '../hooks/useWindowDimension';
import gsap from 'gsap';

const MEDIUM_SCREEN_SIZE = 768;

const WorkExperience = () => {
  const { windowDimensions } = useWindowDimensions();
  const el = useRef() as MutableRefObject<HTMLDivElement>;
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Timeline>();

  const isMediumScreen = useCallback(() => {
    return windowDimensions?.width < MEDIUM_SCREEN_SIZE;
  }, [windowDimensions]);

  useEffect(() => {
    tl.current = gsap.timeline().from(q('#WorkExperienceTitle'), {
      autoAlpha: 0,
      x: '-10',
      duration: 2,
    });
    // .from(
    //   q('#WorkExperienceContent'),
    //   {
    //     autoAlpha: 0,
    //     x: '-10',
    //     duration: 1,
    //   },
    //   '-=1'
    // );
  }, []);

  return (
    <div id='WorkExperienceContainer' className={styles.container} ref={el}>
      <div className={styles.main}>
        <h2 id='WorkExperienceTitle' className={styles.title}>
          Work Experience
        </h2>
        <div id='WorkExperienceContent'>
          {isMediumScreen() ? (
            <>
              <div className={styles.margin_top}>
                {experiences.map((experience, index: number) => {
                  return (
                    <div key={index}>
                      <div className={styles.item}>
                        <div className={styles.item_content}>
                          <div className={styles.item_header}>
                            <p className={styles.item_title}>
                              {experience.company}
                            </p>
                            <p className={styles.item_text}>
                              {experience.date}
                            </p>
                          </div>
                          <div className={styles.item_descContent}>
                            {experience.description.map(
                              (desc, index2: number) => {
                                return (
                                  <p key={index2} className={styles.item_text}>
                                    ⤖ {desc}
                                  </p>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className={styles.divider}></div>
              <div className={styles.margin_top}>
                {experiences.map((experience, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        index % 2 === 0 ? styles.item_left : styles.item_right
                      }`}
                    >
                      {index % 2 !== 0 && (
                        <div className={styles.pointer}></div>
                      )}
                      <div className={styles.item}>
                        <div className={styles.item_content}>
                          <div className={styles.item_header}>
                            <p className={styles.item_title}>
                              {experience.company}
                            </p>
                            <p className={styles.item_text}>
                              {experience.date}
                            </p>
                          </div>
                          <div className={styles.item_descContent}>
                            {experience.description.map(
                              (desc, index2: number) => {
                                return (
                                  <p key={index2} className={styles.item_text}>
                                    ⤖ {desc}
                                  </p>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                      {index % 2 === 0 && (
                        <div className={styles.pointer}></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
