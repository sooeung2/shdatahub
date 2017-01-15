import React from 'react';
import { NavLink } from 'components';

const NavBar = ({switchContainer}) => {
  const linkNames = ['home', 'items', 'workers', 'heroes', 'buildings'];
  const navLinks = linkNames.map(name => {
    return <NavLink key={name} toPath={name} switchContainer={switchContainer} />
  });
  return (
    <nav className="nav-bar">
      <ul className="top-nav">
        {navLinks}
      </ul>
    </nav>
  );
};

export default NavBar;
