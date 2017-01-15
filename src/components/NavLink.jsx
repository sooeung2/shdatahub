import React from 'react';
import { Link } from 'react-router';

const NavLink = ({toPath, active, switchContainer}) => {
  const to = toPath === 'home' ? `/` : `/${toPath}`;
  console.log(toPath, active)
  return (
    <li>
      <Link to={to} className={toPath === active ? 'active' : ''} onClick={() => switchContainer(toPath)}>
        {toPath}
      </Link>
    </li>
  );
};

export default NavLink;
