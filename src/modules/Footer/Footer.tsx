import { Link } from 'react-router-dom';
import { SvgIcon } from '../../shared/SvgIcon';

import styles from './Footer.module.scss';
import { RoundButton } from '../../shared/RoundButton';
import { scrollToTop } from '../../utils/utility';
import { Logo } from '../../shared/Logo';

export const Footer = () => {
  const links = [
    {
      title: 'Github',
      path: 'https://github.com/andriy-kostiuk/phone_catalog',
    },
    { title: 'Contacts', path: '#' },
    { title: 'Rights', path: '#' },
  ];

  return (
    <footer className={styles.footer}>
      <Logo className={styles.footer__logo} />

      <ul className={styles.footer__list}>
        {links.map(link => (
          <li key={link.title} className={styles.footer__item}>
            <Link
              className={styles.footer__link}
              to={link.path}
              target="_blank"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.footer__container}>
        <p>Back to top</p>
        <RoundButton onClick={scrollToTop}>
          <SvgIcon type="arrow" />
        </RoundButton>
      </div>
    </footer>
  );
};
