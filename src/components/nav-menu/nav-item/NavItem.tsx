import { NavLink, useMatch } from 'react-router-dom';

import styles from './NavItem.module.css';

const NavItem = ({ to, text }: { to: string; text: string }) => {
  const match = useMatch({
    path: to
  });

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? ' ' + styles.active + ' ' : ' ';

  return (
    <div data-active={!!match} className={styles.navItem}>
      <NavLink to={to} className={activeLink + ' ' + styles.ni}>
        {text}
      </NavLink>
    </div>
  );
};

export default NavItem;
