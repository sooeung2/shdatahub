import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return (
    <nav className="nav-bar">
      <ul className="top-nav">
        <li><Link>Link 1</Link></li>
        <li><Link>Link 2</Link></li>
        <li><Link>Link 3</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;
