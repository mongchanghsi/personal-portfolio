/* eslint-disable @next/next/no-img-element */
import {
  useRef,
  useEffect,
  MutableRefObject,
  useState,
  useCallback,
} from 'react';
import styles from '../styles/FeaturedWorks.module.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import featured from '../utils/constants/featured';
import gsap from 'gsap';
import useWindowDimensions from '../hooks/useWindowDimension';

const MEDIUM_SCREEN_SIZE = 768;

const FeaturedWorks = () => {
  const { windowDimensions } = useWindowDimensions();

  const el = useRef() as MutableRefObject<HTMLDivElement>;
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Timeline>();

  const [mainIndex, setMainIndex] = useState<number>(0);

  const isMediumScreen = useCallback(() => {
    return windowDimensions?.width < MEDIUM_SCREEN_SIZE;
  }, [windowDimensions]);

  const itemsDisplayInMediumScreen = featured.map((item, index: number) => {
    return (
      <div key={index} className={styles.item}>
        <img
          src={item.image.src}
          alt={item.title}
          className={styles.item_image}
        />
      </div>
    );
  });

  const itemsDisplayInLargeScreen = featured.map((item, index: number) => {
    return (
      <div
        key={index}
        className={styles.item}
        onClick={() => {
          if (item.url) {
            window.open(`${item.url}`, '_blank');
          }
        }}
      >
        <img
          src={item.image.src}
          alt={item.title}
          className={styles.item_image}
        />
        <div
          id={`WorksContent_${item.title}`}
          className={styles.item_textContent}
        >
          <h3 className={styles.item_title}>{item.title}</h3>
          <p className={styles.item_text}>{item.description}</p>
        </div>
      </div>
    );
  });

  const slideNext = () => {
    let newIndex = mainIndex;
    if (mainIndex === featured.length - 1) {
      newIndex = 0;
    } else {
      newIndex += 1;
    }
    setMainIndex(newIndex);
  };

  const slidePrev = () => {
    let newIndex = mainIndex;
    if (mainIndex === 0) {
      newIndex = featured.length - 1;
    } else {
      newIndex -= 1;
    }
    setMainIndex(newIndex);
  };

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          start: 'top 80%',
          end: 'bottom+=300 top',
          trigger: '#FeaturedWorksTitle',
          toggleActions: 'restart none none reset',
        },
      })
      .from(q('#FeaturedWorksTitle'), {
        autoAlpha: 0,
        x: '-10',
        duration: 2,
      })
      .from(
        q('#FeaturedWorksContent'),
        {
          autoAlpha: 0,
          x: '-10',
          duration: 2,
        },
        '-=1'
      );
  }, []);

  return (
    <div id='FeaturedWorksContainer' className={styles.container} ref={el}>
      <div className={styles.main}>
        <h2 className={styles.title} id='FeaturedWorksTitle'>
          Featured <span className={styles.highlight}> Works </span>
        </h2>
      </div>

      <div className={styles.content} id='FeaturedWorksContent'>
        {isMediumScreen() ? (
          <>
            <div className={styles.content_col}>
              <div className={styles.content}>
                <div
                  className={`${styles.controller} unselectable`}
                  onClick={slidePrev}
                >
                  &lang;
                </div>
                <div className={styles.carousel}>
                  <AliceCarousel
                    activeIndex={mainIndex}
                    animationDuration={800}
                    animationType='fadeout'
                    disableDotsControls
                    disableButtonsControls
                    items={itemsDisplayInMediumScreen}
                  />
                </div>
                <div
                  className={`${styles.controller} unselectable`}
                  onClick={slideNext}
                >
                  &rang;
                </div>
              </div>

              <div
                id={`WorksContent_${featured[mainIndex].title}`}
                className={styles.item_textContent}
              >
                <h3 className={styles.item_title}>
                  {featured[mainIndex].title}{' '}
                  <a
                    href={featured[mainIndex].url}
                    className={styles.item_small}
                    target='_blank'
                    rel='noreferrer'
                  >
                    View Project
                  </a>
                </h3>
                <p className={styles.item_text}>
                  {featured[mainIndex].description}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`${styles.controller} unselectable`}
              onClick={slidePrev}
            >
              &lang;
            </div>
            <div className={styles.carousel}>
              <AliceCarousel
                activeIndex={mainIndex}
                animationDuration={800}
                animationType='fadeout'
                disableDotsControls
                disableButtonsControls
                items={itemsDisplayInLargeScreen}
              />
            </div>
            <div
              className={`${styles.controller} unselectable`}
              onClick={slideNext}
            >
              &rang;
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedWorks;
