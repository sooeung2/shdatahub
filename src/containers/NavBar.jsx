import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'components';
import { switchContainer, toggleMenu } from 'actions';

const NavBar = ({active, menu, switchContainer, toggleMenu}) => {
  const linkNames = ['menu', 'home', 'items', 'workers', 'heroes', 'buildings'];
  const navLinks = linkNames.map(name => {
    return (
      <NavLink
        key={name}
        route={name}
        active={active}
        menu={menu}
        switchContainer={switchContainer}
        toggleMenu={toggleMenu} />
    );
  });
  return (
    <nav className="nav-bar">
      <ul className={menu ? "top-nav menu" : "top-nav"}>
        {navLinks}
      </ul>
    </nav>
  );
};

const mapStateToProps = store => ({
  active: store.navBar.active,
  menu: store.navBar.menu
});

const mapDispatchToProps = dispatch => ({
  switchContainer: container => dispatch(switchContainer(container)),
  toggleMenu: menu => dispatch(toggleMenu(menu))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
