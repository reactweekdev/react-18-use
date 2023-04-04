import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <div className="nav-menu">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/codestantine/speakers">Codestantine Speakers</NavLink>
  </div>
);

export default NavMenu;
