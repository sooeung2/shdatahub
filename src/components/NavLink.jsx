import React from 'react';
import { Link } from 'react-router';

const NavLink = ({toPath, switchContainer}) => {
  const id = `${toPath}-link`
  const to = toPath === 'home' ? `/` : `/${toPath}`;
  return (
    <li>
      <Link id={id} to={to} className={toPath === 'home' ? 'active' : ''} onClick={() => switchContainer(id)}>
        {toPath}
      </Link>
    </li>
  );
};

export default NavLink;
