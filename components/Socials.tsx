/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Socials.module.scss';
import socials from '../utils/constants/socials';

const Socials = () => {
  return (
    <div id='Socials2Container' className={styles.container}>
      {socials.map((social, index: number) => {
        return (
          <a
            href={social.href}
            target='_blank'
            rel='noreferrer'
            className={styles.item_container}
            key={index}
          >
            {social.name.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
