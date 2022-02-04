import styles from '../styles/Header.module.scss';
import Typical from 'react-typical';

const Header = () => {
  return (
    <div id='HeaderContainer' className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.title}>Eric Mong</h2>
        <p className={styles.text}>
          I am a{' '}
          <Typical
            steps={[
              'developer 💻',
              2000,
              'product designer 📏',
              2000,
              'darts player 🎯',
              2000,
            ]}
            loop={Infinity}
            wrapper='b'
          />
        </p>
      </div>
    </div>
  );
};

export default Header;
