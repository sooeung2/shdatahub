import React from 'react';
import { Link } from 'react-router';

const NavLink = ({route, active, menu, switchContainer, toggleMenu}) => {
  if (route === 'menu')
    return (
      <li className="menu">
        <a onClick={() => toggleMenu(menu)}>&#9776;</a>
      </li>
    );
  
  const to = route === 'home' ? `/` : `/${route}`;
  return (
    <li className={route === active ? 'active' : ''}>
      <Link to={to} onClick={() => { switchContainer(route); toggleMenu(true); } }>
        {route}
      </Link>
    </li>
  );
};

export default NavLink;
