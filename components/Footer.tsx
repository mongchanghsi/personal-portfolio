import styles from '../styles/Footer.module.scss';
import socials from '../utils/constants/socials';

const Footer = () => {
  return (
    <div id='FooterContainer' className={styles.container}>
      <div className={styles.main}>
        <p className={styles.text}>Developed by Eric Mong using NextJS</p>
      </div>
    </div>
  );
};

export default Footer;
