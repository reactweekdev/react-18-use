// import { NavLink, useMatch } from 'react-router-dom';

import NavItem from './nav-item/NavItem';

import styles from './NavMenu.module.css';

const NavMenu = () => (
  <div className={styles.navMenu}>
    <NavItem to={'/home'} text={'Home'} />
    <NavItem to={'/codestantine/speakers'} text={'Codestantine Speakers'} />
  </div>
);

export default NavMenu;
