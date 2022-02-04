/* eslint-disable @next/next/no-img-element */
import styles from '../styles/TechCarousel.module.scss';
import techStack from '../utils/constants/techStack';

const TechCarousel = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        {/* <div className={styles.slide}>
          <img
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
            height='100'
            width='250'
            alt=''
          />
        </div> */}
        {techStack.map((item, index: number) => {
          return (
            <div key={index} className={styles.slide}>
              <img src={item.icon.src} alt={item.text} height='100' />
              <p className={styles.slide_text}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCarousel;
