/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, MutableRefObject } from 'react';
import styles from '../styles/Socials.module.scss';
import socials from '../utils/constants/socials';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';

const Socials = () => {
  const el = useRef() as MutableRefObject<HTMLDivElement>;
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q('#SocialsTitle'), {
        autoAlpha: 0,
        x: '-10',
        duration: 2,
      })
      .from(
        q('#SocialsContent'),
        {
          autoAlpha: 0,
          x: '-10',
          duration: 1,
        },
        '-=1'
      );
  }, []);

  return (
    <div id='SocialsContainer' className={styles.container} ref={el}>
      <div className={styles.main}>
        <h2 className={styles.title} id='SocialsTitle'>
          My Socials
        </h2>
        <Container fluid={true} id='SocialsContent'>
          <Row sm={1} md={1} lg={2} xl={2}>
            {socials.map((social, index: number) => {
              return (
                <Col key={index} className={styles.item_container}>
                  <a
                    href={social.href}
                    target='_blank'
                    rel='noreferrer'
                    className={styles.item}
                  >
                    <img
                      src={social.icon.src}
                      alt={social.name}
                      className={styles.item_icon}
                    />
                    <p className={styles.item_text}>{social.name}</p>
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Socials;
